import service from "..";
export const getUser = (val) => {
    return service.get(`/api/getUserByUsername?username=${val.username}`)
}
export const addUser = (val) => {
    return service.post(`/api/addUser?username=${val.username}&password=${val.password}&role=${val.role}`)
}
export const delUser = (val) => {
    return service.post(`/api/deleteUser?username=${val.username}`)
}
export const updateUser = (val) => {
    return service.post(`/api/updateUser?username=${val.username}&password=${val.password}&role=${val.role}`)
}
export const getAllUser = () => {
    return service.get(`/api/getAllUser`)
}