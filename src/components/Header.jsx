import React from 'react';
import { motion } from 'framer-motion';

/**+-(2)-Initial State:_ El Estado Inicial "initial={{***}}" sirve para especificar un Estado Inicial del Elemento-Etiqueta a Animar Diferente al que le dan sus Styles
 * de CSS. Las Opciones de Animación que podemos establecer en esta Props son Iguales que en "animate={{***}}".
 * +-Como Ejemplo aquí abajo, determinamos que al Cargarse la Página el Título "Pizza Joint" no pueda verse en absoluto(opacity: 0) a que haga una Transición después de
 * la cual pueda verse completamente(opacity: 1).
 * +-Para seguir Aprendiendo ir al Archivo "Base.jsx".*/

/**+-(6)-Key Frames:_ Las Key Frames sirven para Alterar un Valor de una Animación varias veces a Nuestro Gusto en vez de que se cargue con 1 solo valor estático.
 * Por ejemplo, si quisiéramos que al Cargarse la Página quisiéramos que un Elemento-Etiqueta se Mueva Para Arriba-Abajo o Izquierda-Derecha varias veces o que cambie
 * de Tamaño varias veces. Esto lo hacemos en vez de Poniendo un solo Valor a una Animación(Ej:_ "x: 30") le ponemos un Array con los Distintos Valores en Orden que
 * queremos que varíe(Ej:_ "x: [30, -30, 20, -20, 10, -10, 0]").
 * +-A Continuación Ejemplificaremos esto Moviendo de Izquierda a Derecha y al Revés el H1 con el Texto "Pizza Joint" varias veces:_
 *
 * +-Para seguir Aprendiendo ir al Archivo "Home.jsx".*/

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <svg
                    className='pizza-svg'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 100 100'>
                    <path
                        fill='none'
                        d='M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z'
                    />
                    <path
                        fill='none'
                        d='M50 30 L50 -10 C50 -10 90 -10 90 30 Z'
                    />
                </svg>
            </div>
            <motion.div
                className='title'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <motion.h1 animate={{ x: [30, -30, 20, -20, 10, -10, 0] }}>
                    Pizza Joint
                </motion.h1>
            </motion.div>
        </header>
    );
};

export default Header;
