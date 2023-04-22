/* import { useState } from "react";
import foto1 from "./../assets/img1.png"
import foto2 from "./../assets/img2.png"

const fotos =[
    {id:1, src:foto1, matched:false},
    {id:1, src:foto2, matched:false},
];

function Card ({photo, onClick}){
    return(
        <div className="card" onClick={()=> onClick(photo.id)}>
            <img src={photo.src} alt="" />
        </div>
        
    )
}
function Memory(){
    const [cards,setCards]=useState(fotos);
    const [matchedCards, setMatchedCards]=useState([]);
    function handleCardClick(id){
        const clickedCard = cards.find((card)=>card.id===id);
        if(clickedCard.matched)return;
        if (matchedCards.length === 2){
            setMatchedCards([]);
        }

        clickedCard.selected = true;

        setMatchedCards([... matchedCards, clickedCard]);
        setCards(
            cards.map((card)=>
            card.id == id ? {...card,selected:true} : card
            )
        );

    }

    return(
        <div className="game-board">
            {cards.map((card)=>(
                <Card 
                key={card.id}
                photo={card}
                onClick={handleCardClick}
                />
            ))}
        </div>
    )
}

export default Memory; */

import { useState, useEffect } from "react";
import './../styles/Memory.css'
import Modal from "react-modal"
import imag1 from "./../assets/img1.png"
import imag6 from "./../assets/img6.jpg"
import imag2 from "./../assets/img2.png"
import imag4 from "./../assets/img4.png"

const cards = [
    { id: 1, img: imag1,flipped:false },
    { id: 2, img: imag2,flipped:false },
    { id: 4, img: imag4,flipped:false},
    { id: 6, img: imag6,flipped:false },
    // Agrega las imágenes que quieras utilizar aquí
  ];

  function Memory (){
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [correctPairs, setCorrectPairs] = useState([]);
    const [showModal, setShowModal] =useState (false);
    
    const handleClick = (card) => {
        if (flippedCards.length < 2 && !matchedCards.includes(card)) {
          setFlippedCards([...flippedCards, card]);
        }
      };
      useEffect(() => {
        if (flippedCards.length === 2) {
          setTimeout(() => {
            const [card1, card2] = flippedCards;
            if (card1.id === 1 && card2.id === 6 || card1.id === 6 && card2.id === 1 || card1.id === 2 && card2.id === 4 || card1.id === 4 && card2.id === 2) {
                setCorrectPairs([...correctPairs, [card1, card2]]);
                setShowModal(true);
            }else if (card1.img === card2.img) {
                setMatchedCards([...matchedCards, card1, card2]);
              }
              setFlippedCards([]);
            }, 1000);
        }
      }, [correctPairs, flippedCards, matchedCards]);

      return(
        <div className="memory-game">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card ${flippedCards.includes(card) ? 'flipped' : ''} ${matchedCards.includes(card) ? 'matched' : ''}`}
          onClick={() => handleClick(card)}
        >
            <div className="card-inner">
                <div className="card-front">
                    <img src="https://i.pinimg.com/originals/f5/2e/a8/f52ea8f642bf26319f1524c8e9f995a2.jpg" alt="HS" />
                </div>
                <div className="card-back">
                    <img src={card.img} alt="" />
                </div>
            </div>
        </div>
      ))}
      <Modal classname="Modal" isOpen={showModal}>
        <div>
          <h2>¡Muy Bien princesa!</h2>
          <img className="imgModal" src="https://64.media.tumblr.com/43e434ebf5b5660a9aac5dcf307b5c04/b33dc25c2a89dc7b-9d/s540x810/82aa57b10862111b9bd5b17885c66a8111087151.gifv" alt="" />
          <button className="buttonModal" onClick={() => setShowModal(false)}>Cerrar</button>
        </div>
      </Modal>
    </div>
      );

    }
export default Memory