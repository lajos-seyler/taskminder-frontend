import axiosInstance from "../../../utils/axiosInstance";
import LoginFormInputs from "../interfaces/LoginFormInputs";
import LoginResponse from "../interfaces/LoginResponse";

export default async function login(
  loginData: LoginFormInputs,
): Promise<LoginResponse> {
  const response = await axiosInstance.post("api/token/", loginData);
  return response.data;
}
