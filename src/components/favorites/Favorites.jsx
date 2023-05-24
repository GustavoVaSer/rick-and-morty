import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card.jsx';
import styles from './Favorites.module.css'
import { filterCards, orderCards } from '../../Redux/actions.js';

function Favorites({ myFavorites, onClose}) {

   const dispatch = useDispatch();
   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
   }
   const handleFilter = (event) => {
      dispatch(filterCards(event.target.value));
   }

   return (
      <div>
         <div>
            <select name="order" onChange={handleOrder}>
               <option value="A">Ascendent</option>
               <option value="D">Descendent</option>
            </select>
            <select name="filter" onChange={handleFilter}>
               <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
         </div>
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