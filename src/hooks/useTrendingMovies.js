import { useDispatch } from "react-redux";
import { addNowTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const getNowTrendingMovies = async () => {
    const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowTrendingMovies(json.results));
    }

    useEffect(()=>{
    getNowTrendingMovies();
    },[]);
}

export default useTrendingMovies;