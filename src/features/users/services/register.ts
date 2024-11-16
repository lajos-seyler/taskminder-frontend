import axiosInstance from "../../../utils/axiosInstance";
import RegistrationFormInputs from "../interfaces/RegistrationFormInputs";

export default async function register(
  registrationData: RegistrationFormInputs,
) {
  const response = await axiosInstance.post("api/register/", registrationData);
  return response.data;
}
