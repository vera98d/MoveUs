import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 80vh;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExerciseTable = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: [row1-start] 15%;
  column-rule: 1px solid red;
  grid-auto-rows: 12.14%;
  border: 1px solid black;
  width: 100%;
  height: 50vh;
`;

export const ExerciseCell = styled.p`
  padding: 8px 4px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
`;

export const PaginationWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

export const PaginationList = styled.ul`
  display: flex;
  list-style-type: none;
  
  .linkStyle {
    text-decoration: none;
    color: inherit;
  }
`;

export const ListElement = styled.li`
`;
