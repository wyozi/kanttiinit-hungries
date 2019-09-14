import * as React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { hungriesContext } from '../../contexts';
import Link from '../Link';

const FloatingContent = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 200px;
  text-align: right;
`;

export default () => {
  const hungries = React.useContext(hungriesContext);

  let component;
  if (hungries.state === 'MATCHING') {
    component = 'Searching..';
  } else if (hungries.state === 'SESSION') {
    component = 'Open match!';
  } else {
    component = (
      <Link to="/hungries" aria-label="Settings">
        Find lunch company
      </Link>
    );
  }

  return (
    <FloatingContent>
      <Button style={{ width: '100%' }}>{component}</Button>
    </FloatingContent>
  );
};
