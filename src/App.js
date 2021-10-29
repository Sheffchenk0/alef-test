import { lazy } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const Preview = lazy(() => import('./Pages/Preview/Preview'));
const Form = lazy(() => import('./Pages/Form/Form'));

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/preview" render={() => <Preview />} />
          <Route path="/" render={() => <Form />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
