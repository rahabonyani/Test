import {
    ThemeProvider as MuiThemeProvider,
    StylesProvider,
} from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { ThemeProvider } from "styled-components";
import materialUiTheme from "./material-ui-theme";
import styledComponentTheme from "./styled-component-theme";


const ThemeWrapper = ({ children }) => (
    <StylesProvider>
        <MuiThemeProvider theme={materialUiTheme}>
            <ThemeProvider theme={styledComponentTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </MuiThemeProvider>
    </StylesProvider>
);

export default ThemeWrapper;
