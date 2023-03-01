import styled from '@emotion/styled';

export const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #ecf1f4;
  }
`;

export const Cell = styled.td`
  width: 30%;
  padding-top: 7px;
  padding-bottom: 7px;
  &:first-of-type {
    padding-left: 100px;

    text-transform: capitalize;
    text-align: left;
  }

  &:nth-of-type(even) {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  &:last-of-type {
    padding-left: 130px;
    text-align: left;
  }
`;


export const Article = styled.article({
  backgroundColor: "#fff",
})