import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  let firstVisit = !sessionStorage.getItem("visited");
  const [skinny, setSkinny] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSkinny(window.innerWidth <= 570);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0.75,
  // });

  function handleNavigate(destination) {
    sessionStorage.setItem("visited", true);
    navigate(destination);
  }
  return (
    <div className="home">
      <Navbar />
      <div className="left">
        <h1 className="welcome">
          <div
            className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}
          >
            W
          </div>
          <div
            className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}
          >
            e
          </div>
          <div
            className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}
          >
            l
          </div>
          <div
            className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}
          >
            c
          </div>
          <div
            className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}
          >
            o
          </div>
          <div
            className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}
          >
            m
          </div>
          <div
            className={`letter ${firstVisit ? "animate-letter" : "no-animate"}`}
          >
            e
          </div>
        </h1>
        <div className="bio">
          <div className={`bio-text ${!firstVisit && "no-animate"}`}>
            Hey, I'm Keith, a web developer with a passion for clean, effective
            design & code, always with the user experience in mind.
          </div>
          <div className={`bio-text ${!firstVisit && "no-animate"}`}>
            I specialize in modern front-end frameworks (React & Vue), as well
            as NodeJS & Python for the back-end.
          </div>
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
        <div className="card-wrapper">
          <div className="card-row">
            <a
              onClick={() => {
                handleNavigate("/resume");
              }}
            >
              <div
                className={`link-card one ${
                  !firstVisit && "less-delay"
                } fast-animation`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.6066 1.3934H22.8198M22.8198 1.3934V22.6066M22.8198 1.3934L1.6066 22.6066"
                    stroke="#622125"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="card-title">Resume</div>
              </div>
            </a>
            <a
              onClick={() => {
                handleNavigate("/resume");
              }}
            >
              <div
                className={`link-card two ${
                  !firstVisit && "less-delay"
                } fast-animation`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.6066 1.3934H22.8198M22.8198 1.3934V22.6066M22.8198 1.3934L1.6066 22.6066"
                    stroke="#622125"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="card-title">Portfolio</div>
              </div>
            </a>
          </div>

          <div className="card-row last-row">
            <a href={`mailto:keithjohnsdev@gmail.com?subject=Hello!`}>
              <div
                className={`link-card three ${
                  !firstVisit && "less-delay"
                } fast-animation`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.6066 1.3934H22.8198M22.8198 1.3934V22.6066M22.8198 1.3934L1.6066 22.6066"
                    stroke="#622125"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="card-title">Say Hello</div>
              </div>
            </a>
            <a
              href="https://github.com/keithjohnsdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={`link-card four ${
                  !firstVisit && "less-delay"
                } fast-animation`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.6066 1.3934H22.8198M22.8198 1.3934V22.6066M22.8198 1.3934L1.6066 22.6066"
                    stroke="#622125"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="card-title">Github</div>
              </div>
            </a>
          </div>
        </div>
        <div
          className={`profile-img-wrapper ${firstVisit && "delay pic-delay"}`}
        >
          <img
            className={`profile-img ${!firstVisit && "no-animate"}`}
            src="./keith-profile.jpg"
            alt="Me and a friend."
            title="Me and a friend."
          />
        </div>
      </div>
      <div className="middle">
        {skinny ? <img src="./squiggle-skinny.png" alt="squiggle" /> : <img src="./squiggle.png" alt="squiggle" />}
      </div>
      <div className="right">
        <div
          className={`profile-img-wrapper ${firstVisit && "delay pic-delay"}`}
        >
          <img
            className={`profile-img ${!firstVisit && "no-animate"}`}
            src="./keith-profile.jpg"
            alt="Me and a friend."
            title="Me and a friend."
          />
        </div>
      </div>
    </div>
  );
}
