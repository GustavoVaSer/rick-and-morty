import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from './components/form/Form.jsx';
import { createRoot } from 'react-dom';
import Favorites from './components/favorites/Favorites';


function App() {

   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);
   const EMAIL = "ejemplo@gmail.com";
   const PASSWORD = "123456"; 

   const navigate = useNavigate();

   //ASYNC/AWAIT VERSION
   // async function login(userData) {
   //    try {
   //       const { email, password } = userData;
   //       const URL = 'http://localhost:3001/rickandmorty/login/';
   //       const { access } = (await axios(URL + `?email=${email}&password=${password}`)).data;
   //       setAccess(access);
   //       access && navigate('/home');
   //    } catch (error) {
   //       console.log(error.message);
   //    }
   // }

   //PROMISES VERSION (DONT WORK)
   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   // THIS ONE WORKS
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const onSearch = async id => {
      try {
         const characterId = characters.filter(character => character.id === id);
         //Evitar duplicaodos:
         if (characterId.length) return alert("The character already exists!!!");
         if (id < 1 || id > 826) return alert("There is not character with the entered id!!!");
         const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
          }
      } catch (error) {
         console.log(error.message);
      }
   }

   // function onSearch(id) {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }

   const onClose = id => {
      setCharacters(characters.filter(char => char.id !== id))
   }

   const location = useLocation();

   return (
      <div className='App'>
         {
            location.pathname !== "/"
             ? <NavBar onSearch={onSearch}/>
             : null
         }
         <Routes>
            <Route exact path="/" element={<Form login={login} />} />
            <Route path="/home" element={
               <Cards characters={characters} onClose={onClose} />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites onClose={onClose} />}/>
         </Routes>
      </div>
   );
}

export default App;