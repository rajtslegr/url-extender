import { ReactNode, useState } from 'react';

import { Notification } from '@/components/Notification';
import { Card } from '@/components/ui/card';

interface UrlBoxProps {
  children: ReactNode;
}

const UrlBox = ({ children }: UrlBoxProps) => {
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: '',
  });

  return (
    <div>
      <Card className="my-6 flex w-full flex-col break-all bg-secondary p-2 text-secondary-foreground">
        {children}
      </Card>
      <Notification
        show={notification.show}
        type={notification.type}
        title={notification.type === 'success' ? 'Success' : 'Error'}
        message={notification.message}
        onClose={() => setNotification((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
};

export default UrlBox;
