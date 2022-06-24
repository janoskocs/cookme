import logo from '../img/cookmelogo500.png'

const Nav = () => {
    return (
        <nav>
            <img src={logo} alt="Logo of CookMe" />
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/create">New blog</a>
                <a href="/about">About</a>
            </div>
        </nav>
    )
}

export default Nav