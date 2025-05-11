import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Food at our restaurant is crafted with passion, using only the freshest ingredients to deliver a memorable dining experience. Our diverse menu blends traditional flavors with modern twists, offering something for every palate—from rich, aromatic curries to light, refreshing salads and hearty grilled dishes. Each plate is prepared to perfection, emphasizing quality, presentation, and taste. Whether you're in the mood for a comforting classic or a bold new flavor, our food promises satisfaction in every bite.
            </p>
            <Link
            to="menu"
            smooth={true}
            duration={500}
            >
             Explore Menu <span><HiOutlineArrowRight /></span>
            </Link>

          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;