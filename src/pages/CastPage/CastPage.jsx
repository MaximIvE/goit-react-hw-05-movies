import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getCast} from '../../shared/api/moviesApi';

import {List, Title, H, P, Img, Notification} from './CastPage.styled';

const Cast = () => {
    const [data, setData] = useState(()=>[]);
    const [error, setError] = useState(()=>null);
    const [info, setInfo] = useState("");

    const {id} = useParams();

    useEffect(()=>{
        const fetchData = async() => {
            setError(null);
            try{
                const res = await getCast(id);
                if ( res.status !== 200){ throw new Error (`${res.status} | ${res.statusText}`)};
                if (res.data.cast.length === 0){setInfo("We don't have any reviews for this movie.")}
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
                <figure>
                    <Img src={"https://image.tmdb.org/t/p/w200"+profile_path} alt={name}/>
                    <figcaption>
                        <H>{name}</H>
                        <P>Character: {character}</P>
                    </figcaption>
                </figure>
            </Title>
                
            )
    }

 return <>
            {data && <List>{marcup()}</List>}
            {error && <Notification>No information.</Notification>} 
            {info && <Notification>{info}</Notification>}    
        </>
}

export default Cast;