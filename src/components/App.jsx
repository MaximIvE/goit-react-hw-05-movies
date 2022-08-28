import Menu from './Menu/Menu';
import UseRoutes from '../UserRoutes';

import { Container } from './App.styled';

export const App = () => {

  return (
    <Container>
      <Menu/>
      <UseRoutes/>
    </Container>
  );
};