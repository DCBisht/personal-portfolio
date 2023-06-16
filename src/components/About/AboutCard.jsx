import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I'm Divya Chakshu Bisht a final year student at VIT Bhopal Computer Science Department. I was born and raised in Almora. I like to travel. I believe travelling gives you a new perspective to everything. You get to know a lot about the different cultures, the cuisines, their history, the language and all the small unique things every place has to offer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Divya Chakshu Bisht.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
