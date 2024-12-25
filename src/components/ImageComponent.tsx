import React from "react";
import logo from '../assets/logo.svg';
import icon from '../assets/icon.svg';
import photo from '../assets/photo.jpg';

export default function MyComponent() {
    return (
        <div>
            <img src={logo} alt="Logo" />
            <img src={icon} alt="Icon" />
            <img src={photo} alt="Photo" />
        </div>
);
}