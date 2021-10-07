import Axios from 'axios';
import { baseUrl } from './constants/Constants'

const instance = Axios.create({
    baseURL: baseUrl,
})

export default instance