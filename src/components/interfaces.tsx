//-------------
// IButtonProps
//-------------

interface IButtonProps {
    text: string;
    onClick?: () => void;
    isSubmit?: boolean | false;
    className?: string;
}

export type {
    IButtonProps,
}