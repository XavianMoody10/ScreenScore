import { delay, http, HttpResponse } from "msw";
import trendingMoviesMockdata from "./mockdata/trendingMovies.mockdata";
import trendingTVShowsMockdata from "./mockdata/trendingTVShows.mockdata";
import nowPlayingMoviesMockdata from "./mockdata/nowPlayingMovies.mockdata";
import popularMoviesMockdata from "./mockdata/popularMovies.mockdata";
import topRatedMoviesMockdata from "./mockdata/topRatedMovies.mockdata";
import upcomingMoviesMockdata from "./mockdata/upcomingMovies.mockdata";

export const handlers = [
  http.get("http://localhost:3001/movies/trending", async () => {
    await delay(3000);
    return HttpResponse.json(trendingMoviesMockdata);
    // return HttpResponse.text("Failed To Get Movies", { status: 400 });
    // return HttpResponse.error();
  }),

  http.get("http://localhost:3001/movies/now_playing", async () => {
    await delay(3000);
    return HttpResponse.json(nowPlayingMoviesMockdata);
    // return HttpResponse.text("Failed To Get Movies", { status: 400 });
    // return HttpResponse.error();
  }),

  http.get("http://localhost:3001/movies/popular", async () => {
    await delay(3000);
    return HttpResponse.json(popularMoviesMockdata);
    // return HttpResponse.text("Failed To Get Movies", { status: 400 });
    // return HttpResponse.error();
  }),

  http.get("http://localhost:3001/movies/top_rated", async () => {
    await delay(3000);
    return HttpResponse.json(topRatedMoviesMockdata);
    // return HttpResponse.text("Failed To Get Movies", { status: 400 });
    // return HttpResponse.error();
  }),

  http.get("http://localhost:3001/movies/upcoming", async () => {
    await delay(3000);
    return HttpResponse.json(upcomingMoviesMockdata);
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
