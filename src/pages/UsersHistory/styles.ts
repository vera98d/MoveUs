import styled from "styled-components";

export const Img = styled.img`
  border-radius: 50%;
  width: 75px;
  height: 75px;
  margin: 0 30px 0 0;
`;

export const Test = styled.div`
`;

export const Header = styled.header`
  height: 130px;
  background-color: aqua;
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
    margin: 45px;
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
`;

export const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0;
`;
