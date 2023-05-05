import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const Quote = () => <h2>Quote</h2>;
const Calculator = () => <h2>Calculator</h2>;

const Navbar = () => (
  <div>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/quote" activeClassName="active">Quote</NavLink>
        </li>
        <li>
          <NavLink to="/calculator" activeClassName="active">Calculator</NavLink>
        </li>
      </ul>
    </nav>

    <Route exact path="/" component={Home} />
    <Route path="/quote" component={Quote} />
    <Route path="/calculator" component={Calculator} />
  </div>
);

export default Navbar;
