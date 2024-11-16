import React from "react";
import "./Menu.css";
import { starters, mainCourse, liveCounter, sweets, breads } from "./data";

export default function Menu() {
  const renderList = (items) =>
    items.map((item, index) => <li key={index} className="list-item">{item}</li>);

  return (
    <div className="ccontainer">
      
      <div className="inner_list">
      <h2>Menu</h2>
        <div className="dishes">
          <h3>Starters</h3>
          <ul className="ui_items">{renderList(starters)}</ul>
        </div>
        <div className="dishes">
          <h3>Main Course</h3>
          <ul className="ui_items">{renderList(mainCourse)}</ul>
        </div>
        <div className="dishes">
          <h3>Live Counter</h3>
          <ul className="ui_items">{renderList(liveCounter)}</ul>
        </div>
        <div className="dishes">
          <h3>Sweeets</h3>
          <ul className="ui_items">{renderList(sweets)}</ul>
        </div>
        <div className="dishes">
          <h3>Breads</h3>
          <ul className="ui_items">{renderList(breads)}</ul>
        </div>
      </div>
    </div>
  );
}
