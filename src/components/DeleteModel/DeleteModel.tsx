import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(24, 48, 63, 0.79)',
    },
}

Modal.setAppElement('#modal-root')

type DeleteModalProps = {
    id: number;
    showModal: boolean;
    deleteAction: (id: number) => void;
    cancelAction: () => void;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({id, showModal, deleteAction, cancelAction}) => {
    return (
        <Dialog
            open={showModal}
            onClose={cancelAction}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Delete Confirmation
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <p>
                        Are you sure you want to delete{' '}
                        <span className="font-bold">User {id}</span> ?
                    </p>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={cancelAction}>Cancel</Button>
                <Button onClick={() => deleteAction(id)} autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}
