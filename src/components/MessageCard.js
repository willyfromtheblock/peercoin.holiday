import React, { useEffect, useState } from "react";
import Loader from "./common/loader";
import LogoAndSanta from "./common/LogoAndSanta";
import SingleCard from "./SingleCard";

function MessageCard() {
    const [cardMessage, setCardMessage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchMessage(window.location.pathname.split('/')[2]);
    }, []);

    const fetchMessage = async txId => {
        try {
            await fetch(`https://core.peercoin.holiday/singleMessage/${txId}`)
                .then(response => response.json())
                .then(data => {
                    setIsLoading(false);
                    setCardMessage(data);
                });
        } catch (error) {
            setIsLoading(false);
        }
    };

    return <div className="row ppc-hero">
        <div className="col-12 d-flex flex-column ppc-background justify-content-center align-items-center">
            <div className="container-fluid">
                <LogoAndSanta isCard={true} />
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <div className="m0 ppc-wishes mb-5">
                        <strong>Holiday wishes</strong>
                    </div>
                </div>
            </div>
            {isLoading === false ?
                <div className="row justify-content-center">
                    {cardMessage["date"] != null ?
                        <SingleCard card={cardMessage} /> :
                        <div className="ppc-card_error"><h3>Error: Message Not found</h3></div>}
                </div>
                : <Loader />}
        </div>
    </div>
}

export default MessageCard;