import Navbar from "../components/Navbar";

export default function Resume() {
  let firstVisit = !sessionStorage.getItem("visited");

  const handleDownload = () => {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    const resumeUrl = "./Resume - Keith Johns.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="resume">
        <div className="flex-row">
          <h1>Experience</h1>
          <div className="card-wrapper relative">
            <div className="card-row">
              <a
                onClick={() => {
                  handleNavigate("/resume");
                }}
              >
                <div
                  className="link-card flat relative"
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
                  <div className="card-title">
                    Download
                    <br />
                    Resume
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="work">
            <h3>Misfit Labs, LLC</h3>
            <h4>Developer, Full Stack</h4>
            <h5>2023 - Present</h5>
            <ul className="description">
              <li>
                Successfully solo-developed two microservices to integrate with
                larger application - video content w/ social interactions and
                threaded multi-user messaging service
              </li>
              <li>
                Utilized React for FE, Node + Express for BE, PostGreSQL for DB,
                Heroku + AWS for hosting
              </li>
              <li>
                Controlling the full stack, was able to prioritize scalability,
                performance, code clarity
              </li>
            </ul>
          </div>
          <div className="work">
            <h3>LifeWallet</h3>
            <h4>UI/UX Developer, Front-End</h4>
            <h5>2022 - 2024</h5>
            <ul className="description">
              <li>
                Worked with talented team developing UI experience for
                LifeWallet ecosystem & app
              </li>
              <li>
                Modernized internal company software suite handling display &
                manipulation of large data structures, AWS cloud computing &
                storage, implemented custom web app functionality
              </li>
            </ul>
          </div>
          <div className="work">
            <h3>Freelance Web Developer</h3>
            <h4>UI/UX Developer, Front-End</h4>
            <h5>2020 - 2022</h5>
            <ul className="description">
              <li>
                Designed, constructed and delivered modern, responsive websites
                on schedule for several clients, from local entrepreneurs to
                multi-million dollar corporations
              </li>
              <li>
                Gained experience and worked with numerous programming languages
                + applications: JavaScript, HTML, CSS, React, Git, GitHub,
                Python, REST APIs, SQL
              </li>
            </ul>
          </div>
          <div className="work">
            <h3>Beta Analytic Inc.</h3>
            <h4>
              Laboratory Technician, Particle Accelerator Operator/Maintenance
            </h4>
            <h5>2012 - 2014</h5>
            <ul className="description">
              <li>
                Responsible for the operation and maintenance of four Single
                Stage Accelerator Mass Spectrometers (SSAMS) to provide
                Carbon-14 dating analyses to clients
              </li>
              <li>
                Applied knowledge of Excel to redesign and optimize the program
                used to catalog and track laboratory samples and results,
                improving workflow
              </li>
            </ul>
          </div>
        </div>

        <h1>Education</h1>
        <div className="experience">
          <div className="work">
            <h3>Complete Web Development Bootcamp</h3>
            <h4>Udemy</h4>
            <h5>May 2020 - December 2020</h5>
          </div>
          <div className="work">
            <h3>React - The Complete Guide (incl. Next.js, Redux)</h3>
            <h4>Udemy</h4>
            <h5>November 2020 - March 2021</h5>
          </div>
          <div className="work">
            <h3>University of Miami</h3>
            <h4>Bachelor of Science - Applied Physics, Mathematics</h4>
            <h5>2007 - 2012</h5>
            <h5>Relevant Coursework:</h5>
            <ul className="description">
              <li>
                Physics/Engineering: Thermodynamics, Electricity and Magnetism,
                Fluid Dynamics, Environmental Engineering, Special/General
                Relativity, Quantum Mechanics
              </li>
              <li>
                Math: Differential Equations, Linear Algebra, Multivariable
                Calculus
              </li>
              <li>Computer Science: JavaScript Programming</li>
              <li>
                Environmental Science: AP Environmental Science, Sustainable
                Living
              </li>
            </ul>
          </div>
        </div>
        <div className="card-wrapper fixed">
          <div className="card-row">
            <a
              onClick={() => {
                handleNavigate("/resume");
              }}
            >
              <div
                className="link-card flat"
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
                <div className="card-title">
                  Download
                  <br />
                  Resume
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
