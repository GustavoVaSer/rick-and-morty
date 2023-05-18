import Card from '../Card/Card.jsx';

export default function Cards(props) {

   const {characters} = props;
   // const cardsContainer = {
   //    display: "flex",
   //    flexwrap: "wrap",
   //    justifyContent: "space-evenly"
   // }
   return (
      <div style={{display:"flex", justifyContent: "space-between"}}>
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
               onClose={() => props.onClose(character.id)}
            /> 
         ))}
      </div>
   );
};
