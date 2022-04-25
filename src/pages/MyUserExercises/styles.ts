import styled from "styled-components";

export const BackgroundContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 3em;
  background: ${(props) => props.theme.colors.background};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  
  .UserInformationContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    font-size: 24px;
    font-weight: bold;
  }
  
  .setPages {
    margin-bottom: 50px;
  }
  
  h3 {
    margin-bottom: 30px;
  }
  
  .groupWrapper {
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .usernameStyle {
    color: ${(props) => props.theme.colors.secondaryUi};
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    font-size: 18px;
  }
`;

export const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0;
  
  .lineWrapperContent {
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const GroupContainer = styled.div`
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  .verticalLine {
    padding: 0 15px;
  }
`;
