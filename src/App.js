import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Calendar from "./components/CalendarPage/Calendar";
import EventsSpace from "./components/EventsSpacePage/EventsSpace";
import Academies from "./components/AcademiesPage/Academies";
import Footer from "./components/Footer/Footer";
import Coworking from "./components/Homepage/Coworking/Coworking";
import ErrorPage from "./components/ErrorPage/ErrorPage";

import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/coworking" component={Coworking} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/academies" component={Academies} />
          <Route path="/events_space" component={EventsSpace} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
