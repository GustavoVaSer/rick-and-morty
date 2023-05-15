import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {characters.map(character => (
            <Card
               key={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
            /> 
         ))}
      </div>
   );
};
