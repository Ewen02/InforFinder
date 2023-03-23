import "./NotFound.scss"

const NotFound = () => {
    return (
        <div className="notFound">
            <h1>404</h1>
            <p>Page not found</p>
            <button onClick={
                () => {
                    window.history.back();
                }
            }>Back</button>
        </div>
    );
}

export default NotFound;