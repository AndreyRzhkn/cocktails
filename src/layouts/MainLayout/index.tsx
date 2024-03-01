import Menu from "./components/Menu";

import classes from "./MainLayout.module.css";

type Props = {
  children: JSX.Element;
};

const MainLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className={classes.container}>
      <Menu />
      <>{children}</>
    </div>
  );
};

export default MainLayout;
