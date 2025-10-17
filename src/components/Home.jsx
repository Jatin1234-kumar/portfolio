import React from "react";
import personal from "../data/personal";
const Home = () => (
  <section id="home" className="section home-section">
    <h1>
      Hi, I'm 
      <span className="neon">{personal.name}</span>
    </h1>
    <h2>{personal.tagline}</h2>
    <p>{personal.bio}</p>
  </section>
);
export default Home;
