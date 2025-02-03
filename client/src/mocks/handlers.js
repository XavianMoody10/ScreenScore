import { delay, http, HttpResponse } from "msw";
import trendingMoviesMockdata from "./mockdata/trendingMovies.mockdata";
import nowPlayingMoviesMockdata from "./mockdata/nowPlayingMovies.mockdata";
import popularMoviesMockdata from "./mockdata/popularMovies.mockdata";
import trendingTVShowsMockdata from "./mockdata/trendingTVShows.mockdata";
import airingTodayTVShowsMockdata from "./mockdata/airingTodayTVShows.mockdata";
import popularTVShowsMockdata from "./mockdata/popularTVShows.mockdata";
import onTheAirTVShowsMockdata from "./mockdata/onTheAirTVShows.mockdata";

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

    return HttpResponse.json(nowPlayingMoviesMockdata[0], { status: 200 });
  }),

  http.get("http://localhost:3001/movies/popular", async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    await delay(3000);

    if (page === "1") {
      return HttpResponse.json(popularMoviesMockdata[0], {
        status: 200,
      });
    }
    if (page === "2") {
      return HttpResponse.json(popularMoviesMockdata[1], {
        status: 200,
      });
    }
    if (page === "3") {
      return HttpResponse.json(popularMoviesMockdata[2], {
        status: 200,
      });
    }

    return HttpResponse.json(popularMoviesMockdata[0], { status: 200 });
  }),

  http.get("http://localhost:3001/tv_shows/trending", async () => {
    await delay(3000);
    return HttpResponse.json(trendingTVShowsMockdata, { status: 200 });
    // return HttpResponse.text("Error Getting Media", { status: 400 });
  }),

  http.get(
    "http://localhost:3001/tv_shows/airing_today",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = url.searchParams.get("page");

      await delay(3000);

      if (page === "1") {
        return HttpResponse.json(airingTodayTVShowsMockdata[0], {
          status: 200,
        });
      }
      if (page === "2") {
        return HttpResponse.json(airingTodayTVShowsMockdata[1], {
          status: 200,
        });
      }
      if (page === "3") {
        return HttpResponse.json(airingTodayTVShowsMockdata[2], {
          status: 200,
        });
      }

      return HttpResponse.json(airingTodayTVShowsMockdata[0], { status: 200 });
    }
  ),

  http.get("http://localhost:3001/tv_shows/on_the_air", async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    await delay(3000);

    if (page === "1") {
      return HttpResponse.json(onTheAirTVShowsMockdata[0], {
        status: 200,
      });
    }
    if (page === "2") {
      return HttpResponse.json(onTheAirTVShowsMockdata[1], {
        status: 200,
      });
    }
    if (page === "3") {
      return HttpResponse.json(onTheAirTVShowsMockdata[2], {
        status: 200,
      });
    }

    return HttpResponse.json(onTheAirTVShowsMockdata[0], { status: 200 });
  }),

  http.get("http://localhost:3001/tv_shows/popular", async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    await delay(3000);

    if (page === "1") {
      return HttpResponse.json(popularTVShowsMockdata[0], {
        status: 200,
      });
    }
    if (page === "2") {
      return HttpResponse.json(popularTVShowsMockdata[1], {
        status: 200,
      });
    }
    if (page === "3") {
      return HttpResponse.json(popularTVShowsMockdata[2], {
        status: 200,
      });
    }

    return HttpResponse.json(popularTVShowsMockdata[0], { status: 200 });
  }),
];
