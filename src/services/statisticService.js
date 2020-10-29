import { getAsync } from "../helper/request";
import { momentToDate } from "../helpers/utility";

const API_URL = process.env.REACT_APP_API_URL;

export async function getCourse(request = {}, paging = false) {
    const { page_size = 1000, page_number = 0, organizationID, profile, subject, teacher, status, branch, state_exclude = null, times = {}, } = request;
    const { state_include } = request;
    let params = '/courses?page_size=' + page_size;
    if (page_number > 0)
        params += `&page=${page_number}`
    if (organizationID > 0)
        params += `&organization=${organizationID}`
    if (subject > 0)
        params += `&subject=${subject}`
    if (profile > 0)
        params += `&profile=${profile}`
    if (teacher > 0)
        params += `&person_in_charge=${teacher}`
    if (status)
        params += `&state=${status}`
    if (branch)
        params += `&branch=${branch}`
    if (state_exclude)
        params += `&state_exclude=${state_exclude}`
    if (state_include)
        params += `&state_include=${state_include}`
    const { endDate, startDate } = times;
    if (startDate)
        params += `&start_time_after=${momentToDate(startDate)}`
    if (endDate)
        params += `&start_time_before=${momentToDate(endDate)}`

    const url = API_URL + params;
    const { data } = await getAsync(url)
    if (!paging)
        return data?.data?.results || [];
    else {
        return {
            data: data?.data?.results || [],
            totalRow: data?.data?.count || 0
        }
    }
}