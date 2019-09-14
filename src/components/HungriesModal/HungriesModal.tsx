import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { MdDirectionsWalk, MdStar } from 'react-icons/md';
import { hungriesContext, preferenceContext } from '../../contexts';
import { AreaType } from '../../contexts/types';
import { useTranslations } from '../../utils/hooks';
import allTranslations from '../../utils/translations';
import Button from '../Button';
import Radio from '../Radio';
import TextField from '@material-ui/core/TextField';
import useInput from '../../utils/useInput';

const Container = styled.menu`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  background: var(--gray7);
`;

const StyledForm = styled.div`
  padding: 15px;
`;

interface ItemProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

const ItemTitle = styled.h2`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--gray3);
  margin-top: 2em;
`;

const Item = ({ label, children }: ItemProps) => (
  <React.Fragment>
    <ItemTitle>{label}</ItemTitle>
    {children}
  </React.Fragment>
);

interface Props {}

const HungriesModal = (props: Props & RouteComponentProps<any>) => {
  const translations = useTranslations();
  const preferences = React.useContext(preferenceContext);
  const hungries = React.useContext(hungriesContext);
  const [name, nameProps] = useInput('');
  const [time, setTime] = React.useState('NOW');

  const timeAsNumber = time === 'NOW' ? 0 : 15;

  return (
    <MuiThemeProvider
      theme={createMuiTheme({
        palette: {
          type: preferences.darkMode ? 'dark' : 'light'
        }
      })}
    >
      <Container>
        <StyledForm>
          <TextField
            label={'Name'}
            style={{ margin: 4 }}
            fullWidth
            type="text"
            {...nameProps}
          />
          <Item label={'Milloin?'}>
            <Radio
              options={[
                { label: 'Nyt', value: 'NOW' },
                { label: '15 minuutin päästä', value: '15' }
              ]}
              selected={time}
              onChange={setTime}
            />
          </Item>
          <Item label={'Missä?'}>
            <Radio
              options={[{ label: 'Otaniemi', value: 'Otaniemi' }]}
              selected={'Otaniemi'}
              onChange={() => {}}
            />
          </Item>
        </StyledForm>
        <Button
          color="primary"
          onClick={() =>
            hungries.startMatching({ name: name as string, time: timeAsNumber })
          }
        >
          Start
        </Button>
      </Container>
    </MuiThemeProvider>
  );
};

export default withRouter(HungriesModal);
