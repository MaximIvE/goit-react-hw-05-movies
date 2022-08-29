import Posts from '../../components/Posts/Posts';
import { Wrapper } from './HomePage.styled';

const Home = () => {

    return (
        <Wrapper>
            <h1>Tranding today</h1>
            {<Posts />}
        </Wrapper>
    )
}

export default Home;