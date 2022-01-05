// export const TOKEN_INFO_URL = 'https://api.pancakeswap.info/api/v2/tokens/0xAe448cB5A3ec77BA4aDcc6C8f9621e5921DCd77a';
export const TOKEN_INFO_URL = 'https://api.dex.guru/v2/tokens/';

export const getTokenPrice = async () => {
  const response = await fetch(TOKEN_INFO_URL, { method: 'POST', body: '{"ids":["0xAe448cB5A3ec77BA4aDcc6C8f9621e5921DCd77a-bsc"]}' });
  const result = await response.json();
  // return result.data.price || 0;
  return result.data[0].priceUSD || 0;
}
