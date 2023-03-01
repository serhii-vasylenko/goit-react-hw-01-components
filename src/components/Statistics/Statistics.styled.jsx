import styled from '@emotion/styled';

export const Section = styled.section`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  background-color: #f4f4f4;
  border-radius: 4px;

  text-align: center;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-basis: calc(100% / 4);

  padding-top: 10px;
  padding-bottom: 10px;

  color: #fff;
`;

export const Label = styled.span`
  margin-bottom: 7px;
`;

export const Percentage = styled.span`
  font-size: 24px;
`;
