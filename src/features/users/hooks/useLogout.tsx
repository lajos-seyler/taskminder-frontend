import { useMutation, useQueryClient } from "@tanstack/react-query";

import { logout } from "../services/logout";

export function useLogout() {
  const queryClient = useQueryClient();

  const { mutate: _logout, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
    },
  });

  return { logout: _logout, isPending };
}
