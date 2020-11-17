import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, NativeModules } from 'react-native'
import Mountain1 from '../assets/images/mountain_wheel_1.svg'
import Mountain2 from '../assets/images/mountain_wheel_2.svg'
import Mountain3 from '../assets/images/mountain_wheel_3.svg'
import Mountain4 from '../assets/images/mountain_wheel_4.svg'
import Mountain5 from '../assets/images/mountain_wheel_5.svg'
import Carousel from 'react-native-snap-carousel'
import Brand from '../assets/brand.svg'
import { Row, Grid, Col } from 'react-native-easy-grid'
import * as Animatable from 'react-native-animatable'

GridAnimatable = Animatable.createAnimatableComponent(Grid)

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
		title: 'VILLAVICENCIO',
		altitud: '3.300 MSNM',
		superficie: '62.000 HA',
		svg: Mountain5,
		bg: require('../assets/images/imgs-back-villavicencio.jpg')
	}
]

const styles = StyleSheet.create({
	nextBtn: {
		height: 50,
		width: 180,
		borderColor: '#8D1E21',
		borderWidth: 2,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center'
	},
	nextBtnTxt: {
		fontSize: 20,
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
	}
})

const MountainItem = ({ item }) => {
	return (
		<View style={{ color: '#FFF', height: 250, flexDirection: 'column', justifyContent: 'space-between' }}>
			<View style={{ alignItems: 'center', justifyContent: 'center', height: 150 }}>
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

const Score = ({ score }) => {
	return (
		<View style={{ color: '#FFF', height: 250, flexDirection: 'column', justifyContent: 'space-between' }}>
			<View style={{ alignItems: 'center', justifyContent: 'center', height: 150 }}>
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

var { AndesHelperModule } = NativeModules

const hours = new Date().getHours()
const min = new Date().getMinutes()
const wind = (Math.random() * 24 + 5).toFixed(2)
const pressure = (Math.random() * 1200 + 1000).toFixed(1)
const dew = (Math.random() * 5 - 5).toFixed(1)
const date = new Date().getDate()
const month = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DEC'][
	new Date().getMonth()
]

const Footer = ({ mountain }) => {
	return (
		<GridAnimatable animation={'fadeInUp'} delay={200}>
			<Row style={{ alignItems: 'center', height: 56 }}>
				<Text style={{ color: '#FFF', fontFamily: 'Gotham-Black', fontSize: 17 }}>{mountain}</Text>
			</Row>
			<Row style={{ height: 56 }}>
				<View style={{ flex: 1, justifyContent: 'flex-end' }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#FFF', paddingRight: 5 }]}>
							Viento:
						</Text>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#D02C2F', paddingRight: 5 }]}>
							{wind}
						</Text>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#FFF' }]}>km/h</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#FFF', paddingRight: 5 }]}>
							Presión:
						</Text>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#D02C2F', paddingRight: 5 }]}>
							{pressure}
						</Text>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#FFF' }]}>mb</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#FFF', paddingRight: 5 }]}>
							Condensación:
						</Text>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#D02C2F' }]}>{dew}º</Text>
					</View>
				</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#FFF' }]}>{month}</Text>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#D02C2F' }]}>_</Text>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#FFF' }]}>{date}</Text>
					</View>
				</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#FFF' }]}>
							{hours}:{min}
						</Text>
						<Text style={[styles.GothamBook, { fontSize: 16, color: '#D02C2F' }]}>hs</Text>
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

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min
}

let decay = parseFloat(getRandomArbitrary(0.2, 0.8).toFixed(2))
let delay = parseInt(getRandomArbitrary(200, 700))

export default function ({ setBg, userData }) {
	const [title, setTitle] = useState('Elegí dónde gritar')
	const [activeItem, setActiveItem] = useState(2)
	const [countDown, setCount] = useState(5)
	const [step, setStep] = useState(1)
	const [score, setScore] = useState(5)

	const $CounDown = useRef()
	const $Carousel = useRef()
	const $Title = useRef()
	const $Next = useRef()
	const $Score = useRef()

	const end = () => {
		setStep(6)
		setBg(null)
		$Title.current.fadeOutDown(500)
	}

	const next = () => {
		setBg(mountainData[activeItem].bg)
		$Title.current.fadeOutDown(500).then(() => {
			setTitle('Gritá bien fuerte en...')
			$Title.current.fadeInDown(500)
		})
		$Next.current.fadeOutDown(500)
		$Carousel.current.zoomOut(500).then(() => {
			setStep(2)
		})
	}

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
			case 2:
				break
			case 3:
				setTitle('Escuchando...')
				AndesHelperModule.record(delay, decay)
				$Title.current.fadeInDown(300)
				setTimeout(() => {
					setStep(4)
				}, 4000)
				break
			case 4:
				AndesHelperModule.stop()
				$Title.current.fadeOutDown(300).then(() => {
					setTitle('Analizando el eco...')
					$Title.current.fadeInDown(300)
					setTimeout(() => {
						setStep(5)
					}, 3000)
				})
				break
			case 5:
				$Title.current.fadeOutDown(300).then(() => {
					setTitle('Tu grito hizo eco')
					$Title.current.fadeInDown(300)
				})
				setScore(parseInt(getRandomArbitrary(1, 5)))
				$Score.current.fadeInDown(300)
				break
			default:
				console.log('step', step)
				break
		}
	}, [step])

	return (
		<Grid style={{ width: 920 }}>
			<Row style={{ height: 125 }}>
				<Grid>
					<Col style={{ alignItems: 'flex-start', justifyContent: 'flex-end' }}>
						<Brand width={90} height={20} style={{ marginBottom: 'auto' }} />
						<Text style={[{ color: '#FFF', fontSize: 28 }, styles.GothamBold]}>{userData.name}</Text>
						<Text style={[{ color: '#D02C2F', fontSize: 22 }, styles.GothamBook]}>{userData.email}</Text>
					</Col>
					<Col style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
						<View style={{ flexDirection: 'row', marginTop: 'auto' }}>
							<Text
								style={{
									paddingHorizontal: 2,
									color: '#FFF',
									fontSize: 16,
									fontFamily: 'Gotham-Book'
								}}>
								{step}
							</Text>
							<Text
								style={{
									paddingHorizontal: 2,
									color: '#FFF',
									fontSize: 16,
									fontFamily: 'Gotham-Book'
								}}>
								/
							</Text>
							<Text
								style={{
									paddingHorizontal: 2,
									color: '#D02C2F',
									fontSize: 16,
									fontFamily: 'Gotham-Book'
								}}>
								5
							</Text>
						</View>
					</Col>
				</Grid>
			</Row>
			<Row style={[{ height: 55 }, styles.center]}>
				<Animatable.Text ref={$Title} style={{ fontFamily: 'Gotham-Black', fontSize: 18, color: '#FFF' }}>
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
					<Animatable.View ref={$CounDown}>
						<Counter count={countDown} setCount={setCount} />
					</Animatable.View>
				)}
				{step == 5 && (
					<Animatable.View ref={$Score}>
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
						<View
							style={{
								margin: 'auto',
								justifyContent: 'center',
								alignItems: 'center'
							}}>
							<Text
								style={{
									fontFamily: 'Gotham-Black',
									textAlign: 'center',
									fontSize: 48,
									color: '#FFF'
								}}>
								Disfrutá tus Andes gratis
							</Text>
						</View>
					</Animatable.View>
				)}
			</Row>
			<Row style={styles.center}>
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
						style={{ height: 56, alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center' }}>
						<Text
							style={{
								textAlign: 'center',
								fontFamily: 'Gotham-Black',
								fontSize: 18,
								color: '#FFF'
							}}>
							veces en los Andes
						</Text>
					</Animatable.View>
				)}
				{step == 6 && (
					<Animatable.View ref={$Next}>
						<TouchableOpacity onPress={next} style={styles.nextBtn}>
							<Text style={styles.nextBtnTxt}>Finalizar</Text>
						</TouchableOpacity>
					</Animatable.View>
				)}
			</Row>
		</Grid>
	)
}
