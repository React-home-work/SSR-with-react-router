import React from "react";
import Grid from "./Grid";
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import NoMatch from './NoMatch';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
        {routes.map(({ path, exact, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => (
              <C {...props} {...rest} data={this.props.data}/>
            )}
          />
        ))}
        <Route render={(props) => <NoMatch {...props}/>}/>
        </Switch>
      </div>
    );
  }
}
