import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import { requestUserDetailsActions } from "../../../actions/users/userDetails";
import { useActions } from "../../../hooks/useActions";
import { useSelector } from "react-redux";
import Spinner from "../../baseSpinner";
import BaseButton from "../../baseButton";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DetailsDialog = ({ id }) => {
    const [loading, setLoading] = useState(false);
    const [requestUserDetails] = useActions([requestUserDetailsActions]);
    const { response } = useSelector(
        ({ UserDetailsReducer }) => UserDetailsReducer
    );

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = async (id) => {
        setLoading(true);
        await requestUserDetails(id);
        setLoading(false);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <BaseButton
                color="primary"
                variant="contained"
                fullWidth
                disabled={loading}
                type="button"
                onClick={() => handleClickOpen(id)}
            >
                Details
                {loading && <Spinner />}
            </BaseButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                        <div>
                            <img alt={response.first_name} src={response.avatar} />
                        </div>
                        <div>
                            <span>Id: </span>
                            <span>{response.id}</span>
                        </div>
                        <div>
                            <span>First Name: </span>
                            <span>{response.first_name}</span>
                        </div>
                        <div>
                            <span>Last Name: </span>
                            <span>{response.last_name}</span>
                        </div>
                        <div>
                            <span>Email: </span>
                            <span>{response.email}</span>
                        </div>
                </DialogContent>
                <DialogActions>
                    <BaseButton onClick={handleClose} color="primary">
                        Close
                    </BaseButton>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DetailsDialog;
