import Head from 'next/head';
import s from '@/styles/App.module.css';
import Header from '@/components/Header/Header';
import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Account from "@/components/Account/Account";
import {Provider} from "react-redux";
import store from "@/store";

export default function App(): React.ReactElement {
    return (
        <Provider store={store}>
            <React.Fragment>
                <Head>
                    <title>Ton</title>
                    <meta name="description" content="Generated by create next app"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/ton_symbol.png"/>
                </Head>
                <Header/>
                <main className={s.mainSection}>
                    <Sidebar/>
                    <Account/>
                </main>
            </React.Fragment>
        </Provider>
    )
}
