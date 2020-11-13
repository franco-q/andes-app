import React, { useState, useRef } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

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
					<Text style={{ paddingHorizontal: 2, color: '#FFF', fontSize: 16, fontFamily: 'Gotham-Book' }}>
						1
					</Text>
					<Text style={{ paddingHorizontal: 2, color: '#FFF', fontSize: 16, fontFamily: 'Gotham-Book' }}>
						/
					</Text>
					<Text style={{ paddingHorizontal: 2, color: '#D02C2F', fontSize: 16, fontFamily: 'Gotham-Book' }}>
						5
					</Text>
				</View>
			</View>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: 35
				}}>
				<Text style={{ fontFamily: 'Gotham-Black', textAlign: 'center', fontSize: 17, color: '#FFF' }}>
					Gritá bien fuerte en...
				</Text>
			</View>
			<View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 'auto' }}>
				<View
					style={{
						margin: 'auto',
						height: 208,
						width: 208,
						borderColor: '#8D1E21',
						borderWidth: 3,
						borderRadius: 104
					}}>
					<Text style={{ fontFamily: 'AlbraText-Black', textAlign: 'center', fontSize: 145, color: '#FFF' }}>
						5
					</Text>
				</View>
			</View>
			<View
				style={{
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: 'auto',
					borderBottomColor: '#FFF',
					width: 920,
					flexDirection: 'row'
				}}>
				<View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
					<Text style={{ color: '#FFF', fontFamily: 'Gotham-Black', fontSize: 17 }}>Aconcagua</Text>
					<View style={{ flexDirection: 'row', marginTop: 'auto' }}>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#FFF', paddingRight: 5 }}>
							Viento:
						</Text>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#D02C2F', paddingRight: 5 }}>
							14
						</Text>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#FFF' }}>km/h</Text>
					</View>
					<View style={{ flex: 1, flexDirection: 'row', marginTop: 'auto' }}>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#FFF', paddingRight: 5 }}>
							Presión:
						</Text>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#D02C2F', paddingRight: 5 }}>
							1017.6
						</Text>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#FFF' }}>mb</Text>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 'auto' }}>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#FFF', paddingRight: 5 }}>
							Condensación:
						</Text>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#FFF' }}>-1º</Text>
					</View>
				</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<View style={{ flexDirection: 'row', marginTop: 'auto' }}>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#FFF' }}>NOV</Text>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#D02C2F' }}>_</Text>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#FFF' }}>20</Text>
					</View>
				</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<View style={{ flexDirection: 'row', marginTop: 'auto' }}>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#FFF' }}>21:34</Text>
						<Text style={{ fontFamily: 'Gotham-Book', fontSize: 16, color: '#D02C2F' }}>hs</Text>
					</View>
				</View>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<View style={{ flexDirection: 'row', marginTop: 'auto' }}>
						<Text
							style={{
								transform: [{ rotate: '90deg' }, { translateX: -35 }, { translateY: -35 }],
								width: 80,
								fontSize: 12,
								textAlign: 'right',
								color: '#FFF'
							}}>
							weather.com
						</Text>
					</View>
				</View>
			</View>
		</View>
	)
}
