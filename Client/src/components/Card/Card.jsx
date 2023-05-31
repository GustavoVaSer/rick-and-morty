import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from "react-redux";

function Card(props) {

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  const handleFavorite = () => {
      if (isFav) {
        setIsFav(false);
        props.removeFav(props.id)
      } else {
        setIsFav(true);
        props.addFav(props);
      }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
     
        <button onClick={() => props.onClose(props.id)}>X</button> 
      </div>
      {isFav ? (
        <button className={styles.favoriteButton} onClick={handleFavorite}> 🤍 </button>
      ) : (
        <button className={styles.unFavoriteButton} onClick={handleFavorite}> 🤍 </button>
      )} 
      <div className={styles.dataContainer}>
        <h2>{props.name}</h2>
        <h4>ID: {props.id}</h4> 
        <h4>Status: {props.status}</h4>
        <h4>Species: {props.species}</h4>
        <h4>Gender: {props.gender}</h4>
        <h4>Origin: {props.origin}</h4>
      </div>
      <Link to={`/detail/${props.id}`}>
        <img className={styles.image} src={props.image} alt={props.name} />
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);



  

 






