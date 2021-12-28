import { useState } from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Paper } from '@mui/material';

export default (title, toRender) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => { setOpen(false); }

    const dialogComponent = (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <Paper>
                {toRender}
            </Paper>
        </Dialog>
    )

    return [dialogComponent, setOpen];
}