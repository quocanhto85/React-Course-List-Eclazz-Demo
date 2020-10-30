
import React, { memo, useEffect, useState, } from "react"
import Base from "./Base";
import { getTeacher } from "services/statisticService";

const title = "Giáo viên";
const init = { value: 0, label: "Tất cả" }

const Teacher = ({ onChange, defaultID, organization = 0, hasOrg = false, ...rest }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        getData();
    }, [organization])

    const getData = async () => {
        if (hasOrg && organization <= 0)
            return;
        const data = await getTeacher(organization, false)
        setData(x => {
            const options = data.map(x => ({ value: x.id, label: x.name }));
            return [init, ...options];
        })
    }
    return (
        <Base data={data} title={title} onChangeSelected={onChange} defaultValue={data.find(x => x.value === defaultID)} {...rest} />
    )
}

export default memo(Teacher);
