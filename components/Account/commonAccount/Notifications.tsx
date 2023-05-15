import s from "@/styles/Account.module.scss";
import React from "react";


const Notifications = () =>{
    return (
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
    )
}

export default Notifications;