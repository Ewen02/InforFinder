export namespace InfoFinder {
    export type ErrorResponse = {
        error: string | undefined;
        message: string | undefined;
        code: number | undefined;
    };

    export namespace Tvmaze {
        export type MoviesResponse = {
            data: [];
        }

        export async function GetMovies(query: string):Promise<MoviesResponse | ErrorResponse> {
            let result: MoviesResponse | ErrorResponse = {
                error: undefined,
                message: undefined, 
                code: undefined
            }

            await fetch('https://api.tvmaze.com/search/shows?q='+query)
                .then(response => response.json())
                .then(data => {
                    result = data;
                })
                .catch(r => {
                    result = {
                        error: r.name,
                        message: r.response.data,
                        code: r.response.status
                    }
                });
            return result;
        }
    }
}