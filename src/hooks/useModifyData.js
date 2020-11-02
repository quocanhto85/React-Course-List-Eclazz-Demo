import { useCallback, useEffect, useState } from "react"
import { formatDate } from "helper/utility";

const homeURL = process.env.REACT_APP_STUDENT_URL;
const useModifyData = (data) => {
    const [dataTable, setDataTable] = useState([])
    useEffect(() => {
        modifyData();
    }, [data])

    const getLink = useCallback((landingpage_layout, id) => {
        if (typeof landingpage_layout != "object" || Object.keys(landingpage_layout).length === 0)
            return "";
        return `${homeURL}/courses/${id}/detail`;
    }, [])

    const modifyData = useCallback(() => {
        if (!data) {
            setDataTable([])
            return;
        }

        const tableData = data.map((row, index) => {
            !row.organization && (row.organization = {})
            !row.subject && (row.subject = {})
            !row.person_in_charge && (row.person_in_charge = {})
            //!row.landingpage_layout && (row.landingpage_layout = {})
            let {
                id,
                organization: { id: orgID, name: orgName },
                code: courseID,
                name: courseName,
                subject: { id: subjectID, name: subjectName },
                person_in_charge: { name: teacherName },
                fee,
                session_count,
                start_time,
                end_time,
                registration_count,
                enrollment_count,
                revenue,
                state,
                landingpage_layout
            } = row;

            return {
                index, id, orgID, orgName, courseID, courseName, subjectID, subjectName, teacherName, fee,
                session_count,
                start_time: formatDate(start_time),
                end_time: formatDate(end_time),
                registration_count, enrollment_count, revenue, state,
                link: getLink(landingpage_layout, id), //((Object.keys(landingpage_layout).length === 0) ? "" : `${homeURL}/courses/${id}/detail`),
                landingpage_layout
            }
        })
        setDataTable(tableData)
    }, [data])

    return dataTable;
}

export default useModifyData;