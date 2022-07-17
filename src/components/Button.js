import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

function Button() {
    const data = useContext(ThemeContext);


    return (
        <div>
            Active Theme: {data.theme}
            <br />
            <button onClick={() => {data.setTheme(data.theme === "light" ? "dark" : "light")}}>
                Change Theme
            </button>
        </div>
    );
}

export default Button;
