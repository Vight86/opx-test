import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export const Nav = (): JSX.Element => {
  const style = useStyles();

  return (
    <nav className={style.primary}>
      <Link to={'/'}>C-Letter</Link>
      <Link to={'dogs'}>Dogs</Link>
    </nav>
  )
};
