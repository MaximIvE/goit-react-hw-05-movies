import { Link } from 'react-router-dom';
import { NotFoundSt, Context } from './NotFoundPage.styled';

const NotFound = () => {

    return (
        <NotFoundSt>
            <Context>
                <h1>404</h1>
                <hr width="2" size="44"></hr>
                <h2>This page could not be found.</h2>
            </Context>
            <Link to="/">to Home</Link>
        </NotFoundSt>
    )

}

export default NotFound;