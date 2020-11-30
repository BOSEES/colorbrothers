import styles from './app.module.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ColBro from "./components/colbro/colbro";
import Register from "./components/register/register";
import Mypage from "./components/mypage/mypage";
import Detail from "./components/detatil/detail";

function App() {
  return (
    <div className={styles.app}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ColBro />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
