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
                <div className="card-title"><div className="block">Download</div>Resume</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
