import {Routes, Route } from 'react-router-dom';

import Home from 'pages/HomePage';
import Movies from 'pages/MoviesPage/MoviesPage';
import MovieDetalist from 'pages/MovieDetalilsPage';
import Cast from 'pages/CastPage/CastPage';
import Refiews from 'pages/ReviewsPage/Refiews';

// import NotFound from 'pages/NotFoundPage';

const UseRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movies/:id" element={<MovieDetalist/>}>
                <Route path="cast" element={<Cast/>}/>
                <Route path="reviews" element={<Refiews/>}/>
            </Route>
            <Route path="*" element={<Home/>}/>
        </Routes>
    )
}
export default UseRoutes;