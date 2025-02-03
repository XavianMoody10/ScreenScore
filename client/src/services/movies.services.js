import axios from "axios";

async function getTrendingMovies() {
  const url = "http://localhost:3001/movies/trending";

  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw Error(error.response.data);
  }
}

async function getMoviesMediaList(endpoint, page) {
  try {
    if (!endpoint) {
      throw Error("Valid endpoint is required");
    }

    const response = await axios.get(endpoint, {
      params: {
        page: page || 1,
      },
    });

    return response;
  } catch (error) {
    throw Error(error.response.data);
  }
}

export { getTrendingMovies, getMoviesMediaList };
