import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Modal = ({ children, open, close }) => {
  return (
    open && (
      <S.ModalWrapper data-testid="modal">
        <S.ModalFade onClick={() => close()} data-testid="modal-fade" />
        <S.ModalContent data-testid="modal-content">{children}</S.ModalContent>
      </S.ModalWrapper>
    )
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  open: PropTypes.bool.isRequired,
  close: () => {},
};

export default Modal;
