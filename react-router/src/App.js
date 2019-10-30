import React from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Menu from './components/menu';
import BodyContainer from './components/bodyContainer';
import App from './pages/Home/index';
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
/*

function App() {
  return (

    <>
      <Router>
        <Menu />
        <BodyContainer />
      </Router>  
    </> 
  );
}

export default App;
*/