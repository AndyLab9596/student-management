import { ListParams, ListResponse, Student } from "../models";
import axiosClient from "./axiosClient";

const studentApi = {

    // Get All Students
    getAll(params: ListParams): Promise<ListResponse<Student>> {
        const url = '/students';
        return axiosClient.get(url, { params })
    },

    // Get single student by id
    get(id: string): Promise<Student> {
        const url = `/students/${id}`;
        return axiosClient.get(url)
    },

    // Add new student
    add(data: Student): Promise<Student> {
        const url = '/students';
        return axiosClient.post(url, data)
    },

    // Update student info
    update(data: Student): Promise<Student> {
        const url = `/students/${data.id}`;
        return axiosClient.patch(url, data)
    },

    // Remove student
    remove(id: string): Promise<any> {
        const url = `/students/${id}`
        return axiosClient.delete(url)
    }

}

export default studentApi;