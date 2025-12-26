const Quote = ( props ) => {
    return (
        <div className={`quotes-card ${props.cardClassName}`}>
            <div className="quotes-card-header">
                <img className="quoter-img" src="../../img/quotes/img_3.jpg" alt="quote" />
                <span>
                    <h2>{props.authorName}</h2>
                    <br />
                    <h6>{props.authorStatus}</h6>
                </span>
                <img className="quoter-icon" src="../../img/icons/twitter.svg" alt="twitter" />
            </div>
            <p>{props.quote}</p>
            <h6><span>{props.date}</span></h6>
        </div>
    )
}

export default Quote;