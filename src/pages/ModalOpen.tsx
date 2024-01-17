import { useCallback, useState } from 'react';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

const ModalOpen = () => {
  const [modal, setModal] = useState(false);

  const toggleOpen = useCallback(() => {
    setModal((value) => !value);
  }, []);
  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <Button onClick={toggleOpen} type="button" variant="secondary">
          Open Modal
        </Button>
      </div>
      <Modal isOpen={modal} onClose={toggleOpen}>
        <h1>This is modal Page</h1>
      </Modal>
    </div>
  );
};

export default ModalOpen;
