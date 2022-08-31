import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getReviews} from '../../shared/api/moviesApi';

import {List, Title, H, P, Notification} from './Refiews.styled';

const Refiews = () => {
    const [data, setData] = useState(()=>[]);
    const [error, setError] = useState(()=>null);
    const [info, setInfo] = useState("");

    const {id} = useParams();

    useEffect(()=>{
        const fetchData = async() => {
            setError(null);
            try{
                const res = await getReviews(id);
                if ( res.status !== 200){ throw new Error (`${res.status} | ${res.statusText}`)};
                if (res.data.results.length === 0){setInfo("We don't have any reviews for this movie.")}
                    setData(res.data.results);
        } catch (error) {
                setError(error);
                setData(null);
        };};

        fetchData();
    }, [id]);

    const marcup = () => {
        return  data.map(({id, author, content}) => 
            <Title key={id}>
                <H>Author: {author}</H>
                <P>{content}</P>
            </Title>
                
            )
    }

 return <>
            {data && <List>{marcup()}</List>}
            {error && <Notification>We don't have any reviews for this movie.</Notification>}     
            {info && <Notification>{info}</Notification>}
        </>
}

export default Refiews;