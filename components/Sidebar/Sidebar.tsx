import React from "react";
import sidebar from "@/styles/Sidebar.module.scss";
import Link from "next/link";
import Image from "next/image";
import accountImage from "@/public/sidebarIcons/profile.png";
import settingsImage from "@/public/sidebarIcons/settings.png";
import {useRouter} from "next/router";

const Sidebar: React.FC = () => {

    const router = useRouter();

    return (
        <ul className={sidebar.list}>
            <li className={`${sidebar.item} ${router.pathname == "/" ? sidebar.active : ""}`}>
                <Image src={accountImage} alt={""}/>
                <Link href={"/"}>Аккаунт</Link>
            </li>
            <li className={`${sidebar.item} ${router.pathname == "/settings" ? sidebar.active : ""}`}>
                <Image src={settingsImage} alt={""}/>
                <Link href={"/settings"}>Настройки</Link>
            </li>
        </ul>
    );
}

export default Sidebar;