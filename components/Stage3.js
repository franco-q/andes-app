import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'

const randomScore = (min, max) => parseInt(Math.random() * (max - min) + min)

export default function ({ onNext }) {
	const [score] = useState(randomScore(1, 18))

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
			<Animatable.View animation={'fadeInDown'} style={{ opacity: 0 }}>
				<View style={styles.score}>
					<Text style={styles.scoreText}>{score}</Text>
				</View>
			</Animatable.View>
			<Animatable.View animation={'fadeIn'} delay={100} style={styles.footer}>
				<Text style={styles.text}>veces en los Andes</Text>
				<TouchableOpacity onPress={onNext} style={[styles.nextBtn]}>
					<Text style={styles.nextBtnTxt}>Finalizar</Text>
				</TouchableOpacity>
			</Animatable.View>
		</View>
	)
}

const styles = StyleSheet.create({
	nextBtn: {
		height: 50,
		paddingVertical: 15,
		position: 'relative',
		width: 180,
		borderColor: '#8D1E21',
		borderWidth: 2,
		borderRadius: 25,
		alignItems: 'center'
	},
	nextBtnTxt: {
		fontSize: 20,
		lineHeight: 20,
		textAlign: 'center',
		fontFamily: 'Gotham-Book',
		color: '#FFF'
	},
	footer: {
        paddingBottom: 10,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-between',
		flex: 1
	},
	text: {
		textAlign: 'center',
		fontSize: 18,
		color: '#FFF',
		fontFamily: 'Gotham-Book'
	},
	score: {
		marginBottom: 10,
		height: 220,
		width: 220,
		borderColor: '#8D1E21',
		borderWidth: 3,
		borderRadius: 110,
		justifyContent: 'center',
		alignItems: 'center'
	},
	scoreText: {
		fontFamily: 'AlbraText-Black',
		textAlign: 'center',
		fontSize: 115,
		color: '#FFF'
	}
})
