// src/services/api.js
import api from "@/services/axios";

export const apiRequest = async (endpoint, method = "GET", body = null) => {
  const res = await api({
    url: endpoint,
    method,
    data: body,
  });

  return res.data;
};
