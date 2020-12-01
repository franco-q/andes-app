import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, NativeModules, Animated } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Row, Grid, Col } from 'react-native-easy-grid'
import * as Animatable from 'react-native-animatable'
import LottieView from 'lottie-react-native'
import Sound from 'react-native-sound'
import interpolate from 'color-interpolate'
import Mountain1 from '../assets/images/mountain_wheel_1.svg'
import Mountain2 from '../assets/images/mountain_wheel_2.svg'
import Mountain3 from '../assets/images/mountain_wheel_3.svg'
import Mountain4 from '../assets/images/mountain_wheel_4.svg'
import Mountain5 from '../assets/images/mountain_wheel_5.svg'

let ch0 = interpolate(['#820000', '#820000'])
let ch1 = interpolate(['#828282', '#828282', '#828282', '#828282', '#828282', '#820000', '#820000', '#820000', '#820000', '#820000'])
let ch2 = interpolate(['#000000', '#828282', '#828282', '#828282', '#828282', '#828282', '#820000', '#820000', '#820000', '#820000'])
let ch3 = interpolate(['#000000', '#000000', '#828282', '#828282', '#828282', '#828282', '#828282', '#820000', '#820000', '#820000'])
let ch4 = interpolate(['#000000', '#000000', '#000000', '#828282', '#828282', '#828282', '#828282', '#828282', '#820000', '#820000'])
let ch5 = interpolate(['#000000', '#000000', '#000000', '#000000', '#828282', '#828282', '#828282', '#828282', '#828282', '#820000'])

Sound.setCategory('Playback')

GridAnimatable = Animatable.createAnimatableComponent(Grid)

const WindSound = new Sound('wind.mp3', Sound.MAIN_BUNDLE)

var { AndesHelperModule } = NativeModules

const mountainData = [
	{
		title: 'PUENTE DEL INCA',
		altitud: '2.700 MSNM',
		superficie: '500 HA',
		svg: Mountain1,
		bg: require('../assets/images/imgs-back-ptedelinca.jpg')
	},
	{
		title: 'PENITENTES',
		altitud: '3.194 MSNM',
		superficie: '300 HA',
		svg: Mountain2,
		bg: require('../assets/images/imgs-back-penitentes.jpg')
	},
	{
		title: 'ACONCAGUA',
		altitud: '6.962 MSNM',
		superficie: '700 HA',
		svg: Mountain3,
		bg: require('../assets/images/imgs-back-aconcagua.jpg')
	},
	{
		title: 'POTRERILLOS',
		altitud: '1.435 MSNM',
		superficie: '1.500 HA',
		svg: Mountain4,
		bg: require('../assets/images/imgs-back-potrerillos.jpg')
	},
	{
		title: 'VALLECITOS',
		altitud: '3.350 MSNM',
		superficie: '2.000 HA',
		svg: Mountain5,
		bg: require('../assets/images/imgs-back-vallecitos.jpg')
	}
]

const styles = StyleSheet.create({
	nextBtn: {
		height: 50,
		paddingVertical: 15,
		position: 'relative',
		width: 180,
		borderColor: '#8D1E21',
		borderWidth: 2,
		borderRadius: 25,
		alignItems: 'center',
		marginTop: 0
	},
	nextBtnTxt: {
		fontSize: 20,
		lineHeight: 20,
		textAlign: 'center',
		fontFamily: 'Gotham-Book',
		color: '#FFF'
	},
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

const _date = new Date()

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min

let decay = parseFloat(getRandomArbitrary(0.1, 0.3).toFixed(2))
let delay = parseInt(getRandomArbitrary(400, 700))

const hours = _date.getHours()
const min = _date.getMinutes()
const wind = (Math.random() * 24 + 5).toFixed(2)
const pressure = (Math.random() * 1200 + 1000).toFixed(1)
const dew = (Math.random() * 5 - 5).toFixed(1)
const date = _date.getDate()
const month = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DEC'][_date.getMonth()]

const MountainItem = ({ item }) => {
	return (
		<View style={{ color: '#FFF', height: 250, flexDirection: 'column', justifyContent: 'space-between' }}>
			<View style={[styles.center, { height: 150 }]}>
				<item.svg height={150} width={150} />
			</View>
			<View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
				<Text style={styles.itemTitle}>{item.title}</Text>
				<Text style={styles.itemTxt}>ALTITUD</Text>
				<Text style={styles.itemTxt}>{item.altitud}</Text>
				<Text style={styles.itemTxt}>SUPERFICIE</Text>
				<Text style={styles.itemTxt}>{item.superficie}</Text>
			</View>
		</View>
	)
}

const Counter = ({ count, setCount }) => {
	const $txt = useRef()

	useEffect(() => {
		const interval = setInterval(() => {
			$txt.current.zoomIn(700)
			setCount(seconds => seconds - 1)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<View
			style={{
				margin: 'auto',
				height: 208,
				width: 208,
				borderColor: '#8D1E21',
				borderWidth: 3,
				borderRadius: 104
			}}>
			<Animatable.Text
				ref={$txt}
				style={{
					fontFamily: 'AlbraText-Black',
					textAlign: 'center',
					fontSize: 145,
					color: '#FFF'
				}}>
				{count}
			</Animatable.Text>
		</View>
	)
}

const Footer = ({ mountain }) => {
	return (
		<GridAnimatable animation={'fadeInUp'} delay={200}>
			<Row style={{ alignItems: 'center', height: 56 }}>
				<Text style={[styles.GothamBlack, { color: '#FFF', fontSize: 17 }]}>{mountain}</Text>
			</Row>
			<Row style={{ height: 56 }}>
				<View style={{ flex: 1, justifyContent: 'flex-end' }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={[styles.GothamBook, styles.fs16, styles.pr5, { color: '#FFF' }]}>Viento:</Text>
						<Text style={[styles.GothamBook, styles.fs16, styles.pr5, { color: '#D02C2F' }]}>{wind}</Text>
						<Text style={[styles.GothamBook, styles.fs16, { color: '#FFF' }]}>km/h</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={[styles.GothamBook, styles.fs16, styles.pr5, { color: '#FFF' }]}>Presión:</Text>
						<Text style={[styles.GothamBook, styles.fs16, styles.pr5, { color: '#D02C2F' }]}>
							{pressure}
						</Text>
						<Text style={[styles.GothamBook, styles.fs16, { color: '#FFF' }]}>mb</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={[styles.GothamBook, styles.fs16, styles.pr5, { color: '#FFF' }]}>
							Condensación:
						</Text>
						<Text style={[styles.GothamBook, styles.fs16, { color: '#D02C2F' }]}>{dew}º</Text>
					</View>
				</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={[styles.GothamBook, styles.fs16, { color: '#FFF' }]}>{month}</Text>
						<Text style={[styles.GothamBook, styles.fs16, { color: '#D02C2F' }]}>_</Text>
						<Text style={[styles.GothamBook, styles.fs16, { color: '#FFF' }]}>{date}</Text>
					</View>
				</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={[styles.GothamBook, styles.fs16, { color: '#FFF' }]}>
							{hours}:{min}
						</Text>
						<Text style={[styles.GothamBook, styles.fs16, { color: '#D02C2F' }]}>hs</Text>
					</View>
				</View>
				<View style={{ width: 10, justifyContent: 'flex-end' }}>
					<Text
						style={{
							transform: [{ rotate: '90deg' }, { translateX: -35 }, { translateY: 35 }],
							width: 80,
							fontSize: 12,
							textAlign: 'right',
							color: '#FFF'
						}}>
						weather.com
					</Text>
				</View>
			</Row>
		</GridAnimatable>
	)
}

export default function ({ setBg, userData, onEnd }) {
	const [title, setTitle] = useState('Elegí dónde gritar')
	const [activeItem, setActiveItem] = useState(2)
	const [countDown, setCount] = useState(5)
	const [step, setStep] = useState(1)
	const [score, setScore] = useState(5)

	const $soundwaves = useRef()
	const soundwaves = useRef()
	const $CounDown = useRef()
	const $Carousel = useRef()
	const $Title = useRef()
	const $Next = useRef()
	const $Score = useRef()

	const animDmx = useRef(new Animated.Value(0)).current

	animDmx.addListener(({ value }) => {
		NativeModules.AndesHelperModule.sendBroadcast(
			[ch5, ch4, ch3, ch2, ch1, ch0].reduce((data, ch) => data.concat(ch(value).match(/\d+/g)).map(String), [])
		)
	})

	const AnimationDMX = Animated.timing(animDmx, {
		toValue: 1,
		duration: 8000,
		useNativeDriver: true
	})

	useEffect(() => {})

	const end = () => {
		$Title.current.fadeOutDown(500)
		$Score.current.fadeOutDown(500).then(() => {
			setStep(6)
			setTimeout(() => {
				setBg()
				setStep(1)
				onEnd()
			}, 2000)
		})
	}

	const next = () => {
		setBg(mountainData[activeItem].bg)
		$Title.current.fadeOutDown(500).then(() => {
			setTitle('Gritá “ANDES” bien fuerte')
			$Title.current.fadeInDown(500)
		})
		$Next.current.fadeOutDown(500)
		$Carousel.current.zoomOut(500).then(() => {
			setStep(2)
		})
	}

	useEffect(() => {
		WindSound.setNumberOfLoops(-1).setVolume(20).play()
	}, [])

	useEffect(() => {
		if (countDown == 0) {
			$Title.current.fadeOutDown(300).then(() => {
				setStep(3)
			})
		}
	}, [countDown])

	useEffect(() => {
		switch (step) {
			case 2:
				$CounDown.current.zoomIn(500)
				break
			case 3:
				AnimationDMX.start(() => {
					NativeModules.AndesHelperModule.sendBroadcast([
						'133',
						'0',
						'0',
						'133',
						'0',
						'0',
						'133',
						'0',
						'0',
						'133',
						'0',
						'0',
						'133',
						'0',
						'0',
						'133',
						'0',
						'0'
					])
				})
				setTitle('Escuchando')
				soundwaves.current.play()
				AndesHelperModule.record(delay, decay)
				$Title.current
					.animate(
						{
							0: { opacity: 0 },
							0.19: { opacity: 1 },
							0.34: { opacity: 0 },
							0.5: { opacity: 1 },
							0.66: { opacity: 0 },
							0.84: { opacity: 1 },
							1: { opacity: 0 }
						},
						4150
					)
					.then(() => {
						setStep(4)
					})
				break
			case 4:
				AndesHelperModule.stop()
				setTitle('Analizando el eco')
				$Title.current.fadeInDown(300)
				setScore(parseInt(getRandomArbitrary(1, 18)))
				break
			case 5:
				$Title.current.fadeOutDown(300).then(() => {
					setTitle('Tu grito hizo eco')
					$Score.current.fadeInDown(500).then(() => {
						$Title.current.fadeInDown(300)
					})
				})
				break
			case 6:
                AnimationDMX.stop()
				WindSound.stop()
				break
		}
	}, [step])

	return (
		<Grid style={{ width: 920 }}>
			<Row style={{ height: 90 }}>
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
			<Row style={[{ height: 55 }, styles.center]}>
				<Animatable.Text ref={$Title} style={[styles.GothamBook, { fontSize: 18, color: '#FFF' }]}>
					{title}
				</Animatable.Text>
			</Row>
			<Row style={[{ height: 300 }, styles.center]}>
				{step == 1 && (
					<Animatable.View ref={$Carousel}>
						<Carousel
							data={mountainData}
							sliderWidth={920}
							activeSlideAlignment={'center'}
							itemWidth={920 / 5}
							firstItem={activeItem}
							inactiveSlideOpacity={0.5}
							inactiveSlideScale={0.75}
							renderItem={MountainItem}
							onSnapToItem={setActiveItem}
							loop
						/>
					</Animatable.View>
				)}
				{step == 2 && (
					<Animatable.View ref={$CounDown} style={{ opacity: 0 }}>
						<Counter count={countDown} setCount={setCount} />
					</Animatable.View>
				)}
				{[4, 3].includes(step) && (
					<Animatable.View ref={$soundwaves} style={{ flex: 1, height: '100%' }}>
						<LottieView
							ref={soundwaves}
							loop={false}
							source={require('./animation.json')}
							onAnimationFinish={() => setStep(5)}
						/>
					</Animatable.View>
				)}
				{step == 5 && (
					<Animatable.View ref={$Score} style={{ opacity: 0 }}>
						<TouchableOpacity
							onPress={end}
							style={{
								margin: 'auto',
								height: 208,
								width: 208,
								borderColor: '#8D1E21',
								borderWidth: 3,
								borderRadius: 104,
								justifyContent: 'center',
								alignItems: 'center'
							}}>
							<Text
								style={{
									fontFamily: 'AlbraText-Black',
									textAlign: 'center',
									fontSize: 145,
									color: '#FFF'
								}}>
								{score}
							</Text>
						</TouchableOpacity>
					</Animatable.View>
				)}
				{step == 6 && (
					<Animatable.View animation="fadeIn">
						<View style={[styles.center, { margin: 'auto', flexDirection: 'row', alignItems: 'center' }]}>
							<Text
								style={[
									styles.GothamBold,
									{
										height: 70,
										fontSize: 48,
										lineHeight: 70,
										display: 'flex',
										alignItems: 'flex-end',
										color: '#FFF'
									}
								]}>
								Disfrutá tus
							</Text>
							<Text
								style={{
									display: 'flex',
									alignItems: 'baseline',
									paddingHorizontal: 10,
									fontFamily: 'AlbraText-Black',
									height: 70,
									fontSize: 60,
									lineHeight: 70,
									color: '#FFF'
								}}>
								Andes
							</Text>
							<Text
								style={[
									styles.GothamBold,
									{
										height: 70,
										fontSize: 48,
										lineHeight: 70,
										display: 'flex',
										alignItems: 'flex-end',
										color: '#FFF'
									}
								]}>
								gratis
							</Text>
						</View>
					</Animatable.View>
				)}
			</Row>
			<Row style={[{}, styles.center]}>
				{step == 1 && (
					<Animatable.View ref={$Next}>
						<TouchableOpacity onPress={next} style={styles.nextBtn}>
							<Text style={styles.nextBtnTxt}>SIGUIENTE</Text>
						</TouchableOpacity>
					</Animatable.View>
				)}
				{[2, 3, 4].includes(step) && <Footer mountain={mountainData[activeItem].title} />}
				{step === 5 && (
					<Animatable.View
						animation="fadeIn"
						delay={900}
						style={[
							styles.center,
							{ flexDirection: 'column', height: '100%', justifyContent: 'space-between' }
						]}>
						<Text
							style={[
								styles.GothamBook,
								{
									textAlign: 'center',
									fontSize: 18,
									color: '#FFF'
								}
							]}>
							veces en los Andes
						</Text>
						<TouchableOpacity onPress={end} style={[styles.nextBtn]}>
							<Text style={styles.nextBtnTxt}>Finalizar</Text>
						</TouchableOpacity>
						<View style={{ paddingVertical: 20, position: 'relative' }}></View>
					</Animatable.View>
				)}
			</Row>
		</Grid>
	)
}
