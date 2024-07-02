import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

const CreatePost = ({handleClose, confirmDelete}) => {
    return (
        <Dialog
            open
            onClose={handleClose}
            maxWidth="xs"
            fullWidth
        >
            <DialogTitle>Delete Post</DialogTitle>
            <DialogContent>
                <DialogContentText >
                    Are you sure, you want to delete this post?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="outlined">Cancel</Button>
                <Button onClick={confirmDelete} variant="contained" autoFocus>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreatePost;