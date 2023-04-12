import s from "./Header.module.scss";
import React from "react";

const Header: React.FC = () => {
    return (
        <header>
            <div className={s.logoBlock}>logo</div>
        </header>
    )
}

export default Header;