import React, { memo } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input } from "reactstrap";

const ModalConfirm = ({ title, body, onSubmit, onClose, code, name }) => {
  return (
    <Modal
      isOpen={true}
      className="modal-dialog-centered modal-sm"
      toggle={onClose}
    >
      <ModalHeader toggle={onClose}>
        {title}
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="courseName">{"ID khóa học"} </Label>
          <Input
            value={code}
            disabled
          />
        </FormGroup>
        <FormGroup>
          <Label for="courseName">{"Khóa học"} </Label>
          <Input
            value={name}
            disabled
          />
        </FormGroup>
        {body}
      </ModalBody>
      <ModalFooter className="justify-content-md-center">
        <Button color="warning" onClick={onClose} >
          Hủy bỏ
        </Button>
        <Button color="primary" onClick={onSubmit}>
          Đồng ý
        </Button>
      </ModalFooter>
    </Modal>
  )
}

ModalConfirm.defaultProps = {
  title: "",
  body: "",
  onClose: () => { }
}

export default memo(ModalConfirm);
