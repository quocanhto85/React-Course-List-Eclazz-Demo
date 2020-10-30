import React, { memo, useEffect, useState } from "react";
import { Edit, Eye, Slash, Trash } from "react-feather";
import { useContexts } from "../context";
import { useRedirectPage } from "hooks";
import { UncontrolledTooltip } from "reactstrap";
import classnames from "classnames";

const ActionsComponent = ({ row }) => {

  const redirect = useRedirectPage();

  const { handleShowCancel, handleShowDelete } = useContexts();
  const [items, setItems] = useState([]);
  let { state, } = row;
  state = state.toUpperCase();

  const redirectPage = (id, type) => {
    const pathname = `courses/detail/${id}/${type}`;
    redirect(pathname)
  }

  useEffect(() => {
    const { id, registration_count } = row;
    const items = [
      { icon: Eye, title: "Xem", show: true, onClick: () => redirectPage(id, 'preview') },
      { icon: Edit, title: "Sửa", show: true, onClick: () => redirectPage(id, 'edit') },
      { icon: Trash, title: "Xóa", show: (state === 'CREATED' && registration_count === 0), onClick: () => handleShowDelete(row) },
      { icon: Slash, title: "Hủy", show: true, onClick: () => handleShowCancel(row) },
    ]

    setItems(items);

  }, [row])

  const renderItem = () => {
    return items.map(({ icon: Icon, title, onClick, show }, index) => {
      if (!show)
        return null
      return (
        <div key={index} className={classnames("data-list-action", {
        })} onClick={onClick} >
          <Icon
            className="cursor-pointer mr-1"
            size={20}
            id={`tt_${row.id}_${index}`}
          />
          <UncontrolledTooltip placement="top" target={`tt_${row.id}_${index}`}>
            {title}
          </UncontrolledTooltip>
        </div>
      )
    })
  }

  if (state === 'CANCELED' || state === 'ENDED')
    return null
  return (
    <>
      {renderItem()}
    </>
  )
}

export default memo(ActionsComponent);
