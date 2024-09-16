import "./Title.scss";

export const Title = ({ children }) => {
  return (
    <div className="Title">
      <h1 className="Title-text">{children}</h1>
      <div className="Title-line"></div>
    </div>
  );
};
