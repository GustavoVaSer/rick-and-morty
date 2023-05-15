import Card from '../Card/Card.jsx';

export default function Cards({characters}) {
   // const { characters } = props;
   return (
      <div style={{display:"flex", justifyContent: "space-between"}}>
         {characters.map(character => (
            <Card
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin?.name}
               image={character.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            /> 
         ))}
      </div>
   );
};
