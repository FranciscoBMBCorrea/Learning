/**
 * Enum representing different search types for the OMDB API.
 * all => Represents all media types;
 * episode => Represents episodes;
 * movie => Represents movies;
 * series => Represents TV series.
 */
export enum SearchType {
  all = "",
  episode = "episode",
  movie = "movie",
  series = "series",
}

// Interface defining the structure of detailed information retrieved from the OMDB API
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

// Function encapsulating API calls to the OMDB service
export const useApi = () => {
  // Base URL of the OMDB API
  let baseURL = "https://www.omdbapi.com/";
  // API key for accessing the OMDB API
  let apiKey = "70c438ff";
  /**
   * Searches for media based on title and search type.
   * @param {string} title - The search query.
   * @param {SearchType} type - The type of media to search for (movie, series, episode, or all).
   * @returns {Promise<any>} - A Promise that resolves to the search results retrieved from the OMDB API.
   */
  const searchData = async (title: string, type: SearchType): Promise<any> => {
    // Perform a fetch request to the OMDB API with the provided title, search type, and API key
    const result = await fetch(
      `${baseURL}?s=${encodeURI(title)}&type=${type}&apikey=${apiKey}`
    );

    // Parse the JSON response and return the search results
    return result.json();
  };

  /**
   * Gets detailed information about a specific media item based on its ID.
   * @param {string} id - The unique identifier of the media item.
   * @returns {Promise<DetailsResult>} - A Promise that resolves to detailed information about the media retrieved from the OMDB API.
   */
  const getDetails = async (id: string): Promise<DetailsResult> => {
    // Perform a fetch request to the OMDB API with the provided media ID, plot type, and API key
    const result = await fetch(
      `${baseURL}?i=${id}&plot=full&apikey=${apiKey}`
    );
    
    // Parse the JSON response and return the detailed information about the media item
    return result.json();
  };

  // Expose the searchData and getDetails functions for external use
  return {
    searchData,
    getDetails,
  };
};

// Export the useApi function as the default module from this file
export default useApi;