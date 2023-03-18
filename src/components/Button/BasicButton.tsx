import React from "react";
import { IButtonProps } from "../interfaces";

import "./Button.scss"

const BasicButton: React.FC<IButtonProps> = (props) => {
    return (
        <button 
            type={props.isSubmit ? "submit" : "button"}
            className={"button basic-button " + props.className}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

export default BasicButton;

