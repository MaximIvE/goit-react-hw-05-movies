import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from './PostList.styled';

const PostList = ({data=[]}) => {
    const location = useLocation();
    const info = data.map(movie => 
        <li key={movie.id}>
           <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link> 
        </li>);
    return <List>{info}</List>
}

export default PostList;

PostList.propTypes={
    data: PropTypes.array.isRequired,
};