import {useContext} from "react";

import {ThemeContext} from "../context/ThemeContext";
import Button from "./Button";
import Header from "./Header";
function Container() {

    const data = useContext(ThemeContext);

    return (
        <div className={`app ${data.theme === "light" ? "light" : "dark"}`}>
            <Header></Header>
            <hr />
            <Button></Button>
        </div>
    );
}

export default Container;
