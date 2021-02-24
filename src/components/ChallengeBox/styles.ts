import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100%;
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0,0,0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const Active = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  color: ${colors.blue};
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0 2rem 1.5rem;

  border-bottom: 1px solid ${colors.grayLine};
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const Description = styled.p`
  line-height: 1.5;
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

interface IButtonProps {
  failedButton?: boolean;
}

export const Button = styled.button<IButtonProps>`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 0;
  border-radius: 5px;

  color: ${colors.white};

  font-size: 1rem;
  font-weight: 600;

  background-color: ${colors.green};

  transition: filter .2s ease;

  ${props => props.failedButton && css`
    background-color: ${colors.red};
  `};

  &:hover {
    filter: brightness(0.9);
  }
`;


export const NotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IStrongProps {
  active?:boolean;
}

export const Strong = styled.strong<IStrongProps>`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;

  ${props => props.active && css`
    font-weight: 600;
    font-size: 2rem;
    color: ${colors.title};
    margin: 1.5rem 0 1rem;
  `};
`;

export const P = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 1.4;
  max-width: 70%;
  margin-top: 3rem;
`;

interface IImageProps {
  active?: boolean;
}

export const Image = styled.img<IImageProps>`
  margin-right: 1rem;
  width: 90px;

  ${props => props.active && css``};
`;