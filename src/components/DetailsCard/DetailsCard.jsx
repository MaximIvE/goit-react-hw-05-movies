import PropTypes from 'prop-types';
import {Wrapper, Description, Img, ImgWrapper, H2} from './DetailsCard.styled';

const DetailsCard = ({data}) => {
    const {title, release_date, vote_average, overview, genres, poster_path} = data;
    const genresAll =  genres.reduce((previousValue, genre) => {
            return previousValue + genre.name + " ";
        }, "");

    return <Wrapper>
    <ImgWrapper>
        <Img src={"https://image.tmdb.org/t/p/w300"+poster_path} alt={title} />
    </ImgWrapper>
    <Description>
        <H2>{`${title} (${release_date.slice(0, 4)})`}</H2>
        <p>{`User Score: ${Math.round(vote_average*100)/10}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresAll}</p>
    </Description>
</Wrapper>
}

export default DetailsCard;

DetailsCard.propTypes={
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        poster_path: PropTypes.string,
      }).isRequired,
};
