
import {Nav, StyledLink} from './Menu.styled';

 const Menu = () => {
    return(
        <Nav>
            <StyledLink key='home'   to='/'>Home</StyledLink>
            <StyledLink key='movies' to='/movies'>Movies</StyledLink>
            <hr/> 
        </Nav>
    )
}

export default Menu;