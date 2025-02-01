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

export { getTrendingMovies };
