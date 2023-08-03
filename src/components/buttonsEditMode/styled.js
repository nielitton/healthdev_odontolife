import { styled } from "styled-components";

export const Button = styled.button`
  width: ${({isPassword}) => isPassword ? '120px' : '80px'};
  height: 35px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ editMode }) => editMode ? 'white' : 'var(--blue-color)'};
  color: ${({ editMode }) => editMode ? 'var(--text-color-light)' : 'white'};
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background-color: ${({ editMode }) => editMode ? 'var(--border-color)' : 'var(--blue-color-bold)'};
  }
`;

export const EditModeStyle = styled.div`
  display: flex;
  gap: 10px;
`