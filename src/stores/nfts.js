import { persist, indexedDBStorage } from "@macfja/svelte-persistent-store"
import { writable } from "svelte/store"

export const nftsData = persist(writable({}), indexedDBStorage(), 'nftsTxns');