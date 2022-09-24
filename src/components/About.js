import React from "react";
import Links from "./Links";


function About({bio, links}) {
  function bioData(){
    if (bio && bio.length > 1){
      return <p>{bio}</p>;
    } else {
      return null;
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bioData()}</p>    
     
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
