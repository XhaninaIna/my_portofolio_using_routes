import "./Skills.css";

const SkillsData = [
  {
    id: 1,
    name: "HTML",
    logo: "fa-brands fa-html5",
    description:
      "Building structured, accessible web pages with semantic markup.",
    percentage: "70%",
  },
  {
    id: 2,
    name: "CSS",
    logo: "fa-brands fa-css3-alt",
    description:
      "Styling websites with modern layouts, animations, and responsive designs.",
    percentage: "40%",
  },
  {
    id: 3,
    name: "JavaScript",
    logo: "fa-brands fa-js",
    description:
      "Creating dynamic, interactive user experiences with ES6+ features.",
    percentage: "50%",
  },
];
export default function Skills() {
  return (
    <section className="skills" id="skillSection">
      <p>My Skills</p>
      <div className="skillContainer">
        {SkillsData.map((skill) => (
          <SkillBox key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
function SkillBox({ skill }) {
  return (
    <div className="SkillBox">
      <div className="skillLogo">
        <i className={skill.logo}></i>
      </div>
      <p>{skill.name}</p>
      <p>{skill.description}</p>
      <div className="percentage_Container">
        <div>{skill.percentage}</div>
      </div>
    </div>
  );
}
