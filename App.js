import React, { useRef, useEffect, useState } from 'react'
import { StatusBar, View, Text, StyleSheet, PermissionsAndroid, NativeModules, SafeAreaView } from 'react-native'
import Login from './components/Login'
import Flow from './components/Flow'
import TC from './components/TC'

import { Row, Grid } from 'react-native-easy-grid'
import Brand from './assets/brand.svg'
import * as Animatable from 'react-native-animatable'

var style = StyleSheet.create({
	bg: {
		flex: 1,
		marginTop: 'auto'
	},
	main: {
		alignSelf: 'center',
		width: 920,
		height: 800
	},
	header: {
		height: 57,
		alignItems: 'center'
	},
	footer: {
		height: 57,
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

	const [bg, setBg] = useState(back_mountains)
	const [userData, setUserData] = useState({})
	const [play, setPlay] = useState(false)
	const [showTC, setShowTC] = useState(false)
	const [bgColor, setBgColor] = useState('#D02C2F')

	const login = ({ name, age, city, email }) => {
		setUserData({ name, age, city, email })
		NativeModules.AndesHelperModule.saveData([name, age, city, email].join(','), () => {})
		$Img.current.fadeOut(200).then(() => {})
		$Main.current.fadeOutDown(200).then(() => {
			setPlay(true)
		})
	}

	const setMountain = bg => {
		if (bg) {
			setBg(bg)
			return $Img.current.fadeIn(500)
		} else {
			return $Img.current.fadeOut(200)
		}
	}

	const end = () => {
		setUserData({})
		setPlay(false)
		setMountain(back_mountains).then(() => {
			setBgColor('#D02C2F')
		})
	}

	useEffect(() => {
		if (play) {
			setBgColor('#111111')
			$Main.current.fadeInDown(100)
		} else {
		}
	}, [play])

	useEffect(() => {
		showTC && $TC.current.fadeInUpBig()
	}, [showTC])

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
					<GridAnimatable ref={$Main} delay={1}>
						<Row style={style.header}>{!play && <Brand width={90} height={20} />}</Row>
						<Row>
							{play ? (
								<Flow userData={userData} setBg={setMountain} onEnd={end} />
							) : (
								<Login onLogin={login} onReadTC={() => setShowTC(true)} />
							)}
						</Row>
					</GridAnimatable>
					<View style={style.footer}>
						<Text style={style.footerTxt}>
							BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS.
						</Text>
					</View>
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
