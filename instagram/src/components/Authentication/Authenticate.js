import React from 'react';
import Login from '../Login/Login';

// const Authenticate = App => Login => props => {
//   return props.loginVerified ? <App /> : <Login />;
// };

const Authenticate = App => Login =>
  class extends React.Component {
    state = {
      loginVerfied: false
    };

    componentDidMount() {
      const user = localStorage.getItem('username');

      if (user) {
        this.setState({
          loginVerfied: true
        });
      } else {
        this.setState({
          loginVerfied: false
        });
      }
    }

    logout = () => {
      return this.state.loginVerfied ? localStorage.clear() : null;
    };
    render() {
      return (
        <React.Fragment>
          {this.state.loginVerfied ? <App logout={this.logout} /> : <Login />}
        </React.Fragment>
      );
    }
  };

export default Authenticate;
