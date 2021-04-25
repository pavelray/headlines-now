import axios from 'axios';
import { LOCATION_API_1, LOCATION_API_2 } from '../utility/constants';

export default axios.create({
    baseURL: LOCATION_API_1
});