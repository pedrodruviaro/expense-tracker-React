import styled from "styled-components";

export const ValuesContainer = styled.div`
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    display: flex;
    justify-content: space-around;
    padding: 1.5rem 1rem;

    &::after {
        content: "";
        width: 1px;
        height: 40px;
        position: absolute;
        background-color: #bdbdbd;
    }
`