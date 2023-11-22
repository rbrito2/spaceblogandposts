import React from "react";
import music from "../assets/music-player-fill.svg";
import rocket from "../assets/rocket-takeoff-fill.svg";
import "../css/Landing.css";

function Landing() {
  return (
    <>
      <main className="container">
        <div className="p-5 p-md-5 mb-4 rounded text-body-emphasis">
          <div className="col-lg px-0 ">
            <h1 className="text-center fw-bold fs-1">
              Computer Software Engineer
            </h1>
            <p className="lead my-3 text-center text-secondary">
              Embedded software | Software Development | Machine learning
            </p>
          </div>
        </div>
        <div className="row-md-4 bg-body-seconday">
          <h2 className="fst-italic border-bottom"> About</h2>
          <p className="col-md-8">
            Proficient in a variety of programming languages like C++, and
            python. I am a versatile computer software engineer looking to work
            with embedded systems software and machine learning. I am always
            looking for opportunities to learn new things and start new
            projects.
          </p>
        </div>
        <div className="row g-5 ">
          <div className="col-sm-4">
            <div className="card card-style shadow-sm">
              <div className=" card-title text-center fs-2"> </div>
              <img className="card-img-top bg-secondary" src={music} />
              <div className="card-body">
                <p className="card-text text-center">
                  Favourite Podcasts
                  <ul className="list-group flush">
                    <li className="list-group-item text-center text-secondary">
                      Software Engineering Radio
                    </li>
                    <li className="list-group-item text-center text-secondary">
                      Breaking Math Podcast
                    </li>
                    <li className="list-group-item text-center text-secondary">
                      NASA's Curious Universe
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card card-style shadow-sm">
              <div className=" card-title text-center fs-2"> </div>
              <img className="card-img-top bg-secondary" src={rocket} />
              <div className="card-body">
                <p className="card-text text-center">
                  Robotic space systems have always amazed me and working on
                  these systems is my goal. I have worked on a 3U cubesat in
                  past on the OBC subsystem
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <h3 className="text-right fst-italic">Descriptions</h3>
            <p> check out the following sections:</p>
            <ul className="list-group flush">
              <li className="list-group-item text-center text-secondary">
                Software and Computers to learn more about some of the projects
                that I am interested in or currently working on.
              </li>
              <li className="list-group-item text-center text-secondary">
                Machine learning which focuses on all things machine learning.
                That includes computer vision and more recently reinforcment
                learning
              </li>
              <li className="list-group-item text-center text-secondary">
                Articles and research, a space where I talk about recent
                research and further reflections on the work I have done
              </li>
            </ul>
          </div>
        </div>
        <div className="row md-8">
          <div className="col-md-8">
            <h2 className="border-bottom"> Focus </h2>
            <p>Content to come!</p>
            <p></p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Landing;
