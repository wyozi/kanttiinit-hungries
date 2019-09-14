import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import styled from 'styled-components';

import { HungriesContext } from '../../contexts/hungriesContext';
import TextField from '@material-ui/core/TextField';
import useInput from '../../utils/useInput';

const ChatBox = styled.div`
  padding: 15px;
`;

interface Props {}

export default (props: Props) => {
  const [message, messageProps, setMessage] = useInput('');

  return (
    <ChatBox>
      <div>messages come here</div>
      <TextField
        label="Message"
        style={{ margin: 4 }}
        fullWidth
        type="text"
        {...messageProps}
      />
    </ChatBox>
  );
};
