import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, Platform } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { Row, Grid } from 'react-native-easy-grid'
import DateTimePicker from '@react-native-community/datetimepicker'

const styles = StyleSheet.create({
	input: {
		fontSize: 20,
		fontFamily: 'Gotham-Book',
		color: '#FFF',
		height: 40,
		width: 430,
		padding: 0,
		lineHeight: 40,
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
export default function ({ onLogin, onReadTC, stopAnimation }) {
	const [name, setName] = useState()
	const [borndate, setBorndate] = useState()
	const [city, setCity] = useState()
	const [email, setEmail] = useState()
	const [beer, setBeer] = useState()

	const checkIt = () => {
		if (name && borndate && city && email && beer) {
			onLogin({ name, borndate, city, email, beer })
		}
	}

	const [date, setDate] = useState(new Date())
	const [show, setShow] = useState(false)

	const onChangeDP = (event, selectedDate) => {
		setShow(false)
		const currentDate = selectedDate || date
		setBorndate(currentDate.toISOString().replace(/(\d{4})-(\d{2})-(\d{2})[\s\S]+/, '$3/$2/$1'))
		setDate(currentDate)
	}

	const showDatepicker = () => {
		stopAnimation()
		setShow(true)
	}

	return (
		<Grid>
			<Row height={180} style={styles.row}>
				<Text style={styles.headerTxt}>Registrate y empezá a participar</Text>
			</Row>
			<Row height={300} style={styles.row}>
				<KeyboardAvoidingView behavior={'padding'} contentContainerStyle={{ flex: 1 }}>
					<TextInput
						placeholder={'Nombre y apellido'}
						placeholderTextColor={'#FFF'}
						style={styles.input}
						onFocus={() => stopAnimation()}
						onChangeText={val => (val ? setName(val) : setName())}
						value={name}
						disableFullscreenUI
						onSubmitEditing={Keyboard.dismiss}
					/>
					<TouchableOpacity onPress={showDatepicker}>
						<Text style={[styles.input, { textAlignVertical: 'center', lineHeight: 40 }]}>
							{borndate || 'Fecha de nacimiento'}
						</Text>
					</TouchableOpacity>
					{show && (
						<DateTimePicker
							maximumDate={new Date().setFullYear(new Date().getFullYear() - 18)}
							value={date}
							mode={'date'}
							onChange={onChangeDP}
						/>
					)}
					<TextInput
						placeholder={'Localidad'}
						placeholderTextColor={'#FFF'}
						style={styles.input}
						onFocus={() => stopAnimation()}
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
						onFocus={() => stopAnimation()}
						onChangeText={val => (val ? setEmail(val) : setEmail())}
						value={email}
						disableFullscreenUI
						onSubmitEditing={Keyboard.dismiss}
					/>
					<TextInput
						placeholder={'Cerveza preferida'}
						placeholderTextColor={'#FFF'}
						style={styles.input}
						onFocus={() => stopAnimation()}
						onChangeText={val => (val ? setBeer(val) : setBeer())}
						value={beer}
						disableFullscreenUI
						onSubmitEditing={Keyboard.dismiss}
					/>
				</KeyboardAvoidingView>
			</Row>
			<Row height={180} style={styles.row}>
				<TouchableOpacity onPress={onReadTC}>
					<Text style={styles.conditions}>
						Acepto términos y condiciones, políticas de privacidad y activaciones de marketing.
					</Text>
				</TouchableOpacity>
				{name && borndate && city && email && beer && (
					<TouchableOpacity onPress={checkIt} style={styles.appButtonContainer}>
						<Svg viewBox={'0 0 30 20'} height={20} width={30}>
							<Path fill={'#FFF'} d={'M12.7,18L3,8.3l1.5-1.5l8.1,8.1L25.4,2L27,3.6L12.7,18z'} />
						</Svg>
					</TouchableOpacity>
				)}
			</Row>
		</Grid>
	)
}
