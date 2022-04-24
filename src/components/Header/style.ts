import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 10px;
`;

export const Img = styled.img`
  height: 100px;
  align-self: center;
  cursor: pointer;
`;

export const RightSection = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightButton = styled.div`
  cursor: pointer;
  margin-left: 20px;
`;

export const Logout = styled.span`
  font-size: 18px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-weight: bold;
  color: black;
`;