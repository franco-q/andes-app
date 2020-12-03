import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function ({ onExit }) {
	useEffect(() => {
		const timeout = setTimeout(onExit, 2000)
		return () => clearTimeout(timeout)
	}, [])

	return (
		<View style={{ flex: 1 }}>
			<Animatable.View animation={'fadeIn'} style={styles.content}>
				<Text style={styles.txt}>Disfrutá tus</Text>
				<Text style={styles.brand}>Andes</Text>
				<Text style={styles.txt}>gratis</Text>
			</Animatable.View>
		</View>
	)
}

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 50,
		flex: 1
	},
	txt: {
		height: 70,
		fontSize: 48,
		lineHeight: 70,
		display: 'flex',
		alignItems: 'flex-end',
		fontFamily: 'Gotham-Bold',
		color: '#FFF'
	},
	brand: {
		display: 'flex',
		alignItems: 'baseline',
		paddingHorizontal: 10,
		fontFamily: 'AlbraText-Black',
		height: 70,
		fontSize: 60,
		lineHeight: 70,
		color: '#FFF'
	}
})
