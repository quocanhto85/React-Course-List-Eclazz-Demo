import React from "react"
import { Card, CardHeader, CardTitle, Row, Col, CardBody } from "reactstrap";

const DashBoardImpl = () => {
    return (
        <>
            <h1>Login successfully</h1>
            <Row className="app-user-list">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <CardTitle><h5>Danh sách khóa học</h5></CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row>

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

export default DashBoardImpl;
