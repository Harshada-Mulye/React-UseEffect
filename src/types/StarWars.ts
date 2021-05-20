 interface StarWarsData {
	name: string;
	height: number;
	mass: number;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[] | null;
	species:string[] | null;
	vehicles: string[] | null;
	starships: string[] | null;
	created: string;
	edited: string;
	url: string;
  }
   interface StarWarsResponse {
	count: number ;
	next: string | null;
	previous: string | null;
	results: StarWarsData[];
  }

   
export type{StarWarsResponse,StarWarsData}