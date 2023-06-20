import React, { useState } from "react";
import CustomDatepicker from "react-tailwindcss-datepicker";
import {DateValueType} from "react-tailwindcss-datepicker/dist/types";

const MyDatepicker = () => {
    const [value, setValue] = useState<DateValueType>({
        startDate: null,
        endDate: null,
    });

    const handleValueChange = (newValue: DateValueType) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return (
        <div className="h-1.5">
            <CustomDatepicker
                asSingle={true}
                value={value}
                onChange={handleValueChange}
            />
        </div>

    );
};

export default MyDatepicker;
