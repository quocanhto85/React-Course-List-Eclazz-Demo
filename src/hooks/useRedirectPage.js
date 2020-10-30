import { useCallback } from "react";
import { getStorageOrg } from "helper/storage";
import { useHistory } from "react-router-dom";

const useRedirectPage = () => {
    const history = useHistory()
    const org = getStorageOrg();
    const redirect = useCallback((to, target) => {
        if (to.startsWith("/"))
            to = to.substr(1)
        const url = `/${org}/${to}`
        if (target === "_blank")
            window.open(url, target)
        else
            history && history.push(`/${org}/${to}`)
    }, [])
    return redirect;
}

export default useRedirectPage;