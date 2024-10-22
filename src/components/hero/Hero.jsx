import "./Hero.css";
export default function Hero({
  name,
  role,
  buttonText,
  buttonLink,
  backgroundImage,
}) {
  return (
    <section className="hero" style={{ backgroundImage: backgroundImage }}>
      <div className="hero_text">
        <p>{name}</p>
        <p>{role}</p>
        <a href={buttonLink} className="mywork">
          {buttonText}
        </a>
      </div>
    </section>
  );
}
