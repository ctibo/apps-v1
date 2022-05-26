import { persist, localStorage } from "@macfja/svelte-persistent-store"
import { writable } from "svelte/store"

export const assets = persist(writable({}), localStorage(), 'assets');
export const sales = persist(writable({}), localStorage(), 'sales');
export const accounts = persist(writable({}), localStorage(), 'accounts');