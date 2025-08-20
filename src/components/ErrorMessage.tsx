import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  visible: boolean;
}

const ErrorMessage = ({ children, visible }: Props) => {
  return (
    <div
      className={`text-center my-4 p-3 bg-red-600 text-white font-semibold rounded-md uppercase
        transition-opacity duration-1000
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
