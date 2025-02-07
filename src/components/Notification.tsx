import React, { useEffect } from 'react';

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface NotificationProps {
  show: boolean;
  type: 'success' | 'error';
  title: string;
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Notification({
  show,
  type,
  title,
  message,
  onClose,
  duration = 3000,
}: NotificationProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
    return () => {};
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <Alert
      variant="popup"
      className={
        type === 'error'
          ? 'border-destructive/50 bg-destructive/5 text-destructive'
          : 'border-green-500/50 bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-300 [&>svg]:text-green-600'
      }
    >
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
