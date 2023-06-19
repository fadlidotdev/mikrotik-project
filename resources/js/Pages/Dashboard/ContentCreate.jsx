import { Card, FileInput, Input } from "@/Components";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import clsx from "clsx";
import React, { useState } from "react";

const TAB_BANNER = 0;
const TAB_USER_DASHBOARD = 1;

const TabBannerContent = () => {
    return (
        <form className="space-y-4">
            <Input placeholder="Judul Banner" />
            <FileInput />

            <button type="submit" className="w-full btn btn-primary">
                Save
            </button>
        </form>
    );
};

const TabUserDashboardContent = () => {
    return (
        <form className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Judul Menu" />
                <Input placeholder="Kategori" />
            </div>

            <Input placeholder="Link" />

            <FileInput />

            <button type="submit" className="w-full btn btn-primary">
                Save
            </button>
        </form>
    );
};

const ContentCreate = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    return (
        <DashboardLayout title="Manage Content">
            <Head>
                <title>Manage Content</title>
            </Head>

            <Card className="p-8">
                <div className="mb-8 tabs">
                    <a
                        className={clsx(
                            "tab tab-bordered",
                            selectedTabIndex === TAB_BANNER && "tab-active"
                        )}
                        onClick={() => setSelectedTabIndex(TAB_BANNER)}
                    >
                        Banner
                    </a>
                    <a
                        className={clsx(
                            "tab tab-bordered",
                            selectedTabIndex === TAB_USER_DASHBOARD &&
                                "tab-active"
                        )}
                        onClick={() => setSelectedTabIndex(TAB_USER_DASHBOARD)}
                    >
                        User Dashboard
                    </a>
                </div>

                {selectedTabIndex === TAB_BANNER && <TabBannerContent />}

                {selectedTabIndex === TAB_USER_DASHBOARD && (
                    <TabUserDashboardContent />
                )}
            </Card>
        </DashboardLayout>
    );
};

export default ContentCreate;
