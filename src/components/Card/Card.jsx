import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from "react-redux";

function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;

  const [isFav, setFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      props.removeFav(id);
    } else {
      props.addFav(id);
    }
    setFav(!isFav);
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [props.myFavorites, id]);

  return (
    <div className={styles.container}>
      {isFav ? (
        <button className={styles.favoriteButton} onClick={handleFavorite}>
          ♥️
        </button>
      ) : (
        <button className={styles.unFavoriteButton} onClick={handleFavorite}>
          🤍
        </button>
      )}
      <div className={styles.buttonContainer}>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.dataContainer}>
        <h2>{name}</h2>
        <h4>{status}</h4>
        <h4>{species}</h4>
        <h4>{gender}</h4>
        <h4>{origin}</h4>
      </div>
      <Link to={`/detail/${id}`}>
        <img className={styles.image} src={image} alt={name} />
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (id) => dispatch(addFav(id)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
