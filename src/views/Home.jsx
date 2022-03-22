import { useState, useEffect } from 'react';
import WelcomeImage from "../assets/asset1.jpg";
import Header from "../components/layout/Header";
import MovieList from "../components/MovieList";
import { getAllMovies } from "../services/movieService";

/**
* @author traj3ctory
* @function Home
**/

const Home = () => {
    const [params, setParams] = useState("fast and furious");
    const [movies, setMovies] = useState([]);

    // const handleSearch = () => {

    // };

    useEffect(() => {
        getAllMovies(params).then(data => {
            setMovies(data);
        });
    }, [params]);


    return (
        <>
            <Header />
            <div className="welcome_img_container">
                <img src={WelcomeImage} alt="welcome" className='img-fluid' width="100%" />
                <h3>
                    Watch something incredible.
                </h3>
            </div>
            <section className="container-lg container-fluid mb-2">
                <div className='mb-4 px-3'>
                    <label htmlFor="search">Search</label>
                    <input type="text" name="search" id="search" onChange={(e) => setParams(e.target.value)} value={params} placeholder="movie search" />
                </div>
                <div className="display_movies">
                    {movies && <MovieList header={params} movies={movies} />}
                    {movies && <MovieList header={params} movies={movies} />}
                    {movies.length === 0 && <div className="d-flex h-100 align-items-center justify-content-center"><h3>No movies found</h3></div>
                    }
                </div>
            </section>
        </>
    );
}

export default Home;
