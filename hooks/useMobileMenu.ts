import { useCallback, useState } from 'react';

export function useMobileMenu(initialOpen = false) {
  const [open, setOpen] = useState(initialOpen);

  const toggle = useCallback(() => {
    setOpen((v) => !v);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setOpen(true);
  }, []);

  return { open, setOpen, toggle, close, openMenu };
}

