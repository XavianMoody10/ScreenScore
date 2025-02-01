import { delay, http, HttpResponse } from "msw";
import trendingMovies from "./mockdata/trendingMovies";

export const handlers = [
  http.get("http://localhost:3001/movies/trending", async () => {
    await delay(3000);
    return HttpResponse.json(trendingMovies, { status: 200 });
    // return HttpResponse.text("Error Getting Media", { status: 400 });
  }),
];
