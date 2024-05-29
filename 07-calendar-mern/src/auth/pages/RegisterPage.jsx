import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { FormLayout } from '../../layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const togglepasword = () => setShowPassword(!showPassword);

  return (
    <FormLayout title="Sing Up">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className=" p-3 xs:mx-auto sm:mx-auto sm:w-full">
          <div className="mb-4 text-blueDark-800">
            <Input
              {...register('fullName')}
              label="Full Name"
              type="text"
              variant="underlined"
            />
            <Input
              {...register('email')}
              label="Email"
              type="email"
              variant="underlined"
            />

            <Input
              {...register('password')}
              label="Password"
              variant="underlined"
              // placeholder="Insert Your Password"
              endContent={
                <button
                  className="focus:outline-none"
                  onClick={togglepasword}
                  type="button"
                >
                  {showPassword ? (
                    <FontAwesomeIcon
                      className="text-blueDark-600"
                      icon={faEye}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="text-blueDark-600"
                      icon={faEyeSlash}
                    />
                  )}
                </button>
              }
              type={showPassword ? 'text' : 'Password'}
            />
          </div>

          <div className="flex flex-col">
            <Button
              className="bg-white-100 text-blueDark-800 rounded-lg sm:max-w-full"
              type="submit"
            >
              <span className="font-bold text-sm">Sing Up</span>
            </Button>

            <div className="flex items-center justify-center space-x-2 my-2">
              <span className="h-px w-16 bg-blueDark-800"></span>
              <span className="text-blueDark-800 font-normal">or</span>
              <span className="h-px w-16 bg-blueDark-800"></span>
            </div>
          </div>

          <Link
            className="
              text-xs
              text-blueDark-800 
              hover:scale-105 
              transition duration-100
              "
            to="/auth/login"
          >
            Do you already have an account? ¡Sig in!
          </Link>
        </div>
      </form>
    </FormLayout>
  );
};
