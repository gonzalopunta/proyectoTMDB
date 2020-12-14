export interface ConocidoPor {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export interface Persona {
    adult: boolean;
    gender: number;
    id: number;
    known_for: ConocidoPor[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}

export interface PersonaResponse {
    page: number;
    results: Persona[];
}