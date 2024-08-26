import * as React from "react";
import {
  useId,
  Toaster,
  useToastController,
  Toast,
  ToastTitle,
  ToastBody,
  ToastFooter,
} from "@fluentui/react-components";

type ToastContextType = {
  notify: (
    message: string,
    subtitle?: string,
    intent?: "success" | "error" | "warning",
    actions?: React.ReactNode
  ) => void;
};

const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined
);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);

  const notify = (
    message: string,
    subtitle?: string,
    intent: "success" | "error" | "warning" = "success",
    actions?: React.ReactNode
  ) => {
    dispatchToast(
      <Toast>
        <ToastTitle>{message}</ToastTitle>
        {subtitle && <ToastBody subtitle={subtitle} />}
        {actions && <ToastFooter>{actions}</ToastFooter>}
      </Toast>,
      { intent }
    );
  };

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <Toaster toasterId={toasterId} />
    </ToastContext.Provider>
  );
};
