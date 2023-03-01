import styled from '@emotion/styled';
import { setBackGroundColor } from 'utils/setBackGroundColor';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #f4f4f4;

  border-radius: 4px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Status = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 15px;

  border-radius: 50%;
  background-color: ${setBackGroundColor};
`;

export const Avatar = styled.img`
  margin-right: 15px;
`;

export const Name = styled.p`
  font-weight: 700;
`;
