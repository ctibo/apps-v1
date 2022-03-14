import { persist, indexedDBStorage } from "@macfja/svelte-persistent-store"
import { writable } from "svelte/store"

export const sales = persist(writable({}), indexedDBStorage(), 'sales');
export const accounts = persist(writable({}), indexedDBStorage(), 'accounts');