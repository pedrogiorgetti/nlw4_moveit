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

export const ProgressBar = styled.div`
  height: 4px;
border-radius: 4px;
  background-color: ${colors.green};
`;  

export const CurrentProgress = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;