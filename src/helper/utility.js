function momentToDate(moment, format = 'YYYY-MM-DD') {
    return moment.format(format)
}

function formatDate(date, comma = '/') {
    date = new Date(date);
    let day = date.getDate();
    if (day < 10)
        day = "0" + day;
    let month = date.getMonth() + 1
    if (month < 10)
        month = "0" + month;
    if (comma === '-')
        return date.getFullYear() + '-' + month + '-' + day;
    return day + "/" + month + "/" + date.getFullYear();
}

function formatNumber(x = '', comma = ',') {
    return Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, comma);
}

function getOrgFromRouter() {
    return window.location.pathname.split('/')[1] ?? '';
}
