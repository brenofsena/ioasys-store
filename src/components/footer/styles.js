import styled from 'styled-components';
import { rem } from 'polished';

export const Footer = styled.footer`
  background: ${(props) => props.theme.colors.secondary};
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 16px;
`;

export const Copyright = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.font.medium};
  font-size: ${rem('16px')};
  margin: 16px 0;
`;
