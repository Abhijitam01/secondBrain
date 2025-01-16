import { ReactElement } from "react";

export interface ButtonProps {
    variant? : "primary" | "secondary";
    size? : "md" |"sm" | "lg" ;
    text? : string;
    startIcon? : ReactElement ;
    endIcon? : ReactElement ;
    onClick? : () => void

}


export const Button = (props: ButtonProps) => {
    return <button>
        {props.text}
    </button>
}

<Button variant = "primary" size="md" onClick={() => {}} text={"yes"} />