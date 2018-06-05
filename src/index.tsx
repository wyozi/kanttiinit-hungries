import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import bugsnag from 'bugsnag-js';
import createPlugin from 'bugsnag-react';

import 'url-polyfill';

import './utils/globalHooks';
import './worker/registerWorker';
import App from './components/App';
import Text from './components/Text';

const useBugSnag = !!process.env.BUGSNAG_API_KEY;

let bugsnagClient;
if (useBugSnag) {
  bugsnagClient = bugsnag(process.env.BUGSNAG_API_KEY);
}
const ErrorMessage = () => <Text component="p" id="errorDetails" />;

export const ErrorBoundary = useBugSnag
  ? bugsnagClient.use(createPlugin(React))
  : ({ children }) => children;

render(
  <ErrorBoundary FallbackComponent={ErrorMessage}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root')
);
