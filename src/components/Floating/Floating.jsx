import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-scroll';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FloatingActionButtons = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        position: 'fixed',
        'z-index': '1',
        display: 'flex',
        'flex-direction': 'row',
        'align-content': 'center',
        'flex-wrap': 'wrap',
        'justify-content': 'center',
      }}
    >
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        <Link to="hero" smooth duration={1000}>
          main
        </Link>
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        <Link to="about" smooth duration={1000}>
          about me
        </Link>
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        <Link to="certificate" smooth duration={1000}>
          certificate
        </Link>
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        <Link to="projects" smooth duration={1000}>
          projects
        </Link>
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        <Link to="contact" smooth duration={1000}>
          contact
        </Link>
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        <a href="/" style={{ color: 'black' }}>
          logout
        </a>
      </Fab>
    </div>
  );
};

export default FloatingActionButtons;
