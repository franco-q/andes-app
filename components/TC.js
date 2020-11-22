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
