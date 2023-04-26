import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/gift.css';
import { useNavigate } from 'react-router-dom';

function Gift() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" }
  };

  return (
      <div className='gift-container'>
        <div className='gift'>
          <motion.div
            animate={isOpen ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='cardGift'
            style={{overflow:"hidden"}}
          >
            <div className={isOpen ? 'show' : ''}>
            
              <p>
                <p>Mi niña preciosa,</p>
                <p>Me siento tan afortunado de tenerte en mi vida. Cada día que pasa me doy cuenta de cuánto te amo, cuánto me haces feliz y cuánto significas para mí. Aunque nos separe la distancia, nunca me he sentido tan cerca de ti.</p>
                <p>Han pasado ya doce meses desde que comenzamos esta aventura juntos y cada día siento que nuestro amor se fortalece más y más. Ambos sabemos que sobrellevar la distancia no es lo más fácil, pero ha sido una oportunidad para que nuestro amor se haga más profundo. No importa cuánto tiempo estemos separados, siempre estaremos conectados por ese hilo invisible que hace que nos mantenga unidos.</p>
                <p>Recuerdo que al conocernos decía cualquier tontería para llamar tu atención, adulándote de lo bonita que estabas, tu inteligencia, tu sonrisa y tu corazón todo bonito me enamoraron de ti más rápido de lo que pude imaginar. Y ahora, después de un año, todavía me enamoro de ti cada día. Creo que hacerte reir ahora es como una obligación ya que me hace emocionar como la primera vez.</p>
                <p>A través de los altibajos, los momentos felices y tristes, siempre he sentido tu amor incondicional. Me has apoyado en todo momento, me has dado consejos sabios y has sido mi mejor amiga. No hay palabras para describir lo agradecido que estoy por tenerte en mi vida.</p>
                <p>Te extraño mucho, mi amor. Quiero abrazarte, besarte y decirte al oído cuánto te amo. Pero mientras tanto, seguiré escribiéndote cartas como esta, esperando el día en que podamos estar juntos de nuevo. Cada día que pasa me siento más emocionado de nuestro futuro juntos, de las aventuras que nos esperan y de los momentos que compartiremos.</p>
                <p>En resumen, mi amada, te amo con todo mi ser. Eres mi mejor amiga, mi confidente, mi amor verdadero. Espero que puedas sentir el amor que siento por ti y que esta carta te haga sentir tan especial como lo eres para mí.</p>
                <p>Con todo mi amor,</p>
                <p><em>Un año se ha cumplido desde que empezamos esta aventura juntos.</em></p> 
                <p>No puedo creer lo rápido que ha pasado el tiempo y cómo hemos llegado hasta aquí. Pero lo que sí sé es que cada día que pasa, me enamoro más de ti.</p>
                <p>Eres la persona más increíble que he conocido en mi vida. Desde el primer momento en que hablamos, supe que eras alguien muy especial. Tu inteligencia, tu sentido del humor, tu pasión por la vida y tus valores son solo algunas de las cosas que me hacen sentir extremadamente afortunado de tenerte como mi novia.</p> 
                <p>Desde que empezamos esta relación a distancia, he aprendido mucho sobre el amor y sobre mí mismo. La distancia no ha sido fácil, pero cada vez que pienso en ti, mi corazón se llena de amor y felicidad. Me encanta la forma en que me haces sentir, la forma en que me haces reír y la forma en que me apoyas en todo.</p> 
                <p>Quiero que sepas que te amo más que nada en este mundo. Cada día que pasa, mi amor por ti se hace más fuerte y más profundo. Me encanta la forma en que nos complementamos el uno al otro, cómo me haces sentir querido y cómo me inspiras a ser una mejor persona.</p> 
                <p>Espero que hoy sientas todo el amor que tengo por ti y que este año juntos sea solo el comienzo de una vida llena de aventuras y felicidad. No importa cuán lejos estemos el uno del otro, siempre estarás en mi corazón y en mis pensamientos.</p> 
                <h2>Feliz primer aniversario, mi amor.</h2> 
                <p>Te amo más allá de las palabras.</p> 
                <p>Con todo mi corazón,</p> 
                <p>(Inserta tu nombre aquí)</p>
                <p>[tu nombre]</p>
              </p>
              {isOpen && (
                <div 
                className='showGift'
                id='ButtonBackGift'
                onClick={()=> navigate('/home')}
                >Volver</div>
              )}
            </div>
          </motion.div>
          {!isOpen && (
            <motion.div
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='title'
              style={{overflow:"hidden"}}
            >
              Presioname!
            </motion.div>
           
          )}
          <img className={`Giftimg ${isOpen ? 'hide' : ''}`} src="https://i.pinimg.com/originals/de/6a/94/de6a94e5698fc1dfc6d348b5f63bdbe1.jpg" alt="" />
        </div>
      </div>
  );
}

export default Gift;