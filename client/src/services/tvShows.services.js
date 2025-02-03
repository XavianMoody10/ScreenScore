import axios from "axios";

async function getTrendingTVShows() {
  const url = "http://localhost:3001/tv_shows/trending";

  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw Error(error.response.data);
  }
}

async function getTVShowsMediaList(endpoint, page) {
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

export { getTrendingTVShows, getTVShowsMediaList };
