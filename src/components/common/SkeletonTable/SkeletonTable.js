import React, { memo } from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Table, } from "reactstrap";
import "./styles.scss"

const SkeletonTable = ({ data = [] }) => {

    const renderNameColumn = data?.map((x , index) => (
        <th id="th-table" key={index + 1} style={{ minWidth: x.minWidth || "100px" }}>
            <span>{x.name}</span>
        </th>
    ))

    const rowTable = data?.map((x , index) => (
        <td key={index + 1}>
            <Skeleton duration={0.5} count={x.numberLine || 1} />
        </td>
    ))

    const RenderRowTable = () => {
        let rows = []
        for (let i = 1; i <= 10; i++) {
            rows.push(<tr key={i}>{rowTable}</tr>)
        }
        return rows;
    }

    const RenderFooterTable = () => (
        <div className="justify-content-center d-flex pb-1 custom-paging">
            <div className="d-flex flex-wrap align-items-center mr-2">
                <span>Số dòng : </span>
                <Skeleton duration={0.5} className="box-rowtext" />
            </div >
            <div className="d-flex flex-wrap align-items-center">
                <Skeleton duration={0.5} className="skeleton-circle" />
                <Skeleton duration={0.5} className="skeleton-paginate" />
                <Skeleton duration={0.5} className="skeleton-circle" />
            </div>
        </div>
    )

    const RenderHeaderTable = () => (
        <div className="d-flex justify-content-between header-skeleton">
            <div className="ml-1 mt-1 mb-1">
                <Skeleton duration={0.5} width={"140px"} height={"20px"} />
            </div>
            <div className="mr-2 mt-1 mb-1">
                <Skeleton duration={0.5} width={"180px"} height={"45px"} />
            </div>
        </div>
    )

    return (
        <div>
            <>
            <SkeletonTheme color="" highlightColor="" >
                <RenderHeaderTable />
                <Table borderless className="custom-table-skeleton mt-2">
                    <thead>
                        <tr >
                            {renderNameColumn}
                        </tr>
                    </thead>
                    <tbody>
                        <RenderRowTable />
                    </tbody>
                    <RenderFooterTable />
                </Table>
            </SkeletonTheme>
            </>
        </div>
    )
}

export default memo(SkeletonTable)
