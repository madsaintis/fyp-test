import React from "react";
// import { Nav, NavLink, NavMenu }
//     from "./NavbarElements";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './navbar.css';

const links = [
    {
        path: '/',
        label: 'Home',
        exact: true,
    },
    {
        path: '/contact',
        label: 'Setting',
        exact: false,
    },
    {
        path: '/login',
        label: 'Login',
        exact: false,
    },
];

const Navbar = () => (
    <div className="NavigationBar">
        <div className="title"><h1>SC Activity Board</h1></div>
        <ul>
            {links.map(({ path, label, exact }) => (
                <li key={label}>
                    <NavLink
                        to={path}
                        exact={exact}
                        className="navLink"
                    // ActiveClassName="hover: hover:bg-blue-100 py-1 px-2 rounded-md cursor-pointer color:RED"
                    >
                        <h3>{label}</h3>
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

// const Navbar = () => {
//     return (

//         <Nav>
//             <div className="title"><h1></h1>SC ACTIVITY BOARD</div>
//             <NavMenu>

//                 <NavLink to="/about">
//                     About
//                 </NavLink>
//                 <NavLink to="/contact" exact activeStyle={{ color: "red" }}  >
//                     Contact Us
//                 </NavLink>
//                 <NavLink to="/login">
//                     Login
//                 </NavLink>
//                 <NavLink to="/sign-up">
//                     Sign Up
//                 </NavLink>
//             </NavMenu>
//         </Nav>
//     );
// };

export default Navbar;