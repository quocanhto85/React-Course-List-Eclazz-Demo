import toastr from "toastr";
import "../../node_modules/toastr/build/toastr.min.css"

export const toastSuccess = (title, body = '', timeout = 1000) => {
    toastr.success(body, title, { timeOut: timeout })
}

export const toastError = (title, body = '', timeout = 3000) => {
    toastr.error(body, title, { timeOut: timeout })
}

export const toastWarning = (title, body = '', timeout = 1000) => {
    toastr.warning(body, title, { timeOut: timeout })
}