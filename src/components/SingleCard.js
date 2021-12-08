import React from "react";

function SingleCard(cardMessage) {
    const { date, text, transactionId } = cardMessage["card"];
    var myDate = new Date(date * 1000);
    return <div className="ppc-card" >
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
            <div className="col">
                <a
                    href={"https://blockbook.peercoin.net/tx/" + transactionId}
                    target="_blank"
                    rel="noreferrer"
                    className="ppc-timeline_source"
                >
                    Transaction
                </a>
            </div>
        </div>
    </div>
}

export default SingleCard;