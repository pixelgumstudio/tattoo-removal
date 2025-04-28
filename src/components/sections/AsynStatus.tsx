import React from 'react';

interface AsyncStatusProps {
  isLoading: boolean;
  isError: boolean;
  loadingText?: string;
  errorText?: string;
}

export const AsyncStatus: React.FC<AsyncStatusProps> = ({
  isLoading,
  isError,
  loadingText = 'Loading, please wait...',
  errorText = 'Oops! Something went wrong.',
}) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10 text-gray-500">
        <span className="animate-pulse">{loadingText}</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center py-10 text-red-500">
        <span>{errorText}</span>
      </div>
    );
  }

  return null;
};
