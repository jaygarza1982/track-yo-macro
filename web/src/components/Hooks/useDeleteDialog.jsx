import { useState } from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';

export default (title, action) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => { setOpen(false); }

    const dialogComponent = (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Are you sure you want to delete <strong>{title}</strong>?
            </DialogTitle>
            <div style={{ padding: 15 }}>
                <Button onClick={() => { if (action) action(); }}>
                    Delete
                </Button>
                <Button onClick={() => { setOpen(false); }}>
                    Cancel
                </Button>
            </div>
        </Dialog>
    )

    return [dialogComponent, setOpen];
}