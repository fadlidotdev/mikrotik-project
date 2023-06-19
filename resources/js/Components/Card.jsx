import clsx from "clsx";
import React from "react";

const Card = ({ children, hasPadding = false, className }) => {
    return (
        <div
            className={clsx(
                "bg-white rounded card overflow-hidden shadow",
                hasPadding && "p-5",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;
