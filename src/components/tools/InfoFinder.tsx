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
        
          await fetch('https://api.tvmaze.com/search/shows?q=' + query)
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

        await axios.get('https://api.api-ninjas.com/v1/country?name=' + query, {
          headers: { 'X-Api-Key': 'OftTmfBPCMwbbBW0PYOmYw==SAc0qa0qyi5qFjT9'},
        }).then((r) => {
          result = r.data[0]
        }).catch((e) => {
          console.error(e);
        });
        return result;
      }
    }
}