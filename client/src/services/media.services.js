import axios from "axios";

async function fetchMediaList(media, category, page) {
  const url = `http://localhost:3001/${media}/${category}`;

  try {
    const response = await axios.get(url, { params: { page } });
    return response;
  } catch (error) {
    const data = error?.response?.data;

    if (data) {
      throw new Error(data);
    }

    throw new Error(error.message);
  }
}

export { fetchMediaList };
