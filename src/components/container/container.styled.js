import styled from "styled-components";
export const ContainerStyled = styled.div`
    //border:solid 1px #000;
    width: 100%;
    margin: auto;
    background-color: ${props => props.color || 'transparent'};
    height: ${props => props.height || 'auto'};

    &.center{
        width: 1200px;
    }
    &.greybar{
        background-color: #efefef;
    }
`