import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  wrapper: {
    position: 'fixed',
    background: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'flex',
  },
  container: {
    position: 'relative',
    margin: 'auto',
    width: '500px',
    height: 'auto',
    background: 'white',
    padding: '10px 20px',
    borderRadius: '5px'
  },
  closeBtn: {
    position: 'absolute',
    right: '20px',
    top: '20px',
    color: 'black',
    background: 'none',
    border: 'none',
    fontSize: '30px',
    cursor: 'pointer'
  }
});
