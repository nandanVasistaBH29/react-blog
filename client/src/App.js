import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import SinglePostPage from "./pages/singlePostPage/SinglePostPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context);
  return (
    <>
      {/* in latest react router dom we have switches as Routes and Route will be auto closing tag like
    <Route element={component}/> nandan1234*/}
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/login">
            {user ? <Home /> : <Login />}
          </Route>
          <Route exact path="/write">
            {user ? <Write /> : <Register />}
          </Route>
          <Route exact path="/settings">
            {user ? <Settings /> : <Register />}
          </Route>
          <Route path="/post/:id">
            <SinglePostPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
