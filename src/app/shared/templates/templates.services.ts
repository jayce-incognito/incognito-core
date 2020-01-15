import axios from "axios";
import { getEnvs } from "src/core/utils";

export const api = () => axios.get(`${getEnvs().API_DOMAIN}/`);
