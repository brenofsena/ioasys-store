import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  background: ${(props) => props.theme.colors.whiteSoft};
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;
