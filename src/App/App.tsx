import React, { useEffect } from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import { history } from '../_helpers/history'
import { alertClear } from '../_actions/alert.actions'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    history.listen(() => {
        dispatch(alertClear());
    });
  }, [dispatch]);

  return (
    <div className="jumbotron min-vh-100 mb-0">
      <div className="container">
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
