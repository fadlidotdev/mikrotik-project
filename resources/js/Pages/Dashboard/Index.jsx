import React from "react";
import { Settings2 } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Head } from "@inertiajs/react";

import { Badge, MoreMenu } from "@/Components";
import DashboardLayout from "@/Layouts/DashboardLayout";
import SectionLayout from "@/Layouts/SectionLayout";

const data = [
    { month: "January", value: 500 },
    { month: "February", value: 750 },
    { month: "March", value: 250 },
    { month: "April", value: 1000 },
    { month: "May", value: 800 },
    { month: "June", value: 600 },
    { month: "July", value: 400 },
    { month: "August", value: 900 },
    { month: "September", value: 350 },
    { month: "October", value: 700 },
    { month: "November", value: 450 },
    { month: "December", value: 550 },
];

const max = Math.max(...data.map((item) => item.value));

const UserStatisticsChart = () => {
    return (
        <div style={{ width: "100%", maxWidth: 1000, height: 400 }}>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis
                        dataKey="month"
                        tick={{ fill: "#9394A1" }}
                        tickMargin={16}
                        axisLine={{ stroke: "#EFEFEF" }}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: "#9394A1" }}
                        tickMargin={20}
                        axisLine={{ stroke: "#EFEFEF" }}
                        tickLine={false}
                    />
                    <Bar
                        dataKey="value"
                        fill="#EE6C4D"
                        background={{ fill: "#eee" }}
                    />
                    <Bar dataKey={max} fill="#eee" barSize={10} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

const Dashboard = () => {
    return (
        <DashboardLayout title="Analytics">
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="space-y-5">
                <h2 className="text-2xl">Overview</h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="h-[187px] p-5 flex items-center justify-center flex-col rounded-2xl bg-[#31859D] text-white">
                        <div className="flex items-center justify-center w-[50px] rounded-md bg-white/20 h-[50px]">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM6.97195 11.7648C6.84206 11.228 6.30161 10.8982 5.76481 11.028C5.22802 11.1579 4.89816 11.6984 5.02805 12.2352C5.29096 13.3217 5.9358 14.2791 6.84106 14.958C7.74527 15.6362 8.85924 16 10 16C11.1408 16 12.2547 15.6362 13.1589 14.958C14.0642 14.2791 14.709 13.3217 14.972 12.2352C15.1018 11.6984 14.772 11.1579 14.2352 11.028C13.6984 10.8982 13.1579 11.228 13.028 11.7648C12.8786 12.3824 12.5072 12.9468 11.9589 13.358C11.4096 13.77 10.719 14 10 14C9.281 14 8.59039 13.77 8.04106 13.358C7.49278 12.9468 7.12138 12.3824 6.97195 11.7648ZM8.17856 8.98393C7.63515 9.08255 7.11469 8.72197 7.01607 8.17856C7.01169 8.1544 7.00616 8.1326 7 8.11308C6.99384 8.1326 6.98831 8.1544 6.98393 8.17856C6.88531 8.72197 6.36485 9.08255 5.82144 8.98393C5.27803 8.88531 4.91745 8.36485 5.01607 7.82144C5.09929 7.36286 5.31014 6.91656 5.65316 6.57354C6.00072 6.22598 6.47316 6 7 6C7.52683 6 7.99928 6.22598 8.34684 6.57354C8.68985 6.91656 8.90071 7.36286 8.98393 7.82144C9.08255 8.36485 8.72197 8.88531 8.17856 8.98393ZM13.0161 8.17856C13.1147 8.72197 13.6352 9.08255 14.1786 8.98393C14.722 8.88531 15.0825 8.36485 14.9839 7.82144C14.9007 7.36286 14.6899 6.91656 14.3468 6.57354C13.9993 6.22598 13.5268 6 13 6C12.4732 6 12.0007 6.22598 11.6532 6.57354C11.3101 6.91656 11.0993 7.36286 11.0161 7.82144C10.9175 8.36485 11.278 8.88531 11.8214 8.98393C12.3648 9.08255 12.8853 8.72197 12.9839 8.17856C12.9883 8.1544 12.9938 8.1326 13 8.11308C13.0062 8.1326 13.0117 8.1544 13.0161 8.17856Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <span className="text-[34px] mt-3 mb-2">3200</span>
                        <span className="text-sm text-white/75 max-w-[150px] text-center">
                            Active Users
                        </span>
                    </div>

                    <div className="h-[187px] p-5 flex items-center justify-center flex-col rounded-2xl bg-[#7757F9] text-white">
                        <div className="flex items-center justify-center w-[50px] rounded-md bg-white/20 h-[50px]">
                            <svg
                                width="23"
                                height="16"
                                viewBox="0 0 23 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.4996 14C15.6251 14 18.5588 11.4076 20.2768 9.24864C20.8727 8.49982 20.8727 7.50018 20.2768 6.75136C18.5588 4.59239 15.6251 2 11.4996 2C7.37408 2 4.44037 4.59238 2.72231 6.75135C2.12642 7.50018 2.12642 8.49982 2.72231 9.24864C4.44037 11.4076 7.37408 14 11.4996 14ZM21.8418 10.494C23.0178 9.01626 23.0178 6.98374 21.8418 5.506C19.9735 3.15826 16.5261 0 11.4996 0C6.47304 0 3.02563 3.15826 1.15736 5.506C-0.0185977 6.98374 -0.0185982 9.01626 1.15736 10.494C3.02563 12.8417 6.47304 16 11.4996 16C16.5261 16 19.9735 12.8417 21.8418 10.494Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.5 8C13.5 9.10457 12.6046 10 11.5 10C10.3954 10 9.5 9.10457 9.5 8C9.5 7.97161 9.50059 7.94337 9.50176 7.91527C9.65765 7.97015 9.82534 8 10 8C10.8284 8 11.5 7.32843 11.5 6.5C11.5 6.32534 11.4701 6.15765 11.4153 6.00176C11.4434 6.00059 11.4716 6 11.5 6C12.6046 6 13.5 6.89543 13.5 8ZM15.5 8C15.5 10.2091 13.7091 12 11.5 12C9.29086 12 7.5 10.2091 7.5 8C7.5 5.79086 9.29086 4 11.5 4C13.7091 4 15.5 5.79086 15.5 8Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <span className="text-[34px] mt-3 mb-2">200 Gb</span>
                        <span className="text-sm text-white/75 max-w-[150px] text-center">
                            Data Used
                        </span>
                    </div>

                    <div className="h-[187px] p-5 flex items-center justify-center flex-col rounded-2xl bg-[#2A76AB] text-white">
                        <div className="flex items-center justify-center w-[50px] rounded-md bg-white/20 h-[50px]">
                            <svg
                                width="23"
                                height="18"
                                viewBox="0 0 23 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.1924 3.91706C11.8055 4.28838 11.1945 4.28838 10.8076 3.91706L10.1152 3.2526C9.30477 2.47487 8.20994 2 7 2C4.51472 2 2.5 4.01472 2.5 6.5C2.5 8.88263 3.78979 10.8501 5.65176 12.4666C7.51532 14.0844 9.7434 15.1574 11.0746 15.7051C11.353 15.8196 11.647 15.8196 11.9254 15.7051C13.2566 15.1574 15.4847 14.0844 17.3482 12.4666C19.2102 10.85 20.5 8.88262 20.5 6.5C20.5 4.01472 18.4853 2 16 2C14.7901 2 13.6952 2.47487 12.8848 3.2526L12.1924 3.91706ZM11.5 1.80957C10.3321 0.688804 8.74649 0 7 0C3.41015 0 0.5 2.91015 0.5 6.5C0.5 12.8683 7.47034 16.385 10.3138 17.5547C11.0796 17.8697 11.9204 17.8697 12.6862 17.5547C15.5297 16.385 22.5 12.8682 22.5 6.5C22.5 2.91015 19.5899 0 16 0C14.2535 0 12.6679 0.688804 11.5 1.80957Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <span className="text-[34px] mt-3 mb-2">12ms</span>
                        <span className="text-sm text-white/75 max-w-[150px] text-center">
                            Avarage ping feedback on users
                        </span>
                    </div>

                    <div className="h-[187px] p-5 flex items-center justify-center flex-col rounded-2xl bg-[#FD7549] text-white">
                        <div className="flex items-center justify-center w-[50px] rounded-md bg-white/20 h-[50px]">
                            <svg
                                width="21"
                                height="16"
                                viewBox="0 0 21 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.5 10C1.23478 10 0.98043 10.1054 0.792894 10.2929C0.605357 10.4804 0.5 10.7348 0.5 11C0.5 11.2652 0.605357 11.5196 0.792894 11.7071C0.98043 11.8946 1.23478 12 1.5 12C2.29565 12 3.05871 12.3161 3.62132 12.8787C4.18393 13.4413 4.5 14.2044 4.5 15C4.5 15.2652 4.60536 15.5196 4.79289 15.7071C4.98043 15.8946 5.23478 16 5.5 16C5.76522 16 6.01957 15.8946 6.20711 15.7071C6.39464 15.5196 6.5 15.2652 6.5 15C6.5 13.6739 5.97322 12.4021 5.03553 11.4645C4.09785 10.5268 2.82608 10 1.5 10ZM0.79 14.29C0.650968 14.4302 0.556541 14.6084 0.51862 14.8021C0.480698 14.9959 0.50098 15.1965 0.576907 15.3788C0.652835 15.561 0.781011 15.7167 0.945283 15.8262C1.10955 15.9358 1.30257 15.9942 1.5 15.9942C1.69743 15.9942 1.89045 15.9358 2.05472 15.8262C2.21899 15.7167 2.34717 15.561 2.42309 15.3788C2.49902 15.1965 2.5193 14.9959 2.48138 14.8021C2.44346 14.6084 2.34903 14.4302 2.21 14.29C2.11704 14.1963 2.00644 14.1219 1.88458 14.0711C1.76272 14.0203 1.63201 13.9942 1.5 13.9942C1.36799 13.9942 1.23728 14.0203 1.11542 14.0711C0.993565 14.1219 0.882963 14.1963 0.79 14.29ZM17.5 0H3.5C2.70435 0 1.94129 0.316071 1.37868 0.87868C0.816071 1.44129 0.5 2.20435 0.5 3C0.5 3.26522 0.605357 3.51957 0.792894 3.70711C0.98043 3.89464 1.23478 4 1.5 4C1.76522 4 2.01957 3.89464 2.20711 3.70711C2.39464 3.51957 2.5 3.26522 2.5 3C2.5 2.73478 2.60536 2.48043 2.79289 2.29289C2.98043 2.10536 3.23478 2 3.5 2H17.5C17.7652 2 18.0196 2.10536 18.2071 2.29289C18.3946 2.48043 18.5 2.73478 18.5 3V13C18.5 13.2652 18.3946 13.5196 18.2071 13.7071C18.0196 13.8946 17.7652 14 17.5 14H13.5C13.2348 14 12.9804 14.1054 12.7929 14.2929C12.6054 14.4804 12.5 14.7348 12.5 15C12.5 15.2652 12.6054 15.5196 12.7929 15.7071C12.9804 15.8946 13.2348 16 13.5 16H17.5C18.2956 16 19.0587 15.6839 19.6213 15.1213C20.1839 14.5587 20.5 13.7956 20.5 13V3C20.5 2.20435 20.1839 1.44129 19.6213 0.87868C19.0587 0.316071 18.2956 0 17.5 0ZM1.5 6C1.23478 6 0.98043 6.10536 0.792894 6.29289C0.605357 6.48043 0.5 6.73478 0.5 7C0.5 7.26522 0.605357 7.51957 0.792894 7.70711C0.98043 7.89464 1.23478 8 1.5 8C3.35652 8 5.13699 8.7375 6.44975 10.0503C7.7625 11.363 8.5 13.1435 8.5 15C8.5 15.2652 8.60536 15.5196 8.79289 15.7071C8.98043 15.8946 9.23478 16 9.5 16C9.76522 16 10.0196 15.8946 10.2071 15.7071C10.3946 15.5196 10.5 15.2652 10.5 15C10.5 12.6131 9.55179 10.3239 7.86396 8.63604C6.17613 6.94821 3.88695 6 1.5 6Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <span className="text-[34px] mt-3 mb-2">200</span>
                        <span className="text-sm text-white/75 max-w-[150px] text-center">
                            Device Connected
                        </span>
                    </div>
                </div>

                <div className="p-8 bg-white rounded card">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold">Users Statistic</h2>

                        <select className="select" disabled>
                            <option>Month</option>
                        </select>
                    </div>
                    <UserStatisticsChart />
                </div>

                <div>
                    <SectionLayout
                        header="Most Used Device"
                        hasDivider
                        rightHeader={
                            <button className="btn btn-ghost">
                                <Settings2 />
                            </button>
                        }
                    >
                        <div className="space-y-6">
                            <div className="grid grid-cols-12">
                                <div className="col-span-2">
                                    <div className="flex items-center gap-8">
                                        <div className="bg-[#E8EEF8] flex items-center justify-center w-[55px] h-[55px] rounded-lg">
                                            <svg
                                                width="36"
                                                height="22"
                                                viewBox="0 0 36 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.316406 0.210205V21.7899H10.0523V0.210205H0.316406ZM7.39063 19.9883C7.22066 19.9883 7.05451 19.9379 6.91318 19.8435C6.77186 19.7491 6.66171 19.6149 6.59667 19.4578C6.53162 19.3008 6.5146 19.128 6.54776 18.9613C6.58092 18.7946 6.66277 18.6415 6.78296 18.5213C6.90314 18.4011 7.05627 18.3193 7.22297 18.2861C7.38967 18.2529 7.56246 18.27 7.71949 18.335C7.87652 18.4 8.01074 18.5102 8.10517 18.6515C8.1996 18.7928 8.25 18.959 8.25 19.129C8.25 19.3569 8.15946 19.5755 7.9983 19.7366C7.83713 19.8978 7.61855 19.9883 7.39063 19.9883ZM8.79688 5.21021H1.55938V3.96021H8.79609V5.21021H8.79688ZM8.79688 2.71021H1.55938V1.46021H8.79609V2.71021H8.79688ZM20.75 17.4375H26.4609V20.5399H29.7219V21.7899H17.4906V20.5399H20.7516V17.4375H20.75ZM11.5313 0.210205V16.1875H35.6836V0.210205H11.5305H11.5313ZM34.4336 14.9375H12.7805V1.46021H34.4336V14.9375Z"
                                                    fill="#3080E3"
                                                />
                                            </svg>
                                        </div>

                                        <span className="text-xl font-bold">
                                            Laptop
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-2 place-self-center">
                                    <Badge label="Active" />
                                </div>
                                <div className="flex items-center col-span-8 justify-stretch">
                                    <div className="grid w-full grid-cols-4 divide-x">
                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">
                                                12
                                            </span>
                                            <span className="text-sm text-[#7E838D]">
                                                Device Connected
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">
                                                31Gb
                                            </span>
                                            <span className="text-sm text-[#7E838D]">
                                                Data Used
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">
                                                21ms
                                            </span>
                                            <span className="text-sm text-[#7E838D]">
                                                Average Ping
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">
                                                1,202
                                            </span>
                                            <span className="text-sm text-[#7E838D]">
                                                Custom
                                            </span>
                                        </div>
                                    </div>

                                    <MoreMenu />
                                </div>
                            </div>

                            <div className="grid grid-cols-12">
                                <div className="col-span-2">
                                    <div className="flex items-center gap-8">
                                        <div className="bg-[#FEEEE7] flex items-center justify-center w-[55px] h-[55px] rounded-lg">
                                            <svg
                                                width="20"
                                                height="34"
                                                viewBox="0 0 20 34"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.6667 0.333252H3.33333C2.44928 0.333252 1.60143 0.684441 0.976311 1.30956C0.351189 1.93468 0 2.78253 0 3.66659V30.3333C0 31.2173 0.351189 32.0652 0.976311 32.6903C1.60143 33.3154 2.44928 33.6666 3.33333 33.6666H16.6667C17.5507 33.6666 18.3986 33.3154 19.0237 32.6903C19.6488 32.0652 20 31.2173 20 30.3333V3.66659C20 2.78253 19.6488 1.93468 19.0237 1.30956C18.3986 0.684441 17.5507 0.333252 16.6667 0.333252ZM11.6667 31.9999H8.33333V30.3333H11.6667V31.9999ZM16.6667 28.6666H3.33333V5.33325H16.6667V28.6666Z"
                                                    fill="#FA5F1C"
                                                />
                                            </svg>
                                        </div>

                                        <span className="text-xl font-bold">
                                            Phone
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-2 place-self-center">
                                    <Badge label="Active" />
                                </div>
                                <div className="flex items-center col-span-8 justify-stretch">
                                    <div className="grid w-full grid-cols-4 divide-x">
                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">
                                                24
                                            </span>
                                            <span className="text-sm text-[#7E838D]">
                                                Device Connected
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">
                                                12Gb
                                            </span>
                                            <span className="text-sm text-[#7E838D]">
                                                Data Used
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">
                                                15ms
                                            </span>
                                            <span className="text-sm text-[#7E838D]">
                                                Average Ping
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">
                                                524
                                            </span>
                                            <span className="text-sm text-[#7E838D]">
                                                Custom
                                            </span>
                                        </div>
                                    </div>

                                    <MoreMenu />
                                </div>
                            </div>

                            <div className="grid grid-cols-12">
                                <div className="col-span-2">
                                    <div className="flex items-center gap-8">
                                        <div className="bg-[#F0EDFF] flex items-center justify-center w-[55px] h-[55px] rounded-lg">
                                            <svg
                                                width="24"
                                                height="32"
                                                viewBox="0 0 24 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M20 5C20 5.26522 19.8946 5.51957 19.7071 5.70711C19.5196 5.89464 19.2652 6 19 6C18.7348 6 18.4804 5.89464 18.2929 5.70711C18.1054 5.51957 18 5.26522 18 5C18 4.73478 18.1054 4.48043 18.2929 4.29289C18.4804 4.10536 18.7348 4 19 4C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5ZM20 27C20 27.2652 19.8946 27.5196 19.7071 27.7071C19.5196 27.8946 19.2652 28 19 28C18.7348 28 18.4804 27.8946 18.2929 27.7071C18.1054 27.5196 18 27.2652 18 27C18 26.7348 18.1054 26.4804 18.2929 26.2929C18.4804 26.1054 18.7348 26 19 26C19.2652 26 19.5196 26.1054 19.7071 26.2929C19.8946 26.4804 20 26.7348 20 27ZM5 28C5.26522 28 5.51957 27.8946 5.70711 27.7071C5.89464 27.5196 6 27.2652 6 27C6 26.7348 5.89464 26.4804 5.70711 26.2929C5.51957 26.1054 5.26522 26 5 26C4.73478 26 4.48043 26.1054 4.29289 26.2929C4.10536 26.4804 4 26.7348 4 27C4 27.2652 4.10536 27.5196 4.29289 27.7071C4.48043 27.8946 4.73478 28 5 28ZM6 5C6 5.26522 5.89464 5.51957 5.70711 5.70711C5.51957 5.89464 5.26522 6 5 6C4.73478 6 4.48043 5.89464 4.29289 5.70711C4.10536 5.51957 4 5.26522 4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4C5.26522 4 5.51957 4.10536 5.70711 4.29289C5.89464 4.48043 6 4.73478 6 5ZM12 16C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14C14 13.4696 13.7893 12.9609 13.4142 12.5858C13.0391 12.2107 12.5304 12 12 12C11.4696 12 10.9609 12.2107 10.5858 12.5858C10.2107 12.9609 10 13.4696 10 14C10 14.5304 10.2107 15.0391 10.5858 15.4142C10.9609 15.7893 11.4696 16 12 16Z"
                                                    fill="#6F53FA"
                                                />
                                                <path
                                                    d="M20.0001 14C20.0004 16.1001 19.1748 18.116 17.7017 19.6128C16.2285 21.1095 14.2259 21.9669 12.1261 22C11.0521 23.626 10.0861 25.03 9.76409 25.354C9.35062 25.7677 8.78972 26.0003 8.2048 26.0005C7.61987 26.0007 7.05883 25.7685 6.64509 25.355C6.23135 24.9415 5.99881 24.3806 5.99862 23.7957C5.99844 23.2108 6.23062 22.6497 6.64409 22.236C6.84409 22.04 7.43609 21.608 8.23409 21.06C6.65915 20.2207 5.41008 18.8788 4.68555 17.2479C3.96101 15.6169 3.80262 13.7906 4.23557 12.0592C4.66851 10.3279 5.66793 8.79106 7.07487 7.69313C8.4818 6.59519 10.2155 5.99922 12.0001 6C14.1218 6 16.1567 6.84286 17.6569 8.34315C19.1572 9.84344 20.0001 11.8783 20.0001 14ZM18.0001 14C18 12.8903 17.6921 11.8023 17.1106 10.8571C16.5292 9.91193 15.6971 9.14648 14.7067 8.64589C13.7163 8.1453 12.6065 7.92918 11.5006 8.02156C10.3947 8.11395 9.33616 8.51121 8.44255 9.16918C7.54894 9.82716 6.85531 10.7201 6.43878 11.7486C6.02226 12.7772 5.89914 13.9012 6.08313 14.9955C6.26712 16.0899 6.751 17.1118 7.48098 17.9476C8.21097 18.7834 9.15845 19.4004 10.2181 19.73C11.5521 18.85 13.0101 17.91 14.1281 17.194C14.5761 16.906 15.0941 17.424 14.8081 17.874L13.5681 19.794C14.8407 19.4491 15.9643 18.6948 16.7653 17.6476C17.5664 16.6003 18.0003 15.3185 18.0001 14Z"
                                                    fill="#6F53FA"
                                                />
                                                <path
                                                    d="M0 4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0L20 0C21.0609 0 22.0783 0.421427 22.8284 1.17157C23.5786 1.92172 24 2.93913 24 4V28C24 29.0609 23.5786 30.0783 22.8284 30.8284C22.0783 31.5786 21.0609 32 20 32H4C2.93913 32 1.92172 31.5786 1.17157 30.8284C0.421427 30.0783 0 29.0609 0 28V4ZM4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H20C20.5304 30 21.0391 29.7893 21.4142 29.4142C21.7893 29.0391 22 28.5304 22 28V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2H4Z"
                                                    fill="#6F53FA"
                                                />
                                            </svg>
                                        </div>

                                        <span className="text-xl font-bold">
                                            Other
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-2 place-self-center">
                                    <Badge label="Active" />
                                </div>
                                <div className="flex items-center col-span-8 justify-stretch">
                                    <div className="grid w-full grid-cols-4 divide-x">
                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">
                                                4
                                            </span>
                                            <span className="text-sm text-[#7E838D]">
                                                Device Connected
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">
                                                24Gb
                                            </span>
                                            <span className="text-sm text-[#7E838D]">
                                                Data Used
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">
                                                32ms
                                            </span>
                                            <span className="text-sm text-[#7E838D]">
                                                Average Ping
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">
                                                45
                                            </span>
                                            <span className="text-sm text-[#7E838D]">
                                                Custom
                                            </span>
                                        </div>
                                    </div>

                                    <MoreMenu />
                                </div>
                            </div>
                        </div>
                    </SectionLayout>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
