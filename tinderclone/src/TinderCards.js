import react, { useState } from 'react';
import TinderCard from "react-tinder-card"
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: 'https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg',
    },
    {
      name: 'Jeff Bezos',
      url: 'https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2021/07/jeff-bezos-el-amo-del-mundo.jpg',
    },
    {
      name: 'Jeff Bezos',
      url: 'https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2021/07/jeff-bezos-el-amo-del-mundo.jpg',
    },
  ]);
   const swiped = (direction, nameToDelete) => {
     console.log("remov" + nameToDelete);
    //  setLastDirection(direction);
   };
   const outOfFrame = (name) => {
    console.log(name + "left the screen");
   }
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={()=>outOfFrame(person.name)}>
            
          </TinderCard>
        ))}
      </div>
      
    </div>
  );
}
export default TinderCards;
