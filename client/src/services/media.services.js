import axios from "axios";

const controller = new AbortController();

async function fetchMediaList(media, category, page) {
  const url = `http://localhost:3001/${media}/${category || "trending"}`;

  try {
    const response = await axios.get(url, {
      params: { page },
      signal: controller.signal,
    });
    return response;
  } catch (error) {
    const data = error?.response?.data;

    if (data) {
      throw new Error(data);
    }

    throw new Error(error.message);
  }
}

export { controller, fetchMediaList };
