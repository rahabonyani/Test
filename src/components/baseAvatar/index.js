import React from "react";
import { AvatarStyle } from "./designs";

const BaseAvatar = ({ src }) => {
    return (
        <AvatarStyle>
            <img src={src} />
        </AvatarStyle>
    );
};

export default BaseAvatar;
