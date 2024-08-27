import "./App.scss";

function App() {
  return (
    <div className="home">
      <div className="left">
        <div className="welcome">
          <div className="letter">W</div>
          <div className="letter">e</div>
          <div className="letter">l</div>
          <div className="letter">c</div>
          <div className="letter">o</div>
          <div className="letter">m</div>
          <div className="letter">e</div>
          <div className="letter">.</div>
        </div>
        <div className="hr-animate" />
        <div className="bio">
          <div className="bio-text">
            Hey, I'm Keith, a web developer with a passion for clean, effective
            design & code, always with the user experience in mind.
          </div>
          <br />
          <div className="bio-text">
            I specialize in modern front-end frameworks (React & Vue), as well
            as utilizing NodeJS & Python for the back-end.
          </div>
          <br />
          <div className="bio-text">
            Lately, I've been in charge of delivering full-stack microservices
            for the talented team at{" "}
            <a
              href="https://misfitlabs.vc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Misfit Labs
            </a>{" "}
            (their site is my work as well). I've also had the privilege of
            collaborating with innovative companies like{" "}
            <a
              href="https://www.msprecovery.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LifeWallet
            </a>
            ,&nbsp;
            <a
              href="https://unahealth.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UNA
            </a>
            , and{" "}
            <a
              href="https://www.wellup.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WellUp
            </a>
            .
          </div>
        </div>
        <div className="profile-img-wrapper delay pic-delay">
          <img
            className="profile-img"
            src="/keith-profile.jpg"
            alt="Me and a friend."
            title="Me and a friend."
          />
        </div>
      </div>
      <div className="right delay-more">
        <div className="welcome explore">
          <div className="letter">E</div>
          <div className="letter">x</div>
          <div className="letter">p</div>
          <div className="letter">l</div>
          <div className="letter">o</div>
          <div className="letter">r</div>
          <div className="letter">e</div>
          <div className="letter">.</div>
        </div>
        <div className="hr-animate delay-more" />

        {/* <div class="bio delay delay-most">Take a look around:</div> */}

        <div class="card-wrapper">
          <div class="link-card">
            <div>
              <img src="/icon-resume.png" />
              Resume
            </div>{" "}
            <div>
              <img className="arrow" src="/icon-arrow.png" />
            </div>
          </div>
          <div class="link-card">
            {" "}
            <div>
              <img src="/icon-portfolio.png" />
              Portfolio
            </div>{" "}
            <div>
              <img className="arrow" src="/icon-arrow.png" />
            </div>
          </div>
          <div class="link-card">
            {" "}
            <div>
              <img src="/icon-email.png" />
              Say Hello
            </div>
            <div>
              <img className="arrow" src="/icon-arrow.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
