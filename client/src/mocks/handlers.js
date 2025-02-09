import { delay, http, HttpResponse } from "msw";
import trendingMoviesMockdata from "./mockdata/trendingMovies.mockdata";
import trendingTVShowsMockdata from "./mockdata/trendingTVShows.mockdata";

export const handlers = [
  http.get("http://localhost:3001/movies/trending", async () => {
    await delay(3000);
    return HttpResponse.json(trendingMoviesMockdata);
    // return HttpResponse.text("Failed To Get Movies", { status: 400 });
    // return HttpResponse.error();
  }),

  http.get("http://localhost:3001/tv_shows/trending", async () => {
    await delay(3000);
    return HttpResponse.json(trendingTVShowsMockdata);
    // return HttpResponse.text("Failed To Get Movies", { status: 400 });
    // return HttpResponse.error();
  }),
];
