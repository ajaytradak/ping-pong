import axios from "axios";
import { CONTEXT } from "@src/common/api/constants";

const instance = axios.create();
instance.defaults.baseURL = CONTEXT;

export const defaultAxios = instance;
