import { useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "components/SearchForm";
import Posts from "components/Posts";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [params, setParams] = useState(searchParams.get("query"));

    useEffect(()=>{
        setParams(searchParams.get("query"))
    },[searchParams])
    



    return (
        <>
            <SearchForm setParams = {query => setSearchParams({query})}/>
            {params && <Posts qwery={params} />}
        </>
    )
}

export default Movies;