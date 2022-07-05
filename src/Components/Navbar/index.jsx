import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import BackIcon from "../../Assets/Back.png";
import SearchIcon from "../../Assets/search.png";
import { searchMovies } from "../../Store/Features/Movies/movieSlice";

export default function Navbar({ title = "Romantic Comedy", onBack }) {
  const dispatch = useDispatch();
  const [isSearch, setIsSearch] = React.useState(false);

  const handleSearchChange = (keyword) => {
    dispatch(searchMovies(keyword));
  };

  const toggleSearchbar = () => {
    setIsSearch(!isSearch);
  };

  const handleOnBack = () => {
    if (isSearch) {
      toggleSearchbar();
      handleSearchChange("");
    } else {
      onBack?.();
    }
  };

  return (
    <nav className="w-full h-16 fixed flex justify-between p-4  items-center bg-gradient-to-b from-black">
      <div className="flex items-center">
        <img
          alt="BackIcon"
          className="h-5 mr-5"
          src={BackIcon}
          onClick={() => handleOnBack()}
        />
        {!isSearch && <p className="text-lg text-white">{title}</p>}
      </div>
      {isSearch ? (
        <input
          autoFocus={true}
          type="search"
          className="form-control relative flex-auto xl:w-full md:max-w-xs  block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={(event) => handleSearchChange(event?.target?.value)}
        />
      ) : (
        <img
          alt="SearchIcon"
          className="h-5"
          src={SearchIcon}
          onClick={() => toggleSearchbar()}
        />
      )}
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func,
};
