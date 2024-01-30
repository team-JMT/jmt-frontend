import { ReactNode } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';

import { MODAL_KEY, modalState } from '@store/modalAtom';
import OutsideClickHandler from '@utils/OutsideClickHandler';

import { CenterInner, LayerWrapper } from './styled';

export type $Values<T extends object> = T[keyof T];

interface Props {
  type: $Values<typeof MODAL_KEY>;
  content?: ReactNode;
  canOutsideClick?: boolean;
  onOutsideClick?: () => void;
}

const Modal = ({ type, content, canOutsideClick = true, onOutsideClick }: Props): ReactNode => {
  const [modal, setModal] = useAtom(modalState);

  return (
    <AnimatePresence>
      {modal[type] && (
        <LayerWrapper
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          key={type}
          layoutId={type}
        >
          <OutsideClickHandler
            outsideClick={() => {
              if (!canOutsideClick) {
                return;
              }
              onOutsideClick && onOutsideClick();
              setModal({
                ...modal,
                [type]: !modal[type],
              });
            }}
          >
            <CenterInner>{content}</CenterInner>
          </OutsideClickHandler>
        </LayerWrapper>
      )}
    </AnimatePresence>
  );
};

export default Modal;
