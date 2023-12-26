import service from "..";
export const getCompletedPractice = (val) => {
    return service.get(`/api/getCompletedPractice?ownStudent=${val.ownStudent}`)
}
export const addCompletedPractice = (val) => {
    return service.post(`/api/addCompletedPractice`,val)
}
export const updateScore = (val) => {
    console.log(val);
    return service.post(`/api/updateScore`,val)
}