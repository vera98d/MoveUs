import React, { FC, useEffect, useState } from "react";
import { Activity } from "../../interfaces/dbData";

import {
  PaginationWrapper,
  PageNumber,
  PaginationList,
  EmptyGridLine,
  GridLine,
  GridChild,
  GridContainer,
  GridHeader,
  ScoreLine,
  PageButton,
  SiteSetterWrapper,
} from "./styles";

interface Props {
  activities: Activity[];
  isButtonVisible?: boolean;
}

const ExercisesTable: FC<Props> = ({ activities, isButtonVisible }) => {
  const [actualExercises, setActualExercises] = useState<Activity[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ExercisesPerPage] = useState(7);

  useEffect(() => {
    setActualExercises(activities);
  }, []);
  const sum = activities.reduce((prev, current) => {
    return prev + +current.score;
  }, 0);

  const indexOfLastActivity = currentPage * ExercisesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - ExercisesPerPage;
  const currentActivities = actualExercises.slice(indexOfFirstActivity, indexOfLastActivity);

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
        {ExercisesPerPage > currentActivities.length
          && (
            <EmptyGridLine lines={ExercisesPerPage - currentActivities.length}>
              <GridChild />
              <GridChild />
              <GridChild />
              <GridChild />
            </EmptyGridLine>
          )}
      </GridContainer>
      <ScoreLine>
        {isButtonVisible && <PageButton className="buttonFontSize" type="button">Add activity</PageButton> }
        <p className="sumPosition">Total Score: {sum}</p>
      </ScoreLine>
      <PaginationWrapper>
        <SiteSetterWrapper>
          <PageButton
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {"<"}
          </PageButton>
          <PaginationList>
            <PageNumber>
              {currentPage}
            </PageNumber>
          </PaginationList>
          <PageButton
            type="button"
            disabled={currentActivities.length < 7}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {">"}
          </PageButton>
        </SiteSetterWrapper>
      </PaginationWrapper>
    </>
  );
};

export default ExercisesTable;
