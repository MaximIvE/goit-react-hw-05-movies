import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Wrapper, LinkSt} from './AdditionalInformation.styled';

const AdditionalInformation = ({id}) => {
    const location = useLocation();
    const back = location.state?.from || "/";
    
    
    return (
        <Wrapper>
            <h3>Additional information</h3>
            <ul>
                <li key="cast"   ><LinkSt state={{from: back}} to={`/movies/${id}/cast`}   >Cast   </LinkSt></li>
                <li key="reviews"><LinkSt state={{from: back}} to={`/movies/${id}/reviews`}>Reviews</LinkSt></li>
            </ul>
        </Wrapper>
    )
}

export default AdditionalInformation;

AdditionalInformation.propTypes={
    id: PropTypes.number.isRequired,
};