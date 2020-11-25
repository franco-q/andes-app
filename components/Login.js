import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { Row, Grid } from 'react-native-easy-grid'

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
	},
	conditions: {
		fontFamily: 'Gotham-Book',
		width: 250,
		textAlign: 'center',
		fontSize: 16,
		color: '#FFF',
		marginBottom: 20
	},
	appButtonContainer: {
		height: 46,
		width: 56,
		borderColor: '#8D1E21',
		borderWidth: 2,
		borderRadius: 13,
		alignItems: 'center',
		justifyContent: 'center'
	},
	appButtonText: {
		fontSize: 20,
		textAlign: 'center',
		fontFamily: 'Gotham-Book',
		color: '#FFF'
	},
	headerTxt: {
		fontFamily: 'Gotham-Bold',
		width: 311,
		textAlign: 'center',
		fontSize: 30,
		color: '#FFF'
	},
	row: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	}
})
export default function ({ onLogin, onReadTC }) {
	const [name, setName] = useState()
	const [age, setAge] = useState()
	const [city, setCity] = useState()
	const [email, setEmail] = useState()

	const checkIt = () => {
		if (name && age && city && email) {
			console.log({ name, age, city, email })
			// onLogin({ name, age, city, email })
		}
	}

	return (
		<Grid>
			<Row height={180} style={styles.row}>
				<Text style={styles.headerTxt}>Registrate y empezá a participar</Text>
			</Row>
			<Row height={300} style={styles.row}>
				<TextInput
					placeholder={'Nombre y apellido'}
					placeholderTextColor={'#FFF'}
					style={styles.input}
                    onChangeText={val => (val ? setName(val) : setName())}
                    value={name}
					disableFullscreenUI
					onSubmitEditing={Keyboard.dismiss}
				/>
				<TextInput
					placeholder={'Edad'}
					placeholderTextColor={'#FFF'}
					keyboardType={'number-pad'}
					style={styles.input}
                    maxLength={2}
                    onChangeText={val => (val ? setAge(val.replace(/[^0-9]/g, '')) : setAge())}
                    value={age}
					disableFullscreenUI
					onSubmitEditing={Keyboard.dismiss}
				/>
				<TextInput
					placeholder={'Localidad'}
					placeholderTextColor={'#FFF'}
					style={styles.input}
                    onChangeText={val => (val ? setCity(val) : setCity())}
                    value={city}
					disableFullscreenUI
					onSubmitEditing={Keyboard.dismiss}
				/>
				<TextInput
					placeholder={'Mail'}
					keyboardType={'email-address'}
					placeholderTextColor={'#FFF'}
					style={styles.input}
                    onChangeText={val => (val ? setEmail(val) : setEmail())}
                    value={email}
					disableFullscreenUI
					onSubmitEditing={Keyboard.dismiss}
				/>
			</Row>
			<Row height={180} style={styles.row}>
				<TouchableOpacity onPress={onReadTC}>
					<Text style={styles.conditions}>
						Acepto términos y condiciones, políticas de privacidad y activaciones de marketing.
					</Text>
				</TouchableOpacity>
				{name && age && city && email && (
					<TouchableOpacity onPress={checkIt} style={styles.appButtonContainer}>
						<Svg viewBox={'0 0 30 20'} height={20} width={30}>
							<Path fill={'#FFFFFF'} d={'M12.7,18L3,8.3l1.5-1.5l8.1,8.1L25.4,2L27,3.6L12.7,18z'} />
						</Svg>
					</TouchableOpacity>
				)}
			</Row>
		</Grid>
	)
}
