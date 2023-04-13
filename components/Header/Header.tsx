import s from "../../styles/Header.module.scss";
import React from "react";
import logo from "@/public/ton_symbol.png";
import Image from "next/image";
import Button from "@/components/elements/Button/Button";

const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <div className={s.logoBlock}>
                <Image src={logo} className={s.logo} alt={"logo"}/>
                <h1 className={s.headerName}>Tokens</h1>
            </div>
            <div className={s.authBlock}>
                <Button className={s.registrationButton}>Регистрация</Button>
                <Button className={s.loginButton}>Войти</Button>
            </div>
        </header>
    )
}

export default Header;