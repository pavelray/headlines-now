import axios from 'axios';
import { NEWS_API_URL } from '../utility/constants';

export default axios.create({
    baseURL: NEWS_API_URL
});