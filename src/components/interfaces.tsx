//-------------
// IButtonProps
//-------------

interface IButtonProps {
    text: string;
    onClick?: () => void;
    isSubmit?: boolean | false;
    className?: string;
}

//-----------
// IMovieCard
//-----------

interface IMovieCard {
    name: string;
    urlImage: string;
    score: number;
    onClick?: () => void;
    className?: string;
}

export type {
    IButtonProps,
    IMovieCard
}