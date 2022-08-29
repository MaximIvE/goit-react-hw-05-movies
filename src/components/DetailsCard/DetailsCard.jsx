import {Wrapper, Description} from './DetailsCard.styled';

const DetailsCard = ({data}) => {
    const {title, release_date, vote_average, overview, genres, poster_path} = data;
    const genresAll =  genres.reduce((previousValue, genre) => {
            return previousValue + genre.name + " ";
        }, "");

    return <Wrapper>
    <img src={"https://image.tmdb.org/t/p/w300"+poster_path} alt={title} />
    <Description>
        <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
        <p>{`User Score: ${Math.round(vote_average*100)/10}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresAll}</p>
    </Description>
</Wrapper>
}

export default DetailsCard;