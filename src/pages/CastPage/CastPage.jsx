import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getCast} from '../../shared/api/moviesApi';

import {List, Title, H, P} from './CastPage.styled';

const Cast = () => {
    const [data, setData] = useState(()=>[]);
    const [error, setError] = useState(()=>null);

    const {id} = useParams();

    useEffect(()=>{
        const fetchData = async() => {
            setError(null);
            try{
                const res = await getCast(id);
                if ( res.status !== 200){ throw new Error (`${res.status} | ${res.statusText}`)};
                    setData(res.data.cast);
        } catch (error) {
                setError(error);
                setData(null);
        };};

        fetchData();
    }, [id]);

    const marcup = () => {
        return  data.map(({id, name, character, profile_path}) => 
            <Title key={id}>
                <img src={"https://image.tmdb.org/t/p/w200"+profile_path} alt={name}/>
                <H>{name}</H>
                <P>Character: {character}</P>
            </Title>
                
            )
    }

 return <>
            {data && <List>{marcup()}</List>}
            {error && <h2>No information.</h2>}     
        </>
}

export default Cast;