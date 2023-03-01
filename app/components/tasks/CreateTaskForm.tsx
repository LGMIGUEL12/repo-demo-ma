import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Trans, useTranslation } from 'react-i18next';
import Button from '~/core/ui/Button';
import TextField from '~/core/ui/TextField';
import useCreateTask from '~/lib/tasks/hooks/use-create-task';

const CreateTaskForm: React.FC<{}> = () => {
  const [createTask, createTaskState] = useCreateTask();
  const { loading } = createTaskState;
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const titleControl = register('title', { required: true });
  const descriptionControl = register('description', { required: true });

  const onError = useCallback(() => {
    toast.error('Error: please fill in all the required fields');
  }, []);

  const onSubmit = async (title: string, description: string) => {
    console.log(title);
    console.log(description);

    if (!title || !description) {
      return onError();
    }

    await toast.promise(createTask(title, description), {
      success: t<string>(`task:createTaskSuccess`),
      error: t<string>(`task:createTaskError`),
      loading: t<string>(`task:createTaskLoading`),
    });

    reset({
      title: '',
      description: '',
    });
  };

  useEffect(() => {
    reset({ title: '', description: '' });
  }, [reset]);

  return (
    <>
      <form
        onSubmit={handleSubmit((value) => {
          return onSubmit(value.title, value.description);
        })}
      >
        <div className={'flex items-center space-y-4'}>
          <div className={'ml-2 mr-2 flex-auto'}>
            <TextField>
              <TextField.Label>
                <Trans i18nKey={'task:titleInputLabel'} />
                <TextField.Input
                  name={titleControl.name}
                  innerRef={titleControl.ref}
                  onChange={titleControl.onChange}
                  onBlur={titleControl.onBlur}
                  required
                  data-cy={'task-title-input'}
                  placeholder={'Ex. "Do this by night"'}
                />
              </TextField.Label>
            </TextField>
            <TextField className={'pt-1'}>
              <TextField.Label>
                <Trans i18nKey={'task:descriptionInputLabel'} />
                <TextField.Input
                  name={descriptionControl.name}
                  innerRef={descriptionControl.ref}
                  onChange={descriptionControl.onChange}
                  onBlur={descriptionControl.onBlur}
                  required
                  data-cy={'task-description-input'}
                  placeholder={'Write a detailed description about your task.'}
                />
              </TextField.Label>
            </TextField>
          </div>
          <div className={'ml-2 mr-2 flex-initial pb-1'}>
            <Button
              className={'w-full md:w-auto'}
              data-cy={'create-task-submit-button'}
              loading={loading}
            >
              <Trans i18nKey={'task:createTaskSubmitLabel'} />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateTaskForm;
