package com.andesapp;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.media.AudioFormat;
import android.media.AudioManager;
import android.media.AudioRecord;
import android.net.DhcpInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.StrictMode;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.core.app.ActivityCompat;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableType;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import ch.bildspur.artnet.ArtNetClient;


public class AndesHelperModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";
    private static final int AUDIO_ECHO_REQUEST = 0;

    private String nativeSampleRate;
    private String nativeSampleBufSize;

    private int echoDelayProgress;

    private float echoDecayProgress;

    private boolean supportRecording;
    private Boolean isPlaying = false;

    private final int OVERLAY_PERMISSION_REQ_CODE = 1;

    AndesHelperModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "AndesHelperModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN_MR1)
    @ReactMethod
    public void record(int delay, float decay) {
        try {
            queryNativeAudioParameters();

            if (supportRecording) {
                createSLEngine(Integer.parseInt(nativeSampleRate), Integer.parseInt(nativeSampleBufSize), delay, decay);
            }

        } catch (Exception e) {
            //Toast.makeText(getReactApplicationContext(), e.toString(), Toast.LENGTH_SHORT).show();
        }

        startEcho();
    }

    @ReactMethod
    protected void stop() {
        if (supportRecording) {
            if (isPlaying) {
                stopPlay();
            }
            deleteSLEngine();
            isPlaying = false;
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @ReactMethod
    public void saveData(String row, Callback cb) {

        File carpeta = getReactApplicationContext().getExternalFilesDir(null);
        String usersCSVFile = carpeta.toString() + "/" + "Usuarios.csv";

        if (!carpeta.exists()) {
            carpeta.mkdir();
        }

        try {

            FileOutputStream fos = new FileOutputStream(usersCSVFile, true);
            FileWriter fileWriter = new FileWriter(fos.getFD());

            fileWriter.append(row);
            fileWriter.append(System.lineSeparator());

            fileWriter.flush();
            fileWriter.close();

            cb.invoke(usersCSVFile);
        } catch (Exception e) {
            //Toast.makeText(getReactApplicationContext(), "SE CREO EL ARCHIVO CSV EXITOSAMENTE", Toast.LENGTH_LONG).show();
        }
    }

    private void startEcho() {
        if (!supportRecording) {
            return;
        }
        if (!isPlaying) {
            if (!createSLBufferQueueAudioPlayer()) {
                return;
            }
            if (!createAudioRecorder()) {
                deleteSLBufferQueueAudioPlayer();
                return;
            }
            startPlay();   // startPlay() triggers startRecording()
        } else {
            stopPlay();  // stopPlay() triggers stopRecording()
            deleteAudioRecorder();
            deleteSLBufferQueueAudioPlayer();
        }
        isPlaying = !isPlaying;
    }

    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN_MR1)
    private void queryNativeAudioParameters() {
        supportRecording = true;
        AudioManager myAudioMgr = (AudioManager) reactContext.getSystemService(reactContext.AUDIO_SERVICE);

        if (myAudioMgr == null) {
            supportRecording = false;
            return;
        }

        nativeSampleRate = myAudioMgr.getProperty(AudioManager.PROPERTY_OUTPUT_SAMPLE_RATE);
        nativeSampleBufSize = myAudioMgr.getProperty(AudioManager.PROPERTY_OUTPUT_FRAMES_PER_BUFFER);

        // hardcoded channel to mono: both sides -- C++ and Java sides
        int recBufSize = AudioRecord.getMinBufferSize(Integer.parseInt(nativeSampleRate), AudioFormat.CHANNEL_IN_MONO, AudioFormat.ENCODING_PCM_16BIT);

        if (recBufSize == AudioRecord.ERROR || recBufSize == AudioRecord.ERROR_BAD_VALUE) {
            supportRecording = false;
        }
    }

    @ReactMethod
    public void sendBroadcast(ReadableArray arrDmx) {
        // Hack Prevent crash (sending should be done using an async task)
        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
        StrictMode.setThreadPolicy(policy);

        try {
            byte[] dmxData = new byte[18];

            for (int num = 0; num < arrDmx.size(); num++) {
                dmxData[num] = (byte) fromIntToByte(arrDmx.getString(num));
            }

            ArtNetClient artnet = new ArtNetClient();
            artnet.start();
            artnet.unicastDmx("192.168.0.90", 0, 0, dmxData);
            artnet.stop();
        } catch (Exception e) {
        }
    }

    public static byte fromIntToByte(String value) {
        return (byte) Integer.parseInt(value);
    }

    /*
     * Loading our lib
     */
    static {
        System.loadLibrary("echo");
    }

    /*
     * jni function declarations
     */
    static native void createSLEngine(int rate, int framesPerBuf, long delayInMs, float decay);

    static native void deleteSLEngine();

    static native boolean configureEcho(int delayInMs, float decay);

    static native boolean createSLBufferQueueAudioPlayer();

    static native void deleteSLBufferQueueAudioPlayer();

    static native boolean createAudioRecorder();

    static native void deleteAudioRecorder();

    static native void startPlay();

    static native void stopPlay();
}