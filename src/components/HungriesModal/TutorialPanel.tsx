import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import styled from 'styled-components';

import { HungriesContext } from '../../contexts/hungriesContext';
import TextField from '@material-ui/core/TextField';
import useInput from '../../utils/useInput';
import Button from '@material-ui/core/Button';

const Container = styled.div`
  padding: 15px;
`;

const TutorialRow = styled.div`
  height: 90px;
  color: var(--gray1);
  margin-left: 5px;
  margin-right: 50px;

  img {
    width: 60px;
    height: 60px;
    margin-right: 25px;
    vertical-align: middle;
  }
`;

interface Props {
  finishTutorial: () => void;
}

export default (props: Props) => {
  return (
    <Container>
      <TutorialRow>
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/198/writing-hand_270d.png" />
        Täytä tiedot ja paina “Aloita haku”
      </TutorialRow>
      <TutorialRow>
        <img src="
https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/198/waving-hand-sign_1f44b.png" />
        Lounasseura löydetty!
      </TutorialRow>
      <TutorialRow>
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/198/thinking-face_1f914.png" />
        Sopikaa tarkempi tapaamispaikka ja -aika
      </TutorialRow>
      <TutorialRow>
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/198/handshake_1f91d.png" />
        Tapaa lounasseura ja tutustu!
      </TutorialRow>
      <Button
        type="submit"
        color="primary"
        variant="outlined"
        onClick={() => props.finishTutorial()}
        style={{ marginTop: 5 }}
      >
        Sain!
      </Button>
    </Container>
  );
};
