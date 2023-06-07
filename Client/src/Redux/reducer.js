import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: [], //que renderizo
    allCharacters: [], // todos los favoritos
    errors: false
}

export default function reducer(
        state = initialState,
        {type, payload}
    ) {
    switch (type) {
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload, errors: false };
            
        case REMOVE_FAV:
            return { ...state, myFavorites: payload, errors: false };
        
        case "ERROR":
            return { ...state, errors: payload};
            
        case FILTER:
            // EXTRA: => Caso "All"
            if (payload === "All") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const allCharactersCopy = [...state.allCharacters];
            const filteredCharacters = allCharactersCopy.filter(
                character => character.gender === payload);
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        case ORDER:
            let orderedCharacters = [];
            if (payload === "A") {
                orderedCharacters = state.allCharacters.sort(
                    (a, b) => a.id - b.id
                )
            } else if (payload === "D") {
                orderedCharacters = state.allCharacters.sort(
                    (a, b) => b.id - a.id
                )
            }
            return {
                ...state,
                myFavorites: orderedCharacters
            }
            default: 
                return {...state}
    }
}