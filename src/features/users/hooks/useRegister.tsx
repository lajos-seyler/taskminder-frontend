import { useMutation } from "@tanstack/react-query";

import register from "../services/register";

const useRegister = () =>
  useMutation({
    mutationFn: register,
  });

export default useRegister;
