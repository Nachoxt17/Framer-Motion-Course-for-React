import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**+-(9)-Modal Animation:_ A continuación vamos a Animar un Componente Traslúcido que va a Funcionar como un Fondo Oscuro y una Ventana con la Opción de Repetir
 * el Proceso al Terminar de "Ordenar la Pizza" al Finalizar el Recorrido de la Aplicación en la Página del Componente "Order.jsx" usando los React.js Hooks de
 * useState en App.jsx, Modal.jsx y Order.jsx y useEffect en Order.jsx.*/

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modal = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: {
        y: '200px',
        opacity: 1,
        transition: { delay: 0.5 },
    },
};

const Modal = ({ showModal }) => {
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    className='backdrop'
                    variants={backdrop}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'>
                    <motion.div className='modal' variants={modal}>
                        <p>Want to make another Pizza?</p>
                        <Link to='/'>
                            <button>Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
