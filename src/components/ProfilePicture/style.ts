import styled from "styled-components";

export const PhotoProfile = styled.div<{ avatarUrl?: string }>`
    width: 60px;
    height: 60px;
    border: 2px solid ${(props) => props.theme.colors.secondaryUi};
    border-radius: 50%;
    cursor: pointer;
    background-image: url(${(props) => props.avatarUrl || `${process.env.PUBLIC_URL}/assets/avatar_icon.svg`});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const OtherUserPhotoProfile = styled(PhotoProfile)<{ avatarUrl?: string }>`
width: 100px;
height: 100px;
margin-right: 50px;
border: solid 2px; 
`;