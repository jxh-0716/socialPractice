import service from '../index'
export const getAllPractice = () => {
    return service.get(`/api/getAllPractice`)
}
export const addPractice = (val) => {
    return service.post(`/api/addPractice?name=${val.name}&maxNum=${val.maxNum}&taskNum=${val.taskNum}&owner=${val.owner}&joinStudent=${val.joinStudent}`)
}
export const updatePractice = (val) => {
    return service.post(`/api/updatePractice?joinStudent=${val.joinStudent}&id=${val.id}&taskNum=${val.taskNum || ''}`)
}
export const deletePractice = (val) => {
    return service.post(`/api/delete?id=${val.id}`)
}
