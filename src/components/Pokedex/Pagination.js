import React from "react";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./Pokedex.css";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <>
      <div className="pagination">
        <FaArrowAltCircleLeft className="left-arrow" onClick={onLeftClick} />
        <div>
          {page} de {totalPages}
        </div>
        <FaArrowCircleRight className="right-arrow" onClick={onRightClick} />
      </div>
    </>
  );
};

export default Pagination;
