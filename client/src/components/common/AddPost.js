import React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';

const AddPost = ({handleClose, handleCreate}) => {
    return (
        <Dialog
            open
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{   
            component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    const formFields = new FormData(event.currentTarget);
                    const formData = Object.fromEntries((formFields).entries());
                    handleCreate(formData);
                },
            }}
        >
            <DialogTitle>Create Post</DialogTitle>
            <DialogContent>
            <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="content"
                label="Content"
                name="content"
                multiline
                rows={2}
                maxRows={4}

            />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="outlined">Cancel</Button>
                <Button type="submit" variant="contained">Create</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddPost;