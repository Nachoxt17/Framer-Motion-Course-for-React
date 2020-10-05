import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**+-(8)-Animate Presence:_ A través del Hook useState de React.js podemos Mostrar u Ocultar un Elemento-Etiqueta, Y envolviéndolo con el Elemento-Etiqueta
 * "AnimatePresence" a la cual tenemos que Importar junto a "motion" desde 'framer-motion' podemos Animar la Ocultación usando la Props "exit={{***}}", como se
 * Muestra a Continuación:_.
 * +-Para Seguir Aprendiendo ir al Archivo "Modal.jsx".*/

const Order = ({ pizza, setShowModal }) => {
    const [showTitle, setShowTitle] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true);
        }, 5000);
    }, [setShowModal]);

    setTimeout(() => {
        setShowTitle(false);
    }, 4000); /**+-Esta Función se va a Ejecutar después de 4 Segundos(4 Mil Milisegundos), lo que significa que el Título SOLO se va a mostrar hasta 4 Segundos
    después de que Cargue la Página, y luego con "AnimatePresence" Animamos su Ocultación yéndose para arriba con "exit={{ y: -1000 }}".*/

    return (
        <div className='container order'>
            <AnimatePresence>
                {showTitle && (
                    <motion.h2 exit={{ y: -1000 }}>
                        Thank you for your order :)
                    </motion.h2>
                )}
            </AnimatePresence>
            <p>You ordered a {pizza.base} pizza with:</p>
            {pizza.toppings.map((topping) => (
                <div key={topping}>{topping}</div>
            ))}
        </div>
    );
};

export default Order;
