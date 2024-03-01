import classes from "./PageLayout.module.css";

type Props = {
  children: JSX.Element;
};

const PageLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className={classes.container}>
      <>{children}</>
    </div>
  );
};

export default PageLayout;
