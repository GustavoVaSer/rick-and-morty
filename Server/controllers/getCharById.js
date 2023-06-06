const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

module.exports =  async (req, res) => {
    try {
        const { id } = req.params;
        const response = axios.get(URL + id);
        const { status, name, species, origin, image, gender } = response.data;
        const character = { id, status, name, species, origin, image, gender }
        return character.name 
                ? res.status(200).json(character)
                : res.status(404).send("Not Found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


    //PROMISES VERSION
    // const { id } = req.params;
    // axios.get(URL + id)
    //     .then(response => {
    //         const { status, name, species, origin, image, gender } = response.data;
    //         const character = {
    //             id, status, name, species, origin, image, gender
    //         }
    //         return character.name 
    //             ? res.status(200).json(character)
    //             : res.status(404).send("Not Found")
    //     })
    //     .catch(error => {
    //         return res.status(500).send(error.message);
    //     })
    // };
