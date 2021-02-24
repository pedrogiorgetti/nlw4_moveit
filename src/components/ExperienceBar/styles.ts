import styled from 'styled-components';
import colors from '../../styles/colors';

export const Header = styled.header`
  align-items: center;
  display: flex;
`;

export const Container = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${colors.grayLine};
  margin: 0 1.5rem;
  position: relative;
`;

export const Span = styled.span`
  font-size: 1rem;
`;

interface IProgressBarProps {
  width: string;
}

export const ProgressBar = styled.div<IProgressBarProps>`
  height: 4px;
  border-radius: 4px;
  background-color: ${colors.green};
  width: ${props => props.width};
`;  

interface ICurrentProgressProps {
  left: string;
}

export const CurrentProgress = styled.span<ICurrentProgressProps>`
  left: ${props => props.left};
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;