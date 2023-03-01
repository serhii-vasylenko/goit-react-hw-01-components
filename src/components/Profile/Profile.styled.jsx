import styled from '@emotion/styled';

export const ProfileDiv = styled.div`
  width: 350px;
  height: 520px;
  margin: 50px auto;

  font-size: 20px;
  color: #555555;
  background-color: #f4f4f4;
  border-radius: 4px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 80%;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: #1f1f1f;

  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;

export const Location = styled.p``;

export const List = styled.ul`
  display: flex;
  height: 20%;

  background-color: #f0e8e8;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-basis: calc(100% / 3);

  border-top: 1px solid rgba(0, 0, 0, 0.2);
  &:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
}
`;

export const Label = styled.span``;

export const Quantity = styled.span`
  font-weight: 700;
  color: #1f1f1f;
`;
