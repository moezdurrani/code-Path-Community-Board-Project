import React from "react";
import './sportstyle.css';

const Sport = ({name, date, link, image}) => {
    return (
        <div className="sportEvent">
            <img src={image} alt="" />
            <div className="details">
                <h3>{name}</h3>
                <p>Date: {date}</p>
                <a href={link} className="eventButton">View Event</a>
            </div>
        </div>
    )
}

export default Sport;