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
            <div className={`${s.gridElement} ${s.walletInfo}`}>
                <div className={s.blockHeader}>Информация:</div>
                <div className={s.infoBlock}>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>Адрес кошелька:</div>
                        <div className={s.infoValue}>1jfjvnf345f9</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>Хэш кошелька:</div>
                        <div className={s.infoValue}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=</div>
                    </div>
                </div>
            </div>
            <div className={`${s.gridElement} ${s.lastTransactions}`}>
                <div className={s.blockHeader}>Уведомления:</div>
                <div className={s.infoBlock}>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>Сделка на 1.43Tokens была совершена в 08:53</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>Сделка на 0.032Tokens была совершена в 18:41</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>Сделка на 0.032Tokens была совершена в 18:41</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>Сделка на 0.032Tokens была совершена в 18:41</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>Сделка на 0.032Tokens была совершена в 18:41</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>Сделка на 0.032Tokens была совершена в 18:41</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>Сделка на 0.032Tokens была совершена в 18:41</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>Сделка на 0.032Tokens была совершена в 18:41</div>
                    </div>
                </div>
            </div>
            <div className={`${s.gridElement} ${s.explorer}`}>
                <div className={s.blockHeader}>Explorer:</div>
                <div className={s.infoBlock}>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>6853</div>
                        <div className={s.infoValue}>(0,c000000000000000,6867):970C1D1525DB6EAB77C8A1C3FE3E343DCA15BF889C3A12</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>6853</div>
                        <div className={s.infoValue}>(0,c000000000000000,6867):970C1D1525DB6EAB77C8A1C3FE3E343DCA15BF889C3A12</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>6853</div>
                        <div className={s.infoValue}>(0,c000000000000000,6867):970C1D1525DB6EAB77C8A1C3FE3E343DCA15BF889C3A12</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>6853</div>
                        <div className={s.infoValue}>(0,c000000000000000,6867):970C1D1525DB6EAB77C8A1C3FE3E343DCA15BF889C3A12</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>6853</div>
                        <div className={s.infoValue}>(0,c000000000000000,6867):970C1D1525DB6EAB77C8A1C3FE3E343DCA15BF889C3A12</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>6853</div>
                        <div className={s.infoValue}>(0,c000000000000000,6867):970C1D1525DB6EAB77C8A1C3FE3E343DCA15BF889C3A12</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>6853</div>
                        <div className={s.infoValue}>(0,c000000000000000,6867):970C1D1525DB6EAB77C8A1C3FE3E343DCA15BF889C3A12</div>
                    </div>
                    <div className={s.infoElement}>
                        <div className={s.infoKey}>6853</div>
                        <div className={s.infoValue}>(0,c000000000000000,6867):970C1D1525DB6EAB77C8A1C3FE3E343DCA15BF889C3A12</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Account;