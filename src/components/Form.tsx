import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import { Notification } from '@/components/Notification';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface FormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onCopy: () => void;
  error: string;
}

const Form = ({ onSubmit, onChange, onCopy, error }: FormProps) => {
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: '',
  });

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({
      show: true,
      type,
      message,
    });
  };

  const handleCopy = async () => {
    try {
      onCopy();
      showNotification('success', 'Copied to clipboard!');
    } catch (err) {
      showNotification('error', 'Failed to copy to clipboard');
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(e);
    if (error) {
      showNotification('error', error);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="space-y-2">
            <Input onChange={onChange} placeholder="Enter URL..." />
          </div>
          <div className="flex space-x-2">
            <Button type="submit" className="flex-1">
              Extend
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={handleCopy}
              className="flex-1"
            >
              Copy
            </Button>
          </div>
        </form>
      </CardContent>
      <Notification
        show={notification.show}
        type={notification.type}
        title={notification.type === 'success' ? 'Success' : 'Error'}
        message={notification.message}
        onClose={() => setNotification((prev) => ({ ...prev, show: false }))}
      />
    </Card>
  );
};

export default Form;
