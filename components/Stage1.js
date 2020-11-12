import React from 'react'
import { View, ImageBackground, StyleSheet, Text, TextInput } from 'react-native'

const styles = StyleSheet.create({
	input: {
		fontSize: 20,
		fontFamily: 'Gotham-Book',
		color: '#FFF',
		height: 40,
		width: 430,
		borderColor: '#8D1E21',
		borderWidth: 2,
		borderRadius: 20,
		textAlign: 'center',
		marginBottom: 10
	}
})

export default function () {
	return (
		<View style={{ flex: 1, padding: 50 }}>
				<View
					style={{
						padding: 10,
						alignItems: 'center',
						justifyContent: 'center',
						marginBottom: 40
					}}>
					<Text style={{ fontFamily: 'Gotham-Bold', width: 311, textAlign: 'center', fontSize: 30, color: '#FFF' }}>
						Registrate y empezá a participar
					</Text>
				</View>

				<View
					style={{
						padding: 10,
						alignItems: 'center',
						justifyContent: 'center'
					}}>
					<TextInput placeholder={'Nombre y apellido'} placeholderTextColor={'#FFF'} style={styles.input} />
					<TextInput placeholder={'Edad'} placeholderTextColor={'#FFF'} style={styles.input} />
					<TextInput placeholder={'Localidad'} placeholderTextColor={'#FFF'} style={styles.input} />
					<TextInput placeholder={'Mail'} placeholderTextColor={'#FFF'} style={styles.input} />
				</View>

				<View
					style={{
						padding: 10,
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 'auto'
					}}>
					<Text style={{ fontFamily: 'Gotham-Book', width: 311, textAlign: 'center', fontSize: 16, color: '#FFF' }}>
						Acepto términos y condiciones, políticas de privacidad y activaciones de marketing.
					</Text>
				</View>

		</View>
	)
}
