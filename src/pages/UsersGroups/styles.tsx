import styled from "styled-components";

interface TileProps {
  img?: string;
}

export const Tile = styled.div<TileProps>`
    width: 130px;
    height: 130px;
    position: relative ;    
    background: ${(props) => (props.img ? `url(${props.img})` : props.theme.colors.white)};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 80%;
    border: ${(props) => props.theme.border};
    border-radius: 25px;
    cursor: pointer;

    &::before{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left:0;
        width:100%;
        height: 100%;
        background: rgba(255,255,255,0.2);
        border-radius: 25px;
        backdrop-filter: blur(.5px);
    }
`;

export const TileContent = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.fontSize.tiles};
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    color: ${(props) => props.theme.colors.secondaryUi};
    position: relative ;
    width: 100%;
    height: 100%;
    padding: .5em;
    z-index: 2;
`;
export const TileContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5em;
    margin: 1.5em 0;
    text-align: center;
    
    &>a{
        text-decoration: none;
    }
`;
