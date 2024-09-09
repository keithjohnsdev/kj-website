import Navbar from "../components/Navbar";

export default function Resume() {
  const handleDownload = () => {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    const resumeUrl = './Resume - Keith Johns.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="resume">
        <button className="round-btn" onClick={handleDownload}>Download Resume</button>
      </div>
    </>
  );
}
