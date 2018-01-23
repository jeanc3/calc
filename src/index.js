import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const WrappedApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
registerServiceWorker();
