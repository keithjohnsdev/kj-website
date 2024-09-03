import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";

export default function Home() {
  const navigate = useNavigate();
  let firstVisit = !sessionStorage.getItem("visited");
  console.log(firstVisit)

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.75,
  });

  function handleNavigate (destination) {
    sessionStorage.setItem("visited", true)
    navigate(destination);
  }
  return (
    <div className="home">
      <Navbar />
      <div className="left">
        <div className="welcome">
          <div className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}>W</div>
          <div className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}>e</div>
          <div className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}>l</div>
          <div className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}>c</div>
          <div className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}>o</div>
          <div className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}>m</div>
          <div className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}>e</div>
          <div className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}>.</div>
        </div>
        <div className={ firstVisit ? "hr-animate" : "hr"} />
        <div className="bio">
          <div className={`bio-text ${!firstVisit && "no-animate"}`}>
            Hey, I'm Keith, a web developer with a passion for clean, effective
            design & code, always with the user experience in mind.
          </div>
          <br />
          <div className={`bio-text ${!firstVisit && "no-animate"}`}>
            I specialize in modern front-end frameworks (React & Vue), as well
            as utilizing NodeJS & Python for the back-end.
          </div>
          <br />
          <div className={`bio-text ${!firstVisit && "no-animate"}`}>
            Lately, I've been in charge of delivering full-stack microservices
            for the talented team at{" "}
            <a
              href="https://misfitlabs.vc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Misfit Labs
            </a>
            . I've also had the privilege of collaborating with innovative
            companies like{" "}
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
        <div className={`profile-img-wrapper ${firstVisit && "delay pic-delay"}`}>
          <img
            className={`profile-img ${!firstVisit && "no-animate"}`}
            src="./keith-profile.jpg"
            alt="Me and a friend."
            title="Me and a friend."
          />
        </div>
      </div>
      <div className="right delay-more" ref={ref}>
        <div className="welcome explore">
          <div className={`letter ${!firstVisit && "no-animate"}`}>E</div>
          <div className={`letter ${!firstVisit && "no-animate"}`}>x</div>
          <div className={`letter ${!firstVisit && "no-animate"}`}>p</div>
          <div className={`letter ${!firstVisit && "no-animate"}`}>l</div>
          <div className={`letter ${!firstVisit && "no-animate"}`}>o</div>
          <div className={`letter ${!firstVisit && "no-animate"}`}>r</div>
          <div className={`letter ${!firstVisit && "no-animate"}`}>e</div>
          <div className={`letter ${!firstVisit && "no-animate"}`}>.</div>
        </div>
        <div className={ firstVisit ? "hr-animate delay-more" : "hr"} />

        {/* <div className="bio delay delay-most">Take a look around:</div> */}

        <div className="card-wrapper">
          <a
            onClick={() => {
              handleNavigate("/resume")
            }}
          >
            <div className={`link-card one ${!firstVisit && "less-delay"} fast-animation`}>
              <div>
                <img src="./icon-resume.png" />
                Resume
              </div>
              <div>
                <img className="arrow" src="./icon-arrow.png" />
              </div>
            </div>
          </a>
          <a>
            <div className={`link-card two ${!firstVisit && "less-delay"} fast-animation`}>
              <div>
                <img src="./icon-portfolio.png" />
                Portfolio
              </div>
              <div>
                <img className="arrow" src="./icon-arrow.png" />
              </div>
            </div>
          </a>
          <a href={`mailto:keithjohnsdev@gmail.com?subject=Hello!`}>
            <div className={`link-card three ${!firstVisit && "less-delay"} fast-animation`}>
              <div>
                <img src="./icon-email.png" />
                Say Hello
              </div>
              <div>
                <img className="arrow" src="./icon-arrow.png" />
              </div>
            </div>
          </a>
          <a
            href="https://github.com/keithjohnsdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`link-card four ${!firstVisit && "less-delay"} fast-animation`}>
              <div>
                <img src="./icon-github.png" />
                GitHub
              </div>
              <div>
                <img className="arrow" src="./icon-arrow.png" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
