import { stores } from '@sapper/app';
import { get } from 'svelte/store';
import { omitBy, isNil } from 'lodash'

export function stripTags (str) {
  if (typeof str !== 'string') return str;
  return str.replace(/<\/?[^>]+(>|$)/g, '');
}

export function urlString (str) {
  if (str.startsWith('http://') || str.startsWith('https://')) return str;
  return `https://${str}`;
}

export function twitterUrl (str) {
  return `https://twitter.com/${str.replace('@', '')}`
}

export function queryUrl (params = {}) {
  const { page } = stores();
  const $page = get(page);
  if (!$page) return '#';
  const { path, query } = $page;
  params = omitBy({ ...query, ...params }, isNil);
  const queryStr = new URLSearchParams(params).toString();
  return `${path}?${queryStr}`;
}