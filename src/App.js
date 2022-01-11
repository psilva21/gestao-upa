import { Login } from "./pages/login";
import { Dashboard } from './pages/dashboard';
import { ForgotPassword } from './pages/forgot-password';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

