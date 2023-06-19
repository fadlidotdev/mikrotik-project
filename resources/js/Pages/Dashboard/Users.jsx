import React from "react";
import { faker } from "@faker-js/faker";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Head } from "@inertiajs/react";

import DashboardLayout from "@/Layouts/DashboardLayout";

const fakeUsers = Array.from({ length: 10 }).map((_) => ({
    name: faker.person.fullName(),
    position: faker.person.jobTitle(),
    phone: faker.phone.number(),
    email: faker.internet.exampleEmail(),
    last_login: faker.date.recent(),
    avatarUrl: faker.internet.avatar(),
}));

const Users = () => {
    return (
        <DashboardLayout title="Users">
            <Head>
                <title>Users</title>
            </Head>

            <div className="space-y-5">
                <h2 className="text-2xl">Overview</h2>

                <div className="overflow-x-auto h-[65vh] overflow-scroll">
                    <table className="table overflow-auto table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Last Login</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#3A3541DE]">
                            {fakeUsers.map((user, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-[34px]">
                                                    <img
                                                        className="rounded-full"
                                                        src={user.avatarUrl}
                                                        width={34}
                                                        height={34}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-xs">
                                                    {user.name}
                                                </span>
                                                <span className="text-xs">
                                                    {user.position}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-sm">{user.phone}</td>
                                    <td className="text-sm">{user.email}</td>
                                    <td className="text-sm">
                                        {format(user.last_login, "MM/dd/yyyy")}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* TODO: Make Pagination Component */}
                <div className="flex justify-end">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <span className="text-[#3A3541AD]">
                                Rows per page:
                            </span>
                            <select className="pl-1 select select-ghost select-sm">
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                            </select>
                        </div>

                        <span>1-5 of 13</span>

                        <div className="flex gap-8 ml-4">
                            <button className="btn btn-square btn-ghost btn-sm">
                                <ChevronLeft />
                            </button>
                            <button className="btn btn-square btn-ghost btn-sm">
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Users;
