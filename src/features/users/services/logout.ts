import api from "../../../utils/api";
import useAuthStore from "../hooks/useAuthStore";

export async function logout() {
  const response = await api.post("api/token/blacklist/");

  if (response.status === 200) {
    useAuthStore.getState().logout();
  }
}
