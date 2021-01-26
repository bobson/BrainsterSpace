import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Calendar from "./pages/Calendar";
import EventsSpace from "./pages/EventsSpace";
import Academies from "./pages/Academies";
import Footer from "./components/Footer";
import Coworking from "./components/Coworking";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/coworking" component={Coworking} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/academies" component={Academies} />
          <Route path="/events_space" component={EventsSpace} />
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
