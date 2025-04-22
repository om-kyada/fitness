import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './features/login/container/login';
import Dashboard from './features/dashboard/container/dashboard';
import useAuthStore from './shared/store/authStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            isAuthenticated ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/dashboard"
          render={() =>
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        {/* Add more protected routes as needed */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
