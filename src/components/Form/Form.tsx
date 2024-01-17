import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { classInput, classLabel } from '../../style/form';
import cn from '../../utils/cn';
import { SignUpSchema, TFormValues } from './formValidation';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit: SubmitHandler<TFormValues> = (data) => console.log(data);

  const double = true;
  // const double = false;

  return (
    <form
      className={cn('mx-auto max-w-md ', {
        'max-w-2xl px-5': double,
      })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={cn('grid grid-cols-1', {
          'gap-3 md:grid-cols-2': double,
        })}
      >
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="text"
            {...register('name')}
            name="name"
            className={classInput}
            placeholder=" "
          />
          <label htmlFor="name" className={classLabel}>
            Your Name
          </label>
          {errors?.name && (
            <p className="mt-0.5 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="email"
            {...register('email')}
            name="email"
            className={classInput}
            placeholder=" "
          />
          <label htmlFor="email" className={classLabel}>
            Email address
          </label>
          {errors?.email && (
            <p className="mt-0.5 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="password"
            {...register('password')}
            name="password"
            className={classInput}
            placeholder=" "
          />
          <label htmlFor="password" className={classLabel}>
            Your Password
          </label>
          {errors?.password && (
            <p className="mt-0.5 text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
