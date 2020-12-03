import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import LottieView from 'lottie-react-native'
import { Row, Grid } from 'react-native-easy-grid'

const _date = new Date()

const hours = _date.getHours()
const min = _date.getMinutes()
const wind = (Math.random() * 24 + 5).toFixed(2)
const pressure = (Math.random() * 1200 + 1000).toFixed(1)
const dew = (Math.random() * 5 - 5).toFixed(1)
const date = _date.getDate()
const month = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DEC'][_date.getMonth()]

const Footer = ({ mountain }) => {
	return (
		<Grid style={{ justifyContent: 'flex-end' }}>
			<Row style={{ alignItems: 'center', height: 56 }}>
				<Text style={[styles.GothamBlack, { color: '#FFF', fontSize: 17 }]}>{mountain}</Text>
			</Row>
			<Row style={{ height: 56 }}>
				<View style={{ flex: 1, justifyContent: 'flex-end' }}>
					<View style={styles.row}>
						<Text style={[styles.footerTxt, { color: '#FFF', paddingRight: 5 }]}>Viento:</Text>
						<Text style={[styles.footerTxt, { color: '#D02C2F', paddingRight: 5 }]}>{wind}</Text>
						<Text style={[styles.footerTxt, { color: '#FFF' }]}>km/h</Text>
					</View>
					<View style={styles.row}>
						<Text style={[styles.footerTxt, { color: '#FFF', paddingRight: 5 }]}>Presión:</Text>
						<Text style={[styles.footerTxt, { color: '#D02C2F', paddingRight: 5 }]}>{pressure}</Text>
						<Text style={[styles.footerTxt, { color: '#FFF' }]}>mb</Text>
					</View>
					<View style={styles.row}>
						<Text style={[styles.footerTxt, { color: '#FFF', paddingRight: 5 }]}>Condensación:</Text>
						<Text style={[styles.footerTxt, { color: '#D02C2F' }]}>{dew}º</Text>
					</View>
				</View>
				<View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
					<View style={styles.row}>
						<Text style={[styles.footerTxt, { color: '#FFF' }]}>{month}</Text>
						<Text style={[styles.footerTxt, { color: '#D02C2F' }]}>_</Text>
						<Text style={[styles.footerTxt, { color: '#FFF' }]}>{date}</Text>
					</View>
				</View>
				<View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
					<View style={styles.row}>
						<Text style={[styles.footerTxt, { color: '#FFF' }]}>
							{hours}:{min}
						</Text>
						<Text style={[styles.footerTxt, { color: '#D02C2F' }]}>hs</Text>
					</View>
				</View>
				<View style={{ width: 10, justifyContent: 'flex-end' }}>
					<Text style={styles.weather}>weather.com</Text>
				</View>
			</Row>
		</Grid>
	)
}

export default function ({ mountain, onNext }) {
	const $Text = useRef()
	const $CounDown = useRef()
	const $Animation = useRef()
	const $Footer = useRef()

	const [counter, setCounter] = useState(6)

	useEffect(() => {
		const timer =
			counter > 0 &&
			setInterval(() => {
				$Text.current.zoomIn(700)
				setCounter(counter => counter - 1)
			}, 1000)

		const timeout =
			counter == 0 &&
			setTimeout(() => {
				onNext()
			}, 4200)

		if (counter == 0) {
			onNext()
		}
		return () => {
			clearTimeout(timeout)
			clearInterval(timer)
		}
	}, [counter])

	return (
		<Animatable.View style={styles.wrap}>
			{counter ? (
				<Animatable.View animation={'zoomIn'} style={{ alignItems: 'center' }}>
					<View ref={$CounDown} style={styles.counter}>
						<Animatable.Text ref={$Text} style={styles.counterText}>
							{counter}
						</Animatable.Text>
					</View>
				</Animatable.View>
			) : (
				<Animatable.View animation={'fadeIn'} style={{ flex: 1.4 }}>
					<LottieView
						loop={false}
						source={require('./animation.json')}
						onAnimationFinish={() => onNext()}
						autoPlay
					/>
				</Animatable.View>
			)}
			<Animatable.View
				ref={$Footer}
				animation={'fadeInUp'}
				delay={50}
				style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 10 }}>
				<Footer mountain={mountain.title} />
			</Animatable.View>
		</Animatable.View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1
	},
	row: {
		flexDirection: 'row'
	},
	footerTxt: {
		fontFamily: 'Gotham-Book',
		fontSize: 16
	},
	weather: {
		transform: [{ rotate: '90deg' }, { translateX: -35 }, { translateY: 35 }],
		width: 80,
		fontSize: 12,
		textAlign: 'right',
		color: '#FFF'
	},
	counter: {
		margin: 'auto',
		height: 208,
		width: 208,
		borderColor: '#8D1E21',
		borderWidth: 3,
		borderRadius: 104
	},
	counterText: {
		opacity: 0,
		fontFamily: 'AlbraText-Black',
		textAlign: 'center',
		fontSize: 145,
		color: '#FFF'
	}
})
