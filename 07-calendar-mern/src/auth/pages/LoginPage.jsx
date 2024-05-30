import { useState } from 'react';
import { Button, Image, Input } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FormLayout } from '../../layout';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../hooks';

export const LoginPage = () => {
  const { startLogin } = useAuthStore();

  const { register, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const togglepasword = () => setShowPassword(!showPassword);

  return (
    <FormLayout title="Sing In">
      <form onSubmit={handleSubmit((data) => startLogin(data))}>
        <div className=" p-3 xs:mx-auto sm:mx-auto sm:w-full">
          <div className="mb-4 text-blueDark-800">
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
              <span className="font-bold text-sm">Sing In</span>
            </Button>

            <div className="flex items-center justify-center space-x-2 my-2">
              <span className="h-px w-16 bg-blueDark-800"></span>
              <span className="text-blueDark-800 font-normal">or</span>
              <span className="h-px w-16 bg-blueDark-800"></span>
            </div>

            <Button className="flex justify-around bg-white-100 p-0">
              <Image
                className="ml-3"
                width={30}
                alt="google"
                src="../../../images/icons8-logo-de-google-48.png"
              />

              <span className="text-sm font-bold text-blueDark-800">
                Sing In with Google
              </span>
            </Button>
          </div>

          <Link
            className="
              text-xs
              text-blueDark-800 
              hover:scale-105 
              transition duration-100
              "
            to="/auth/register"
          >
            Do not have an account? Sing Up !!
          </Link>
        </div>
      </form>
    </FormLayout>
  );
};
