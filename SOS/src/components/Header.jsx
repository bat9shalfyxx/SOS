import { Link } from "react-router-dom";

const Header = () => {
    return (
            <header className="header" id="main">
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

                <div className="header-content">
                    <h1>SURVIVE AT ALL COSTS</h1>
                    <h3>Experience new social battle royale game</h3>
                    <div className="main-button">
                        <a href="#!">Buy Now on Steam <span>$14.99</span></a>
                    </div>

                    <div className="header-scroll-down">
                        <Link to="/about">
                            <h5>The story</h5>
                        </Link>

                        <Link to="/about">
                            <img src="../../img/icons/scroll down.svg" alt="scroll down" />
                        </Link>
                    </div>
                </div>
            </header>
    )
}

export default Header;