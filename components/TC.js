import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

import Close from '../assets/close.svg'

const styles = StyleSheet.create({
	subtitle: {
		color: '#FFF',
		fontFamily: 'Gotham-Bold'
	},
	title: {
		color: '#FFF',

		fontFamily: 'Gotham-Black'
	},
	text: {
		color: '#FFF',
		textAlign: 'justify',
		fontFamily: 'Gotham-Book',
		marginBottom: 20
	},
	wrap: {
		position: 'relative',
		flex: 1,
		backgroundColor: '#D02C2F'
	},
	close: {
		position: 'absolute',
		zIndex: 9,
		right: 20,
		top: 20,
		width: 30,
		height: 30
	},
	ScrollView: {
		flex: 1,
		position: 'relative',
		paddingHorizontal: 100,
		paddingVertical: 20
	}
})

export default ({ onClose }) => {
	return (
		<View style={styles.wrap}>
			<TouchableOpacity style={styles.close} onPress={onClose}>
				<Close />
			</TouchableOpacity>
			<ScrollView style={styles.ScrollView} onMomentumScrollEnd={() => console.log('top')}>
				<Text style={styles.title}>BASES Y CONDICIONES</Text>
				<Text style={styles.subtitle}>Promoción “El Grito de los Andes”</Text>

				<Text style={styles.subtitle}>1.- Aceptación de Bases y Condiciones:</Text>
				<Text style={styles.text}>
					La presente acción promocional denominada “El Grito de los Andes” (en adelante, la “Promoción”) es
					organizada por Cervecería y Maltería Quilmes S.A.I.C.A. y G, CUIT 33-50835825-9, con domicilio
					constituido a los efectos de la presente Promoción en la calle Charcas 5160, Ciudad Autónoma de
					Buenos Aires (en adelante, el “Organizador”) para su marca Andes Origen. Las personas intervinientes
					en esta Promoción por su sola participación aceptan de pleno derecho y de forma incondicional todas
					y cada una de las disposiciones descriptas en estas bases y condiciones (en adelante, las “Bases”).
				</Text>

				<Text style={styles.subtitle}>2.- Vigencia:</Text>
				<Text style={styles.text}>
					La presente Promoción tendrá vigencia en el Gran Mendoza (en adelante, el “Territorio”), desde el
					jueves 10 de diciembre de 2020 a las 16:00hs hasta el lunes 21 de diciembre de 2020 a las 12:59 hs ó
					hasta alcanzar el stock de 13.000 (trece mil) tarjetas conforme su definición en el punto 6 de estas
					Bases (en adelante, el “Plazo de Vigencia”).
				</Text>
				<Text style={styles.subtitle}>3.- Participantes:</Text>
				<Text style={styles.text}>
					Podrán participar en la presente Promoción, todas las personas humanas que al momento de la entrada
					en vigencia de la Promoción sean mayores de 18 años, con domicilio en el Territorio, que durante el
					Plazo de Vigencia observen el mecanismo de la Promoción indicado en estas Bases, y que no se
					encuentren comprendidos en alguna de las causales de exclusión referidas a continuación (en
					adelante, el/los “Participantes”).
				</Text>
				<Text style={styles.subtitle}>4.- Exclusión:</Text>
				<Text style={styles.text}>
					No podrán participar los empleados del Organizador, ni los empleados ni personal directivo de las
					agencias de publicidad y promociones, y demás proveedores vinculados a la presente Promoción, ni sus
					parientes hasta el segundo grado de consanguinidad y primero de afinidad. Esta restricción asimismo
					aplicará a los empleados desvinculados de las empresas mencionadas precedentemente, dentro de los
					treinta (30) días del comienzo de la Promoción.
				</Text>
				<Text style={styles.subtitle}>5.- Mecánica:</Text>
				<Text style={styles.text}>
					Aquellos interesados en participar, y cumplan los requisitos previstos en estas Bases, deberán
					completar sus datos personales mínimos (nombre y apellido, edad, localidad, mail y cerveza
					preferida) en la tablet que estarán disponibles en los puntos de venta, los días y con la
					identificación de la Promoción que se detallan en el Anexo I. Luego de esto, deberán seleccionar un
					punto en la montaña desde el cual le gustaría que suene su eco entre las opciones que se le brinden.
					Una vez hecho, debe gritar “Andes” en el ecófono que se le pondrá a disposición en el stand. La
					interfase de la tablet le mostrará en base al orden en el que haya participado, la cantidad de latas
					de cerveza Andes que obtendrá, que podrán ser de 1 (una) a 18 (dieciocho). Una persona encargada del
					stand le dará a la persona la cantidad de tarjetas correspondiente a la cantidad de latas que se
					haya ganado. Cada tarjeta se podrá canjear por una lata de cerveza Andes 473ml. en cualquier
					supermercado Átomo de Gran Mendoza o en los siguientes Go Bar: Go Bar Viamonte (Viamonte, M5505
					Chacras de Coria, Mendoza), Go Bar Mayorista Rodríguez (Cnel Rodríguez 604, M5500 Mendoza), Go Bar
					Casa Central (Perito Moreno 2455, M5500 Mendoza) y sujeto al stock disponible en el momento del
					canje en el punto de venta seleccionado. Todos los Participantes deberán cumplir con las normas
					sanitarias vigentes manteniendo distancia de un metro y medio con otros participantes, usando
					tapabocas y tomándose la temperatura cuando el local se lo solicite.~{'\n'}
					La participación en esta Promoción no implica obligación de compra alguna, siendo el único requisito
					cumplir con la mecánica de participación aquí detallada.
				</Text>
				<Text style={styles.subtitle}>6.- Programa de Premios:</Text>
				<Text style={styles.text}>
					El programa de premios incluye 13.000 tarjetas canjeables cada una por una lata de cerveza de 473ml
					(el “Premio” o “Tarjetas”), el máximo de Tarjetas a las que podrá acceder un solo participante
					durante la Promoción será de 18. Las Tarjetas podrán ser canjeadas en los locales de canje que se
					detallan en el Anexo II hasta el día 31 de enero de 2021, transcurrida esa fecha, las mismas
					perderán toda validez.~{'\n'}
					El Premio no incluye ninguna otra prestación, bien o servicio no enumerado en estas Bases y no podrá
					ser canjeados por su equivalente en dinero u otro bien o servicio, ni ser transferido a terceros.
					Tampoco podrá ser intercambiado o comercializado, no pudiendo ser reclamado por otras personas que
					no sean ganadores.
				</Text>
				<Text style={styles.subtitle}>7.- Entrega de Premios:</Text>
				<Text style={styles.text}>
					Los Premios serán entregados una vez finalizada la participación en el mismo punto de difusión de la
					Promoción.
				</Text>
				<Text style={styles.subtitle}>8.- Asignación y adjudicación de los Premios:</Text>
				<Text style={styles.text}>
					Los Participantes, luego de su participación serán informados del total de Tarjetas que le
					corresponden, lo cual dependerá de un orden aleatorio predeterminado entre todas las participaciones
					que se lleven a cabo a lo largo de la Promoción y que será predeterminado con antelación al
					lanzamiento de la Promoción.
				</Text>
				<Text style={styles.subtitle}>9.- Premio no asignados:</Text>
				<Text style={styles.text}>
					La falta de reclamo de asignación del Premio, la falta de acreditación de la identidad del ganador o
					el incumplimiento de cualquiera de los requisitos establecidos en estas Bases hará perder al
					Ganador, automáticamente, el derecho a la asignación del Premio y será considerado como no asignado.
					El Premio no asignado quedará en propiedad y a disposición del Organizador.
				</Text>
				<Text style={styles.subtitle}>10.- Gastos adicionales:</Text>
				<Text style={styles.text}>
					Todo impuesto actual o futuro que grave los Premios objeto de la presente Promoción o todo gasto en
					que por cualquier concepto incurran los favorecidos en la presente Promoción para participar en la
					misma, así como para el traslado y otros gastos para reclamar o retirar o gozar del Premio, en su
					caso, serán a exclusivo cargo del adjudicatario del Premio.
				</Text>
				<Text style={styles.subtitle}>11.- Responsabilidades:</Text>
				<Text style={styles.text}>
					El Organizador no será responsable por los daños o perjuicios que pudiere sufrir el Ganador, o los
					terceros, o las personas que hagan uso del Premio con motivo o en ocasión de la participación en la
					presente Promoción o en ocasión de la utilización del Premio. La responsabilidad del Organizador
					finalizará con la entrega del Premio al Ganador, no siendo responsable por eventuales fallas en los
					sistemas informáticos o telefónicos dispuestos para la recepción de datos para participar, ni por el
					mal funcionamiento de los equipos de computación o de telefonía utilizados por los Participantes
					para el ingreso de los datos para participar.
				</Text>
				<Text style={styles.subtitle}>12.- Suspensión, modificaciones, cancelación:</Text>
				<Text style={styles.text}>
					El Organizador podrá ampliar la cantidad de premios ofrecidos o el plazo de vigencia de la
					Promoción. Cuando circunstancias no imputables al Organizador o no previstas en estas Bases o que
					constituyan caso fortuito o fuerza mayor lo justifiquen, el Organizador podrá suspender, cancelar o
					modificar la Promoción.
				</Text>
				<Text style={styles.subtitle}>13.- Aceptación de Bases y Condiciones:</Text>
				<Text style={styles.text}>
					Quienes participen en esta Promoción aceptan de pleno derecho todas y cada una de las disposiciones
					descriptas en estas Bases.
				</Text>
				<Text style={styles.subtitle}>14.- Disponibilidad:</Text>
				<Text style={styles.text}>
					Las presentes Bases podrán ser consultadas por cualquier interesado en www.pedilealosandes.com.ar
				</Text>
				<Text style={styles.subtitle}>15.- Autorización:</Text>
				<Text style={styles.text}>
					Los Participantes autorizan expresamente al Organizador a captar y utilizar sus datos, nombres,
					números de documentos, imágenes personales, video y voces de estos últimos con fines publicitarios y
					promocionales en cualquier medio de comunicación, ya sea televisivo, cinematográfico, radial,
					gráfico, Internet, etc., en la forma en que el Organizador considere más conveniente y sin que esto
					genere derecho a compensación de ninguna especie, por un plazo de veinticuatro (24) meses contados
					desde la finalización del Plazo de Vigencia de la Promoción.
				</Text>
				<Text style={styles.subtitle}>16.- Datos personales:</Text>
				<Text style={styles.text}>
					Los datos personales brindados por los Participantes para la participación en esta Promoción, serán
					objeto de tratamiento automatizado e incorporado a la base de datos de titularidad de Cervecería y
					Maltería Quilmes S.A.I.C.A. y G, con domicilio constituido a los efectos de la presente Promoción,
					en la calle Charcas 5160, Ciudad de Buenos Aires. La provisión de los datos por parte de los
					Participantes de la Promoción es voluntaria, sin perjuicio de ser un requisito necesario para
					participar en la Promoción.~{'\n'}
					El titular de los datos personales o sus representantes legales tienen la facultad de ejercer el
					derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que
					se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la
					Ley Nº 25.326.~{'\n'}
					Los Participantes podrán requerir que dicha información le sea suministrada, actualizada,
					rectificada o removida de la base de datos a su pedido. A tales efectos, el Participante podrá
					comunicarse al 0-800-222- 378392.~{'\n'}
					La Agencia de Acceso a la Información Pública, órgano de control de la Ley Nº 25.326 tiene la
					atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de
					las normas sobre protección de datos personales.~{'\n'}
					El registro y participación de la Promoción implicará el otorgamiento por parte del Participante,
					del consentimiento previsto en los artículos 5º y 11º de la Ley 25.326.
				</Text>
				<Text style={styles.subtitle}>17.- Ley aplicable y Jurisdicción:</Text>
				<Text style={styles.text}>
					Toda relación que en virtud de la Promoción se genere entre el Participante y el Organizador será
					regida y concertada con total sujeción a las leyes de la República Argentina, renunciando el
					Participante a cualquier otra ley a cuya aplicación pudiera tener derecho. Para cualquier cuestión
					judicial que pudiera derivarse de la realización de la Promoción, los Participantes y el Organizador
					se someterán a la jurisdicción de los tribunales ordinarios competentes con asiento en la Ciudad de
					Buenos Aires.
				</Text>
				<Text style={styles.subtitle}>BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS.</Text>

				<Text style={styles.subtitle}>Anexo I – Puntos de activación</Text>
				<Text style={styles.text}>
					Go Bar Viamonte (Viamonte, M5505 Chacras de Coria, Mendoza)~{'\n'}
					Go Bar Mayorista Rodríguez (Cnel Rodríguez 604, M5500 Mendoza)~{'\n'}
					Central de Bebidas (Viamonte 5181, M5505 Chacras de Coria, Mendoza)~{'\n'}
					Supermercado Átomo (Bolougne Sur Mer y regalado Olguin Las Heras)~{'\n'}
					Supermercado Átomo (San Martin 2430 Las Heras)~{'\n'}
					La Fuente del Parque (Parque General San Martín. Fuente de los continentes)~{'\n'}
					El Asadito- Juan B. Justo (5500, Av. Juan B. Justo 512, M5500 DQK, Mendoza)~{'\n'}
					Punta del Lago (Avenida del Trabajo, Parque General San Martín, Provincia de Mendoza, Del Trabajo,
					Mendoza)~{'\n'}
					El Asadito- Sarmiento (Av. Sarmiento 755, M5000 Mendoza)~{'\n'}
					Nipoti. Palmares Open Mall (Palmares Open Mall. Godoy Cruz, Mendoza)~{'\n'}
				</Text>
				<Text style={styles.subtitle}>Anexo II – Centros de Canje</Text>
				<Text style={styles.text}>
					Amigorena. Amigorena 26 – Mendoza~{'\n'}
					Dovir. Lavalle 255 – Mendoza~{'\n'}
					Juan B. Justo. Juan B. Justo 395 – Mendoza~{'\n'}
					Peru. Perú 3022~{'\n'}
					Someca. Paraguay 2532 – Mendoza~{'\n'}
					Castelli. Castelli 170 - Godoy Cruz~{'\n'}
					Cervantes. Cervantes 1560~{'\n'}
					Cisne. Elpidio Gonzalez 2890 - Jesus Nezareno - Godoy Cruz~{'\n'}
					Covimet. Sarmiento D.F. 2115 - Godoy Cruz~{'\n'}
					Estanzuela. B° D.P. de Huisi Mna 10 Csa 1 - Godoy Cruz~{'\n'}
					Jardin Serrano. Villa Mercedes 886 - Godoy Cruz~{'\n'}
					Nuevo Marini. Rivadavia 1653 - Godoy Cruz~{'\n'}
					Perito Moreno. Perito Moreno 1016 - Godoy Cruz~{'\n'}
					Sportman. Paso de los Andes 1634 - Godoy Cruz~{'\n'}
					Avellaneda. Capilla de Nieve 4056 – Guaymallen~{'\n'}
					Buena Nueva. Godoy Cruz 6470 - Villanueva - Guaymallen~{'\n'}
					Cano. Godoy Cruz 535 - San Jose - Guaymallen~{'\n'}
					Cap. Del Rosario. Capilla del Rosario s/n Villanueva - Guaymallen~{'\n'}
					Correa Saa. Benjamin Matienzo 1481~{'\n'}
					Don Bosco. Cervantes 1585 - San Jose - Guaymallen~{'\n'}
					Elpidio Gonzalez. Elpidio Gonzalez s/n Jesus Nazareno - Guaymallen~{'\n'}
					Gutemberg. Gutemberg 2652 - San Jose - Guaymallen~{'\n'}
					Nvo. Dorrego. Gualberto Godoy 314 - Dorrego - Guaymallen~{'\n'}
					Paddle. Tito Laciar 925 - Villanueva - Guaymallen~{'\n'}
					Pedro Molina. Besares 2399 - San Jose - Guaymallen~{'\n'}
					Santa Ana. Fader s/n Villanueva - Guaymallen~{'\n'}
					Unimev. Pedro Vargas s/n - Guaymallen~{'\n'}
					Algarrobal. Aristobulo del Valle s/n - Las Heras~{'\n'}
					Bosque. Peru 202 - Las Heras~{'\n'}
					Central. San Martin 2430 - Las Heras~{'\n'}
					Frimi II. San Martin 241 - Las Heras~{'\n'}
					Frimi IV. Trapiche s/n - Las Heras~{'\n'}
					Independencia. Independencia 2368 - Las Heras~{'\n'}
					Lisandro Moyano. Lisandro Moyano 528 - Las Heras~{'\n'}
					Martin Fierro. Martin Fierro 906 - Las Heras~{'\n'}
					Olascoaga. Olascoaga 2550 esq Indepencia - Las Heras~{'\n'}
					Padre Llorens. Calle sin nombre s/n Las Heras ~{'\n'}
					Raiz. Acceso Aeroparque s/n - Las Heras~{'\n'}
					Rotonda. Boulogne Sur Mer s/n - Las Heras~{'\n'}
					San Miguel. San Miguel 750 - Las Heras~{'\n'}
					Trome. Julio A. Roca s/n esquina Islas Malvinas - Las Heras~{'\n'}
					Uspallata. Ruta Nacional Nº7 1748 - Las Heras~{'\n'}
					Alvear Oeste. Av. Alvear Oeste 720 - Gral. Alvear~{'\n'}
					Bowen. Sarmiento s/n - Bowen - Gral. Alvear~{'\n'}
					Fatima. Alem Norte - Gral. Alvear~{'\n'}
					General Alvear. San Rafael 293 - Gral Alvear~{'\n'}
					Costa Araujo II. Daniel Guardi s/n - Costa de Araujo~{'\n'}
					Lavalle. Belgrano 155 - Lavalle~{'\n'}
					Tulumaya. Dr. Moreno 351 - Lavalle~{'\n'}
					Carrodilla. Calle sin nombre s/n - Lujan de Cuyo~{'\n'}
					Estacion. Siria s/n - Lujan de Cuyo~{'\n'}
					Lujan. Roque Saenz Peña 784 - Lujan de Cuyo~{'\n'}
					Perdriel. Ruta 15 s/n - Lujan de Cuyo~{'\n'}
					Vistalba. Roque Saenz Peña 1990 - Lujan de Cuyo~{'\n'}
					Ugarteche. Ruta Nac Nº 40 y Ruta Nac. 30 (interseccion)~{'\n'}
					Beltran. Mariano Moreno Norte 450 - Maipu~{'\n'}
					Giol. Lavalle 270 - Maipu~{'\n'}
					Luzuriaga. 9 de Julio s/n - Luzuriaga - Maipu~{'\n'}
					Maipu. Patricias Argentinas 377 - Maipu~{'\n'}
					Rodeo del Medio. Ruta provincial N° 50 s/n - Maipu~{'\n'}
					Tropero Sosa. Tropero Sosa 441 - Maipu~{'\n'}
					Aca. 9 de Julio 76 - San Rafael~{'\n'}
					Ballofet. Ballofet 858 - San Rafael~{'\n'}
					Ballofet Sur. Ballofet 2700 - San Rafael~{'\n'}
					Comodoro Pi. Comodoro Py 407 - San Rafael~{'\n'}
					Constitucion. Emilio Mitre 559 - San Rafael~{'\n'}
					Diamante. Av. Mitre 1120 - San Rafael~{'\n'}
					Imprenta. 25 de Mayo - San Rafael~{'\n'}
					Javi. Av. Rivadavia 660 - San Rafael ~{'\n'}
					Malargue. Hipolito Yrigiyen 50 - San Rafael~{'\n'}
					Rafaelito. Av Alberdi 290 - San Rafael~{'\n'}
					Salto de las Rosas. Ruta Nacional 143 s/n - Salto de las Rosas - San Rafael~{'\n'}
					Eugenio Bustos. San Martin 202 - Eugenio Bustos~{'\n'}
					Nvo Consulta. B. Vilegas Norte 181 - La Consulta~{'\n'}
					Nvo. Tupungato. Las Heras 1050 - Tupungato~{'\n'}
					Tunuyan. Lavalle 88 - Tunuyan~{'\n'}
					Tunuyan II. Ruta Nacional 40 s/n - Tunuyan~{'\n'}
					Tupungato. Belgrano 80 - Tupungato~{'\n'}
					Vista Flores. San Martin s/n - Vista Flores~{'\n'}
					Don Faustino. Avellaneda 225 - San Martin~{'\n'}
					Junin. Mitre 969 - Villa Junin~{'\n'}
					Palmira. Libertador 1465 - Palmira - San Martin~{'\n'}
					Rivadavia II. Lavalle 453 - Rivadavia~{'\n'}
					Rivadavia III. Rufino Ortega - Rivadavia~{'\n'}
					Terminal. Tucuman II - San Martin~{'\n'}
					Catitas. Ex Ruta 7 Prov. 50 N° 2835 - Catitas~{'\n'}
					Colonia. Isidoro Busquet 702 - La Colonia, Junin~{'\n'}
					Barriales. Libert. G San Martín 467~{'\n'}
					Go Bar Viamonte, Chacras de Coria. Viamonte, M5505 Chacras de Coria, Mendoza~{'\n'}
					Go Bar Mayorista Rodríguez. Cnel Rodríguez 604, M5500 Mendoza~{'\n'}
					Go Bar Casa Central. Perito Moreno 2455, M5500 Mendoza
				</Text>
				<Text style={styles.title}>TERMINOS Y CONDICIONES</Text>
				<Text style={styles.text}>
					Este sitio Web denominado (en adelante el "Sitio") es operado por Cervecería y Maltería Quilmes
					S.A.I.C.A. y G (en adelante "Quilmes"). Al acceder o utilizar este Sitio, usted (en adelante el
					"Visitante" y conjuntamente con otros visitantes del Sitio, los "Visitantes") acepta estos Términos
					y Condiciones de Uso y Política de Privacidad del Sitio. Si usted no acepta estos Términos y
					Condiciones de Uso y Política de Privacidad del Sitio, usted no puede utilizar este Sitio.
				</Text>
				<Text style={styles.subtitle}>Prohibición de ingreso a menores</Text>
				<Text style={styles.text}>
					El sitio no está destinado a menores de 18 años sino a la promoción de los productos que Cervecería
					y Maltería Quilmes S.A.I.C. A. y G. produce y/o comercializa entre los cuales se encuentran bebidas
					alcohólicas. Por tal motivo y conforme lo establecido por el art. 6 inc. A) de la ley 24.788 (LEY
					NACIONAL DE LUCHA CONTRA EL ALCOHOLISMO) se encuentra prohibido el acceso al Sitio a las personas
					menor de 18 años. Asimismo, recomendamos a los padres y tutores a controlar todo sitio de la web
					visitado por sus hijos menores o menores a cargo, el contenido de dichos sitios y/o la información
					en ellos publicada puede en muchos casos ser perjudicial para su adecuado desarrollo. Atento la
					imposibilidad fáctica y tecnológica de controlar la edad de los usuarios que ingresan al Site,
					Cervecería y Maltería Quilmes S.A.I.C. A. y G. requiere para su ingreso, en carácter de declaración
					jurada, que el usuario declare si es mayor de 18 años. Cualquier incumplimiento o falsedad respecto
					de dicho dato realizado por un menor de 18 años será exclusiva responsabilidad del usuario y/o de
					sus padres y/o tutores. Los padres y/o tutores pueden asimismo solicitar, frente al incumplimiento o
					falsedad ejercida por un menor, que se elimine la información de su(s) hijos(s) de la base de datos.
					Si usted es un padre de familia o tutor y desea ejercer estos derechos, por favor le solicitamos nos
					lo haga saber a través de nuestro centro de atención al cliente tel. 0800-22-2378392 (cerveza). El
					usuario sabe que al prestar conformidad con los Términos y condiciones acepta los siguientes puntos:
					· Que conforme lo establecido por el art. 6 inc. A) de la ley 24.788 (LEY NACIONAL DE LUCHA CONTRA
					EL ALCOHOLISMO) los mensajes creados no pueden tener como destinatario a menores de 18 años. En
					consecuencia el usuario acepta y se compromete a no enviar ningún mensaje creado a personas o
					titulares de cuentas de correo electrónico menores de 18 años bajo su exclusiva responsabilidad. ·
					Será exclusiva responsabilidad del usuario la veracidad de los datos insertos (edad del usuario,
					edad de los remitentes, nombres y apellidos completos y dirección de correo electrónico) en la
					página web para la confección y envío de los mensajes.
				</Text>
				<Text style={styles.subtitle}>Links</Text>
				<Text style={styles.text}>
					Este Sitio puede incluir conexiones a otros sitios web operados por otras compañías de Quilmes y/o
					operados por terceros. Estas conexiones son provistas para su comodidad y como una ruta de acceso
					adicional para las informaciones contenidas en los mismos. No hemos revisado toda la información
					contenida en otros sitios, la que asimismo varía permanentemente y no somos responsables por el
					contenido de otros sitios ni por los productos o servicios que pudieran ser ofrecidos a través de
					otros sitios. Los sitios de terceros pueden contener información con la cual Quilmes concuerda o no.
					Diferentes términos y condiciones pueden resultar aplicables al uso por vuestra parte de cualquiera
					de dichos sitios conectados. Por favor tenga en consideración que los términos y condiciones de uso
					de otros sitios son sustancialmente diferentes de estos términos y condiciones.
				</Text>
				<Text style={styles.subtitle}>Precisión, integridad y actualidad de la Información en este Sitio.</Text>
				<Text style={styles.text}>
					No somos responsables si las informaciones que estuvieran disponibles en este Sitio no fueran
					precisas, completas o actualizadas. El material en este Sitio es provisto solamente para información
					general y/o participación en la promoción que a su vez tienen sus propias bases y condiciones y no
					debe ser tomado como base o usado como la única base para tomar decisiones sin antes consultar
					fuentes de información primaria más precisas, completas y/o actualizadas. Cualquier confianza
					depositada en el material de este Sitio será a su propio riesgo. Este Sitio puede contener cierta
					información histórica. Las informaciones históricas no son necesariamente actualizadas y son
					provistas únicamente para su referencia. Hacemos reserva del derecho de modificar el contenido de
					este Sitio en cualquier ocasión. Ud. acuerda que es su responsabilidad monitorear alteraciones o
					modificaciones en este Sitio.
				</Text>
				<Text style={styles.subtitle}>Uso de Material de este Sitio.</Text>
				<Text style={styles.text}>
					Este Sitio (incluyendo todo su contenido) es propiedad de Cervecería y Maltería Quilmes S.A.I.C.A. y
					G. y está protegido por leyes de derecho de autor, de marcas y otras leyes Argentinas y de otros
					países. Excepto cuando fuera expresamente dispuesto de otro modo, autorizamos a Ud. a consultar este
					Sitio y a imprimir y descargar copias del material del Sitio solamente para su uso personal, no
					comercial, ello en la medida en que Ud. no elimine o remueva cualquier notificación o información de
					derechos de autor o propiedad intelectual que aparecieran en el material que Ud. imprimiera o
					descargara. Ud. acuerda que salvo lo expuesto precedentemente, no copiará, mostrará o transmitirá
					cualquier material del Sitio, de cualquier manera y/o por cualquier medio. Ud. también acuerda no
					modificar, vender, transmitir o distribuir cualquier material del Sitio, de cualquier manera o en
					cualquier medio, incluyendo la carga del material o de otro modo poner el material disponible en
					línea.
				</Text>
				<Text style={styles.subtitle}>Marcas</Text>
				<Text style={styles.text}>
					Este sitio incluye y presenta logos, logotipos y otras marcas comerciales y marcas de servicio que
					son propiedad de, o son licenciadas a Cervecería y Maltería Quilmes S.A.I.C.A. y G. El sitio también
					puede incluir marcas comerciales o marcas de servicio de terceros. Todas esas marcas comerciales son
					propiedad de sus respectivos titulares y Ud. acuerda no usar o mostrar las mismas de cualquier forma
					sin la autorización previa por escrito del propietario de la marca comercial en cuestión.
				</Text>
				<Text style={styles.subtitle}>Contenido de la información del visitante.</Text>
				<Text style={styles.text}>
					Usted comprende y acepta que toda la información, datos, textos, fotografías, gráficos, mensajes u
					otros materiales ("Contenido"), sea que se fijen públicamente o se transmitan privadamente, son
					únicamente responsabilidad de la persona que originó dicho Contenido. Esto significa que usted (y no
					Quilmes) es enteramente responsable por todo el Contenido que usted cargue, publique, envíe por
					correo electrónico, transmita o de cualquier forma ponga a disposición a través del Sitio. Nosotros
					no asumimos responsabilidad por el Contenido publicado por Ud. a través del Sitio y, por tal motivo,
					no garantizamos su exactitud, integridad o calidad. Usted comprende y acepta que por el uso del
					Sitio puede estar expuesto a Contenido que puede ser ofensivo, indecente o cuestionable. Bajo
					ninguna circunstancia Quilmes será responsable en cualquier forma por cualquier Contenido,
					incluyendo, pero sin limitarse a cualquier error u omisión en cualquier Contenido, o por cualquier
					pérdida o daño de cualquier tipo ocasionado como resultado del uso de cualquier Contenido publicado,
					enviado a través de correo electrónico, transmitido o puesto a disposición a través del Sitio.
					Nosotros nos reservamos el derecho de supervisar toda la información, datos, textos, fotografías,
					gráficos, mensajes u otros materiales que los visitantes y/o usuarios fijen públicamente o
					transmitan privadamente a través del Site y a eliminar el Contenido y/o a cualquier Visitante que no
					respete los términos y condiciones establecidos en el presente. Cuando Ud. utiliza cualquier de los
					servicios de este Site voluntariamente nos autoriza a supervisar y/o eliminar el contenido por Ud.
					creados y/o incorporados al Site o que se pretenda trasmitir a tercero a través del Site. Si Ud. no
					esta de acuerdo o satisfecho con cualquiera de los términos y condiciones del presente reglamento no
					ingrese, ni participe en el Site, ni utilice los servicio del Site. Asimismo, nosotros nos
					reservamos el derecho de eliminar cualquier mensaje que: · Sea ilegal, peligroso, amenazante,
					abusivo, hostigador, tortuoso, difamatorio, vulgar, obsceno, calumnioso, ofensivo, invasivo de la
					privacidad de terceros, odioso, discriminatorio, o que de cualquier forma viole derechos de terceros
					y/o disposiciones legales aplicables; · Sea contrario a las leyes, reglamentos o a la moral y las
					buenas costumbres; · Pueda constituir o fomentar una conducta que se considere un delito penal, que
					dé lugar a responsabilidad civil; · O que promueva el consumo excesivo o irresponsable de alcohol.
					Usted se obliga a no utilizar el Sitio para lo siguiente: · Dañar a menores de edad en cualquier
					forma; · Hacerse pasar por alguna persona o entidad, incluyendo, pero sin limitarse, a un
					funcionario o empleado de Quilmes o hacer declaraciones falsas, o de cualquier otra forma falsificar
					su asociación a alguna persona o entidad; · Falsificar encabezados o de cualquier otra forma
					manipular identificadores para desviar el origen de algún Contenido transmitido por medio del Sitio;
					· Cargar ("upload"), publicar, enviar por correo electrónico, transmitir, o de cualquier otra forma
					poner a disposición algún Contenido del cual no tiene el derecho de transmitir por ley o bajo
					relación contractual o fiduciaria (tal como información interna, de propiedad y confidencial
					adquirida o entregada como parte de las relaciones de empleo o bajo contratos de confidencialidad);
					· Cargar, publicar, enviar por correo electrónico, transmitir, o de cualquier otra forma poner a
					disposición algún Contenido que viole alguna patente, marca, secreto comercial, derecho de autor o
					de imagen o cualquier derecho de propiedad ("Derechos") de algún tercero; · Cargar, publicar, enviar
					por correo electrónico, transmitir o de cualquier otra forma poner a disposición cualquier anuncio
					no solicitado o no autorizado, materiales promocionales, correo no solicitado ("junk mail", "spam"),
					cartas en cadena ("chain letters"), esquemas de pirámides ("pyramid schemes") o cualquier otra forma
					de solicitud, con excepción de aquellas áreas (tales como cuartos de compras, "shopping rooms") que
					están destinadas para tal propósito; · Cargar ("upload"), publicar, enviar por correo electrónico,
					transmitir, o de cualquier otra forma poner a disposición algún material que contenga virus de
					software, o cualquier otro código de computadora, archivos o programas diseñados para interrumpir,
					destruir o limitar el funcionamiento de algún software, hardware o equipo de telecomunicaciones; ·
					Interrumpir el flujo normal de diálogo, hacer que una pantalla se mueva ("scroll") más rápido de lo
					que otros usuarios pueden manejar, o de cualquier otra forma actuar de manera que afecte
					negativamente la habilidad de otros usuarios para vincularse en intercambios de tiempo reales; ·
					Interferir o interrumpir el Sitio, servidores, o redes conectadas al Sitio, o desobedecer cualquier
					requisito, procedimiento, política o regulación de redes conectadas al Sitio; · Violar con o sin
					intención alguna ley local, estatal, nacional o internacional aplicable y cualquier otra regulación;
					· Proveer soporte o material (u ocultar o disimular la naturaleza, ubicación, fuente, propiedad de
					soporte o material) a cualquier organización designada por el gobierno Argentino o el de los Estados
					Unidos como una organización terrorista extranjera de conformidad con la Sección 219 de la
					Immigration and Nationality Act de ese país. · Acechar o de cualquier otra forma hostigar a un
					tercero; o · Colectar o guardar datos personales acerca de otros usuarios. · Publicar datos
					personales sin el consentimiento de la persona involucrada. · Cargar ("upload"), publicar, enviar
					por correo electrónico, transmitir, o de cualquier otra forma poner a disposición algún material
					destinado a menores de 18 años. Quilmes en ningún caso será responsable por la destrucción o
					eliminación de la información que los Visitantes incluyan en sus mensajes.
				</Text>
				<Text style={styles.title}>POLÍTICAS DE PRIVACIDAD</Text>
				<Text style={styles.subtitle}>Protección de Datos Personales.</Text>
				<Text style={styles.text}>
					El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en
					forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo a
					efecto conforme lo establecido en el Artículo 14, Inciso 3 de la Ley Nº 25.326. La Agencia de Acceso
					a la Información Pública, en su carácter de Órgano de Control de la Ley 25.326, tiene la atribución
					de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por
					incumplimiento de las normas vigentes en materia de protección de datos personales.
				</Text>

				<Text style={styles.subtitle}>Descargo de responsabilidad</Text>
				<Text style={styles.text}>
					En la mayor medida permitida conforme a la ley aplicable, Quilmes niega toda garantía, expresa o
					implícita, incluyendo, pero sin carácter limitativo, todas las garantías de comercialización o de
					adecuación para un fin específico, de no violación, de producto libre de virus informáticos, y toda
					garantía que surja en el curso de la operación o durante el cumplimiento de la misma. Quilmes no
					declara ni garantiza que las funciones contempladas en el Sitio serán ininterrumpidas o que estarán
					libres de errores, que los defectos serán corregidos o que este Sitio o el servidor que hace que el
					Sitio esté disponible están libres de virus u otros elementos dañinos. Quilmes no efectúa ninguna
					declaración o garantía respecto del uso del material en este Sitio en cuanto a si el material es
					completo, correcto, exacto, adecuado, útil, oportuno, confiable.
				</Text>
				<Text style={styles.subtitle}>Limitación de responsabilidad</Text>
				<Text style={styles.text}>
					Con el mayor alcance permitido por la legislación aplicable, Ud. entiende y acuerda que Quilmes, ni
					cualquiera de sus respectivas subsidiarias o afiliadas o terceros proveedores de contenido serán
					responsables por cualquier daño directo, indirecto, incidental, especial, mediato, inmediato,
					consecuente, punitivo o cualquier otro, relativos a o resultantes de su uso o su incapacidad de usar
					este Sitio o cualquier otro sitio que Ud. accediera a través de una conexión a partir de este Sitio
					o de cualquier medida que tomemos o dejemos de tomar como resultado de mensajes de correo
					electrónico que Ud. nos envíe. Estos incluyen daños por errores, omisiones, interrupciones,
					defectos, atrasos, virus informáticos, su lucro cesante, pérdida de datos, acceso no autorizado y
					alteración de sus transmisiones y datos, y otras pérdidas tangibles e intangibles. Esta limitación
					resulta aplicable independientemente de si los daños y perjuicios fueran reclamados en virtud de un
					contrato, como resultado de negligencia o de otro modo, e igualmente si nosotros o nuestros
					representantes hubieren sido negligentes o hubieren sido informados sobre la posibilidad de tales
					daños.
				</Text>
				<Text style={styles.subtitle}>Su responsabilidad</Text>
				<Text style={styles.text}>
					Si Ud. causara una interrupción técnica de este Sitio o de los sistemas que transmiten el Sitio a
					Ud. y a otros, Ud. asume las responsabilidad por todas y cualquier responsabilidades, costos y
					gastos (incluyendo honorarios de abogados) que surgieran como consecuencia de dicha interrupción.
				</Text>
				<Text style={styles.subtitle}>Jurisdicción</Text>
				<Text style={styles.text}>
					Cervecería y Maltería Quilmes S.A.I.C.A y G. tiene su domicilio legal en la calle Charcas 5160 de la
					Ciudad Autónoma de Buenos Aires y este Sitio es operado en Argentina. Las leyes de la República
					Argentina regulan estos términos y condiciones y el uso de este Sitio por Ud., y Ud. acepta en forma
					irrevocable la jurisdicción de los Tribunales Ordinarios con asiento en C.A.B.A., República
					Argentina, en relación con cualquier acción para la ejecución de estos términos y condiciones.
					Reconocemos que es posible que Ud. obtenga acceso a este sitio desde cualquier lugar en el mundo,
					pero no tenemos capacidad práctica para impedir tal acceso. Este sitio fue proyectado para cumplir
					con las leyes de la República Argentina. Si cualquier material en este Sitio, o el uso de este Sitio
					por Ud. fuera contrario a las leyes del lugar en el cual Ud. estuviera al acceder al mismo, el Sitio
					no está destinado a Ud. y le solicitamos que no utilice el Sitio. Ud. es responsable por informarse
					respecto a las leyes de su jurisdicción y por el cumplimiento de las mismas.
				</Text>
				<Text style={styles.subtitle}>Terminación</Text>
				<Text style={styles.text}>
					Usted acepta que Quilmes puede, bajo ciertas circunstancias y sin necesidad de notificación previa,
					cancelar y terminar inmediatamente su posibilidad de acceso al Sitio. Entre las causales de
					terminación se incluyen, sin limitarse: (a) incumplimientos o violaciones a estos términos y
					condiciones; (b) requerimientos de autoridades legales o gubernamentales; (c) su solicitud
					(terminación de cuenta por requerimiento del usuario); (d) terminación o modificaciones a alguna
					promoción publicada en el Sitio (o cualquier parte del mismo); (e) problemas técnicos o de seguridad
					inesperados; (f) períodos de inactividad prolongados. Asimismo, usted acepta que todas las causales
					de terminación con causa podrán ser invocadas por nosotros a nuestra sola discreción y que no
					seremos responsables frente a Usted ni frente a ningún tercero por cualquier terminación de su
					cuenta, y las direcciones de correo electrónico asociada o acceso al Sitio.
				</Text>
				<Text style={styles.subtitle}>Modificaciones a estos Términos</Text>
				<Text style={styles.text}>
					Hacemos reserva del derecho, a nuestro exclusivo y completo criterio, de alterar estos términos y
					condiciones en cualquier ocasión, mediante la muestra en el Sitio de los nuevos términos y
					condiciones. Es su responsabilidad verificar periódicamente cualquier alteración que pudiéramos
					realizar sobre estos términos y condiciones. Su uso continuado de este Sitio luego de la
					presentación de nuevos términos y condiciones implicará y significará su aceptación a las
					modificaciones introducidas. Gracias por visitar nuestro Sitio.
				</Text>
			</ScrollView>
		</View>
	)
}
