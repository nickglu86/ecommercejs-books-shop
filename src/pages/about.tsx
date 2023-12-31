import React from "react";
import { AboutSection, AboutBox, AboutPharagraph} from "../styles/AboutStyles";
import MindImg from "../assets/images/mind.png";

const About = () => {

  return (
    <main>
      <AboutSection>
        <AboutBox>
          <p>
            Welcome to Master Mind Books, your ultimate destination for
            inspiring literature. We are more than just an online bookstore – we
            are a community of thinkers, dreamers, and seekers of knowledge. Our
            carefully curated collection of books spans the realms of
            psychology, philosophy, personal growth, and more.
          </p>

          <AboutPharagraph>
            <div>
            <p>
              At Master Mind Books, we believe in the power of words to ignite
              change and transform lives. Our mission is to provide you with a
              diverse selection of titles that not only expand your mind but
              also nourish your soul.
            </p>
            Whether you&sbquo;re delving into the depths of
              human psychology or exploring the mysteries of philosophy, our
              collection is designed to stimulate your intellect and foster
              personal development.
            </div>

            <img src={MindImg} alt={"mind"} />
          </AboutPharagraph>
          <p>
            Join us on a journey of exploration and self-discovery. Browse our
            catalog to find gems of wisdom that will inspire and enlighten you.
            We&sbquo;re not just a bookstore – we&sbquo;re your companions on the path to
            knowledge and enlightenment. Thank you for choosing Master Mind
            Books as your source for thought-provoking literature.
          </p>
        </AboutBox>
      </AboutSection>
    </main>
  );
};

export default About;
