export namespace InfoFinder {
    export type ErrorResponse = {
        error: string | undefined;
        message: string | undefined;
        code: number | undefined;
    };

    export namespace Tvmaze {

        export interface Movie {
            score: number;
            show: {
              id: number;
              url: string;
              name: string;
              genres: string[];
              language: string;
              officialSite: string | null;
              premiered: string;
              rating: { average: number };
              runtime: number | null;
              status: string;
              summary: string;
              type: string;
              updated: number;
              image: { medium: string; original: string };
              externals: { tvrage: number | null; thetvdb: number | null; imdb: string | null };
              averageRuntime: number | null;
              dvdCountry: string | null;
              ended: string | null;
              network: { id: number; name: string; country: { code: string; name: string; timezone: string } | null };
              webChannel: { id: number; name: string; country: { code: string; name: string; timezone: string } | null } | null;
              schedule: { time: string; days: string[] };
              _links: { self: { href: string } | null; previousepisode: { href: string } | null };
            };
          }
          
          export async function GetMovies(query: string): Promise<Movie[]> {
            let result: Movie[] = [];
          
            await fetch('https://api.tvmaze.com/search/shows?q=' + query)
              .then((response) => response.json())
              .then((data) => {
                result = data;
              });
          
            return result;
          }
        
    }
}