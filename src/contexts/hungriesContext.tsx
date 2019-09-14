import * as React from 'react';
import * as io from 'socket.io-client';

type State = 'MATCHING' | 'SESSION' | null;

export interface HungriesContext {
  state: State;
  startMatching: (payload: SessionStartPayload) => Promise<void>;
}

interface SessionStartPayload {
  name: string;
  time: 'NOW' | 'SOON';
}

const hungriesContext = React.createContext<HungriesContext>({} as any);

export const HungriesContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const [state, setState] = React.useState<State>(null);
  const [client, setClient] = React.useState<SocketIOClient.Socket>();

  const startMatching = React.useCallback(
    async (payload: SessionStartPayload) => {
      const socket = io('http://hungrie.herokuapp.com/');
      socket.emit('session', payload);

      setClient(socket);
      setState('MATCHING');
    },
    []
  );

  const context = React.useMemo(
    () => ({
      startMatching,
      state
    }),
    [state]
  );

  return (
    <hungriesContext.Provider value={context}>
      {props.children}
    </hungriesContext.Provider>
  );
};

export default hungriesContext;
