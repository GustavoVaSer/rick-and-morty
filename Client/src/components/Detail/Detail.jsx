import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch(error => {
        console.log(error);
        window.alert("Ocurrió un error al obtener los datos del personaje");
      });
  }, [id]);

  return (
    <div>
      <h1>DETAIL</h1>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <h3>Origin: {character.origin?.name}</h3>
      <h3>Species: {character.species}</h3>
      <h3>Gender: {character.gender}</h3>
    </div>
  );
}
