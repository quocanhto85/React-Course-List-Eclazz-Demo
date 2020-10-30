
import React, { memo, useEffect, useState, useCallback } from "react"
import Base from "./Base";
import { getBranches } from "services/statisticService";

const title = "Cơ sở";
const init = { value: 0, label: "Tất cả" };

const Branch = ({ onChange, defaultID, organizationID, onInitSuccess, notFetchEmpty = false, ...rest }) => {

  const [data, setData] = useState([init])

  useEffect(() => {
    if (notFetchEmpty && organizationID === 0) {
      setData([init])
      onInitSuccess && onInitSuccess()
      return
    }

    getData();
  }, [organizationID])

  const getData = useCallback(async () => {
    const data = await getBranches({ organizationID })
    setData(x => {
      const options = data.map(x => ({ value: x.id, label: x.name }));
      return [init, ...options];
    })
    onInitSuccess && onInitSuccess()
  }, [organizationID])

  return (
    <Base data={data} title={title} onChangeSelected={onChange} defaultValue={data.find(x => x.value === defaultID)} {...rest} />
  )
}

export default memo(Branch);
