import service from "..";
export const getTasks = (val) => {
    return service.get(`/api/getTasks?practiceId=${val.practiceId}&owner=${val.owner}`)
}
export const addTask = (val) => {
    return service.post(`/api/addTask?content=${val.content}&praId=${val.praId}&order=${val.order}&owner=${val.owner}&praName=${val.praName}`)
}