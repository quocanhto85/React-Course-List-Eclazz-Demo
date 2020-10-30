import { patchAsync, deleteAsync } from "helper/request";

const API_URL = process.env.REACT_APP_API_URL;

export async function cancelCourse(options = {}) {
    const { id } = options;
    if (!id)
        return;
    let url = API_URL + `/courses/${id}`
    return await patchAsync(url, { state: 'CANCELED' });
}

export async function deleteCourse(id) {
    const url = API_URL + `/courses/${id}`
    return await deleteAsync(url)
}