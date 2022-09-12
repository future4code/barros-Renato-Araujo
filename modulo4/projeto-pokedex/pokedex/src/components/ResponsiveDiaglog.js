import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const accessProfile1 = (name) => {
    window.open(`https://github.com/gabrieldepiata`, '_blank')
  }
  const accessProfile2 = (name) => {
    window.open(`https://github.com/kayoceshar`, '_blank')
  }
  const accessProfile3 = (name) => {
    window.open(`https://github.com/nartain`, '_blank')
  }

  return (
    <div>
      <Button size='lg' variant="contained" onClick={handleClickOpen} sx={{backgroundColor: 'black', color: 'white'}}>
        ABOUT US
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" fontSize="2rem">
          {"Labenu: Full-Stack dev course. PokeDEX 9 Project."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{fontSize: '1.5rem'}}>
            This is a short project for the final React chapter of JBL's course. We're enjoying using Context - we finally managed to! - and Design System. So far so good! Below you can access our group's profiles! Let's dive!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' autoFocus onClick={accessProfile1}>
            Gabriel Vieira
          </Button>
          <Button variant='contained' onClick={accessProfile2} autoFocus>
            Kayo Céshar
          </Button>
          <Button variant='contained' onClick={accessProfile3} autoFocus>
            Renato Peçanha
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
