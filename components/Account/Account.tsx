import React from "react";
import s from "@/styles/Account.module.scss";
import Wallet from "@/components/Account/commonAccount/Wallet";
import Notifications from "@/components/Account/commonAccount/Notifications";
import LineChart from "@/components/Account/commonAccount/LineChart";

const Account: React.FC = () => {
    return (
        <section className={s.grid}>
            <Wallet />
            <LineChart />
            <Notifications />
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
        </section>
    )
}

export default Account;