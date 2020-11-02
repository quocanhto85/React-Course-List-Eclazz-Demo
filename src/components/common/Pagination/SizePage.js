import React, { memo, useCallback } from "react"
import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle } from "reactstrap";
import { ChevronDown } from "react-feather";
import "./styles.scss"

const numberPages = [10, 15, 20, 25]

const ChangePageSize = ({ pageSize, onChange, pageNumber, totalRow, totalPage, }) => {

  const onChangePageSize = useCallback((number) => {
    const newTotalPage = Math.ceil(totalRow / number);
    // const newPage = ((newTotalPage < totalPage) && (pageNumber === totalPage)) ? newTotalPage : 1
    const newPage = newTotalPage < totalPage ? (pageNumber > newTotalPage ? newTotalPage : pageNumber) : pageNumber
    onChange && onChange(number, newPage)
  }, [totalPage])

  const renderPage = useCallback(() => {
    return numberPages.map(page => (<DropdownItem
      tag="div"
      onClick={() => onChangePageSize(page)}
      key={page}
    >
      {page}
    </DropdownItem>))
  }, [])

  return (
    <div className="d-flex flex-wrap align-items-center mr-1">
      <span>Số dòng : </span>
      <UncontrolledDropdown className="ml-1">
        <DropdownToggle tag="div" className="border-btn-dropdown">
          {(pageNumber - 1) * pageSize + 1} - {pageSize * pageNumber < totalRow ? pageNumber * pageSize : totalRow} of {totalRow}
          <ChevronDown className="ml-50" size={15} />
        </DropdownToggle>
        <DropdownMenu right className="custom-dropdown-menu">
          {renderPage()}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div >

  )
}

export default memo(ChangePageSize)
