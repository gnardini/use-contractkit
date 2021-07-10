import React from 'react';
import { Provider } from '../types';

interface Props {
  provider: Provider;
  onClick: () => void;
}

export const ProviderSelect: React.FC<Props> = ({
  provider,
  onClick,
}: Props) => {
  return (
    <button
      className="tw-flex tw-flex-row tw-items-center tw-text-left tw-py-4 tw-px-3 tw-w-80 md:tw-w-96 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 tw-transition tw-rounded-md  focus:tw-outline-none"
      onClick={
        provider.canConnect()
          ? onClick
          : provider.installURL
          ? () =>
              window.open(provider.installURL, '_blank', 'noopener,noreferrer')
          : undefined
      }
    >
      <div className="tw-flex tw-flex-shrink-0 tw-mr-4 md:tw-mr-5 ">
        <span className="tw-my-auto">
          {typeof provider.icon === 'string' ? (
            <img
              src={provider.icon}
              alt={`${provider.name} logo`}
              style={{ height: '42px', width: '42px' }}
            />
          ) : (
            <provider.icon style={{ height: '42px', width: '42px' }} />
          )}
        </span>
      </div>
      <div>
        <div className="tw-pb-1 tw-font-medium dark:tw-text-gray-300">
          {provider.canConnect() ? provider.name : `Install ${provider.name}`}
        </div>
        <div className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">
          {provider.description}
        </div>
      </div>
    </button>
  );
};
