import { useMutation } from "@tanstack/react-query";

import login from "../services/login";

const useLogin = () =>
  useMutation({
    mutationFn: login,
  });

export default useLogin;
