import React from "react"
import { getLabel, getClass } from "helper/constant/statusCourse";
import classnames from "classnames"
import { formatNumber } from "helper/utility";
import ActionsComponent from "../components/ActionsComponent";
import { useOrganizationType } from "hooks";

const useColumns = () => {

    const columns = [
        {
            name: "Tổ chức",
            selector: "orgName",
            minWidth: "200px",
            cell: row => (
                <span title={row.orgName} className="wrap-text">
                    {row.orgName}
                </span>
            )
        }, {
            name: "ID khóa học",
            selector: "courseID",
            minWidth: "150px",
            cell: row => (
                <span title={row.courseID} className="wrap-text">
                    {row.courseID}
                </span>
            )
        }, {
            name: "Tên môn học",
            selector: "courseName",
            minWidth: "220px",
            cell: row => (
                <span title={row.subjectName} className="wrap-text">
                    {row.subjectName}
                </span>
            )
        }, {
            name: "Thông tin khóa học",
            selector: "courseName",
            minWidth: "220px",
            numberLine:3,
            cell: ({ courseName, teacherName, fee, id }) => (
                <p className="d-flex flex-column">
                    <span className="like-link">{courseName}</span>
                    <span>GV : {teacherName}</span>
                    <span>Học phí : {formatNumber(fee)} VNĐ</span>
                </p>
            )
        }, {
            name: "Số buổi",
            selector: "session_count",
            minWidth: "40px",
            cell: row => (
                <span title={row.session_count} className="wrap-text">
                    {row.session_count}
                </span>
            )
        }, {
            name: "Thời gian",
            selector: "created_at",
            minWidth: "220px",
            numberLine:2,
            cell: ({ start_time, end_time }) => (
                <p className="d-flex flex-column">
                    <span>Khai giảng : {start_time}</span>
                    <span>Kết thúc : {end_time}</span>
                </p>
            )
        }, {
            name: "HV học",
            selector: "created_at",
            cell: row => row.enrollment_count
        }, {
            name: "Doanh thu (VNĐ)",
            selector: "revenue",
            minWidth: "150px",
            cell: row => formatNumber(row.revenue)
        }, {
            name: "Trạng thái",
            minWidth: "140px",
            selector: "state",
            cell: row => <span className={classnames("badge badge-pill", getClass(row.state))}>{getLabel(row.state)}</span>
        }, {
            name: "Link web",
            selector: "link",
            cell: ({ link }) => {
                return link ? <a className="link_web" href={link} target="_blank" rel="noopener noreferrer">Link</a> : ""
            }
        }, {
            name: "Quản lý",
            minWidth: "200px",
            cell: row => (
                <ActionsComponent
                    row={row}
                />
            )
        }
    ];

    const { isAdmin } = useOrganizationType();
    if (!isAdmin)
        columns.splice(0, 1)
    return columns;
}

export default useColumns;
