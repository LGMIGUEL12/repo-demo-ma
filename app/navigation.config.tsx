import configuration from '~/configuration';
import { Cog8ToothIcon, Squares2X2Icon, ClipboardDocumentIcon, PhotoIcon } from '@heroicons/react/24/outline';

const NAVIGATION_CONFIG = {
  items: [
    {
      label: 'common:dashboardTabLabel',
      path: configuration.paths.appHome,
      Icon: ({ className }: { className: string }) => {
        return <Squares2X2Icon className={className} />;
      },
    },
    {
      label: 'common:settingsTabLabel',
      path: '/settings',
      Icon: ({ className }: { className: string }) => {
        return <Cog8ToothIcon className={className} />;
      },
    },
    {
      label: 'common:tasksTabLabel',
      path: '/tasks',
      Icon: ({ className }: { className: string }) => {
        return <ClipboardDocumentIcon className={className} />
      }
    },
    {
      label: 'common:photosTabLabel',
      path: '/photos',
      Icon: ({ className }: { className: string }) => {
        return <PhotoIcon className={className} />
      }
    }
  ],
};

export default NAVIGATION_CONFIG;
