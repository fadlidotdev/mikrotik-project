import React from "react";
import { faker } from "@faker-js/faker";
import { Head, router } from "@inertiajs/react";

import { Badge, Card, MoreMenu } from "@/Components";
import DashboardLayout from "@/Layouts/DashboardLayout";
import SectionLayout from "@/Layouts/SectionLayout";

const DummyBannerCard = () => {
    return (
        <Card className="h-[168px]">
            <div className="flex h-full">
                <div className="flex flex-col justify-between h-full p-5">
                    <div className="space-y-1">
                        <span className="block font-bold">
                            Banner 1 - Promosi Agustus
                        </span>
                        <span className="block text-xs opacity-75">
                            Created September 14, 2016
                        </span>
                    </div>

                    <div className="flex gap-2 mt-auto">
                        <button
                            type="button"
                            className="btn btn-primary btn-outline btn-sm"
                        >
                            Edit
                        </button>

                        <button
                            type="button"
                            className="btn btn-error btn-outline btn-sm"
                        >
                            Delete
                        </button>
                    </div>
                </div>

                <img
                    className="aspect-[3/4] object-cover"
                    src={faker.image.url()}
                    alt=""
                />
            </div>
        </Card>
    );
};

const Content = () => {
    const onClickAddBanner = () => {
        router.visit("/dashboard/content/create");
    };

    return (
        <DashboardLayout title="Banner">
            <Head>
                <title>Banner</title>
            </Head>

            <SectionLayout
                header="Banner Management"
                isPlain
                hasDivider={false}
                rightHeader={
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={onClickAddBanner}
                    >
                        Add Banner
                    </button>
                }
            >
                <div className="grid grid-cols-3 gap-4">
                    <DummyBannerCard />
                    <DummyBannerCard />
                    <DummyBannerCard />
                    <DummyBannerCard />
                    <DummyBannerCard />
                    <DummyBannerCard />
                </div>
            </SectionLayout>

            <SectionLayout header="Users Dashboard" hasDivider={false} isPlain>
                <div className="space-y-6">
                    <div className="grid items-center grid-cols-3">
                        <div className="flex items-center w-full max-w-xs gap-6">
                            <div className="bg-[#386E7F] flex items-center justify-center w-[55px] h-[55px] rounded-lg">
                                <svg
                                    width="38"
                                    height="29"
                                    viewBox="0 0 38 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M28.1665 0.5C24.9165 0.5 21.4165 1.16667 18.9998 3C16.5832 1.16667 13.0832 0.5 9.83317 0.5C7.4165 0.5 4.84984 0.866667 2.69984 1.81667C1.48317 2.36667 0.666504 3.55 0.666504 4.9V23.7C0.666504 25.8667 2.69984 27.4667 4.79984 26.9333C6.43317 26.5167 8.1665 26.3333 9.83317 26.3333C12.4332 26.3333 15.1998 26.7667 17.4332 27.8667C18.4332 28.3667 19.5665 28.3667 20.5498 27.8667C22.7832 26.75 25.5498 26.3333 28.1498 26.3333C29.8165 26.3333 31.5498 26.5167 33.1832 26.9333C35.2832 27.4833 37.3165 25.8833 37.3165 23.7V4.9C37.3165 3.55 36.4998 2.36667 35.2832 1.81667C33.1498 0.866667 30.5832 0.5 28.1665 0.5ZM33.9998 21.7167C33.9998 22.7667 33.0332 23.5333 31.9998 23.35C30.7498 23.1167 29.4498 23.0167 28.1665 23.0167C25.3332 23.0167 21.2498 24.1 18.9998 25.5167V6.33333C21.2498 4.91667 25.3332 3.83333 28.1665 3.83333C29.6998 3.83333 31.2165 3.98333 32.6665 4.3C33.4332 4.46667 33.9998 5.15 33.9998 5.93333V21.7167Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>

                            <span className="text-xl font-bold">Menu</span>
                        </div>

                        <Badge label="Active" />

                        <div className="flex items-center justify-between gap-24">
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">
                                    Menu Makanan
                                </span>
                                <span className="text-sm opacity-70">
                                    Menumakanan.sharingapp.com/menu
                                </span>
                            </div>

                            <MoreMenu />
                        </div>
                    </div>

                    <div className="grid items-center grid-cols-3">
                        <div className="flex items-center gap-6">
                            <div className="bg-[#386E7F] flex items-center justify-center w-[55px] h-[55px] rounded-lg">
                                <svg
                                    width="34"
                                    height="36"
                                    viewBox="0 0 34 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M33.6668 25.3368C33.6661 27.6161 32.887 29.8268 31.4585 31.6029C30.0301 33.379 28.0379 34.614 25.8118 35.1035L24.7485 31.9135C25.7222 31.7531 26.6482 31.3787 27.4598 30.8173C28.2714 30.2559 28.9483 29.5214 29.4418 28.6668H25.3335C24.4494 28.6668 23.6016 28.3156 22.9765 27.6905C22.3514 27.0654 22.0002 26.2176 22.0002 25.3335V18.6668C22.0002 17.7828 22.3514 16.9349 22.9765 16.3098C23.6016 15.6847 24.4494 15.3335 25.3335 15.3335H30.2302C29.8234 12.1117 28.255 9.14895 25.8192 7.00129C23.3834 4.85363 20.2476 3.66862 17.0002 3.66862C13.7528 3.66862 10.6169 4.85363 8.18112 7.00129C5.7453 9.14895 4.17688 12.1117 3.77016 15.3335H8.66683C9.55088 15.3335 10.3987 15.6847 11.0239 16.3098C11.649 16.9349 12.0002 17.7828 12.0002 18.6668V25.3335C12.0002 26.2176 11.649 27.0654 11.0239 27.6905C10.3987 28.3156 9.55088 28.6668 8.66683 28.6668H3.66683C2.78277 28.6668 1.93493 28.3156 1.30981 27.6905C0.684685 27.0654 0.333496 26.2176 0.333496 25.3335V17.0002C0.333496 7.79516 7.79516 0.333496 17.0002 0.333496C26.2052 0.333496 33.6668 7.79516 33.6668 17.0002V25.3368Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>

                            <span className="text-xl font-bold">
                                Contact Admin
                            </span>
                        </div>

                        <Badge label="Active" />

                        <div className="flex items-center justify-between gap-24">
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">
                                    HelpDesk
                                </span>
                                <span className="text-sm opacity-70">
                                    Helpdesk.sharingApp.com/callcenter
                                </span>
                            </div>

                            <MoreMenu />
                        </div>
                    </div>

                    <div className="grid items-center grid-cols-3">
                        <div className="flex items-center gap-6">
                            <div className="bg-[#386E7F] flex items-center justify-center w-[55px] h-[55px] rounded-lg">
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.1944 1.16245L14.1811 4.17311C13.9378 4.41653 13.608 4.55365 13.2638 4.55445H8.52245C6.33045 4.55445 4.55445 6.33045 4.55445 8.52245V13.2638C4.55377 13.6088 4.41669 13.9395 4.17311 14.1838L1.15978 17.1944C0.415922 17.9386 -0.00195313 18.9476 -0.00195312 19.9998C-0.00195313 21.0519 0.415922 22.061 1.15978 22.8051L4.17311 25.8184C4.41653 26.0618 4.55365 26.3916 4.55445 26.7358V31.4771C4.55445 33.6691 6.33045 35.4451 8.52245 35.4451H13.2638C13.6088 35.4458 13.9395 35.5829 14.1838 35.8264L17.1944 38.8398C17.9386 39.5836 18.9476 40.0015 19.9998 40.0015C21.0519 40.0015 22.061 39.5836 22.8051 38.8398L25.8184 35.8264C26.0618 35.583 26.3916 35.4459 26.7358 35.4451H31.4771C33.6691 35.4451 35.4451 33.6691 35.4451 31.4771V26.7358C35.4458 26.3908 35.5829 26.0601 35.8264 25.8158L38.8398 22.8051C39.5836 22.061 40.0015 21.0519 40.0015 19.9998C40.0015 18.9476 39.5836 17.9386 38.8398 17.1944L35.8264 14.1811C35.583 13.9378 35.4459 13.608 35.4451 13.2638V8.52245C35.4451 6.33045 33.6691 4.55445 31.4771 4.55445H26.7358C26.3907 4.55435 26.0598 4.41718 25.8158 4.17311L22.8051 1.15978C22.061 0.415922 21.0519 -0.00195313 19.9998 -0.00195312C18.9476 -0.00195313 17.9386 0.418588 17.1944 1.16245ZM12.3891 25.7224L25.7224 12.3891L27.6104 14.2771L14.2771 27.6104L12.3891 25.7224ZM13.3331 13.3331V15.9998H15.9998V13.3331H13.3331ZM23.9998 26.6664H26.6664V23.9998H23.9998V26.6664Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>

                            <span className="text-xl font-bold">Discount</span>
                        </div>

                        <Badge label="Active" />

                        <div className="flex items-center justify-between gap-24">
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">
                                    Info Promo
                                </span>
                                <span className="text-sm opacity-70">
                                    Infomakanan.sharingapp.com/info
                                </span>
                            </div>

                            <MoreMenu />
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </DashboardLayout>
    );
};

export default Content;
