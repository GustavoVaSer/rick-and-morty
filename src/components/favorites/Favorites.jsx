import { connect } from 'react-redux';
import Card from '../Card/Card.jsx';
import styles from './Favorites.module.css'

function Favorites({ myFavorites, onClose}) {
   return (
      <div>
         <div style={{ display: "flex", justifyContent: "space-between" }}>
            {myFavorites.map(character => (
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

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
};

export default connect(mapStateToProps, null) (Favorites)