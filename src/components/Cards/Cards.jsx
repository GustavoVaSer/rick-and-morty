import Card from '../Card/Card.jsx';
import React from 'react';
import data from '../../data.js';

export default function Cards({ characters, onClose, numberOfCards }) {
   return (
      <div>
         <h4 className={StyleSheet.title}> {numberOfCards} of 826 Characters</h4>
         <div style={{ display: "flex", justifyContent: "space-between" }}>
            {characters.map(character => (
               <Card
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin?.name}
                  image={character.image}
                  onClose={onClose}
               />
            ))}
         </div>
      </div>
   );
};

