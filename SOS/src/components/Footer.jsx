import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="footer">
            <div className="img-container">
                <img className="footer-img" src="../../img/other/image.png" alt="Q" />
            </div>
            <div className="footer-content">
                <h3>Want to stay in touch?</h3>
                <h1>newsletter SUBSCRIBE</h1>
                <p>
                    In order to start receiving our news, all you have to do is enter your email address. Everything
                    else will be taken care of by us. We will send you emails containing information about game. We
                    don’t spam.
                </p>
                <div className="footer-input-button">
                    <div className="footer-input" id="input">
                        <h6>Your email address</h6>
                        <input type="text" placeholder="Input your email here" />
                    </div>
                    <button className="main-button"><a href="#!">Subscribe now</a></button>
                </div>
            </div>
            <div className="footer-footer">
                <div className="footer-nav">
                    <a href="#!"><img className="footer-main-logo" src="../../img/icons/logo.png" alt="logo" /></a>
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
                    <aside className="footer-aside">
                        <a href="#!"><img src="../../img/icons/facebook.svg" alt="facebook" /></a>
                        <a href="#!"><img src="../../img/icons/twitter.svg" alt="twitter" /></a>
                        <a href="#!"><img src="../../img/icons/Vector.svg" alt="YouTube" /></a>
                        <a href="#!"><img src="../../img/icons/twitch.svg" alt="twitch" /></a>
                    </aside>
                </div>
                <hr className="footer-hr" />
                <div className="footer-under">
                    <h6>© 2018 Outpost Games, Inc. All Rights Reserved</h6>
                    <h5>Privacy Policy | Terms of Services | Code of Conduct</h5>
                </div>
            </div>
        </section>
    )
}

export default Footer;