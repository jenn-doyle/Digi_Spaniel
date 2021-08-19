import css from "./NavBar.module.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

function NavBar() {
  return (
    <Router>
      <div className={css.navFlex}>
        <nav className={css.linkFlex}>
          <NavLink
            to={"/"}
            exact
            className={css.links}
            activeClassName={css.active}
          >
            Services
          </NavLink>
          <NavLink
            to={"/work"}
            className={css.links}
            activeClassName={css.active}
          >
            Work
          </NavLink>
          <NavLink
            to={"/about"}
            className={css.links}
            activeClassName={css.active}
          >
            About
          </NavLink>
          <NavLink
            to={"/blog"}
            className={css.links}
            activeClassName={css.active}
          >
            Blog
          </NavLink>
          <NavLink
            to={"/contact"}
            className={css.links}
            activeClassName={css.active}
          >
            Contact
          </NavLink>
        </nav>
      </div>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}

      {/* <Switch>
                <Route path="/work">
                  <Work />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/">
                  <Services />
                </Route>
              </Switch> */}
    </Router>
  );
}

export default NavBar;
