import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  primary: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '96%',
    height: '100%',
    maxWidth: '1200px',
    margin: '0 auto',

    '& a': {
      margin: '0 20px',
      color: 'white',
      fontSize: '21px',
      textDecoration: 'none',
      fontWeight: 'bold'
    }
  }
})