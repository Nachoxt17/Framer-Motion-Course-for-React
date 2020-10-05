import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**+-(3)-Transition:_ La Transition(Transición) funciona Igual que las Props Initial y Animate PERO se Encarga de Animar la Transición entre los 2 nombrados
 * anteriormente. Por Ejemplo, a continuación en la Transition del Ejemento-Etiqueta del Texto "Step 1: Choose Your Base" se Indica que la misma Trasición entre las
 * Animaciones de Initial y Animate Aparezca después de 1.75 Segundos de Cargada la Página y que dure 1 Segundo, además hay otras Propiedades que se pueden aprender en
 * (https://www.framer.com/api/motion/):_ .
 * +-Para seguir Aprendiendo ir al Archivo "Home.jsx".*/

/**+-(5)-Variants:_ Las Variants(Variantes) son una Forma de Seseccionar ciertas Animaciones que nos gustaría Repetir en uno o más Elementos-Etiqueta en vez de
 * escribir todas las Animaciones In-Line. Esto se hace Creando una Constante Objeto en la que Guardaremos cada Props de Animación y Sus Valores bajo el que queramos,
 * como si fuesen Clases de CSS, y luego en el Elemento-Etiqueta que queramos aplicar esas Clases le Agregamos la Props
 * "variants={*Nombre de la Const-Objeto con las Clases de Animaciones*}" y luego le Añadimos las Props de Animaciones de esta con esta Sintaxis:_
 *
 * " initial='*Clase con las Animaciones que quermos en Initial*' "
 *
 * +-A Continuación, aplicaremos Variants Sólo a la Lista Desordenada con las Opciones para Bases de Pizzas,
 * pero se puede Repetir con Cualquier otro Elemento-Etiqueta:_
 *
 * +-Para seguir Aprendiendo ir al Archivo "Header.jsx".*/

const baseOptionsVariants = {
    hidden: {
        opacity: 0,
        x: '100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
    },
    transition: { type: 'spring', delay: 0.5 },
};

const Base = ({ addBase, pizza }) => {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    return (
        <div className='base container'>
            <motion.h3
                initial={{ opacity: 0, y: -250 }}
                transition={{
                    delay: 1.75,
                    duration: 1,
                    type: 'spring',
                    stiffness: 500,
                }}
                animate={{ opacity: 1, y: -10 }}>
                Step 1: Choose Your Base
            </motion.h3>
            <motion.ul
                variants={baseOptionsVariants}
                initial='hidden'
                transition='transition'
                animate='visible'>
                {bases.map((base) => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <li key={base} onClick={() => addBase(base)}>
                            <span className={spanClass}>{base}</span>
                        </li>
                    );
                })}
            </motion.ul>

            {pizza.base && (
                <div className='next'>
                    <Link to='/toppings'>
                        <button>Next</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Base;
