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
import ActivityService from "../../services/activityService";

interface Props {
  userId?: string;
  activities?: Activity[];
  isButtonVisible?: boolean;
}

const ExercisesTable: FC<Props> = ({ userId, activities, isButtonVisible }) => {
  const [currentExercises, setCurrentExercises] = useState<Activity[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ExercisesPerPage] = useState(7);

  useEffect(() => {
    ActivityService.getActivity(userId).then((data) => {
      setCurrentExercises(data);
    });
  }, []);
  const indexOfLastActivity = currentPage * ExercisesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - ExercisesPerPage;
  const currentPageActivities = currentExercises.slice(indexOfFirstActivity, indexOfLastActivity);

  const tableBody = () => {
    return currentPageActivities?.map((activity: Activity) => {
      return (
        <GridLine key={activity.uid}>
          <GridChild>{activity.exercise}</GridChild>
          <GridChild>{activity.duration}</GridChild>
          <GridChild>{activity.score}</GridChild>
          <GridChild>{activity.date.toLocaleString()}
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
        {currentPageActivities && tableBody()}
        {ExercisesPerPage > currentPageActivities.length
          && (
            <EmptyGridLine lines={ExercisesPerPage - currentPageActivities.length}>
              <GridChild />
              <GridChild />
              <GridChild />
              <GridChild />
            </EmptyGridLine>
          )}
      </GridContainer>
      <ScoreLine>
        {isButtonVisible && <PageButton className="buttonFontSize" type="button">Add activity</PageButton> }
        <p className="sumPosition">Total Score: 1000</p>
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
            disabled={currentPageActivities.length < 7}
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
