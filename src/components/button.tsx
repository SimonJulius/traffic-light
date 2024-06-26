import styled from "styled-components";
import { devices } from "../constants";

// Styled button component
const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 22px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  min-width: 100px;
  &:hover {
    box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: inset 0px 3px 0px 0px rgba(0, 0, 0, 0.2);
  }
  @media screen and ${devices.mobileL} {
    padding: 5px 10px;
    font-size: 14px;
    min-width: fit-content;
  }
`;

interface PressableButtonProps {
  title: string;
  onClick: () => void;
}

const PressableButton = ({ onClick, title }: PressableButtonProps) => {
  const handleClick = () => {
    onClick();
  };

  return <StyledButton onClick={handleClick}>{title}</StyledButton>;
};

export default PressableButton;
