import { Link } from "react-router-dom"

const Main = () => {
    return (
        <div className="header">
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
        </div>
    )
}

export default Main;