import { useCallback, useEffect, useState } from "react";

import axiosInstance from "../../../utils/axiosInstance";

const useActivateUser = (
  uuid: string | undefined,
  token: string | undefined,
) => {
  const [status, setStatus] = useState<string>();

  const verifyEmail = useCallback(async () => {
    try {
      const response = await axiosInstance.get(
        `/api/users/activate/${uuid}/${token}`,
      );

      if (response.status === 200) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }, [uuid, token]);

  useEffect(() => {
    if (uuid && token) {
      verifyEmail();
    }
  }, [verifyEmail, uuid, token]);

  return status;
};

export default useActivateUser;
