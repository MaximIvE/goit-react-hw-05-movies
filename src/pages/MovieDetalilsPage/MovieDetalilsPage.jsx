// import { Location } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";

import DetailsCard from 'components/DetailsCard';
import {getDetals} from '../../shared/api/moviesApi';

import {DetailPAge} from './MovieDetalilsPage.styled';


const MovieDetalist = () => {
    const [data, setData] = useState(()=>null);
    const [error, setError] = useState(()=>null);
    const [loading, setLoading] = useState(()=>false);

    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const back = location.state.from || "/";


    useEffect(()=>{
        const fetchMovies = async() => { 
        try{setError(null);
            setLoading(true);
            const res = await getDetals(id);
                    if ( res.status !== 200){ throw new Error (`${res.status} | ${res.statusText}`)};
                    setLoading(false);
                    setData(res.data);
        } catch (error) {
                setError(error);
                setLoading(false);
                setData(null);
        };};
            fetchMovies();
    },[id]);

    return (
    <>
        <DetailPAge>
            <button type="button" onClick={() => navigate(back)}>Go back</button>
            { data &&   <DetailsCard data={data}/>}
            {loading && <h2>Loading...</h2>}
            {error && <h2>Error.  Unable to display movies.</h2>}
                
        </DetailPAge>
        <hr/>
    </>
    )
}

export default MovieDetalist;