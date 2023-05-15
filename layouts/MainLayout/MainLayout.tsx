import React from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";
import s from "@/styles/App.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";

type MainLayoutProps = {
    children: React.ReactNode,
}

export default function MainLayout(props: MainLayoutProps){
    return (
        <React.Fragment>
            <Head>
                <title>Ton</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/ton_symbol.png"/>
            </Head>
            <Header/>
            <div className={s.mainSection}>
                <Sidebar/>
                {props.children}
            </div>
        </React.Fragment>
    )
}