import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  primary: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gridGap: '20px',
    justifyContent: 'center',
    marginTop: '50px',

    '& > button:nth-child(4)': {
      gridColumn: 'span 3'
    },
  }
});
