import { getOrgFromRouter } from "./utility"

const STORAGE_ROUTE_ORG = "STORAGE_ROUTE_ORG";

export function setStorageOrg() {
    localStorage.setItem(STORAGE_ROUTE_ORG, getOrgFromRouter())
}

export function deleteStorageOrg(value) {
    localStorage.removeItem(STORAGE_ROUTE_ORG)
}

export function getStorageOrg() {
    const org = localStorage.getItem(STORAGE_ROUTE_ORG) ?? '';
    return org.toLowerCase()
}