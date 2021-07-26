import React from 'react';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-scroll';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';
import ComputerIcon from '@material-ui/icons/Computer';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NavigationIcon from '@material-ui/icons/Navigation';

const FloatingActionButtons = () => {
  return (
    <div className="float-grid">
      <table className="float">
        <tr className="float-navi" style={{ transition: 'all 1s', order: '1', padding: '2rem 0' }}>
          <td>
            <Fab variant="extended" class="MuiButtonBase-root MuiFab-root MuiFab-extended fab">
              <NavigationIcon className="float-extendedIcon" />
              navigate
            </Fab>
          </td>
        </tr>
        <tr style={{ verticalAlign: 'top' }}>
          <td>
            <Fab variant="extended" class="MuiButtonBase-root MuiFab-root MuiFab-extended fab">
              <SentimentVerySatisfiedIcon className="float-extendedIcon" />
              <Link to="hero" smooth duration={1000}>
                main
              </Link>
            </Fab>
          </td>
          <td>
            <Fab variant="extended" class="MuiButtonBase-root MuiFab-root MuiFab-extended fab">
              <FavoriteIcon className="float-extendedIcon" />
              <Link to="about" smooth duration={1000}>
                about me
              </Link>
            </Fab>
          </td>
          <td>
            <Fab variant="extended" class="MuiButtonBase-root MuiFab-root MuiFab-extended fab">
              <DescriptionIcon className="float-extendedIcon" />
              <Link to="certificate" smooth duration={1000}>
                certificate
              </Link>
            </Fab>
          </td>
          <td>
            <Fab variant="extended" class="MuiButtonBase-root MuiFab-root MuiFab-extended fab">
              <ComputerIcon className="float-extendedIcon" />
              <Link to="projects" smooth duration={1000}>
                projects
              </Link>
            </Fab>
          </td>
          <td>
            <Fab variant="extended" class="MuiButtonBase-root MuiFab-root MuiFab-extended fab">
              <ContactMailIcon className="float-extendedIcon" />
              <Link to="contact" smooth duration={1000}>
                contact
              </Link>
            </Fab>
          </td>
          <td>
            <Fab variant="extended" class="MuiButtonBase-root MuiFab-root MuiFab-extended fab">
              <ExitToAppIcon className="float-extendedIcon" />
              <a href="/" style={{ color: 'black' }}>
                logout
              </a>
            </Fab>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default FloatingActionButtons;