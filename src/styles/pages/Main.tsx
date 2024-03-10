import { styled } from '@linaria/react';

export const MainContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 40px;
`;

export const MyGroupListHeader = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MyGroupListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const MyGroupList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
