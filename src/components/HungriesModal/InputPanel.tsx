import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import styled from 'styled-components';

import { HungriesContext } from '../../contexts/hungriesContext';
import { useTranslations } from '../../utils/hooks';
import allTranslations from '../../utils/translations';
import Button from '../Button';
import Radio from '../Radio';
import TextField from '@material-ui/core/TextField';
import useInput from '../../utils/useInput';

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

interface Props {
  onSubmit: HungriesContext['startMatching'];
}

export default (props: Props) => {
  const translations = useTranslations();
  const [name, nameProps] = useInput('');
  const [time, setTime] = React.useState('NOW');

  return (
    <>
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
              { label: 'Nyt (<5 min)', value: 'NOW' },
              { label: 'Kohta (5-30 min)', value: 'SOON' }
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
          props.onSubmit({ name: name as string, time: time as 'NOW' | 'SOON' })
        }
      >
        Start
      </Button>
    </>
  );
};
