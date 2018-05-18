import * as React from 'react';
import * as c from 'classnames';
import * as ErrorIcon from 'react-icons/lib/md/error-outline';

import Text from '../Text';
const css = require('./NetworkStatus.scss');

export default class NetworkStatus extends React.PureComponent {
  state: {
    online: boolean;
  } = {
    online: true
  };

  updateNetworkStatus = () => {
    this.setState({ online: navigator.onLine });
  };

  componentDidMount() {
    this.updateNetworkStatus();
  }

  componentWillMount() {
    window.addEventListener('online', this.updateNetworkStatus);
    window.addEventListener('offline', this.updateNetworkStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateNetworkStatus);
    window.removeEventListener('offline', this.updateNetworkStatus);
  }

  render() {
    const { online } = this.state;

    return (
      <div className={c(css.offline, !online && css.active)}>
        <ErrorIcon />&nbsp;<Text id="offline" />
      </div>
    );
  }
}
