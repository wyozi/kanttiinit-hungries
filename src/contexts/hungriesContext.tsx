import * as React from 'react';
import * as io from 'socket.io-client';

type State = 'MATCHING' | 'SESSION' | null;

interface HungriesContext {
  state: State;
  startMatching: (payload: SessionStartPayload) => Promise<void>;
}

interface SessionStartPayload {
  name: string;
  time: number;
}

const hungriesContext = React.createContext<HungriesContext>({} as any);

export const HungriesContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const [state, setState] = React.useState<State>(null);
  const [client, setClient] = React.useState<SocketIOClient.Socket>();

  const startMatching = React.useCallback(
    async (payload: SessionStartPayload) => {
      const socket = io('todo url');
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
    []
  );

  return (
    <hungriesContext.Provider value={context}>
      {props.children}
    </hungriesContext.Provider>
  );
};

export default hungriesContext;
