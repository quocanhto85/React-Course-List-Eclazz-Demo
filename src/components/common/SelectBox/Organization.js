import React, { memo, useEffect, useState, } from "react"
import Base from "./Base";
import { getOrganization } from "services/statisticService";
import { useOrganizationType } from "hooks";
import { Input } from "reactstrap";
import { useAuth0 } from "authen/auth0Service";

const title = "Tổ chức";
const init = { value: 0, label: "Tất cả" }

const Organization = ({ onChange, defaultID, show, ...rest }) => {
    const { isAdmin } = useOrganizationType()
    const [data, setData] = useState([init])
    const { user } = useAuth0();

    useEffect(() => {   
        if (isAdmin)
            getData();
    }, [isAdmin])

    const getData = async () => {
        const data = await getOrganization()
        setData(x => {
            const options = data.map(x => ({ value: x.id, label: x.name }));
            return [init, ...options];
        })
    }

    return (
        <>
            {isAdmin && <Base
                data={data}
                title={title}
                onChangeSelected={onChange}
                defaultValue={data.find(x => x.value === defaultID)}
                {...rest}
            />
            }
            {(!isAdmin && show) && <Input value={user?.organization?.name} disabled={true} />}
        </>
    )
}

export default memo(Organization);
