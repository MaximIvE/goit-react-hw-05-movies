import { useState, useEffect } from 'react';

import PostList from 'components/PostList';
import { getPopular, getQuery } from '../../shared/api/moviesApi';
import { PostsStyled } from './Posts.styled';

const Posts = ({qwery}) => {
    const [data, setData] = useState(()=>[]);
    const [error, setError] = useState(()=>null);
    const [loading, setLoading] = useState(()=>false);

    useEffect(()=>{
        const fetchMovies = async() => {
        try{setError(null);
            setLoading(true);
            let res = null;
            if(qwery){res = await getQuery(qwery);} else {res = await getPopular();}
            
                    if ( res.status !== 200){ throw new Error (`${res.status} | ${res.statusText}`)};
                    setLoading(false);
                    setData(res.data.results);
                
        } catch (error) {
                setError(error);
                setLoading(false);
                setData([]);
        };};
            fetchMovies();
    },[qwery]);
    
    return (
        <PostsStyled>
            {data.length > 0 && <PostList data={data}/>}
            {loading && <h2>Loading...</h2>}
            {error && <h2>Error.  Unable to display movies</h2>}
        </PostsStyled>
    )
}

export default Posts;