import axios from "axios";

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
            genres: string[]
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
        
          await fetch(`https://restcountries.com/v3.1/name/${query}`)
            .then((response) => response.json())
            .then((data) => {
              result = data;
            }).catch((e) => {
              console.log(e)
            });
        
          return result;
        }
        
    }

    export namespace API_Ninja {

      export interface CountryData {
        gdp: string;
        sex_ratio: string;
        surface_area: string;
        life_expectancy_male: string;
        unemployment: string;
        imports: string;
        homicide_rate: string;
        currency: {
          code: string;
          name: string;
        };
        iso2: string;
        gdp_growth: string;
        employment_services: string;
        urban_population_growth: string;
        secondary_school_enrollment_female: string;
        employment_agriculture: string;
        capital: string;
        co2_emissions: string;
        forested_area: string;
        tourists: string;
        exports: string;
        life_expectancy_female: string;
        post_secondary_enrollment_female: string;
        post_secondary_enrollment_male: string;
        primary_school_enrollment_female: string;
        infant_mortality: string;
        secondary_school_enrollment_male: string;
        threatened_species: string;
        population: string;
        urban_population: string;
        employment_industry: string;
        name: string;
        pop_growth: string;
        region: string;
        pop_density: string;
        internet_users: string;
        gdp_per_capita: string;
        fertility: string;
        refugees: string;
        primary_school_enrollment_male: string;
      }

      export async function GetCountrie(query: string): Promise<CountryData> {
        let result!: CountryData;

        await axios.get(`https://restcountries.com/v3.1/name/${query}`, {
          headers: { 'X-Api-Key': 'OftTmfBPCMwbbBW0PYOmYw==SAc0qa0qyi5qFjT9'},
        }).then((r) => {
          result = r.data[0]
        }).catch((e) => {
          console.error(e);
        });
        return result;
      }
    }

    export namespace Rest_Countrie {
      export interface CountryData {
        altSpellings: string[];
        area: number;
        borders: string[];
        capital: string[];
        capitalInfo: { latlng: number[] };
        car: { signs: string[]; side: string };
        cca2: string;
        cca3: string;
        ccn3: string;
        cioc: string;
        coatOfArms: { png: string; svg: string };
        continents: string[];
        currencies: { [key: string]: { name: string; symbol: string } };
        demonyms: { [key: string]: { f: string; m: string } };
        fifa: string;
        flag: string;
        flags: { png: string; svg: string; alt: string };
        gini: { [key: number]: number };
        idd: { root: string; suffixes: string[] };
        independent: boolean;
        landlocked: boolean;
        languages: { [key: string]: string };
        latlng: number[];
        maps: { googleMaps: string; openStreetMaps: string };
        name: { common: string; official: string; nativeName: { [key: string]: { official: string; common: string } } };
        population: number;
        postalCode: { format: string; regex: string };
        region: string;
        startOfWeek: string;
        status: string;
        subregion: string;
        timezones: string[];
        tld: string[];
        translations: { [key: string]: { official: string; common: string } };
        unMember: boolean;
      }
      

      export async function GetCountrie(query: string): Promise<CountryData> {
        let result!: CountryData;

        await fetch(`https://restcountries.com/v3.1/name/${query}`)
          .then((data) => data.json())
          .then((data) => {
            result = data[0];
          })
          .catch((e) => {
            console.error(e);
          })
        return result;
      }
    }

    export namespace Open_Weather {
      const api_key = "c0e4d6aa9211d0efa4c7d74df7761dfc";

      export interface WeatherData {
        coord: {
          lon: number,
          lat: number
        },
        weather: [{
          id: number,
          main: string,
          description: string,
          icon: string
        }],
        base: string,
        main: {
          temp: number,
          feels_like: number,
          temp_min: number,
          temp_max: number,
          pressure: number,
          humidity: number,
          sea_level: number,
          grnd_level: number
        },
        visibility: number,
        wind: {
          speed: number,
          deg: number,
          gust: number
        },
        rain: {
          "1h": number
        },
        clouds: {
          all: number
        },
        dt: number,
        sys: {
          type: number,
          id: number,
          country: string,
          sunrise: number,
          sunset: number
        },
        timezone: number,
        id: number,
        name: string,
        cod: number
      }

      export async function GetWeather(query:string): Promise<WeatherData> {
        let result!: WeatherData;

        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api_key}`)
          .then((response) => {
            result = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
        return result;
      }
    }

    export namespace Spotify {
      const clientID = "";
      const clientSecret = "";

      export interface SpotifyData {}

      export async function GetMusic(query:string): Promise<SpotifyData> {
        let result!:SpotifyData;

        // await axios.post("https://accounts.spotify.com/api/token", {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   },
        //   body: `grant_type=client_credentiels&client_id=${clientID}&client_secrets${clientSecret}`
        // })
        // .then((data) => {
        //   console.log(data);
        // }).catch((e) => {
        //   console.error(e);
        // });

        return result;
      }
    }
}