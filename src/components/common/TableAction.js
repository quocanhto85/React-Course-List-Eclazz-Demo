import React, { memo } from "react"

const TableActions = ({ title, count, children, mt }) => (
    <div className={`ag-grid-actions d-flex justify-content-between flex-wrap mt-${mt}`}>
        <div className="sort-dropdown">{title} : <span className="text-bold-500">{count}</span></div>
        <div className="filter-actions d-flex">
            {children}
        </div>
    </div>
)

TableActions.defaultProps = {
    title: "",
    count: 0
}

export default memo(TableActions)