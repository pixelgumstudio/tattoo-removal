// lib/apiClient.ts

import { Clinic, StateCard } from "../types/store";

const BASE_URL = '/api/stores';

async function safeFetch<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
  return res.json();
}

export function fetchStores(page = 1, limit = 10) {
  return safeFetch<{
    total: number;
    page: number;
    limit: number;
    data: Clinic[];
  }>(`${BASE_URL}?page=${page}&limit=${limit}`);
}

export function fetchState(params = "shuffle=true&min=3&limit=10") {
  return safeFetch<{ count: number; data: StateCard[] }>(
    `${BASE_URL}/state?${params}`
  );
}


export function fetchCities(params = "shuffle=true&min=3&limit=8") {
  return safeFetch<{ count: number; data: StateCard[] }>(
    `${BASE_URL}/city?${params}`
  );
}

export function fetchStoresByState(state: string) {
  return safeFetch<{ count: number; data: Clinic[] }>(
    `${BASE_URL}/states/${encodeURIComponent(state)}`
  );
}

export function fetchStoresByCity(city: string) {
  return safeFetch<{ count: number; data: Clinic[] }>(
    `${BASE_URL}/city/${encodeURIComponent(city)}`
  );
}

export function fetchStoreById(id: number) {
  return safeFetch<Clinic>(`${BASE_URL}/${id}`);
}

export function fetchStoreByName(slug: string) {
  return safeFetch<Clinic>(`${BASE_URL}/name/${encodeURIComponent(slug)}`);
}
