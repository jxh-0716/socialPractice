import service from "..";
export const getCompletedPractice = (val) => {
    return service.get(`/api/getCompletedPractice?ownStudent=${val.ownStudent}`)
}
export const addCompletedPractice = (val) => {
    return service.post(`/api/addCompletedPractice?ownStudent=${val.ownStudent}&name=${val.name}&score=${val.score}&teacher=${val.teacher}`)
}