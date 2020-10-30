import { useState, useCallback } from "react"

const useTogglePopup = () => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState({})

    const handleShow = useCallback((data) => { setShow(true); setData(data); }, []);
    const handleClose = useCallback(() => { setShow(false); setData({}) }, []);
    const togglePopup = useCallback(() => setShow(x => !x), []);
    return { show, data, handleShow, handleClose, togglePopup }
}

export default useTogglePopup;