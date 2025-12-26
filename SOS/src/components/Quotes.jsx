import Quote from "./Quote";

const Quotes = () => {
    return (
        <section className="main quotes" id="quotes">
            <div className="quotes-content">
                <h3>What people think?</h3>
                <h1>Press quotes</h1>
                <p>
                    Our goal is to create a product and service that you’re satisfied with and use it every day.
                    This is why we’re constantly working on our services to make it better every day and really
                    listen to what our users has to say.
                </p>
                <div className="main-button">
                    <a href="#!">Read more testimonials</a>
                </div>
            </div>
            
            <Quote
                cardClassName="first-card"
                authorName="Evan Lahti"
                authorStatus="PC Gamer"
                quote="“One of my gaming highlights of the year.”"
                date="October 18, 2018"
            />
            
            <Quote
                cardClassName="second-card"
                authorName="Jada Griffin"
                authorStatus="Nerdreactor"
                quote="“The next big thing in the world of streaming and survival games.”"
                date="December 21, 2018"
            />
            
            <Quote
                cardClassName="third-card"
                authorName="Aaron Williams"
                authorStatus="Uproxx"
                quote="“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”"
                date="December 24, 2018"
            />
        </section>
    )
}

export default Quotes;