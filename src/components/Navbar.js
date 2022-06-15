import { NavLink } from 'react-router-dom';

import { AiOutlineHome, AiOutlineDollar } from 'react-icons/ai';
import { MdLogin } from 'react-icons/md';
import { BsPiggyBank } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

import './navbar.css';

const Navbar = () => {

    return (
        <nav className="nav navbar">
            <ul>
                <li>
                    <NavLink className="navlink" activeClassName="active" to="/">
                        <AiOutlineHome className="icon" /><br/>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink" activeClassName="active" to="/income">
                        <MdLogin className="icon" /><br/>
                        Income
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink" activeClassName="active" to="/expenses">
                        <AiOutlineDollar className="icon" /><br/>
                        Expenses
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink" activeClassName="active" to="/savings">
                        <BsPiggyBank className="icon" /><br/>
                        Savings
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink" activeClassName="active" to="/account">
                        <BiUser className="icon" /><br/>
                        Account
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;