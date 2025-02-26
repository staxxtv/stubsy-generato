import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export type AuthMode = "login" | "signup";

interface AuthModalProps {
  mode?: AuthMode;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function AuthModal({
  mode = "login",
  trigger,
  open,
  onOpenChange,
}: AuthModalProps) {
  const [currentMode, setCurrentMode] = useState<AuthMode>(mode);
  const [dialogOpen, setDialogOpen] = useState(open || false);
  
  const handleOpenChange = (open: boolean) => {
    setDialogOpen(open);
    onOpenChange?.(open);
  };
  
  const handleSwitchMode = () => {
    setCurrentMode(currentMode === "login" ? "signup" : "login");
  };
  
  const handleSuccess = () => {
    setDialogOpen(false);
    onOpenChange?.(false);
  };

  return (
    <Dialog open={open !== undefined ? open : dialogOpen} onOpenChange={handleOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[425px]">
        {currentMode === "login" ? (
          <LoginForm onSuccess={handleSuccess} onSwitchToSignup={handleSwitchMode} />
        ) : (
          <SignupForm onSuccess={handleSuccess} onSwitchToLogin={handleSwitchMode} />
        )}
      </DialogContent>
    </Dialog>
  );
}
