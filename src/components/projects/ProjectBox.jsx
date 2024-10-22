import PropTypes from "prop-types";

export default function ProjectBox({ project, onOpenModal }) {
  return (
    <div
      className="box"
      data-category={project.category}
      onClick={() => onOpenModal(project)}
    >
      <img src={project.imageURL} alt="project photo" />
      <p className="title">{project.title}</p>
      <p>{project.description}</p>
      <a href="#">View Demo</a>
    </div>
  );
}

ProjectBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onOpenModal: PropTypes.func,
};
