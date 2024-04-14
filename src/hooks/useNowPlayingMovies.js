import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import now_playing from "../mocks/now_playing.json";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
    const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    }

    const getNowPlayingMockMovies = () => {
        const data = now_playing;
        dispatch(addNowPlayingMovies(data.results));
    }

    useEffect(()=>{
    getNowPlayingMovies();
    getNowPlayingMockMovies();
    },[]);
}

export default useNowPlayingMovies;