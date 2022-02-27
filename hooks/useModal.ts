import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return {
    handleClose: () => setIsOpen(false),
    handleOpen: () => setIsOpen(true),
    isOpen,
  };
};

export default useModal;
