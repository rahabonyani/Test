import React from "react";
import { LayoutHeader, ButtonLogOut } from "./design";
import BaseButton from "../../components/baseButton";
import { removeCookies } from "../../core/Cookie";
import { useHistory } from "react-router-dom";

const Header = () => {
    let history = useHistory();

    const handleLogOut = () => {
        removeCookies("token");
        history.push("/login");
    };
    return (
        <LayoutHeader>
            <ButtonLogOut>
                <BaseButton
                    variant="outlined"
                    color="secondary"
                    onClick={handleLogOut}
                >
                    Log-out
                </BaseButton>
            </ButtonLogOut>
        </LayoutHeader>
    );
};

export default Header;
