export const gateways = [
	'/ipfs/:hash.jpeg',
  'https://cloudflare-ipfs.com/ipfs/:hash',
	'https://gateway.ipfs.io/ipfs/:hash',
  'https://ipfs.io/ipfs/:hash',
	'https://gateway.pinata.cloud/ipfs/:hash',
	'https://dweb.link/ipfs/:hash',
]


export function getHash(src) {
	if (!src.startsWith('ipfs://')) return src;
	return src.replace('ipfs://', '').replace('#i', '');
}