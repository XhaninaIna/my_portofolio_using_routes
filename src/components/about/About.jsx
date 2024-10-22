import "./About.css";

export default function About({ photoUrl, education, experience }) {
  return (
    <section className="about" id="about">
      <p>About Me</p>
      <div className="aboutContainer">
        <AboutPhoto photoUrl={photoUrl} />
        <AboutExperience education={education} experience={experience} />
      </div>
    </section>
  );
}

function AboutPhoto({ photoUrl }) {
  return (
    <div className="foto">
      <img src={photoUrl} alt="Xhanina Çela" />
    </div>
  );
}

function AboutExperience({ education, experience }) {
  return (
    <div className="experience">
      <p>{education}</p>
      <p>{experience}</p>
    </div>
  );
}
