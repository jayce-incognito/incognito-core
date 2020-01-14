import axios from "axios";
import { getEnvs } from "src/app/shared/utils";

export const api = () => axios.get(`${getEnvs().API_DOMAIN}/`);
