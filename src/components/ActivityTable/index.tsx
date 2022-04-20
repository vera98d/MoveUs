import React, { FC, Fragment, useEffect, useState } from "react";
import {
  ExerciseTable,
  ExerciseCell,
  TableWrapper,
  PaginationWrapper,
  ListElement,
  PaginationList,
} from "./styles";

interface Props {
  activities: Activity[];
  isButtonVisible?: boolean;
}

export interface Activity {
  id: string;
  exercise: string;
  duration: string;
  score: number;
  date: Date;
}

const ActivityTable: FC<Props> = ({ activities, isButtonVisible }) => {
  const pageNumbers: number[] = [];
  const [actualActivities, setActualActivities] = useState<Activity[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activityPerPage] = useState(7);

  useEffect(() => {
    setActualActivities(activities);
  }, []);

  for (let i = 1; i <= Math.ceil(actualActivities.length / activityPerPage); i++) {
    pageNumbers.push(i);
  }

  const sum = activities.reduce((prev, current) => {
    return prev + +current.score;
  }, 0);

  const indexOfLastActivity = currentPage * activityPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activityPerPage;
  const currentActivities = actualActivities.slice(indexOfFirstActivity, indexOfLastActivity);

  const tablePaginationSetter = (pageNumber: number) => setCurrentPage(pageNumber);

  const tableBody = () => {
    return currentActivities?.map((activity: Activity) => {
      return (
        <Fragment key={activity.id}>
          <ExerciseCell>{activity.exercise}</ExerciseCell>
          <ExerciseCell>{activity.duration}</ExerciseCell>
          <ExerciseCell>{activity.score}</ExerciseCell>
          <ExerciseCell>{activity.date.getUTCDate()}/{activity.date.getUTCMonth()}/
            {activity.date.getUTCFullYear()}
          </ExerciseCell>
        </Fragment>
      );
    });
  };

  const paginateBody = () => {
    return pageNumbers.map((number) => {
      return (
        <ListElement key={number}>
          <button type="button" className="linkStyle" onClick={() => tablePaginationSetter(number)}>
            {number}
          </button>
        </ListElement>
      );
    });
  };

  return (
    <TableWrapper>
      <ExerciseTable>
        <ExerciseCell>
          Exercise
        </ExerciseCell>
        <ExerciseCell>
          Time
        </ExerciseCell>
        <ExerciseCell>
          Score
        </ExerciseCell>
        <ExerciseCell>
          Last Activity
        </ExerciseCell>
        {currentActivities && tableBody()}
      </ExerciseTable>
      <div className="lineWrapperContent">
        {isButtonVisible && <button type="button">Add activity</button>}
        <p>Total Score: {sum}</p>
      </div>
      <PaginationWrapper>
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Poprzednia Strona
        </button>
        <PaginationList>
          {pageNumbers && paginateBody()}
        </PaginationList>
        <button
          type="button"
          disabled={currentActivities.length < 7}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Następna Strona
        </button>
      </PaginationWrapper>
    </TableWrapper>
  );
};

export default ActivityTable;
