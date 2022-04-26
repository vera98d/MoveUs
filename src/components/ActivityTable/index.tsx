import React, { FC, useEffect, useState, useContext } from "react";
import { Activity } from "../../interfaces/dbData";
import AddActivity from "../AddActivity";
import { ModalContext } from "../../context/ModalContextProvider";

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
import activityService from "../../services/activityService";

interface Props {
  userScore: number;
  userId?: string;
  isButtonVisible?: boolean;
}

const ExercisesTable: FC<Props> = ({ userScore, userId, isButtonVisible }) => {
  const [currentExercises, setCurrentExercises] = useState<Activity[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ExercisesPerPage] = useState(7);

  useEffect(() => {
    if (userId != null) {
      activityService.getActivityCollection(userId).then((activity) => {
        setCurrentExercises(activity);
      });
    }
  }, []);

  const indexOfLastActivity = currentPage * ExercisesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - ExercisesPerPage;
  const currentPageActivities = currentExercises.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  const { setDisplayedComponent } = useContext(ModalContext);

  const tableBody = () => {
    return currentPageActivities?.map((activity: Activity, index) => {
      return (
        <GridLine key={index}>
          <GridChild key={`exercise${activity.uid}`}>
            {activity.exercise}
          </GridChild>
          <GridChild key={`duration${activity.uid}`}>
            {activity.duration}
          </GridChild>
          <GridChild key={`score${activity.uid}`}>{activity.score}</GridChild>
          <GridChild key={`date${activity.uid}`}>
            {new Date(activity.date).toLocaleDateString()}
          </GridChild>
        </GridLine>
      );
    });
  };
  return (
    <>
      <GridContainer>
        <GridLine>
          <GridHeader>Exercise</GridHeader>
          <GridHeader>Time</GridHeader>
          <GridHeader>Score</GridHeader>
          <GridHeader>Last Activity</GridHeader>
        </GridLine>
        {currentPageActivities && tableBody()}
        {ExercisesPerPage > currentPageActivities.length && (
          <EmptyGridLine
            lines={ExercisesPerPage - currentPageActivities.length}
          >
            <GridChild />
            <GridChild />
            <GridChild />
            <GridChild />
          </EmptyGridLine>
        )}
      </GridContainer>
      <ScoreLine>
        {isButtonVisible && (
          <PageButton
            className="buttonFontSize"
            type="button"
            onClick={() => setDisplayedComponent(<AddActivity />)}
          >
            Add activity
          </PageButton>
        )}
        <p className="sumPosition">Total Score: {userScore}</p>
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
            <PageNumber>{currentPage}</PageNumber>
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
