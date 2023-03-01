import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import IconButton from '~/core/ui/IconButton';
import If from '~/core/ui/If';
import UpdateTaskCard from './UpdateTasksCard';

import task from '~/lib/tasks/@types/task';

const EditTaskButton: React.FCC<{ task: task }> = ({ task }) => {
  const [isUpdateTaskOpen, setIsUpdateTaskOpen] = useState(false);

  return (
    <>
      <IconButton
        data-cy={'edit-task-button'}
        onClick={() => setIsUpdateTaskOpen(true)}
      >
        {/* TODO: build a checkbox or switch for isComplete property */}
        <PencilSquareIcon className="dark h-6" />
      </IconButton>
      <If condition={isUpdateTaskOpen}>
        <UpdateTaskCard
          isOpen={isUpdateTaskOpen}
          setIsOpen={setIsUpdateTaskOpen}
          task={task}
        />
      </If>
    </>
  );
};

export default EditTaskButton;
