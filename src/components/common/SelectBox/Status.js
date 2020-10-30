
import React, { memo, } from "react"
import Base from "./Base";
import { STATUS_COURSE } from "helper/constant/statusCourse";

const title = "Trạng Thái";

const Status = ({ onChange, data = STATUS_COURSE, defaultID, ...rest }) => {
    return (
        <Base
            data={data}
            title={title}
            onChangeSelected={onChange}
            defaultValue={data.find(x => x.value === defaultID)}
            {...rest} />
    )
}

export default memo(Status);
