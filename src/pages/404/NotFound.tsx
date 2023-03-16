import { useEffect } from "react";

import "./NotFound.scss"

const NotFound = () => {
    useEffect(() => {
        document.title = "Area - 404";
    }, []);

    return (
        <div className="notFound">
            <h1>404</h1>
            <p>Page not found</p>
            <button onClick={
                () => {
                    window.location.href = "/";
                }
            }>Back</button>
        </div>
    );
}

export default NotFound;