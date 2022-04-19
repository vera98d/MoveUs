import { ExerciseTable, ExerciseCell, TableWrapper, PaginationWrapper } from "./styles";
import { FC, Fragment, SetStateAction, useEffect, useState } from "react";
import Pagination from "../ExerciseHistoryPagination";
import { useLocation } from "react-router-dom";

interface Props {
  activities: Activity[];
}

export interface Activity {
  id: string;
  exercise: string;
  duration: string;
  score: number;
  date: Date;
}

const ActivityTable: FC<Props> = ({ activities }) => {
  const [actualActivities, setActualActivities] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activityPerPage] = useState(7);
  const location = useLocation();

  useEffect(() => {
    setActualActivities(activities);
  }, []);

  const sum = activities.reduce((prev, current) => {
    return prev + +current.score;
  }, 0);
  const indexOfLastActivity = currentPage * activityPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activityPerPage;
  const currentActivities = actualActivities.slice(indexOfFirstActivity, indexOfLastActivity);
  const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

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
        {!location.pathname.includes("UsersHistory") && <button type="button">Add activity</button>}
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
        <Pagination
          activityPerPage={activityPerPage}
          totalActivities={actualActivities.length}
          paginate={paginate}
        />
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
