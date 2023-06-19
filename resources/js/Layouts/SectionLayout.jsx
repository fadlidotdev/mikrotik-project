import React from "react";

const SectionLayout = ({
    children,
    header,
    isPlain,
    rightHeader,
    hasDivider = true,
}) => {
    return (
        <section className="mb-8">
            <div className="flex items-center justify-between">
                {isPlain ? (
                    <h2 className="text-2xl">{header}</h2>
                ) : (
                    <h2 className="text-lg font-bold">{header}</h2>
                )}

                {rightHeader}
            </div>

            {hasDivider && <div className="mt-2 mb-8 divider" />}
            {!hasDivider && <div className="mb-5" />}

            {children}
        </section>
    );
};

export default SectionLayout;
