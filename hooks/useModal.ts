import { useState } from "react";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return {
    handleClose: () => setIsOpen(false),
    handleOpen: () => setIsOpen(true),
    isOpen,
  };
};
