import React, { useState, useCallback, useMemo } from "react";
import { useEffect, createContext, useContext } from "react";
import { getCourse } from "services/statisticService";
import { cancelCourse, deleteCourse } from "./service";
import { useTable, useTogglePopup, useReloadPage, useModifyData } from "hooks";
import { toastSuccess, toastError } from "helper/toast";

export const Context = createContext();
export const useContexts = () => useContext(Context);

export const Provider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const { totalPage, onPageChange, changeTotalPage, changePageNumber, changePageSize, pageNumber, totalRow, pageSize } = useTable();

    const { show: showCancel, data: rowCancel, handleShow: handleShowCancel, handleClose: handleCloseCancel } = useTogglePopup()
    const { show: showDelete, data: rowDelete, handleShow: handleShowDelete, handleClose: handleCloseDelete } = useTogglePopup()
    const { reset, reloadPage } = useReloadPage();

    const [data, setData] = useState([]);
    const dataTable = useModifyData(data);
    const [organizationID, setOrganizationID] = useState(0)
    const [subject, setSubject] = useState(0)
    const [teacher, setTeacher] = useState(0)
    const [status, setStatus] = useState('')
    const [times, setTimes] = useState({})
    const [branch, setBranch] = useState(0)

    useEffect(() => {
        getData();
    }, [pageNumber, reset, organizationID, subject, teacher, status, times, pageSize, branch])

    const getData = useCallback(async () => {
        setLoading(true)
        const { totalRow, data } = await getCourse({
            page_size: pageSize,
            page_number: pageNumber,
            organizationID,
            subject,
            teacher,
            status,
            times,
            branch
        }, true)   
        setLoading(false)
        changeTotalPage(totalRow)
        setData(data)
    }, [pageNumber, reset, organizationID, subject, teacher, status, times, pageSize, branch])

    const handleCancel = async () => {
        const { courseName } = rowCancel;
        const { status } = await cancelCourse(rowCancel);
        if (status === 200) {
            toastSuccess(`Huỷ khóa học ${courseName}`, "Thành công", 3000);
            handleCloseCancel()
            reload()
        } else
            toastError("Huỷ khóa học", "Thất bại")
    }

    const reload = useCallback(() => {
        if (pageNumber === 1)
            reloadPage()
        else
            changePageNumber(1)
    }, [pageNumber, pageSize])

    const onChangeOrganization = useCallback((selected) => {
        setOrganizationID(selected.value)
        setSubject(0)
        setTeacher(0)
        changePageNumber(1)
    }, [])

    const onChangeTimes = useCallback((times) => {
        setTimes(times)
        changePageNumber(1)
    }, [])

    const onChangeSubject = useCallback((selected) => {
        setSubject(selected.value)
        changePageNumber(1)
    }, [])

    const onChangeTeacher = useCallback((selected) => {
        setTeacher(selected.value)
        changePageNumber(1)
    }, [])
    const onChangeStatus = useCallback((selected) => {
        setStatus(selected.key)
        changePageNumber(1)
    }, [])
    const onChangePageSize = useCallback((seclected, pageNumber) => {
        changePageSize(seclected, pageNumber)
    }, [])
    const onChangeBranch = useCallback((selected) => {
        setBranch(selected.value)
        setSubject(0)
    })
    
    const handleDelete = useCallback(async () => {
        setLoading(true)
        const { status } = await deleteCourse(rowDelete.id)
        setLoading(false)
        handleCloseDelete()
        if (status === 204) {
            toastSuccess("Xóa khóa học", "Thành công")
            reload();
        } else {
            toastError("Xóa khóa học", "Thất bại")
        }

    }, [rowDelete])

    const value = useMemo(() => ({
        loading, dataTable, totalRow, pageSize, pageNumber, totalPage,
        showCancel, organizationID,
        showDelete, handleCloseDelete, handleShowDelete, handleDelete,
        onPageChange, changeTotalPage, handleCloseCancel, handleShowCancel, handleCancel,
        onChangeOrganization, onChangeTimes, onChangeSubject, onChangeTeacher, onChangeStatus, onChangePageSize, onChangeBranch,
        rowCancel, rowDelete, branch
    }), [loading, dataTable, totalRow, pageSize, pageNumber, totalPage, showCancel, showDelete, rowCancel, rowDelete, organizationID, branch]);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
