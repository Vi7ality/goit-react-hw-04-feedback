import styled from '@emotion/styled';

export const ButtonListStyled = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 10px;

  /* &:not(:last-child) {
    margin-right: 15px;
  } */
`;

export const ButtonItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;

  font-size: 20px;

  &:hover {
    background: ${props => props.activeColor};
  }
`;
