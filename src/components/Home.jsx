import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**+-(1)-Para Poder Darle Animaciones a Cualquier elemento con Framer Motion, Primero debemos Instalarlo en Nuestro Proyecto con el Comando "npm i framer-motion",
 * después Importándolo al Acrchivo en el que estemos Trabajando con "import { motion } from 'framer-motion';" y finalmente escribiendole "motion." delante del Nombre
 * del Elemento-Etiqueta que queramos Animar, Por Ejemplo:_ <motion.h2></motion.h2> si queremos Animar un H2.
 * +-Las Animaciones que le Aádamos a ese Elemento-Etiqueta (de la manera que se Ejemplificará a Continuación) harán que al Cargarse la Página, el Elemento-Etiqueta
 * mute en una Transición desde sus valores de Styles de CSS Originales(fontSize, Color, x, y, scale, etc) a los que nosotros le Pongamos con Framer-Motion a través de
 * la Props "animate={{***}}" donde en "***" irían las Animaciones y Styles de Framer-Motion. Nota:_ Los Valores Numéricos en Medidas Específicas (vw, vh, etc) deben
 * expresarse entre Comillas (Ej:_ "20vw") o si nó se pueden Expresar los Números solos sin Comillas y Framer-Motion Por Defecto los Tomará como PXs.
 * +-Para Seguir Aprendiendo ir al Archivo "Header.jsx".*/

/**+-(3)-While Hover:_ Mientras se está el Puntero del Mouse Encima(whileHover={{***}}) funiona igual que las Propiedades Anteriores PERO sirve para Cuando el Puntero
 * del Mouse está encima del Elemento-Etiqueta a Animar. En el Siguiente Ejemplo se le dá al Botón "Create Your Pizza" una Sombra del Texto Personalizada y se le Agranda
 * el Tamaño por 2 cuando a este se le pone el Puntero Encima:_
 * +-Para Seguir Aprendiendo ir al Archivo "Base.jsx".*/

/**+-(7)-Repeating Animations:_Para Repetir Animaciones podemos usar un Valor de la Prop "Transition" que se llama "yoyo", a la Cual le asignamos el Número correspondiente
 * a las Veces que queremos que se repita la Animación, o "Infinity" si queremos que se repita Infinitamente.
 * +-Ejemplificaremos esto Aumentando y Disminuyendo Constantemente el Tamaño del Button "Create Your Pizza" mientras el Puntero del Mouse esté sobre el Botón:_.
 * +-Para Seguir Aprendiendo ir al Archivo "Order.jsx".*/

const Home = () => {
    return (
        <div className='home container'>
            <motion.h2
                animate={{
                    fontSize: '50px',
                    color: '#ff2994',
                    x: '0',
                    y: '-75px',
                    rotateZ: 360,
                }}>
                Welcome to Pizza Joint
            </motion.h2>
            <Link to='/base'>
                <motion.button
                    animate={{
                        scale: 1.3,
                        marginTop: 220,
                        opacity: 0.65,
                        rotateZ: -360,
                    }}
                    whileHover={{
                        scale: 2,
                        textShadow: '8px 8px 8px rgb(255,255,255)',
                        transition: {
                            yoyo: Infinity,
                        },
                    }}>
                    Create Your Pizza
                </motion.button>
            </Link>
        </div>
    );
};

export default Home;
