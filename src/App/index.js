import React from "react";
import ReduxProvider from "../core/ReduxProvider";
import Routes from "../routes";
import ThemeWrapper from "../theme";

const App = () => {
    return (
        <ReduxProvider>
            <ThemeWrapper>
                <Routes />
            </ThemeWrapper>
        </ReduxProvider>
    );
};

export default App;
