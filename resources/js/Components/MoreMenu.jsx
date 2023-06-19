import { MoreVertical } from "lucide-react";
import React from "react";

const MoreMenu = () => {
    return (
        <details className="dropdown">
            <summary className="btn-sm btn-circle btn">
                <MoreVertical className="text-[#ADB0B5]" />
            </summary>
            <ul className="z-40 p-2 shadow -top-6 right-10 menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <a>View Detail</a>
                </li>
                <li>
                    <a>Revoke</a>
                </li>
            </ul>
        </details>
    );
};

export default MoreMenu;
