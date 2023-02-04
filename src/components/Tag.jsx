import { IoStarSharp } from "react-icons/io5";
import "../style/tag.css";
const Tag = ({ logement }) => {
  const tags = logement.tags;

  const range = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div className="tags-cont">
        {tags &&
          tags.map((tag, i) => (
            <div className="tags" key={i}>
              {tag}
            </div>
          ))}
      </div>
      <div className="rating">
        {range.map((n) =>
          logement && n <= logement.rating ? (
            <IoStarSharp key={n} className="orange" />
          ) : (
            <IoStarSharp key={n} className="grey" />
          )
        )}
      </div>
    </div>
  );
};

export default Tag;
