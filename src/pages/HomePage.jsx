import "../components/css/HomePage.css";

function HomePage() {
    return (
    <div className="home" id="home">
      <div className="homepage-container">
       <div className="box"> {/* dont delete this */}
        
        <div className="nameicons"> {/* nimi, nime all inf + socials box */}
          
          <div className="name-info">
            <div className="fullname">Erik Ertmann</div>
            <div className="infobelowname">I'm a passionate front-end developer from Tartu, Estonia</div>
          </div>

            <div className="socials">
              <a href= "https://www.linkedin.com/in/erik-ertmann-ab330322b/" rel="noreferrer" target="_blank">
              <img className="social" src={require("../images/linkedincolour.png")} alt=""/>
              </a>
              <a href= "https://github.com/ErikErtmann" rel="noreferrer" target="_blank">
              <img className="social" src={require("../images/ajutinegithubcolour.png")} alt=""/>
              </a>
              <a href= "https://www.facebook.com/ErikErtmann/" rel="noreferrer" target="_blank">
              <img className="social" src={require("../images/facebookcolour.png")} alt=""/>
              </a>
            </div>

          </div>

        </div>
        <img className="flexbox-item-image" src="https://www.upload.ee/image/14747181/319172197_886314719228597_8227624229910881166_n-removebg-preview.png" alt="ERROR"/>
      </div>
    </div>  
    );
}

export default HomePage;