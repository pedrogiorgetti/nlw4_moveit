import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`;

export const Content = styled.div`
  margin-left: 1.5rem;
`;

export const Name = styled.strong`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.title};
`;

export const Level = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const Icon = styled.img` margin-right: 0.5rem;`;