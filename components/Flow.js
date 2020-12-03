import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, Text, NativeModules, Animated } from 'react-native'
import { Row, Grid, Col } from 'react-native-easy-grid'
import * as Animatable from 'react-native-animatable'
import Sound from 'react-native-sound'
import interpolate from 'color-interpolate'
import Stage1 from './Stage1'
import Stage2 from './Stage2'
import Stage3 from './Stage3'
import Stage4 from './Stage4'

let ch0 = interpolate(['#FF0000', '#FF0000'])
let ch1 = interpolate([
	'#828282',
	'#828282',
	'#828282',
	'#828282',
	'#828282',
	'#FF0000',
	'#FF0000',
	'#FF0000',
	'#FF0000',
	'#FF0000'
])
let ch2 = interpolate([
	'#000000',
	'#828282',
	'#828282',
	'#828282',
	'#828282',
	'#828282',
	'#FF0000',
	'#FF0000',
	'#FF0000',
	'#FF0000'
])
let ch3 = interpolate([
	'#000000',
	'#000000',
	'#828282',
	'#828282',
	'#828282',
	'#828282',
	'#828282',
	'#FF0000',
	'#FF0000',
	'#FF0000'
])
let ch4 = interpolate([
	'#000000',
	'#000000',
	'#000000',
	'#828282',
	'#828282',
	'#828282',
	'#828282',
	'#828282',
	'#FF0000',
	'#FF0000'
])
let ch5 = interpolate([
	'#000000',
	'#000000',
	'#000000',
	'#000000',
	'#828282',
	'#828282',
	'#828282',
	'#828282',
	'#828282',
	'#FF0000'
])

Sound.setCategory('Playback')

GridAnimatable = Animatable.createAnimatableComponent(Grid)

const WindSound = new Sound('wind.mp3', Sound.MAIN_BUNDLE)

var { AndesHelperModule } = NativeModules

let decay = parseFloat((0.2).toFixed(2))
let delay = parseInt(600)

export default function ({ setBg, userData, onEnd }) {
	const [title, setTitle] = useState('Elegí dónde gritar')
	const [mountain, setMountain] = useState()
	const [step, setStep] = useState(1)
	const $Title = useRef()

	const animDmx = useRef(new Animated.Value(0)).current

	const AnimationDMX = Animated.timing(animDmx, {
		toValue: 1,
		duration: 8000,
		useNativeDriver: true
	})

	animDmx.addListener(({ value }) => {
		NativeModules.AndesHelperModule.sendBroadcast(
			[ch5, ch4, ch3, ch2, ch1, ch0].reduce((data, ch) => data.concat(ch(value).match(/\d+/g)).map(String), [])
		)
	})

	useEffect(() => {
		mountain && setBg(mountain.bg)
	}, [mountain])

	useEffect(() => {
		switch (step) {
			case 2:
				$Title.current.fadeOutDown(300).then(() => {
					setTitle('Gritá “ANDES” bien fuerte')
					$Title.current.fadeInDown(300)
				})
				break
			case 3:
				AndesHelperModule.record(delay, decay)
				AnimationDMX.start(() =>
					[ch5, ch4, ch3, ch2, ch1, ch0].reduce(data => data.concat(['0', '0', '0']), [])
				)
				setTitle('Escuchando')
				$Title.current.animate(
					{
						0: { opacity: 0 },
						0.19: { opacity: 1 },
						0.34: { opacity: 0 },
						0.5: { opacity: 1 },
						0.66: { opacity: 0 },
						0.84: { opacity: 1 },
						1: { opacity: 0 }
					},
					4200
				)
				break
			case 4:
				AndesHelperModule.stop()
				$Title.current.fadeOut(300).then(() => {
					setTitle('Analizando el eco')
					$Title.current.fadeInDown(300)
				})
				break
			case 5:
				$Title.current.fadeOutDown(300).then(() => {
					setTitle('Tu grito hizo eco')
					$Title.current.fadeInDown(300)
				})
				break
			case 6:
				AnimationDMX.stop()
				NativeModules.AndesHelperModule.sendBroadcast(Array.from(Array(18).keys()).map(() => '0'))
				WindSound.stop()
				break
		}
	}, [step])

	useEffect(() => {
		WindSound.setNumberOfLoops(-1).play()
	}, [])

	return (
		<Grid style={{ width: 920 }}>
			<Row style={{ height: 60 }}>
				<Grid>
					<Col style={{ alignItems: 'flex-start', justifyContent: 'flex-end' }}>
						<Text style={[{ color: '#FFF', fontSize: 28 }, styles.GothamBold]}>{userData.name}</Text>
						<Text style={[{ color: '#D02C2F', fontSize: 22 }, styles.GothamBook]}>{userData.email}</Text>
					</Col>
					<Col style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
						<View style={{ flexDirection: 'row', marginTop: 'auto' }}>
							<Text
								style={[
									styles.GothamBook,
									styles.fs16,
									{
										paddingHorizontal: 2,
										color: '#FFF'
									}
								]}>
								{step > 5 ? 5 : step}
							</Text>
							<Text
								style={[
									styles.GothamBook,
									styles.fs16,
									{
										paddingHorizontal: 2,
										color: '#FFF'
									}
								]}>
								/
							</Text>
							<Text
								style={[
									styles.GothamBook,
									styles.fs16,
									{
										paddingHorizontal: 2,
										color: '#D02C2F'
									}
								]}>
								5
							</Text>
						</View>
					</Col>
				</Grid>
			</Row>
			{step !== 6 && (
				<Row style={[{ height: 55 }, styles.center]}>
					<Animatable.Text ref={$Title} style={[styles.GothamBook, { fontSize: 18, color: '#FFF' }]}>
						{title}
					</Animatable.Text>
				</Row>
			)}
			<Row>
				{step === 1 && (
					<Stage1
						onNext={mountain => {
							setMountain(mountain)
							setStep(step => step + 1)
						}}
					/>
				)}
				{[2, 3, 4].includes(step) && (
					<Stage2
						onNext={() => {
							setStep(step => step + 1)
						}}
						mountain={mountain}
					/>
				)}
				{step === 5 && (
					<Stage3
						onNext={() => {
							setStep(6)
						}}
					/>
				)}
				{step === 6 && (
					<Stage4
						onExit={() => {
							setBg()
							onEnd()
							setStep(1)
						}}
					/>
				)}
			</Row>
		</Grid>
	)
}

const styles = StyleSheet.create({
	GothamBook: {
		fontFamily: 'Gotham-Book'
	},
	GothamBlack: {
		fontFamily: 'Gotham-Black'
	},
	GothamBold: {
		fontFamily: 'Gotham-Bold'
	},
	itemTitle: {
		textAlign: 'center',
		fontFamily: 'Gotham-Black',
		fontSize: 14,
		textTransform: 'uppercase',
		color: '#FFF'
	},
	itemTxt: {
		textAlign: 'center',
		fontFamily: 'Gotham-Book',
		fontSize: 10,
		color: '#FFF'
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	fs16: {
		fontSize: 16
	},
	pr5: {
		paddingRight: 5
	}
})
