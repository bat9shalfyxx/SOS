const About = () => {
    return (
            <section className="main about" id="about">
                <div className="about-title">
                    <h3>What is sos?</h3>
                    <h1>social battle royale game</h1>
                    <hr className="about-hr" />
                </div>
                <div className="about-content">
                    <div className="content-text">
                        <p>
                            Each round, <b>you</b> and <b>15</b> other contestants compete to escape a deadly island
                            filled with monsters. The trick is: <b>three</b> people can survive. Will you run solo or
                            form friendships with others to escape?
                        </p>
                        <p>Making the right decisions could be the difference between <u>life and death.</u></p>
                    </div>
                    <div className="slider-container">
                        <img src="../../img/gallery/img_1.png" alt="" className="slider-img" />
                    </div>
                </div>
            </section>
    )
}

export default About;