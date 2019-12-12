import axios from "axios";
import { baseUrl } from './../helpers/constants';

export default axios.create({
    baseURL: baseUrl,
});