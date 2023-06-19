import React from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { Bell } from "lucide-react";
import { faker } from "@faker-js/faker";

import {
    ContentIcon,
    DashboardIcon,
    LogoutIcon,
    SettingIcon,
    WorldIcon,
} from "@/Components/Icons";

const SideMenuItem = ({ isActive, icon, title, href }) => {
    return (
        <div className="-mx-6 rounded-none">
            <Link href={href}>
                <div className="flex items-center gap-3 px-6 py-3">
                    <span
                        className={isActive ? "text-primary" : "text-[#949494]"}
                    >
                        {icon}
                    </span>

                    <span
                        className={isActive ? "text-[#333]" : "text-[#949494]"}
                    >
                        {title}
                    </span>
                </div>
            </Link>
        </div>
    );
};

const DashboardLayout = ({ children, title }) => {
    const { url } = usePage();

    return (
        <div className="flex">
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {/* Page content here */}
                    <div className="bg-[#F9F9F9] h-screen space-y-6 overflow-auto">
                        <header className="sticky top-0 z-50 px-8 pt-4 bg-[#F9F9F9] flex flex-col gap-4 ">
                            <div className="flex items-center justify-between">
                                <h1 className="text-[34px] font-bold">
                                    {title}
                                </h1>
                                <div className="flex items-center">
                                    <div className="indicator">
                                        <span className="mr-1 mt-1 indicator-item indicator-top indicator-end badge bg-[#EE6C4D] badge-xs"></span>
                                        <Bell className="text-[#777E90]" />
                                    </div>

                                    <div className="ml-8 avatar">
                                        <div className="w-8 h-8 rounded-full">
                                            <img
                                                src={faker.internet.avatar()}
                                                width={32}
                                                height={32}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <ul className="menu">
                                        <li>
                                            <details className="dropdown">
                                                <summary className="!gap-8">
                                                    Ferra Alexandra
                                                </summary>
                                                <ul className="w-full p-2 shadow menu dropdown-content bg-base-100 rounded-box">
                                                    <li>
                                                        <a>Profile</a>
                                                    </li>
                                                    <li>
                                                        <a>Data Usage</a>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="!m-0 divider !-mx-8" />
                        </header>

                        <main className="p-8 pt-0">{children}</main>
                    </div>

                    {/* TODO */}
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </div>

                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <div className="h-full p-6 menu w-[250px] text-base-content border-r">
                        {/* Sidebar content here */}
                        <div className="flex items-center gap-3 mb-6">
                            <img width="28px" src="/images/logo.png" />
                            <span className="font-bold text-primary">
                                Lamteuba.ltd
                            </span>
                        </div>

                        <SideMenuItem
                            href="/dashboard"
                            icon={<DashboardIcon />}
                            title="Dashboard"
                            isActive={url === "/dashboard"}
                        />
                        <SideMenuItem
                            href="/dashboard/users"
                            icon={<WorldIcon />}
                            title="Users"
                            isActive={url === "/dashboard/users"}
                        />
                        <SideMenuItem
                            href="/dashboard/content"
                            icon={<ContentIcon />}
                            title="Content"
                            isActive={url === "/dashboard/content"}
                        />

                        <SideMenuItem
                            href="/dashboard/setting"
                            icon={<SettingIcon />}
                            title="Setting"
                            isActive={url === "/dashboard/setting"}
                        />

                        <div className="mt-auto">
                            <SideMenuItem
                                href="/dashboard/logout"
                                icon={<LogoutIcon />}
                                title="Logout"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
