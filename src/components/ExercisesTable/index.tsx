import React, { FC, useEffect, useState } from "react";
import { Exercise } from "../../interfaces/dbData";

import {
  PaginationWrapper,
  PageNumber,
  PaginationList,
  EmptyGridLine,
  GridLine,
  GridChild,
  GridContainer,
  GridHeader,
  SiteSetterWrapper,
  PageButton,
} from "./styles";
import ExerciseService from "../../services/exerciseService";

interface Props {
  exerciseCount: number;
}

const ExercisesTable: FC<Props> = ({ exerciseCount }) => {
  const [currentExercises, setCurrentExercises] = useState<Exercise[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ExercisesPerPage] = useState(7);

  useEffect(() => {
    if (exerciseCount != null) {
      ExerciseService.getRandomExercises(exerciseCount).then((data) => {
        setCurrentExercises(data);
      });
    }
  }, []);

  const indexOfLastActivity = currentPage * ExercisesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - ExercisesPerPage;
  const currentPageActivities = currentExercises.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );
  const tableBody = () => {
    return currentPageActivities?.map((exercise: Exercise) => {
      return (
        <GridLine key={exercise.id}>
          <GridChild key={`exercise${exercise.id}`}>{exercise.name}</GridChild>
          <GridChild key={`duration${exercise.id}`}>
            {exercise.weight}
          </GridChild>
        </GridLine>
      );
    });
  };
  return (
    <>
      <GridContainer>
        <GridLine>
          <GridHeader>Name</GridHeader>
          <GridHeader>Weight</GridHeader>
        </GridLine>
        {currentPageActivities && tableBody()}
        {ExercisesPerPage > currentPageActivities.length && (
          <EmptyGridLine
            lines={ExercisesPerPage - currentPageActivities.length}
          >
            <GridChild />
            <GridChild />
          </EmptyGridLine>
        )}
      </GridContainer>
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
