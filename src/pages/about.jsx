import React from "react";
import "./About.css";
import Elzari from "../assets/photos/elzari-photo.jpg";

export default function About() {
  return (
    <div className="About">
      <div className="about-wrapper">
        <div className="img-wrapper">
          <img
            src={Elzari}
            alt="Elzari Headshot"
            className="elzari-headshot img-fluid float-end"
          />
        </div>
        <p>Hi, I’m Elzari – the heart behind Sweet Celebrations!</p>{" "}
        <p>
          Sweet Celebrations is my dream turned into reality. I’ve always loved
          planning, organizing, and creating beautiful events—but even more,
          I’ve always loved children and the joy that special moments bring
          them.
        </p>{" "}
        <p>
          What inspires me is knowing that these celebrations become memories
          children carry with them forever. Time goes by so fast, and I believe
          every birthday, every milestone, every party deserves to be celebrated
          in a big, meaningful way.
        </p>{" "}
        <p>
          That’s why I started Sweet Celebrations: to help parents create
          magical occasions without the stress, and to make sure children feel
          truly special on their big day. I pour my heart into every detail,
          because I know how important these moments are.
        </p>{" "}
        <p>
          When you choose Sweet Celebrations, you’re not just getting décor and
          planning—you’re getting someone who genuinely cares about making your
          child’s day unforgettable.
        </p>{" "}
        <p>Let’s celebrate your little one’s big day together.</p>{" "}
        <p className="sign-off">💖 With love, Elzari</p>
      </div>
    </div>
  );
}
