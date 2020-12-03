import React, { useState, useRef } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Carousel from 'react-native-snap-carousel'
import Mountain1 from '../assets/images/mountain_wheel_1.svg'
import Mountain2 from '../assets/images/mountain_wheel_2.svg'
import Mountain3 from '../assets/images/mountain_wheel_3.svg'
import Mountain4 from '../assets/images/mountain_wheel_4.svg'
import Mountain5 from '../assets/images/mountain_wheel_5.svg'

const mountains = [
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
const MountainItem = ({ item }) => {
	return (
		<View style={styles.mountainItem}>
			<View style={{ height: 150, alignItems: 'center' }}>
				<item.svg height={150} width={150} />
			</View>
			<View style={styles.mountainItemData}>
				<Text style={styles.itemTitle}>{item.title}</Text>
				<Text style={styles.itemTxt}>ALTITUD</Text>
				<Text style={styles.itemTxt}>{item.altitud}</Text>
				<Text style={styles.itemTxt}>SUPERFICIE</Text>
				<Text style={styles.itemTxt}>{item.superficie}</Text>
			</View>
		</View>
	)
}

export default function ({ onNext }) {
	const [activeItem, setActiveItem] = useState(2)
	const $Carousel = useRef()

	return (
		<View style={{ flex: 1}}>
			<Animatable.View ref={$Carousel} animation={'fadeInUp'} delay={900} style={styles.content}>
				<Carousel
					data={mountains}
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
				<TouchableOpacity onPress={() => onNext(mountains[activeItem])} style={styles.nextBtn}>
					<Text style={styles.nextBtnTxt}>SIGUIENTE</Text>
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
        alignItems: 'center',
        marginBottom: 10
	},
	nextBtnTxt: {
		fontSize: 20,
		lineHeight: 20,
		textAlign: 'center',
		fontFamily: 'Gotham-Book',
		color: '#FFF'
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
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	mountainItem: {
		color: '#FFF',
		height: 250,
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	mountainItemData: {
		alignItems: 'center',
		justifyContent: 'flex-end'
	}
})
