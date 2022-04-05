import React from "react";
import Links from "./Links"
function About(props) {
  console.log(props)

  const showBio = () => {
    console.log(props)
    const hasBio = props.bio
    if (hasBio) {
      return <p>{props.bio}</p>
    }
    return null
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {showBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
