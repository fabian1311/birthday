import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/gift.css';

function Gift() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" }
  };

  return (
    <div className='gift'>
       <motion.div
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='title'
      >
        Presioname!
      </motion.div>
      <motion.div
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='card'
      >
        <div className={isOpen ? 'show' : ''}>
          <p>Aquí ira el contenido de la carta</p>
          <p>
            <p>Mi querida y amada [nombre de tu novia],</p>
            <p>Me siento tan afortunado de tenerte en mi vida. Cada día que pasa me doy cuenta de cuánto te amo, cuánto me haces feliz y cuánto significas para mí. Aunque nos separe la distancia, nunca me he sentido tan cerca de ti.</p>
            <p>Han pasado ya doce meses desde que comenzamos esta aventura juntos y cada día siento que nuestro amor se fortalece más y más. La distancia no ha sido fácil, pero ha sido una oportunidad para que nuestro amor se haga más profundo. No importa cuánto tiempo estemos separados, siempre estaremos conectados por ese hilo invisible que une nuestros corazones.</p>
            <p>Recuerdo como si fuera ayer cuando te conocí. Tu belleza, tu inteligencia, tu sonrisa y tu corazón generoso me enamoraron de ti en un instante. Y ahora, después de un año, todavía me enamoro de ti cada día. Cada vez que pienso en ti, mi corazón se acelera y me lleno de una emoción indescriptible.</p>
            <p>A través de los altibajos, los momentos felices y tristes, siempre he sentido tu amor incondicional. Me has apoyado en todo momento, me has dado consejos sabios y has sido mi mejor amiga. No hay palabras para describir lo agradecido que estoy por tenerte en mi vida.</p>
            <p>Te extraño mucho, mi amor. Quiero abrazarte, besarte y decirte al oído cuánto te amo. Pero mientras tanto, seguiré escribiéndote cartas como esta, esperando el día en que podamos estar juntos de nuevo. Cada día que pasa me siento más emocionado de nuestro futuro juntos, de las aventuras que nos esperan y de los momentos que compartiremos.</p>
            <p>En resumen, mi amada, te amo con todo mi ser. Eres mi mejor amiga, mi confidente, mi amor verdadero. Espero que puedas sentir el amor que siento por ti y que esta carta te haga sentir tan especial como lo eres para mí.</p>
            <p>Con todo mi amor,</p>
            <p>[tu nombre]</p>
          </p>
        </div>
      </motion.div>
     
    </div>
  );
}

export default Gift;