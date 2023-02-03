import { Link } from 'react-router-dom';

import { Header, Wrapper } from '@my-third-app/shared-ui';

const AboutModule = () => {
  return (
    <Wrapper>
      <Header>About Page</Header>
      <p>This is about page</p>
      <Link to="/">To Home Page</Link>
    </Wrapper>
  );
};

export default AboutModule;
