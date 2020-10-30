import { useState, useCallback } from "react"

const useTable = (initState = [10, 1, 0]) => {
    const [pageSize, setPageSize] = useState(initState[0])
    const [pageNumber, setPageNumber] = useState(initState[1])
    const [totalPage, setTotalPage] = useState(initState[2])
    const [totalRow, setTotalRow] = useState(0);

    const changePageSize = (pageSize, pageNumber) => {
        setPageSize(pageSize)
        pageNumber && changePageNumber(pageNumber)
    };
    const changePageNumber = (pageNumber) => setPageNumber(pageNumber);
    const changeTotalPage = (totalRow) => {
        setTotalRow(totalRow);
        setTotalPage(Math.ceil(totalRow / pageSize))
    };
    const onPageChange = useCallback((page) => changePageNumber(page.selected + 1), [])

    return {
        pageSize, pageNumber, totalPage, totalRow,
        changePageSize, changePageNumber, changeTotalPage,
        onPageChange
    }
}

export default useTable;