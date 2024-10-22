import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/header/Header";
import banner from "./images/banner.jpg";
import inafoto from "./images/inafoto.jpeg";
import { Routes, Route } from "react-router-dom";

const aboutData = {
  name: "Xhanina Cela",
  photoUrl: inafoto,
  education:
    " My name is Xhanina Çela, and I hold a Bachelor's Degree in Business Informatics. I have completed specialized training in React JS at icubINFO Academy, where I gained a solid foundation in front-end development.",
  experience:
    "I have worked on various web development projects, including a MERN Real Estate Application, a Travel List Application, and a Shopping Cart Application. These experiences allowed me to hone my skills in React, JavaScript, and full-stack development using the MERN stack. In my free time, I enjoy playing volleyball and listening to music, which help me maintain a balanced and active lifestyle.",
};

// Lazy load components
const Hero = lazy(() => import("./components/hero/Hero"));
const About = lazy(() => import("./components/about/About"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Events = lazy(() => import("./components/events/Events"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Hero
          name="Xhanina Cela"
          role="I'm a student"
          buttonText="View My Work"
          buttonLink="#"
          backgroundImage={`url(${banner})`}
        />
        <Routes>
          <Route path="/about" element={<About {...aboutData} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
