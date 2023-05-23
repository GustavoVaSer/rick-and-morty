import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

const Favorites = ({ myFavorites }) => {
  return (
    <div>
      {myFavorites.map((fav) => (
        <Card
          key={fav.id}
          id={fav.id}
          name={fav.name}
          status={fav.status}
          species={fav.species}
          gender={fav.gender}
          origin={fav.origin ? fav.origin.name : ""} // Accede a fav.origin.name y proporciona un valor predeterminado
          image={fav.image}
          onClose={fav.onClose}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
