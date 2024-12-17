import React from "react";

const button = <button href="#">Yes</button>;

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <h1>zero9: The one place to go to for all of Zach's Projects 😌</h1>
        <h2>I wanted to make one place to try out all my projects so....</h2>
      </div>
      <div className="container">
        <h1>Productivity</h1>
        <a className="btn" href="#">
          Tasks
        </a>
        <br />
        <h1>Games</h1>
        <a className="btn" href="#">
          Cat Quest
        </a>
        <a className="btn" href="#">
          FireFight
        </a>
      </div>
    </div>
  );
};

export default MainContainer;
