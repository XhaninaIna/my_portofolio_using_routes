import { useParams, Link } from "react-router-dom";
import "./Projects.css";
import shoppingCartImg from "../../images/shoppingcart_img.jpg";
import real_estate from "../../images/real_estate.jpg";
import restaurant_appImg from "../../images/restaurant_app.png";
import travel_listImg from "../../images/travel_list.jpg";
import bakery from "../../images/bakery.jpeg";
import popcorn from "../../images/popcorn.png";
import { useState } from "react";
import FilterButtons from "./FilterButtons";
import ProjectBox from "./ProjectBox";
import Modal from "./Modal";

const filterButtons = [
  { id: 1, label: "All", filterValue: "all" },
  { id: 2, label: "Web Development", filterValue: "web-development" },
  { id: 3, label: "Design", filterValue: "design" },
];

const projectData = [
  {
    id: 1,
    title: "ShoppingCart App",
    category: "web-development",
    description:
      "Users can browse through a variety of products, add their favorites to the cart, and adjust quantities as needed. The app provides a clear view of the total price in real-time and allows users to securely complete their purchase with just a few clicks.",
    imageURL: shoppingCartImg,
  },
  {
    id: 2,
    title: "Real Estate App",
    category: "design",
    description:
      "Browse a wide selection of properties with this Real Estate App. Effortlessly explore listings and find your dream home.",
    imageURL: real_estate,
  },
  {
    id: 3,
    title: "UsePopCorn App",
    category: "web-development",
    description:
      "Popcorn Movie App is your go-to platform for discovering and enjoying movies. Browse through a vast collection of films, read detailed descriptions, and watch trailers to find your next favorite movie.",
    imageURL: popcorn,
  },
  {
    id: 4,
    title: "Travel Bucket App",
    category: "design",
    description:
      "The Travel List App helps you plan and organize your trips with ease. Create detailed packing lists, set reminders, and track your to-dos to ensure you’re fully prepared for your next adventure.",
    imageURL: travel_listImg,
  },
  {
    id: 5,
    title: "Burger App",
    category: "design",
    description:
      "The Burger App is your ultimate guide to creating the perfect burger. Whether you're craving a classic or something more adventurous, you can customize your burger just the way you like it.",
    imageURL: restaurant_appImg,
  },
  {
    id: 6,
    title: "Bakery App",
    category: "web-development",
    description:
      "The Bakery App brings the joy of freshly baked goods right to your fingertips. Browse through a wide variety of delicious pastries, cakes, breads, and more.",
    imageURL: bakery,
  },
];

export default function Projects() {
  //extract the id from url
  const { id } = useParams();
  //find project by id
  const project = projectData.find((proj) => proj.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    imageURL: "",
    description: "",
  });
  const [selectedFilter, setSelectedFilter] = useState("all");

  function handleOpenModal(project) {
    setModalContent({
      title: project.title,
      imageURL: project.imageURL,
      description: project.description,
    });
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleFilterChange(filterValue) {
    setSelectedFilter(filterValue);
  }

  if (id) {
    //if id is in url
    return (
      <div className="project-detail">
        {project ? (
          <>
            <h1>{project.title}</h1>
            <img src={project.imageURL} alt={project.title} />
            <p>{project.description}</p>
            <Link to="/projects">Back to Projects</Link>
          </>
        ) : (
          <p>Project not found!</p>
        )}
      </div>
    );
  }

  return (
    <section className="projects" id="projectSection">
      <p>PROJECTS</p>
      <FilterButtons
        filterButtons={filterButtons}
        onFilterChange={handleFilterChange}
      />
      <MyProjects
        projectData={projectData}
        onOpenModal={handleOpenModal}
        selectedFilter={selectedFilter}
      />
      {isModalOpen && (
        <Modal
          title={modalContent.title}
          imageURL={modalContent.imageURL}
          description={modalContent.description}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

function MyProjects({ projectData, onOpenModal, selectedFilter }) {
  const filteredprojects =
    selectedFilter === "all"
      ? projectData
      : projectData.filter((project) => project.category === selectedFilter);

  return (
    <div className="myprojects">
      {filteredprojects.map((project) => (
        <ProjectBox
          key={project.id}
          project={project}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
}
