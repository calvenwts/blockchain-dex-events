# blockchain-dex-events

# DEX event logs

1. Using the Etherscan block explorer, find a list of recent swaps for the following USDC/ETH pool on Uniswap V2? Provide a screenshot for your response.
   ![image](https://github.com/user-attachments/assets/080c90d2-5ac5-4bdc-9374-5738b2d3ef40)
   ![image](https://github.com/user-attachments/assets/f3c3670d-9a97-4153-942e-bafe2d5df512)

2. (https://etherscan.io/tx/0x5e555836bacad83ac3989dc1ec9600800c7796d19d706f007844dfc45e9703ac/) is a swap transaction on a Uniswap V2 pool. One of the associated swaps here is a trade from 1.15481 ETH to $3,184.35. Determine in the block explorer where that raw number is coming from and how it is being derived. (You may use screenshot to show your answers)

![image](https://github.com/user-attachments/assets/000b9f80-16dc-4324-97db-c8f3ed076c03)
The $3,184.35 us derived from the swap transation on the Uniswap V2: USDC pool.
The raw number is coming from the swap logs attached above

- amount1In represents the amount in ETH in Wei where 1 ETH = 10^18 (18 decimal points)
  - 1154811757668969125 = 1.154811757668969125 ETH
- amount0Out represents the amount in USD Coin where it has 6 decimals
  - 3184355095 = 3184.35 USD Coin

Given that 1.15481 ETH resulted in 3,184.355095 USDC, we can find the implied exchange rate:

Implied Exchange Rate = 3184.355095 USDC / 1.15481 ETH ≈ 2,757.15 USDC/ETH

![image](https://github.com/user-attachments/assets/c904262c-dfa4-4531-8c3b-add132f82f88)

We can also deduce that this amount is valid upon checking on yahoo finance given transaction date of 17 March the Implied exchange rate for ETH is within the day traded value.

3.

4. When using the Quickswap DEX, we noticed that the price impact is -42.09% when we increase the size of the trade. What does price impact mean, why is it important, the math behind the price impact. Include as many details as you can to support your explanation.

### Price Impact

- It is a term used in Decentralized exchanges like Quickswap to describe the feect of a trade will have on the price of a token.
- It is an estimation of how much the price will "slip" or change due to the size of your trade relative to the liquidity in the pool.

Why is this important?

- Price impact is important because it directly affects the cost of your trade.
- A high price impact means the price will change significantly due to your trade, which could result in you receiving less than expected. (This usually occurs when the trade's size in a small liquidity pool.)

Breakdown of the math behind Price Impact

- The price impact is calculated based on the size of your trade relative to the size of the liquidity pool.
- The larger your trade the larger your price impact.

For example the formula for price impact on a DEX like Quickswap, which uses an automated market maker (AMM) model is:

> Price Impact (%) = (Trade Amount / Pool Liquidity) \* 100

E.g. you're trading 1,000 tokens in a pool of 10,000 tokens, your price impact would be 10%.

In this case a price impact of -42.09% means that the trade will decrease the price of the token by 42.90%.
Which means the trade size is large relative to the liquidity in the pool.

A few ways to recude price impact:

- Trade in smaller amounts
- Use a pool with more liquidity
