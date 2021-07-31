import styled from "styled-components";

export const TitlePrimary = styled.h1`
  text-transform: ${(props) => props.transform};
  text-align: ${(props) => (props.align ? props.align : "center")};
  font-size: ${(props) => (props.size ? props.size : "1.5rem")};
  margin: ${(props) => props.margin};
  line-height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-weight: ${(props) => props.weight};
  color: ${props => props.color}
`;

export const TitleSecondary = styled(TitlePrimary).attrs({ as: "h2" })`
  font-size: ${(props) => (props.size ? props.size : "1.25rem")};

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #bdbdbd;
    margin-top: 0.5rem;
  }
`;

export const TitleTerciary = styled(TitlePrimary).attrs({ as: "h3" })`
  font-size: ${(props) => (props.size ? props.size : "1.15rem")};
`;

export const Paragraph = styled(TitlePrimary).attrs({ as: "p" })`
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  text-align: ${(props) => (props.align ? props.align : "left")};
`;
