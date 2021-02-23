import styled from 'styled-components';
import { rem } from 'polished';

export const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

export const ModalFade = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: ${rem('16px')};
  box-shadow: ${(props) => props.theme.boxShadow};
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 30;
  transform: translate(-50%, -50%);
`;
