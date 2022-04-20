import styled from "styled-components";

interface EmptyGridLineProps {
  lines: number;
}
export const GridContainer = styled.div`
    width: 90%;
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
    grid-template-columns: 1fr 1.6fr 1fr 1.3fr;
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
    font-size: 18px;
    border-right: ${(props) => props.theme.border};
    min-height: 35px;

    &:nth-child(4n){
        border-right: none;
    }
`;

export const GridHeader = styled(GridChild)`
    color: ${(props) => props.theme.colors.secondaryUi};
    font-size: 22px;
`;

export const BlankLine = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.6fr 1fr 1.3fr;
`;

export const EmptyGridLine = styled(GridLine) <EmptyGridLineProps>`
    border-bottom: none;
    min-height: ${(props) => (props.lines !== 0 ? `${props.lines * 35}px` : "0px")};
`;