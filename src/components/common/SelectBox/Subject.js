
import React, { memo, useEffect, useState } from "react"
import Base from "./Base";
import { getSubject } from "services/statisticService";

const title = "Môn học";
const init = { value: 0, label: "Tất cả" };

const Organization = ({ onChange, defaultID, organization = 0, branch = 0, ...rest }) => {

    const [data, setData] = useState([init])

    useEffect(() => {
        getData();
    }, [organization, branch])

    const getData = async () => {
        const data = await getSubject({ organization, branch })
        setData(x => {
            const options = data.map(x => ({ value: x.id, label: x.name }));
            return [init, ...options];
        })
    }

    return (
        <Base data={data} title={title} onChangeSelected={onChange} defaultValue={data.find(x => x.value === defaultID)} {...rest} />
    )
}

export default memo(Organization);
