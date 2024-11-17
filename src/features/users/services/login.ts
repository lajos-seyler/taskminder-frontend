import axiosInstance from "../../../utils/axiosInstance";
import LoginFormInputs from "../interfaces/LoginFormInputs";

export default async function login(loginData: LoginFormInputs) {
  const response = await axiosInstance.post("api/token/", loginData);
  return response.data;
}
