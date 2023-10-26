export enum SearchType {
  all = "",
  episode = "episode",
  movie = "movie",
  series = "series",
}

export interface DetailsResult {
  Actors: string;
  Director: string;
  Genre: string;
  imdbRating: string;
  Poster: string;
  Plot: string;
  Title: string;
  Website: string;
  Year: string;
}

export const useApi = () => {
  let baseURL = "https://www.omdbapi.com/";
  let apiKey = "70c438ff";

  const searchData = async (title: string, type: SearchType): Promise<any> => {
    const result = await fetch(
      `${baseURL}?S=${encodeURI(title)}&type=${type}&apikey=${apiKey}`
    );

    return result.json();
  };

  const getDetails = async (id: string): Promise<DetailsResult> => {
    const result = await fetch(
      `${baseURL}?id=${id}&plot=full&apikey=${apiKey}`
    );
    return result.json();
  };
  return {
    searchData,
    getDetails,
  };
};

export default useApi;
