import axios from 'axios';
import type { Apod } from '../types/Apod';

const BASE_URL = `${import.meta.env.VITE_API_URL}/planetary/apod`;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getApod = async (): Promise<Apod> => {
	try {
		const response = await axios.get<Apod>(BASE_URL, {
			params: {
				api_key: API_KEY,
			},
		});
        console.log(response.data);
		return response.data;
	} catch (error) {
		console.error('Error fetching APOD:', error);
		throw error;
	}
};
