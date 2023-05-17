import SearchBar from "../SearchBar/SearchBar.jsx"
import styles from "./NavBar.module.css";

export default function NavBar(props) {
   return (
      <div className={styles.container}>
         <SearchBar onSearch={props.onSearch} />
      </div>
   );
}