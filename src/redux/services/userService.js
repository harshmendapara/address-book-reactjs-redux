import axios from "axios";
import { API_END_POINT } from "../../config";

export const getUsers = () => {
	return axios.get(`${API_END_POINT}?results=10&seed=178b6d3760031b13`); // will return 10 random users
};