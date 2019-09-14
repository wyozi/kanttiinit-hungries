import * as sortBy from 'lodash/sortBy';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { MdDirectionsWalk, MdStar } from 'react-icons/md';
import { dataContext, preferenceContext } from '../../contexts';
import { AreaType } from '../../contexts/types';
import { useTranslations } from '../../utils/hooks';
import allTranslations from '../../utils/translations';
import Button from '../Button';

const Container = styled.menu`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background: var(--gray7);
`;

interface Props {}

const HungriesModal = (props: Props & RouteComponentProps<any>) => {
  const translations = useTranslations();
  const data = React.useContext(dataContext);
  const preferences = React.useContext(preferenceContext);

  return <Container>TODO</Container>;
};

export default withRouter(HungriesModal);
