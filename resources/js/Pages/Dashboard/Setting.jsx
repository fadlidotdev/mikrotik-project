import { Input, Textarea } from "@/Components";
import DashboardLayout from "@/Layouts/DashboardLayout";
import SectionLayout from "@/Layouts/SectionLayout";
import { faker } from "@faker-js/faker";
import { Head } from "@inertiajs/react";
import { Plus } from "lucide-react";
import React from "react";

const Setting = () => {
    return (
        <DashboardLayout title="Setting">
            <Head>
                <title>Setting</title>
            </Head>

            <div className="p-5 space-y-8 card">
                <div className="flex gap-8">
                    <div className="indicator">
                        <div className="indicator-item indicator-bottom right-5 bottom-7">
                            <button className="btn btn-primary btn-circle btn-sm">
                                <Plus />
                            </button>
                        </div>

                        <div className="avatar">
                            <div className="rounded-full w-[128px] h-[128px]">
                                <img
                                    src={faker.internet.avatar()}
                                    width={128}
                                    height={128}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full space-y-3">
                        <Input placeholder="John Doe" />
                        <Textarea placeholder="Bio" />
                    </div>
                </div>

                <SectionLayout header="Ubah Password">
                    <form className="space-y-3">
                        <Input type="password" placeholder="Password baru" />
                        <Input type="password" placeholder="Ulangi Password" />

                        <button type="submit" className="btn btn-primary">
                            Atur Ulang Password
                        </button>
                    </form>
                </SectionLayout>
            </div>
        </DashboardLayout>
    );
};

export default Setting;
