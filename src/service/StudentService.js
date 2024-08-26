import axios from "axios";

const URL_STUDENT = "http://localhost:8080/students"

export const getAllStudents = async (name) => {
    try {
        let res = await axios.get(URL_STUDENT+"?name_like="+name);
        return res.data;
    } catch (e) {
        return []
    }
}

export const saveStudent = async (student) => {
    try {
        await  axios.post(URL_STUDENT, student)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}
export const findStudentById = async (id) => {
    try {
        let res = await axios.get(URL_STUDENT+"/"+id)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const deleteStudent = async (id) => {
    try {
        await axios.delete(URL_STUDENT + "/" + id)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}
export const updateStudent = async (id, student) => {
    try {
        await axios.put(URL_STUDENT + "/" + student.id, student)
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};
