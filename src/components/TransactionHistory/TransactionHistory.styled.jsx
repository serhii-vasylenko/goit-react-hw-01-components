import styled from '@emotion/styled';

export const Table = styled.table`
  width: 870px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  background-color: #ffffff;
  text-align: center;

  border-collapse: collapse;

  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Head = styled.thead`
  text-transform: uppercase;

  color: #ffffff;
  background-color: #00bcd5;
`;

export const Body = styled.tbody`
  color: #868789;
`;
export const Row = styled.tr``;

export const Cell = styled.th`
  width: 30%;
  padding-top: 7px;
  padding-bottom: 7px;

  &:nth-of-type(even) {
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
  }
`;
