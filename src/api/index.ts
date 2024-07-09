import type { AxiosInstance } from "axios";
import axios from "axios";

import type { GoodsData, RankingFilterOption, ThemeData } from "@/types";

const API_BASE_URL = "https://react-gift-mock-api-jyn523.vercel.app";

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const getRankingProducts = async (
  params?: RankingFilterOption,
): Promise<Array<GoodsData>> => {
  const response = await apiClient.get("/api/v1/ranking/products", { params });
  return response.data;
};

export const getThemes = async (): Promise<Array<ThemeData>> => {
  const response = await apiClient.get("/api/v1/themes");
  return response.data;
};

export const getThemeProducts = async (
  themeKey: string,
  pageToken?: string,
  maxResults?: number,
) => {
  const response = await apiClient.get(`/api/v1/themes/${themeKey}/products`, {
    params: {
      pageToken: pageToken,
      maxResult: maxResults,
    },
  });
  return response.data;
};