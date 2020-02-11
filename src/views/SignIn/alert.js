import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function Alert(props) {

  return (
    <div>
      <Snackbar
        open={props.open}
        onClose={props.handlerClose}
        TransitionComponent={props.transition}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Wrong Email or Password</span>}
        autoHideDuration={3000}
      />
    </div>
  );
}

