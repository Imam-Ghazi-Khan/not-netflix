import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import movie_trailers from "../mocks/movie_trailers.json";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movie.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  const getMockVideos = () => {
    const data = movie_trailers;
    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    !trailerVideo && getMovieVideos();
    getMockVideos();
  }, []);
};

export default useMovieTrailer;