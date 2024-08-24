import React from "react";
import { compile } from "@fileforge/react-print";


export const Document = () => {
    return (
        <div>
        </div>
    );
};


const html = await compile(<Document />);