import styled from "styled-components";

interface EmptyGridLineProps {
  lines: number;
}

export const PaginationWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  max-width: 1050px;
  display: flex;
  justify-content: center;
`;

export const PaginationList = styled.ul`
  display: flex;
  list-style-type: none;
  
  .linkStyle {
    text-decoration: none;
    color: inherit;
  }
`;

export const ScoreLine = styled.div`
  margin: 20px 0;
  width: 100%;
  max-width: 1050px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  position: relative;

  .buttonFontSize {
    font-size: 16px;
  }
  
  .sumPosition {
    position: absolute;
    left: 66%;
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    font-size: 16px;
    color: ${(props) => props.theme.colors.secondaryUi};
  }
`;

export const PageNumber = styled.li`
`;

export const GridContainer = styled.div`
    width: 100%;
    max-width: 1050px;
    border-radius: 15px;
    border: ${(props) => props.theme.border};
    box-shadow: ${(props) => props.theme.boxShadow};
    -moz-box-shadow: ${(props) => props.theme.boxShadow};
    -webkit-box-shadow: ${(props) => props.theme.boxShadow};
    background: ${(props) => props.theme.colors.white};
`;

export const GridLine = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: [row1-start] 15%;
    border-bottom: ${(props) => props.theme.border};
  
    &:nth-last-child(1){
        border-bottom: none;
    }
`;

export const GridChild = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: .5em 1em;
    color: ${(props) => props.theme.colors.secondaryUi};
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    font-size: 12px;
    border-right: ${(props) => props.theme.border};
    min-height: 35px;
    &:nth-child(4n){
        border-right: none;
    }
`;

export const GridHeader = styled(GridChild)`
  color: ${(props) => props.theme.colors.secondaryUi};
  font-size: 14px;
  min-height: 50px;
`;

export const BlankLine = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const EmptyGridLine = styled(BlankLine) <EmptyGridLineProps>`
    border-bottom: none;
    min-height: ${(props) => (props.lines !== 0 ? `${props.lines * 35}px` : "0px")};
`;

export const SiteSetterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageButton = styled.button`
  margin: 0 10px;
  border: none;
  color: ${(props) => props.theme.colors.secondaryUi};
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-weight: 900;
  font-size: 18px;
  cursor: pointer;
  background-color: transparent;
`;
