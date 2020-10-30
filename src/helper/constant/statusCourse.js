export const STATUS_COURSE = [
    { value: 0, label: "Tất cả" },
    { value: 1, label: "Đang tuyển sinh", key: 'CREATED' },
    { value: 2, label: "Đã khai giảng", key: 'STARTED' },
    { value: 3, label: "Đã hủy", key: 'CANCELED' },
    { value: 4, label: "Hoàn thành", key: 'ENDED' },
]

export function getLabel(key) {
    return STATUS_COURSE.find(x => x.key === key)?.label || '';
}

export function getClass(key) {
    switch (key) {
        case 'CREATED':
            return 'badge-light-info'
        case 'STARTED':
            return 'badge-light-warning'
        case 'CANCELED':
            return 'badge-light-danger'
        case 'ENDED':
            return 'badge-light-success'
        default:
            return;
    }
}