import axios from "axios";
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";
const ENDPOINT = 'http://localhost:3001/rickandmorty/fav';

//ASYNC/AWAIT VERSION
export const addFav = (character) => {
   return async (dispatch) => {
      try {
        const { data } = await axios.post(ENDPOINT, character);
        return dispatch({
            type: 'ADD_FAV',
            payload: data,
            });
      } catch (error) {
         return dispatch({
            type: "ERROR",
            payload: error.message
         })
      }
   }
};
   //PROMISE VERSION 
   //  const endpoint = 'http://localhost:3001/rickandmorty/fav';
   //  return (dispatch) => {
   //     axios.post(endpoint, character).then(({ data }) => {
   //        return dispatch({
   //           type: 'ADD_FAV',
   //           payload: data,
   //        });
   //     });
   //  };
//  };

//ASYNC/AWAIT VERSION
export const removeFav = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(`${ENDPOINT}/${id}`)
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
      });
      } catch (error) {
         return dispatch({
            type: "ERROR",
            payload: error.message
         });
      }
   }
};

//PROMISE VERSION
// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: 'REMOVE_FAV',
//              payload: data,
//        });
//        });
//     };
//  };

export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
};

export function orderCards(order) {
    return {
        type: ORDER,
        payload: order
    }
}
