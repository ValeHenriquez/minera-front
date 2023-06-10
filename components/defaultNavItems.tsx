import React from "react";


const pits = ["Esperanza", "Llano", "Tesoro"]; //Modificar la data con la BD

// Define a NavItem type.
export type NavItem = {
    label: string;
    href: string;
    letter: string;
};

export const defaultNavbarItems: NavItem[] = pits.map((pit: string) => {
    return {
        label: pit,
        href: "#" + pit.toLowerCase(),
        letter: pit[0].toUpperCase()
    };
});

