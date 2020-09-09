import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount <= 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className="pagination pagination-lg">
      {pages.map((page) => (
        <li
          className={page === currentPage ? "page-item active" : "page-item"}
          style={{ cursor: "pointer" }}
          key={page}
        >
          <span onClick={() => onPageChange(page)} className="page-link">
            {page}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
