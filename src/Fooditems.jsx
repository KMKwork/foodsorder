import React, { useState } from "react";
import feed from "./feed.json";
import Car from "../public/assets/burger.jpeg";
// require("./assets/"+it[i])

function Fooditems() {
  const it = [
    "../public/assets/burger.jpeg",
    "../public/assets/burger.jpeg",
    "../public/assets/burger.jpeg",
    "../public/assets/burger.jpeg"
  ];
  const oreder = ["burger", "fries", "coke", "pepsi"];
  const [i, seti] = useState([]);
  function add(e) {
    const f = e.target.value;
    seti((prev) => {
      return [...prev, oreder[f]];
    });
    console.log(i);
  }
  return (
    <>
      <div className="cont">
        {feed.map((item, i) => (
          <div class="card">
            <img src={require(it[i])} alt="Avatar" />
            <div class="container">
              <h4>
                <b>{item.name}</b>
              </h4>
              <p>Price :{item.price}</p>
              <div className="but">
                <button id="plus" value={i} onClick={add}>
                  +
                </button>
                <button id="minus">-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Fooditems;
