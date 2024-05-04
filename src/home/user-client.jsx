import axios from 'axios';

const request = axios.create({
	withCredentials: true,
});
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const setActiveBackground = async (activeBackground) => {
	try {
		const response = await request.put(
			`${SERVER_URL}/user/activeBackground`,
			activeBackground
		);
		return response.data;
	} catch (error) {
		return undefined;
	}
};

export const getActiveBackground = async () => {
  try {
		const response = await request.get(
			`${SERVER_URL}/user/activeBackground`
		);
		return response.data;
	} catch (error) {
		return undefined;
	}
};