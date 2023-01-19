import "../components/css/Resume.css"
import { useState } from "react";

function Resume() {
  const [text, setText] = useState("Check out my CV and projects");

  const handleProjectsClick = () => {
    setText(
    <p>
      E-shop that I built during a course, feel free to register with non-correct information to gain access to admin panel.
      It does not have any css, it rather shows what kind of functions I have learned and have experience with so far.
      <br/>
      <a href="https://myrugs.web.app/" rel="noreferrer" target="_blank">Link</a>
      <br/><br/>

      A display page that is used by a company. I also dealt with the hosting and domain.
      <br/>
      <a href="https://xn--jmmi-loa.ee/" rel="noreferrer" target="_blank">Link</a>
      <br/><br/>

      Non-deployed code on GitHub.
      <br/>
      <a href="https://github.com/ErikErtmann?tab=repositories" rel="noreferrer" target="_blank">Link</a>
    </p>
    );
  };

  const handleCVClick = () => {
    setText(
      <p>
        You can check out my CV (in Estonian) 
        <a href="https://www.cvkeskus.ee/cvs/2023/03/2373824-15febed3.pdf" rel="noreferrer" target="_blank"> here.</a>
        .
      </p>);
  };

    return (
      <div className="resume-container">
        
        <div className="resumecap-container">
          <div className="resumecap">
            <h1 className="title">
              Resume
            </h1>
          </div>
        </div>

        <div className="resume-menu-container">
          <div className="resume-sub-menu">
            <h3 className="resumemorelinks" onClick={handleProjectsClick}>
              Projects
            </h3>
            <h3 className="resumemorelinks" onClick={handleCVClick}>
              My CV
            </h3>
          </div>
        </div>  

          <div className="resume-text-container">
            <div className="resume-parag">
                <p>
                  {text}
                </p>
            </div>
          </div>    
        
      </div>

      );
}

export default Resume;