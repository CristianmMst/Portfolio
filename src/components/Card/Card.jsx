import "./Card.scss";

export const Card = ({ children, img, links, name }) => {
  return (
    <div className="Card">
      <div className="Card-item">
        <h1 className="Card-item-title">{name}</h1>
        <p className="Card-item-text">{children}</p>
        <div className="Card-buttons">
          <a target="_blank" className="Card-buttons-btn" href={links.page}>
            ver pagina
          </a>
          <a target="_blank" className="Card-buttons-btn" href={links.code}>
            ver Codigo
          </a>
        </div>
      </div>
      <img className="Card-img" src={img} alt="logo" />
    </div>
  );
};
