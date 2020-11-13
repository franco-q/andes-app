import React from 'react'
import { StatusBar, View, Text, ImageBackground } from 'react-native'
import Stage1 from './components/Stage1'
import Stage2 from './components/Stage2'
import Stage3 from './components/Stage3'

import Brand from './assets/brand.svg'

const App = () => {
	return (
		<>
			<StatusBar hidden={true} />

			<ImageBackground
				source={require('./assets/mountains-bg.png')}
				imageStyle={{
					resizeMode: 'contain',
					position: 'absolute',
					width: '100%',
					bottom: '-55%',
					opacity: 0
				}}
				style={{
					flex: 1,
					backgroundColor: '#111111',
					marginTop: 'auto'
				}}>
				<View style={{ padding: 20, alignItems: 'center', justifyContent: 'center' }}>
					<Brand width={90} height={20} />
				</View>
				{/* <Stage1 /> */}
				{/* <Stage2 /> */}
				<Stage3 />
				<View
					style={{
						padding: 20,
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 'auto'
					}}>
					<Text style={{ fontFamily: 'Gotham-Book', textAlign: 'center', fontSize: 16, color: '#FFF' }}>
						BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS.
					</Text>
				</View>
			</ImageBackground>
		</>
	)
}

export default App
