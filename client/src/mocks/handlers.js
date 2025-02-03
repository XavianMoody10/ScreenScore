import { delay, http, HttpResponse } from "msw";
import trendingMoviesMockdata from "./mockdata/trendingMovies.mockdata";
import nowPlayingMoviesMockdata from "./mockdata/nowPlayingMovies.mockdata";
import popularMoviesMockdata from "./mockdata/popularMovies.mockdata";

export const handlers = [
  http.get("http://localhost:3001/movies/trending", async () => {
    await delay(3000);
    return HttpResponse.json(trendingMoviesMockdata, { status: 200 });
    // return HttpResponse.text("Error Getting Media", { status: 400 });
  }),

  http.get("http://localhost:3001/movies/now_playing", async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    await delay(3000);

    if (page === "1") {
      return HttpResponse.json(nowPlayingMoviesMockdata[0], { status: 200 });
    }
    if (page === "2") {
      return HttpResponse.json(nowPlayingMoviesMockdata[1], { status: 200 });
    }
    if (page === "3") {
      return HttpResponse.json(nowPlayingMoviesMockdata[2], { status: 200 });
    }
  }),

  http.get("http://localhost:3001/movies/popular", async () => {
    await delay(3000);
    return HttpResponse.json(popularMoviesMockdata, { status: 200 });
    // return HttpResponse.text("Error Getting Media", { status: 400 });
  }),
];
