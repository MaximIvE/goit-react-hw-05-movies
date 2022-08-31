import {Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";

// const MyComponent = lazy(() => import("path/to/MyComponent"));

const Home = lazy(() => import("pages/HomePage"));
const Movies = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MovieDetalist = lazy(() => import("pages/MovieDetalilsPage"));
const Cast = lazy(() => import("pages/CastPage/CastPage"));
const Refiews = lazy(() => import("pages/ReviewsPage/Refiews"));


// import Home from 'pages/HomePage';

// import Movies from 'pages/MoviesPage/MoviesPage';
// import MovieDetalist from 'pages/MovieDetalilsPage';
// import Cast from 'pages/CastPage/CastPage';
// import Refiews from 'pages/ReviewsPage/Refiews';

// import NotFound from 'pages/NotFoundPage';

const UseRoutes = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/movies/:id" element={<MovieDetalist/>}>
                    <Route path="cast" element={<Cast/>}/>
                    <Route path="reviews" element={<Refiews/>}/>
                </Route>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </Suspense>
    )
}
export default UseRoutes;