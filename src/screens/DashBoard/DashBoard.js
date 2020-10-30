import React, { memo } from "react";
import { Card, CardHeader, CardTitle, Row, Col, CardBody } from "reactstrap";
import { SelectOrganization, SelectSubject, SelectStatus, SelectTeacher, SelectBranchSingle, TableActions, NoDataRow, } from "components/common/SelectBox";
import { DateRangePicker } from "components/common/DateRangePicker";
import DataTable from "react-data-table-component";
import { Provider, useContexts } from "./context";
import { PlusCircle } from "react-feather";
import { SkeletonTable } from "components/SkeletonTable";
import { useColumns } from "./hooks";
import { useRedirectPage } from "hooks";
import "./styles.scss";

const initOptions = {
    organization: 0,
    subject: 0,
    course: 0,
    branch: 0
}

const DashBoardImpl = () => {
    const {
        loading, totalPage, pageNumber, totalRow, pageSize, dataTable, showCancel,
        onPageChange, onChangePageSize, handleCloseCancel, handleCancel,
        rowCancel, rowDelete,
    } = useContexts();

    const { showDelete, handleCloseDelete, handleDelete, organizationID } = useContexts();

    const columns = useColumns();

    const { onChangeOrganization, onChangeTimes, onChangeSubject, onChangeTeacher, onChangeStatus } = useContexts();
    const { branch, onChangeBranch } = useContexts();
    const { subject } = useContexts();
    const redirect = useRedirectPage();

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

                    </Card>
                </Col>
            </Row>
        </>
    )
}

const DashBoard = () => <Provider initOptions={initOptions}><DashBoardImpl /></Provider>

export default memo(DashBoard);
