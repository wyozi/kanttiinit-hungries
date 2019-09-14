import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { hungriesContext, preferenceContext } from '../../contexts';

import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import InputPanel from './InputPanel';

const Container = styled.menu`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  background: var(--gray7);
`;

const MatchingSpinner = styled.div``;

interface Props {}
const HungriesModal = (props: Props & RouteComponentProps<any>) => {
  const preferences = React.useContext(preferenceContext);
  const hungries = React.useContext(hungriesContext);

  let component;

  if (hungries.state === 'MATCHING') {
    component = (
      <MatchingSpinner>
        You
        <br />
        are
        <br />
        being
        <br />
        matched
        <br />
      </MatchingSpinner>
    );
  } else {
    component = <InputPanel onSubmit={hungries.startMatching} />;
  }

  return (
    <MuiThemeProvider
      theme={createMuiTheme({
        palette: {
          type: preferences.darkMode ? 'dark' : 'light'
        }
      })}
    >
      <Container>{component}</Container>
    </MuiThemeProvider>
  );
};

export default withRouter(HungriesModal);
