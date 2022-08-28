import { NotFound, Context } from './NotFoundPage.styled';

const NotFoundPage = () => {

    return (
        <NotFound>
            <Context>
                <h1>404</h1>
                <hr width="2" size="44"></hr>
                <h2>This page could not be found.</h2>
            </Context>
        </NotFound>
    )

}

export default NotFoundPage;