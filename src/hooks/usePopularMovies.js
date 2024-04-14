import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import popular from "../mocks/popular.json";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
    const data =  await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    }

    const getPopularMockMovies = () => {
        const data = popular;
        dispatch(addPopularMovies(data.results));
    }

    useEffect(()=>{
    getPopularMovies();
    getPopularMockMovies();
    },[]);
}

export default usePopularMovies;