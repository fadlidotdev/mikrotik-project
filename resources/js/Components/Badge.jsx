import React from "react";

const Badge = ({ label }) => {
    return (
        <div className="badge bg-[#F5F2FF] rounded h-7 border-none px-5 text-[#5843BE]">
            {label}
        </div>
    );
};

export default Badge;
