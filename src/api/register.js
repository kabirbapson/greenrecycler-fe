import { api } from "./config";

const register = "/api/v1/auth/register/";
const handleRegister = () => {
  api.post(register);
};

export default { register };
