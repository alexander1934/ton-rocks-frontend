import React from "react";
import s from "@/styles/Account.module.scss";
import Button from "@/components/common/Button/Button";
import getIcon from "@/public/walletButtons/getButton.svg"
import sendIcon from "@/public/walletButtons/sendButton.svg"
import depositIcon from "@/public/walletButtons/depositButton.svg"
import Image from "next/image";

const Account: React.FC = () => {
    return (
        <section className={s.grid}>
            <div className={`${s.gridElement} ${s.wallet}`}>
                <div className={s.balanceLine}>Баланс:</div>
                <div className={s.balanceBlock}>
                    <div className={s.cryptoBalance}>0 Tokens</div>
                    <div className={s.currencyBalance}>В рублях: 0₽</div>
                </div>
                <div className={s.buttonsBlock}>
                    <div className={s.buttonGroup}>
                        <Button className={s.buttonElement}><Image src={getIcon} alt={""}/></Button>
                        <p>Получить</p>
                    </div>
                    <div className={s.buttonGroup}>
                        <Button className={s.buttonElement}><Image src={sendIcon} alt={""}/></Button>
                        <p>Отправить</p>
                    </div>
                    <div className={s.buttonGroup}>
                        <Button className={s.buttonElement}><Image className={s.depositIcon} src={depositIcon} alt={""}/></Button>
                        <p>Пополнить</p>
                    </div>
                </div>
            </div>
            <div className={`${s.gridElement} ${s.walletInfo}`}></div>
            <div className={`${s.gridElement} ${s.lastTransactions}`}></div>
            <div className={`${s.gridElement} ${s.explorer}`}></div>
        </section>
    )
}

export default Account;