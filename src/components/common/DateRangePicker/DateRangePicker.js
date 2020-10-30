import React, { memo, useState, useMemo, } from "react"
import "react-dates/initialize";
import { DateRangePicker as DatePicker } from 'react-dates';
import { Col } from "reactstrap";
import "react-dates/lib/css/_datepicker.css";
import "assets/scss/react_dates_overrides.scss"
import "./styles.scss"

const DateRangePicker = ({ md, sm, onChange, defaultValue = {} }) => {
    const [focusedInput, setFocusedInput] = useState(null)
    const [dates, setRangeDates] = useState(defaultValue);

    const { startDate, endDate } = dates;

    const setRange = (data) => {
        setRangeDates(data);
        onChange && onChange(data)
    }

    return useMemo(() => (
        <Col md={md} sm={sm} className="custom-datepicker">
            <DatePicker
                startDate={startDate}
                startDateId="your_unique_start_date_id"
                endDate={endDate}
                endDateId="your_unique_end_date_id"
                onDatesChange={(data) => setRange(data)}
                focusedInput={focusedInput}
                onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                displayFormat={() => "DD/MM/YYYY"}
                isOutsideRange={function noRefCheck() { }}

            />
        </Col>
    ), [startDate, endDate, focusedInput])
}

DateRangePicker.defaultProps = {
    md: '6',
    sm: '12'
}

export default memo(DateRangePicker);
