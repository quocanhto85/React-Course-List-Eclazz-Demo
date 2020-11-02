import React, { memo } from "react"
import ReactPaginate from "react-paginate"
import ChangePageSize from "./SizePage";
import { ChevronLeft, ChevronRight } from "react-feather";

import "./styles.scss"
// import "assets/scss/react-paginate.scss"


const Paginate = ({ totalPage, pageNumber, onPageChange, onChange, pageSize, totalRow }) => {
    return (
        <div className="custom-paging justify-content-center d-flex">
            <ChangePageSize onChange={onChange} pageSize={pageSize} pageNumber={pageNumber} totalRow={totalRow} totalPage={totalPage} onPageChange={onPageChange}/>
            <ReactPaginate
                previousLabel={<ChevronLeft size={15} />}
                nextLabel={<ChevronRight size={15} />}
                breakLabel="..."
                breakClassName="break-me"
                pageCount={totalPage}
                containerClassName="vx-pagination separated-pagination pagination-center pagination-sm mt-2"
                activeClassName="active"
                forcePage={(pageNumber - 1)}
                onPageChange={onPageChange}
            />
        </div>
    )
}

export default memo(Paginate); 
