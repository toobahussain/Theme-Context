import { useContext } from "react";
import {FaMoon, FaSun} from "react-icons/fa"
import ThemeContext from "../context/ThemeContext";

function Navbar(){
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
    <nav className="navbar">
    <div>
        <h2>React Theme App</h2>
    </div>
    
    <div>
    <button className="theme-btn" onClick={toggleTheme}>
    {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>

    </div>
</nav>

    );
 
}

export default Navbar;
