import { useState, useCallback } from "react"

const useReloadPage = () => {
    const [reset, setReset] = useState(0);
    const reloadPage = useCallback(() => setReset(x => x + 1), []);
    return { reset, reloadPage }
}

export default useReloadPage