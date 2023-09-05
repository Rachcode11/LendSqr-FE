import React from "react";
import { details } from "./CardData";
import "./Card.scss";



const Card = () => {
  return (
   <div className="card_container">
    {
        (details.map((item) =>(
            <div key={item.id} className="card">
                <div className="card-content">
                <img src={item.image} alt="" />
                <h5>{item.title}</h5>
                <h5>{item.amount}</h5>
                </div>
            </div>
        )))
    }

   </div>
  );
};

export default Card;
