import { useState } from "react";
import { getStorageOrg } from "helper/storage";

const useOrganizationType = () => {
    const [organization] = useState('');
    const [isAdmin] = useState(getStorageOrg() === 'admin')
    // useEffect(() => {
    //     const org = getStorageOrg();
    //     setOrganization(org);
    //     setIsAdmin(org === 'admin')
    // }, [])
    return { organization, isAdmin }
}

export default useOrganizationType;