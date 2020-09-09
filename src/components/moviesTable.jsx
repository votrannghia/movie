import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";

const MoviesTable = ({ movies, sortColumn, onSort, onLike, onDelete }) => {
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onLike={() => onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button onClick={() => onDelete(movie)} className="btn-danger btn-sm">
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={movies}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default MoviesTable;
