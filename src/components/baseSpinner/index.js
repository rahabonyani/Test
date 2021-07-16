import React from "react";
import { SpinnerStyle } from "./design";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
    return (
        <SpinnerStyle>
            <CircularProgress />
        </SpinnerStyle>
    );
};

export default Spinner;
