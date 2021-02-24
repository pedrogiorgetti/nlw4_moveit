import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div``;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${colors.title};
`;

export const Timer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${colors.white};
  box-shadow: 0 0 60px rgba(0,0,0,0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;
  font-family: "Rajdhani";
  & span:first-child {
    border-right: 1px solid #d7d8da;
  }
  & span:last-child {
    border-left: 1px solid #d7d8da;
  }
`;

export const Time = styled.span`
  flex: 1;
  
`;

export const TimerSeparator = styled.span`
  font-size: 6.25rem;
  margin: 0 .5rem;
`;

interface IButtonProps {
  buttonActive?: boolean;
}

export const Button = styled.button<IButtonProps>`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color .2s  ease;

  &:not(:disabled):hover {
    background-color: ${colors.blueDark};
  }

  ${props => props.buttonActive && css`
    background-color: ${colors.white};
    color: ${colors.title};

    &:not(:disabled):hover {
      background-color: ${colors.red};
      color: ${colors.white};
    }
  `};

  &:disabled {
    background-color: ${colors.white};
    color: ${colors.text};
    cursor: not-allowed;
  }

  
`;