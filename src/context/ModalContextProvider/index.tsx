import React, { useMemo, useState } from "react";

interface ModalContextValue {
  displayedComponent: null | React.ReactChild;
  setDisplayedComponent: (displayedComponent: null | React.ReactChild) => void
}

export const ModalContext = React.createContext<ModalContextValue>({
  displayedComponent: null, setDisplayedComponent: () => undefined,
});

interface Props {
  children: React.ReactNode
}

export function ModalContextProvider({ children }: Props) {
  const [displayedComponent, setDisplayedComponent] = useState<null | React.ReactChild>(null);
  const contextValue = useMemo(() => ({
    displayedComponent,
    setDisplayedComponent,
  }), [displayedComponent]);

  return (
    <ModalContext.Provider
      value={contextValue}
    >
      { children }
    </ModalContext.Provider>
  );
}
