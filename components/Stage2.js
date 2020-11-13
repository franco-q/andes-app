import React, { useState, useRef } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Mountain1 from '../assets/images/mountain_wheel_1.svg'
import Mountain2 from '../assets/images/mountain_wheel_2.svg'
import Mountain3 from '../assets/images/mountain_wheel_3.svg'
import Mountain4 from '../assets/images/mountain_wheel_4.svg'
import Mountain5 from '../assets/images/mountain_wheel_5.svg'
import Carousel from 'react-native-snap-carousel'

const AppButton = ({ onPress, title }) => (
	<TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
		<Text style={styles.appButtonText}>{title}</Text>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	appButtonContainer: {
		height: 50,
		width: 180,
		borderColor: '#8D1E21',
		borderWidth: 2,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center'
	},
	appButtonText: {
		fontSize: 20,
		textAlign: 'center',
		fontFamily: 'Gotham-Book',
		color: '#FFF'
	}
})

export default function () {
	const _renderItem = ({ item, index }) => {
		return (
			<View style={{ color: '#FFF', height: 250, flexDirection: 'column' }}>
				<View style={{ alignItems: 'center', justifyContent: 'center', height: 150 }}>
					<item.svg height={index == activeIndex ? 150 : 100} width={index == activeIndex ? 150 : 100} />
				</View>
				<View style={{ alignItems: 'center', justifyContent: 'flex-end', marginTop: 'auto' }}>
					<Text
						style={{
							textAlign: 'center',
							fontFamily: 'Gotham-Black',
							fontSize: 14,
							textTransform: 'uppercase',
							color: '#FFF'
						}}>
						{item.title}
					</Text>
					<Text style={{ textAlign: 'center', fontFamily: 'Gotham-Book', fontSize: 10, color: '#FFF' }}>
						ALTITUD
					</Text>
					<Text style={{ textAlign: 'center', fontFamily: 'Gotham-Book', fontSize: 10, color: '#FFF' }}>
						{item.altitud}
					</Text>
					<Text style={{ textAlign: 'center', fontFamily: 'Gotham-Book', fontSize: 10, color: '#FFF' }}>
						SUPERFICIE
					</Text>
					<Text style={{ textAlign: 'center', fontFamily: 'Gotham-Book', fontSize: 10, color: '#FFF' }}>
						{item.superficie}
					</Text>
					<Text>{item.superficie}</Text>
				</View>
			</View>
		)
	}

	var carouselRef = useRef(null)

	var [activeIndex, set_activeIndex] = useState(2)
	var [carouselItems] = useState([
		{
			title: 'puente del inca',
			altitud: '2.700 msnm',
			superficie: '500 ha',
			svg: Mountain1
		},
		{
			title: 'penitentes',
			altitud: '3.194 msnm',
			superficie: '300 ha',
			svg: Mountain2
		},
		{
			title: 'aconcagua',
			altitud: '6.962 msnm',
			superficie: '700 ha',
			svg: Mountain3
		},
		{
			title: 'potrerillos',
			altitud: '1.435 msnm',
			superficie: '1.500 ha',
			svg: Mountain4
		},
		{
			title: 'villavicencio',
			altitud: '3.300 msnm',
			superficie: '62.000 ha',
			svg: Mountain5
		}
	])

	return (
		<View style={{ flex: 1, padding: 50 }}>
			<View
				style={{
					marginLeft: 'auto',
					marginRight: 'auto',
					width: 920,
					flexDirection: 'row'
				}}>
				<View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
					<Text style={{ color: '#FFF', fontSize: 28, fontFamily: 'Gotham-Bold' }}>Nombre</Text>
					<Text style={{ color: '#D02C2F', fontSize: 22, fontFamily: 'Gotham-Book' }}>Apellido</Text>
				</View>
				<View style={{ flexDirection: 'row', marginTop: 'auto' }}>
					<Text style={{ paddingHorizontal: 2, color: '#FFF', fontSize: 16, fontFamily: 'Gotham-Book' }}>1</Text>
					<Text style={{ paddingHorizontal: 2, color: '#FFF', fontSize: 16, fontFamily: 'Gotham-Book' }}>/</Text>
					<Text style={{ paddingHorizontal: 2, color: '#D02C2F', fontSize: 16, fontFamily: 'Gotham-Book' }}>5</Text>
				</View>
			</View>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: 35
				}}>
				<Text style={{ fontFamily: 'Gotham-Black', textAlign: 'center', fontSize: 17, color: '#FFF' }}>
					Elegí dónde gritar
				</Text>
			</View>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Carousel
					layout={'default'}
					ref={ref => (carouselRef = ref)}
					data={carouselItems}
					sliderWidth={1000}
					activeSlideAlignment={'center'}
					itemWidth={1000 / 5}
					firstItem={2}
					inactiveSlideScale={1}
					renderItem={_renderItem}
					onSnapToItem={set_activeIndex}
				/>
			</View>

			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<AppButton title="Siguiente" />
			</View>
		</View>
	)
}
