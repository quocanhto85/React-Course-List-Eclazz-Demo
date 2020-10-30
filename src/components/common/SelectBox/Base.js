
import React, { memo, useEffect, useState, useCallback } from "react"
import { Col } from "reactstrap";
import Select, { createFilter } from "react-select";

import "./styles.scss"

const init = { value: 0, label: "" }

const Base = (props) => {
    const { data = [], title = '', onChangeSelected, md = '2', sm = '12', style = {},
        defaultValue, className = '', disabled = false, children, ...rest } = props;

    const [selectedValue, setSelectedValue] = useState(init);

    useEffect(() => {
        const value = defaultValue || null
        setSelectedValue(value)
    }, [defaultValue, data])

    const onChange = useCallback((selected) => {
        if (selected.value !== 0)
            setSelectedValue(selected)
        else
            setSelectedValue(null)
        onChangeSelected && onChangeSelected(selected)
    }, [])

    return (
        <Col md={md} sm={sm} style={style || {}} className={className || "custom-base"} {...rest}>
            <Select
                className={`React`}
                classNamePrefix="select"
                name="color"
                options={data || []}
                placeholder={title}
                onChange={onChange}
                value={selectedValue}
                filterOption={createFilter({ ignoreAccents: false })}
                isDisabled={disabled}
            />
            {children}
        </Col>
    )
}

export default memo(Base);
