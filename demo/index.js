import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import VkLogin from '../src/vk-button';

const responseVk = response => {
  console.log(response);
};

class Base extends Component {
  render() {
    return (
      <div>
        <Link to="/dummy">Route to dummy page</Link>
        <div>
          <p>VK login with render prop (and no styling provided out the box)</p>
          <VkLogin
            apiId="5376167"
            callback={responseVk}
            render={renderProps => (
              <button onClick={renderProps.onClick}>
                This is my custom VK button
              </button>
            )}
          />
        </div>
      </div>
    );
  }
}

class Dummy extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>This is just a dummy page to test the button</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Base} />
    <Route path="/dummy" component={Dummy} />
  </Router>,
  document.getElementById('demo'),
);
