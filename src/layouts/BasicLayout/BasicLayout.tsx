import { Nav } from '../../components/Nav/Nav';
import { useStyles } from './style';

interface IHeader {
  children: JSX.Element | (JSX.Element| null)[]
}

export const BasicLayout = ({children}: IHeader): JSX.Element => {
  
  const style = useStyles();

  return (
    <>
      <header className={style.header}>
        <Nav />
      </header>
      <main className={style.main}>
        {children}
      </main>
    </>
  );    
};
