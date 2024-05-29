export const getEnvVariables = () => {
  import.meta.env; //* in this line we have the environment viriables

  return {
    ...import.meta.env, //* Then here spread and return these.
  };
};
