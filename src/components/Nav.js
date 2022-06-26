import logo from '../img/cookmelogo500.png'
import {
    Routes,
    Router,
    Link,
    Outlet,
} from "react-router-dom";
const Nav = () => {
    return (
        <>
            <nav>
                <img src={logo} alt="Logo of CookMe" />
                <h1>CookMe</h1>
                <div className="nav-links">
                    <Link to='/'>Home</Link>
                    <Link to='/create'>Create</Link>
                    <Link to='/about'>About</Link>
                </div>
            </nav>

        </>

    )
}

export default Nav