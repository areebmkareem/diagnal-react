import PropTypes from "prop-types";

export default function MovieCard({ cover, title }) {
  return (
    <div>
      <img className="w-40" alt={title} src={cover} />
      <p className="sm::w-16 md:w-40 pt-2 text-base md:text-1xl lg:text-2xl text-white text-left font-light">
        {title}
      </p>
    </div>
  );
}

MovieCard.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
