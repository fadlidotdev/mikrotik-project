import React from "react";

const Textarea = (props) => {
    const { label, ...otherProps } = props;
    return (
        <div className="form-control">
            {label && <label className="block mb-2">{label}</label>}

            <textarea
                className="rounded-lg textarea w-full textarea-bordered  placeholder:text-[#A3AED0] "
                {...otherProps}
            />
        </div>
    );
};

export default Textarea;
