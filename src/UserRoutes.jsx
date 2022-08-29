import {Routes, Route} from 'react-router-dom';

import Home from 'pages/HomePage';
import MovieDetalist from 'pages/MovieDetalilsPage';
import NotFound from 'pages/NotFoundPage';

import Test from 'components/Test';

const UseRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Test/>}/>
            <Route path="/movies/:id" element={<MovieDetalist/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default UseRoutes;