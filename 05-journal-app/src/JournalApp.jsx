import { AppRouter } from "./router/AppRouter";

import { AppTheme } from "./theme";
import { CheckingAuth } from "./shared/components";
import { useCheckAuthentication } from "./hooks";

export const JournalApp = () => {
  const { status } = useCheckAuthentication();

  if (status === "cheking") {
    return <CheckingAuth />;
  }

  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
};
