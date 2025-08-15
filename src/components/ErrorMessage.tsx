import type { PropsWithChildren } from 'react';

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-center my-4 p-3 bg-red-600 text-white font-semibold rounded-md uppercase">
      {children}
    </div>
  );
};

export default ErrorMessage;
