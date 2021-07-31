import styled from "styled-components";

export const HistoryList = styled.ul`
  .negative {
    border-color: #cf0000;
  }

  .positive {
    border-color: #00c700;
  }

  .popOut {
    display: none;
  }

  .fadeOut {
    opacity: 0;
  }
`;

export const HistoryItem = styled.li`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: 1rem 0;
  padding: .75rem .5rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  transition: all .5s ease;

  border-right: 4px solid transparent;
`;
