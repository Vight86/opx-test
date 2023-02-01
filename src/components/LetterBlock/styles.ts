import { makeStyles } from '@material-ui/styles';

const baseStyles = {
  display: 'block',
  width: '100px',
  height: '100px',
  fontSize: '40px',
  lineHeight: '90px',
  textAlign: 'center' as 'center',
  boxSizing: 'border-box' as 'border-box',

  '&:hover': {
    cursor: 'pointer',
  }
};

export const useStyles = makeStyles({
  primary: {
    ...baseStyles,
    background: '#8df6f6',
    border: '2px solid #70c0d2',
  },
  secondary: {
    ...baseStyles,
    background: '#f6bc8d',
    border: '2px solid #ca7a3a',
  }
});
