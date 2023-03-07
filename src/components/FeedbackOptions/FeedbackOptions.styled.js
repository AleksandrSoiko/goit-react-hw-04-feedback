import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
`;

export const Btn = styled.button`
  border-radius: 5px;
  border: none;
  padding: 10px;
  background-color: #6f6f6f;
  &:active {
    background: yellow;
  }
`;
