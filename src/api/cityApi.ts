import { City, ListResponse } from '../models';
import axiosClient from './axiosClient';


const cityApi = {
    // getAllCities
    getAll(): Promise<ListResponse<City>> {
        const url = "/cities";

        // adding params in order to return the right format

        return axiosClient.get(url, {
            params: {
                _limit: 10,
                _page: 1
            }
        })
    }
}

export default cityApi