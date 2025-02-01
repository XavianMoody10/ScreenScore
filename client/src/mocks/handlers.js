import { delay, http, HttpResponse } from "msw";
import trendingMoviesMockdata from "./mockdata/trendingMovies.mockdata";
import nowPlayingMoviesMockdata from "./mockdata/nowPlayingMovies.mockdata";

export const handlers = [
  http.get("http://localhost:3001/movies/trending", async () => {
    await delay(3000);
    return HttpResponse.json(trendingMoviesMockdata, { status: 200 });
    // return HttpResponse.text("Error Getting Media", { status: 400 });
  }),

  http.get("http://localhost:3001/movies/now_playing", async () => {
    await delay(3000);
    return HttpResponse.json(nowPlayingMoviesMockdata, { status: 200 });
    // return HttpResponse.text("Error Getting Media", { status: 400 });
  }),
];
