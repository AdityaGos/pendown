import { BrowserRouter , Route, Switch } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import CreateNote from "./screens/CreateNote/CreateNote";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import MyNotes from "./screens/MyNotes/MyNotes";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
       <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/login" component={LoginScreen}  />
      <Route path="/register" component={RegisterScreen}  />
      <Route path="/create" component={CreateNote}  />
          <Route path="/mynotes"component={MyNotes}/>
          </Switch>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
