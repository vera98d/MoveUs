import React, { FC, useEffect, useState } from "react";
import { Activity } from "../../interfaces/dbData";

import {
  PaginationWrapper,
  ListElement,
  PaginationList,
  EmptyGridLine,
  GridLine,
  GridChild,
  GridContainer,
  GridHeader,
  ScoreLine,
  PageSetter,
} from "./styles";

interface Props {
  activities: Activity[];
  isButtonVisible?: boolean;
}

const ActivityTable: FC<Props> = ({ activities, isButtonVisible }) => {
  const [actualActivities, setActualActivities] = useState<Activity[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activityPerPage] = useState(7);

  useEffect(() => {
    setActualActivities(activities);
  }, []);
  const sum = activities.reduce((prev, current) => {
    return prev + +current.score;
  }, 0);

  const indexOfLastActivity = currentPage * activityPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activityPerPage;
  const currentActivities = actualActivities.slice(indexOfFirstActivity, indexOfLastActivity);

  const tableBody = () => {
    return currentActivities?.map((activity: Activity) => {
      return (
        <GridLine key={activity.id}>
          <GridChild>{activity.exercise}</GridChild>
          <GridChild>{activity.duration}</GridChild>
          <GridChild>{activity.score}</GridChild>
          <GridChild>{activity.date.getUTCDate()}/{activity.date.getUTCMonth()}/
            {activity.date.getUTCFullYear()}
          </GridChild>
        </GridLine>
      );
    });
  };
  return (
    <>
      <GridContainer>
        <GridLine>
          <GridHeader>
            Exercise
          </GridHeader>
          <GridHeader>
            Time
          </GridHeader>
          <GridHeader>
            Score
          </GridHeader>
          <GridHeader>
            Last Activity
          </GridHeader>
        </GridLine>
        {currentActivities && tableBody()}
        {activityPerPage > currentActivities.length
          && (
            <EmptyGridLine lines={activityPerPage - currentActivities.length}>
              <GridChild />
              <GridChild />
              <GridChild />
              <GridChild />
            </EmptyGridLine>
          )}
      </GridContainer>
      <ScoreLine>
        {isButtonVisible && <button type="button">Add activity</button>}
        <p>Total Score: {sum}</p>
      </ScoreLine>
      <PaginationWrapper>
        <PageSetter
          type="button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {"<"}
        </PageSetter>
        <PaginationList>
          <ListElement>
            {currentPage}
          </ListElement>
        </PaginationList>
        <PageSetter
          type="button"
          disabled={currentActivities.length < 7}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {">"}
        </PageSetter>
      </PaginationWrapper>
    </>
  );
};

export default ActivityTable;
