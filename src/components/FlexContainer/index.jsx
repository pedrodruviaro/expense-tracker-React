import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    width: ${props => props.width};
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    gap: ${props => props.gap};
`

export default FlexContainer