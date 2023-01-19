import "../components/css/About.css"
import { useState } from 'react';

function About() {
  const [text, setText] = useState("Hi! My name is Erik and I am a self-taught programmer with a passion for creating beautiful and functional websites.");

  const handleIntroductionClick = () => {
    setText(
    <p>
      I have been learning to code for almost a year now, and I have gained 
      experience in a number of programming languages, including CSS, Python, 
      JavaScript, and React. I am always looking to expand my skillset and 
      take on new challenges, and I believe that my dedication and hard work 
      have helped me to become a proficient and reliable developer.<br/><br/>
      In my free time, I enjoy staying up-to-date with the latest trends and 
      techniques in web development, I am constantly learning and experimenting 
      with new technologies.<br/><br/>
      I am excited to share my work with you, and I hope that my portfolio gives
      you a sense of my abilities and style as a developer. Thank you for taking 
      the time to visit my website, and please don't hesitate to contact me if you 
      have any questions or if you would like to work together.
    </p>
    );
  };

  const handleCoursesClick = () => {
    setText(
    <p>
      "JavaScript & React: nullist front-end spetsialistiks intensiivõpe"<br/> by Aurora development <br/><br/>
      "Tehnoloogia tarbijast loojaks"<br/>by Tartu Ülikooli arvutiteaduse instituudi täiendusõppeprogramm, exam result 83.75% <br/><br/>
      "Python"<br/>by Teamtreehouse <br/><br/>
      "Tartu Ülikooli matemaatika ja statistika instituudi täiendusõpe"<br/>by Tartu Ülikool <br/>
    </p>);
  };

  const handleEducationClick = () => {
    setText(
      <p>
        Tartu Kristjan Jaak Petersoni Gümnaasium 09/2016-06/2019
      </p>);
  };
    return (
        <div className="about-container">

          <div className="cap-container">
            <div className="cap">
              <h1 className="title">
                About Me
              </h1>
            </div>
          </div>

          <div className="menu-container">
            <div className="sub-menu">
              <h3 className="aboutmorelinks" onClick={handleIntroductionClick}>
                Introduction
              </h3>
              <h3 className="aboutmorelinks" onClick={handleCoursesClick}>
                Courses
              </h3>
              <h3 className="aboutmorelinks" onClick={handleEducationClick}>
                Education
              </h3>
            </div>
          </div>

          <div className="text-container">
            <div className="parag">
              <p>
                {text}
              </p>
            </div>
          </div>
          
        </div> /*about-container lõpp */
    );
}

export default About;