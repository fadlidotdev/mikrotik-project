import React from "react";

const Input = (props) => {
    const { label, ...otherProps } = props;
    return (
        <div className="form-control">
            {label && <label className="block mb-2">{label}</label>}

            <input
                className="rounded-lg input w-full input-bordered  placeholder:text-[#A3AED0] "
                {...otherProps}
            />
        </div>
    );
};

export default Input;
