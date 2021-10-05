import "./App.css";

// Importing Router form react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Importing all components
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/about/us">
            <About></About>
          </Route>
          <Route path="/contact/us">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
