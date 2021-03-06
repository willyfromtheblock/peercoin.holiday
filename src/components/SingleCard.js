import React from "react";

function SingleCard(cardMessage) {
    const { date, text, transactionId } = cardMessage["card"];
    var myDate = new Date(date * 1000);
    return <div className="ppc-card" >
        <div className="ppc-card_icon">
            <img src="../assets/img/xmas_tree.svg" alt="christmas tree" />
        </div>
        <div className="row">
            <div className="col-1">
                <img src="../assets/img/calendar.png" alt="calendar" />
            </div>
            <div className="col-auto">
                <div>{myDate.toLocaleString("en-GB", { timeZone: "UTC" })}</div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <span className="ppc-timeline_text">&laquo; {text} &raquo;</span>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-auto">
                <a
                    href={"https://blockbook.peercoin.net/tx/" + transactionId}
                    target="_blank"
                    rel="noreferrer"
                    className="ppc-timeline_source"
                >
                    Transaction
                </a>
            </div>
            {/* <div className="col-auto">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/intent/tweet?text=Hello%20world"
                    className="ppc-timeline_source">
                    Tweet</a>

            </div> */}

        </div>
    </div>
}

export default SingleCard;