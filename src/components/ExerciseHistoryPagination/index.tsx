import React from "react";
import { Link } from "react-router-dom";
import { PaginationList, ListElement } from "./styles";

const ExerciseHistoryPagination = ({ activityPerPage, totalActivities, paginate }: any) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalActivities / activityPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationList>
      {pageNumbers.map((number) => {
        return (
          <ListElement key={number}>
            <Link className="linkStyle" to="/UsersHistory" onClick={() => paginate(number)}>
              /{number}
            </Link>
          </ListElement>
        );
      })}
    </PaginationList>
  );
};

export default ExerciseHistoryPagination;
