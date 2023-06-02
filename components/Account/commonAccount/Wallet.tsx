import s from "@/styles/Account.module.scss";
import Button from "@/components/common/Button/Button";
import Image from "next/image";
import getIcon from "@/public/walletButtons/getButton.svg";
import sendIcon from "@/public/walletButtons/sendButton.svg";
import depositIcon from "@/public/walletButtons/depositButton.svg";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMoney, sendMoney} from "@/store/walletSlice";


const Wallet: React.FC = () => {

    // @ts-ignore
    const state = useSelector(state => state.wallet);
    const dispatch = useDispatch();

    const addMoney = () => dispatch(getMoney(state.balance));
    const lostMoney = () => dispatch(sendMoney(state.balance));

    const balanceTON = state.balance / 142.98

    return (
        <div className={`${s.gridElement} ${s.wallet}`}>
            <div className={s.balanceLine}>Баланс:</div>
            <div className={s.balanceBlock}>
                <div className={s.cryptoBalance}>{balanceTON} Tokens</div>
                <div className={s.currencyBalance}>В рублях: {state.balance}₽</div>
            </div>
            <div className={s.buttonsBlock}>
                <div className={s.buttonGroup}>
                    <Button className={s.buttonElement} onClick={addMoney}><Image src={getIcon} alt={""}/></Button>
                    <p>Получить</p>
                </div>
                <div className={s.buttonGroup}>
                    <Button className={s.buttonElement} onClick={lostMoney}><Image src={sendIcon} alt={""}/></Button>
                    <p>Отправить</p>
                </div>
                <div className={s.buttonGroup}>
                    <Button className={s.buttonElement}><Image className={s.depositIcon} src={depositIcon} alt={""}/></Button>
                    <p>Пополнить</p>
                </div>
            </div>
        </div>
    )
}

export default Wallet;
