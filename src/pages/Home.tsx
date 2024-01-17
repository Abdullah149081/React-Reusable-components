import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpSchema, TFormValues } from '../components/Form/formValidation';
import { Form, FormSection, FormSubmit } from '../components/ReusableForm';
import { classInput, classLabel } from '../style/form';
import ModalOpen from './ModalOpen';

function Home() {
  const double = true;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit: SubmitHandler<TFormValues> = (data) => console.log(data);

  return (
    <div className="my-10">
      {/* <ModalOpen /> */}
      {/* <Form /> */}
      <Form onSubmit={handleSubmit(onSubmit)} double={double}>
        <FormSection>
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
              <p className="mt-0.5 text-xs text-red-500">
                {errors.name.message}
              </p>
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
        </FormSection>
        <FormSubmit />
      </Form>
    </div>
  );
}

export default Home;
