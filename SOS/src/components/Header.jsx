import { Link } from "react-router-dom";

const Header = () => {
    return (
            <header>
                <div className="header-nav">
                    <Link to={"/"}>
                        <img src="../../img/icons/logo.png" alt="logo" />
                    </Link>

                    <nav className="nav">
                        <ul className="nav-lsit">
                            <Link to="/">
                                <li className="nav-link">
                                    <h5>MAIN</h5>
                                </li>
                            </Link>

                            <Link to="/about">
                                <h5>ABOUT</h5>
                            </Link>

                            <Link to="/features">
                                <h5>GAME FEATURES</h5>
                            </Link>

                            <Link to="/requirements">
                                <h5>System requirements</h5>
                            </Link>

                            <Link to="/quotes">
                                <h5>quotes</h5>
                            </Link>
                        </ul>
                    </nav>

                    <aside className="header-aside">
                        <select name="langs" id="select-lang">
                            <option value="eng">ENG</option>
                            <option value="rus">RUS</option>
                            <option value="fra">FRA</option>
                            <option value="deu">DEU</option>
                        </select>
                        <hr className="vertical-line" />
                        <a href="#!"><img src="../../img/icons/xbox icon.svg" alt="icon" /></a>
                        <a href="#!"><img src="../../img/icons/steam icon.svg" alt="steam" /></a>
                    </aside>
                </div>
            </header>
    )
}

export default Header;