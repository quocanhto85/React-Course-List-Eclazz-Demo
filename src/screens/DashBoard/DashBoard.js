import React, { memo } from "react";
import { Card, CardHeader, CardTitle, Row, Col, CardBody, Button } from "reactstrap";
import { SelectOrganization, SelectSubject, SelectStatus, SelectTeacher, SelectBranchSingle, TableActions, NoDataRow, } from "components/common";
import { DateRangePicker } from "components/common/DateRangePicker";
import { SkeletonTable } from "components/common/SkeletonTable";
import { Paginate } from "components/common/Pagination";
import DataTable from "react-data-table-component";
import { Provider, useContexts } from "./context";
import { PlusCircle } from "react-feather";
import { useColumns } from "./hooks";
import "./styles.scss";

const initOptions = {
    organization: 0,
    subject: 0,
    course: 0,
    branch: 0
}

const DashBoardImpl = () => {
    const {
        loading, totalPage, pageNumber, totalRow, pageSize, dataTable,
        onPageChange, onChangePageSize, 
    } = useContexts();
    const { organizationID } = useContexts();

    const columns = useColumns();

    const { onChangeOrganization, onChangeTimes, onChangeSubject, onChangeTeacher, onChangeStatus } = useContexts();
    const { branch, onChangeBranch } = useContexts();

    return (
        <>
            <Row className="app-user-list">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle><h5>Danh sách khóa học</h5></CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <SelectOrganization md="2" onChange={onChangeOrganization} />
                                <SelectBranchSingle organizationID={organizationID} onChange={onChangeBranch} />
                                <SelectSubject md="2" onChange={onChangeSubject} branch={branch} organization={organizationID} />
                                <SelectTeacher md="2" onChange={onChangeTeacher} branch={branch} organization={organizationID} />
                                <SelectStatus md="2" onChange={onChangeStatus} branch={branch} />
                                <div className="w-100 mt-2">
                                    <DateRangePicker md="12" onChange={onChangeTimes} />
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                    <Card>
                    {loading && <SkeletonTable data={columns} />}
                    {!loading && <CardBody>
                            <div className={`data-list course`}>
                                <TableActions title="Số khóa học" count={totalRow}>
                                    <Button className="mr-1 mb-1" color="primary">
                                        <PlusCircle size={14} />
                                        <span className="align-middle ml-25">Thêm khóa học</span>
                                    </Button>
                                </TableActions>

                                <DataTable
                                    columns={columns}
                                    data={dataTable}
                                    pagination
                                    noHeader
                                    paginationPerPage={pageSize}
                                    noDataComponent={<NoDataRow />}
                                    pointerOnHover
                                    skeleton={true}
                                    progressPending={loading}
                                    progressComponent={<SkeletonTable data={columns} />}
                                    paginationComponent={() => <Paginate onChange={onChangePageSize} pageSize={pageSize} pageNumber={pageNumber} totalRow={totalRow} totalPage={totalPage} onPageChange={onPageChange} />}

                                />
                            </div>
                        </CardBody>}
                    </Card>
                </Col>
            </Row>
        </>
    )
}

const DashBoard = () => <Provider initOptions={initOptions}><DashBoardImpl /></Provider>

export default memo(DashBoard);
