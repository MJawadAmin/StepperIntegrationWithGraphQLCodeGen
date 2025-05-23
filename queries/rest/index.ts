import { QueryKey, useMutation } from "@tanstack/react-query";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const fetchMe = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  const response = await fetch(`${API_BASE_URL}/me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch /me");
  }

  return response.json();
};

export const useFetchMeMutation = () => {
  return useMutation({
    mutationFn: fetchMe,
    mutationKey: "me" as unknown as QueryKey,
  });
};
