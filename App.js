import React, { useRef, useEffect, useState } from 'react'
import {
	StatusBar,
	View,
	Text,
	StyleSheet,
	PermissionsAndroid,
	NativeModules,
	SafeAreaView,
	KeyboardAvoidingView,
	Animated
} from 'react-native'
import Login from './components/Login'
import Flow from './components/Flow'
import TC from './components/TC'

import { Row, Grid } from 'react-native-easy-grid'
import Brand from './assets/brand.svg'
import * as Animatable from 'react-native-animatable'

import interpolate from 'color-interpolate'

let ch0 = interpolate(['#000000', '#FF0000', '#828282', '#FF0000', '#000000'])
let ch1 = interpolate(['#000000', '#FF0000', '#828282', '#FF0000', '#000000'])
let ch2 = interpolate(['#000000', '#FF0000', '#828282', '#FF0000', '#000000'])
let ch3 = interpolate(['#000000', '#FF0000', '#828282', '#FF0000', '#000000'])
let ch4 = interpolate(['#000000', '#FF0000', '#828282', '#FF0000', '#000000'])
let ch5 = interpolate(['#000000', '#FF0000', '#828282', '#FF0000', '#000000'])

const back_mountains = require('./assets/mountains-bg.png')

const GridAnimatable = Animatable.createAnimatableComponent(Grid)

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO)
	.then(granted => {
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			console.log('You can use the Mic')
		} else {
			console.log('Mic permission denied')
		}
	})
	.catch(err => {
		console.warn(err)
	})
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
	.then(granted => {
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			console.log('You can use the External Storage')
		} else {
			console.log('External Storage permission denied')
		}
	})
	.catch(err => {
		console.warn(err)
	})

const App = () => {
	const $Img = useRef()
	const $Main = useRef()
	const $TC = useRef()

	const animDmx = useRef(new Animated.Value(0)).current

	animDmx.addListener(({ value }) => {
		NativeModules.AndesHelperModule.sendBroadcast(
			[ch5, ch4, ch3, ch2, ch1, ch0].reduce((data, ch) => data.concat(ch(value).match(/\d+/g)).map(String), [])
		)
	})

	const [bg, setBg] = useState(back_mountains)
	const [userData, setUserData] = useState({})
	const [play, setPlay] = useState(false)
	const [showTC, setShowTC] = useState(false)
	const [bgColor, setBgColor] = useState('#D02C2F')

	const login = ({ name, borndate, city, email, beer }) => {
		setUserData({ name, borndate, city, email, beer })
		let d = new Date()
		let tstamp = `${d.getFullYear()}/${
			d.getMonth() + 1
		}/${d.getDate()} ${d.getHours()}/${d.getMinutes()}/${d.getSeconds()}`
		NativeModules.AndesHelperModule.saveData([tstamp, name, borndate, city, email, beer].join(','), () => {})
		$Img.current.fadeOut(200)
		$Main.current.fadeOutDown(200).then(() => {
			setPlay(true)
		})
	}

	const setMountain = bg => {
		setBg(bg)
	}

	const end = () => {
		setUserData({})
		setPlay(false)
		setMountain(back_mountains)
	}

	useEffect(() => {
		if (play) {
			setBgColor('#111111')
			$Main.current.fadeInDown(100)
		} else {
			setBgColor('#D02C2F')
		}
	}, [play])

	useEffect(() => {
		showTC && $TC.current.fadeInUpBig()
	}, [showTC])

	useEffect(() => {
		bg ? $Img.current.fadeIn(500) : $Img.current.fadeOut(200)
	}, [bg])

	const AnimationLoop = Animated.loop(
		Animated.timing(animDmx, {
			toValue: 1,
			duration: 5000,
			useNativeDriver: true
		}),
		{ iterations: -1 }
	)

	function endArnet() {
		AnimationLoop.stop()
		NativeModules.AndesHelperModule.sendBroadcast(Array.from(Array(18).keys()).map(() => '0'))
	}

	useEffect(() => {
		if (!play) {
			AnimationLoop.start(() => {
				NativeModules.AndesHelperModule.sendBroadcast(Array.from(Array(18).keys()).map(() => '0'))
			})
		}
	}, [play])

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar hidden={true} />
			<Animatable.View
				transition="backgroundColor"
				style={{ flex: 1, backgroundColor: bgColor, position: 'relative' }}
				duration={500}
				delay={1}>
				<Animatable.Image
					ref={$Img}
					source={bg}
					animation="fadeIn"
					style={{
						position: 'absolute',
						bottom: 0,
						flex: 1,
						alignSelf: 'center',
						resizeMode: 'cover'
					}}
				/>
				<View style={style.main}>
					<KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
						<View style={style.header}>
							<Brand width={90} height={20} />
						</View>
						<View style={{ height: 470 }}>
							<GridAnimatable ref={$Main} delay={1}>
								<Row>
									{play ? (
										<Flow userData={userData} setBg={setMountain} onEnd={end} />
									) : (
										<Login
											onLogin={login}
											onReadTC={() => setShowTC(true)}
											stopAnimation={endArnet}
										/>
									)}
								</Row>
							</GridAnimatable>
						</View>
						<View style={style.footer}>
							<Text style={style.footerTxt}>
								BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS.
							</Text>
						</View>
					</KeyboardAvoidingView>
				</View>
			</Animatable.View>
			{showTC && (
				<Animatable.View ref={$TC} style={{ position: 'absolute', top: 0, width: '100%', height: '100%' }}>
					<TC onClose={() => $TC.current.fadeOutDownBig().then(() => setShowTC(false))} />
				</Animatable.View>
			)}
		</SafeAreaView>
	)
}

export default App

var style = StyleSheet.create({
	bg: {
		flex: 1,
		marginTop: 'auto'
	},
	main: {
		alignSelf: 'center',
		width: 920,
		flex: 1
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	footer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	footerTxt: {
		fontFamily: 'Gotham-Book',
		textAlign: 'center',
		fontSize: 16,
		color: '#FFF'
	}
})
