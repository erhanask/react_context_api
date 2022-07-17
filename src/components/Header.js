import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

function Header() {
    const data = useContext(ThemeContext);

    return (
        <div>
            Header Active Theme: {data.theme}
            <br />
            <button onClick={() => {data.setTheme(data.theme === "light" ? "dark" : "light")}}>
                Change Theme
            </button>
        </div>
    );
}

export default Header;
