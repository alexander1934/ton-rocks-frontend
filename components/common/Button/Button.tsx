import React from "react";
import {LoaderSize} from "@/components/common/Loader/Loader";
import Loader from "@/components/common/Loader/Loader";
import s from "./Button.module.scss";

export type ButtonProps = React.PropsWithChildren<{
    loading?: boolean;
    children?: React.ReactNode;
    disabled?: boolean;
}> &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({className = "", ...props}) => {
    return (
        <button
            data-testid="button"
            className={`${s.button} ${className}`}
            disabled={props.disabled || props.loading}
            {...props}
        >
            {props.loading && <Loader size={LoaderSize.s}/>}
            {props.children}
        </button>
    );
};

export default React.memo(Button);
