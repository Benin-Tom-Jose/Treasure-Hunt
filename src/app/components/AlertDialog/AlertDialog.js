import React from 'react';
import Proptypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const AlertDialog = (props) => {
    const { title, content, handleActionClick, ...rest } = props;

    return (
        <Dialog {...rest}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{content}</DialogContentText>
            </DialogContent>
            <DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained" onClick={() => handleActionClick(true)}>Yes</Button>
                    <Button color="default" variant="contained" onClick={() => handleActionClick(false)}>No</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

AlertDialog.defaultProps = {
    title: 'Confirmation',
    content: 'Are you sure?',
    handleActionClick: () => { },
};

AlertDialog.propTypes = {
    title: Proptypes.string,
    content: Proptypes.string,
    handleActionClick: Proptypes.func
};

export default AlertDialog;