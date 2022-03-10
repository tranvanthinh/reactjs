import logo from './logo.svg';
import './App.scss';
import StateComponent from './Example/StateComponent'
import FormInput from './Example/MyComponent'
import ChildComponent from './Example/ChildComponent'
import HookFc from './Example/HookFc'
import MyComponent from './Example/MyComponent'
import ListTodo from './Todos/ListTodo'
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Nav from './Navigation/Nav'
import Home from './Example/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todos">
              <ListTodo />
            </Route>
            <Route path="/mycomponent">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
        </Switch>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
