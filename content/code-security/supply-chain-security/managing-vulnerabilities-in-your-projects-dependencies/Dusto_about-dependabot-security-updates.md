---
blockchair2
If I can make money I'll make it.

https://github.com/LedgerHQ/lib-ledger-core/issues/838#issue-1080403570 API API documentation API documentation Introduction General stats endpoints Retrieve overall information about blockchains and tokens Dashboard endpoints Retrieve information about various entities in a neat format from our databases Raw data endpoints Retrieve raw information about various entities directly from our full nodes Infinitable endpoints SQL-like queries: filter, sort, and aggregate blockchain data Misc endpoints Privacy-o-meter News aggregator Support Show all

Blockchair API Blockchair API provides developers, researchers, and businesses with access to data contained in 18 blockchains Explore pricing plans Blockchair.com API v.2.0.80 Documentation

/ __ )/ /___ / // / ____ () / __ / / __ / / /// / __ / __ `/ / / / // / / // / // ,< / // / / / // / / / //////||// //_,///

Introduction Blockchair API provides developers with access to data contained in 18 different blockchains. Unlike other APIs, Blockchair also supports numerous analytical queries like filtering, sorting, and aggregating blockchain data.

Here are some examples of what you can build using our API:

A wallet supporting multiple blockchains (request transaction, address, xpub data, and also broadcast transactions) An analytical service showing some blockchain stats and visualizations A service tracking the integrity of your or your customers' cold wallets A solid academic research Some fun stuff like finding the first Bitcoin block over 1 megabyte in size For some tasks like extracting lots of blockchain data (e.g. all transactions over a 2 month period) it's better to use our Database dumps feature instead (see https://blockchair.com/dumps for documentation) — it's possible to download the entire database dumps in TSV format and insert the data onto your own database server (like Postgresql or whatever) to further analyze it.

Almost every API endpoint description is accompanied with an example visualization of the data on our website (https://blockchair.com), and it's also worth it to note that the website is working completely using our API (yes, even the data for charts is pulled from one of our endpoints, and it's fully customizable).

Blockchair cares about user privacy, we neither collect nor share with anyone your personal data rather than for statistical purposes. That includes using the API as well. Please refer to our Privacy policy: https://blockchair.com/privacy. Please also check out our Terms of service available here: https://blockchair.com/terms — by using our API, you are agreeing to these terms.

We have a public tracker for bugs, issues, and questions available on GitHub: https://github.com/Blockchair/Blockchair.Support/issues — please use it or contact us by any other means available.

Our API is free to try under some limitations, and we have a variety of premium plans. Please check out the information about the limits and plans.

Supported blockchains and second layers As of today, our API supports 19 blockchains (17 mainnets and 2 testnets) divided into 9 groups:

Bitcoin-like blockchains (Bitcoin, Bitcoin Cash, Litecoin, Bitcoin SV, Dogecoin, Dash, Groestlcoin, Zcash, eCash, Bitcoin Testnet), also known as UTXO-based blockchains Ethereum-like blockchains (Ethereum, Ethereum Goerli Testnet) Ripple-like blockchains (Ripple) Stellar-like blockchains (Stellar) Monero-like blockchains (Monero) Cardano-like blockchains (Cardano) Mixin-like DAGs (Mixin) — technically, it's a DAG rather than a blockchain, but for the sake of unification it may be mentioned as a blockchain further in this documentation Tezos-like blockchains (Tezos) EOS-like blockchains (EOS) Within a group, there's no or little difference between the set of available endpoints and their output.

Here's the list of available mainnets:

Blokchain Group API path prefix Support status Bitcoin Bitcoin-like https://api.blockchair.com/bitcoin Full support Bitcoin Cash Bitcoin-like https://api.blockchair.com/bitcoin-cash Full support Ethereum Ethereum-like https://api.blockchair.com/ethereum Full support Litecoin Bitcoin-like https://api.blockchair.com/litecoin Full support Bitcoin SV Bitcoin-like https://api.blockchair.com/bitcoin-sv Full support Dogecoin Bitcoin-like https://api.blockchair.com/dogecoin Full support Dash Bitcoin-like https://api.blockchair.com/dash Full support Ripple Ripple-like https://api.blockchair.com/ripple Alpha mode, possible compatibility-breaking changes Groestlcoin Bitcoin-like https://api.blockchair.com/groestlcoin Full support at least till January 1st, 2021 Stellar Stellar-like https://api.blockchair.com/stellar Alpha mode, possible compatibility-breaking changes Monero Monero-like https://api.blockchair.com/monero Alpha mode, possible compatibility-breaking changes Cardano Cardano-like https://api.blockchair.com/cardano Alpha mode, possible compatibility-breaking changes Zcash Bitcoin-like https://api.blockchair.com/zcash Full support Mixin Mixin-like https://api.blockchair.com/mixin Full support at least till April 24th, 2021 Tezos Tezos-like https://api.blockchair.com/tezos Alpha mode, possible compatibility-breaking changes EOS EOS-like https://api.blockchair.com/eos Alpha mode, possible compatibility-breaking changes eCash Bitcoin-like https://api.blockchair.com/ecash Beta mode, possible instability. Also known as Bitcoin Cash ABC and Bitcoin ABC. Please read our statement on the November 15th, 2020 Bitcoin Cash split: https://twitter.com/Blockchair/status/1324424632179576832. It is expected that Bitcoin ABC's hashrate will be very low so 51% attacks are possible. We'll be running Bitcoin ABC in beta mode and we don't guarantee neither its stability, nor that we'll run it if the chain won't be used by businesses. Once the situation becomes more stable we'll update the documentation. At the moment, other parts of the documentation don't reflect Bitcoin ABC support, so please assume that for every bitcoin-cash endpoint there's a bitcoin-abc equivalent except for https://api.blockchair.com/bitcoin-cash/nodes.

There are also following testnets supported which are technically considered as separate blockchains:

Blokchain Group API path prefix Support status Bitcoin Testnet Bitcoin-like https://api.blockchair.com/bitcoin/testnet Full support Ethereum Goerli Testnet Ethereum-like https://api.blockchair.com/ethereum/testnet Development mode, no guaranteed stability We aim to support more blockchains (and their testnets) in future to cover as many users as possible. We don't disclose which blockchains we'll add next and how we choose them, but our main markers are daily number of real transactions and market capitalization. If you're representing a coin community which would like to add its blockchain to our platform, we'd be happy to talk.

As a general rule, if we add a blockchain to our platform, it means we'll support it and related functions indefinitely. However, there are some exceptions:

Since a blockchain system can be an unstable product, we may cease support in case the blockchain itself (or the node software we're using) stops to function or starts to function improperly; If a blockchain hard-forks and that results in a new ruleset we can't support for technical or other reasons, we may either drop support for this blockchain, or don't accept the new ruleset; If a blockchain is community-backed, we guarantee support till some specified date (this is reflected in the tables above). If its community decides not to prolong the agreement with Blockchair after that date, we may either continue to support that blockchain for free, or drop support for it; If we see that a particular blockchain became unpopular on our platform, we may terminate its support with a 3 month notice. For some of the blockchains we support we don't store full historical data. These blockchains are: Ripple, Stellar, EOS. That means you won't be able to query some old blocks, and the transaction list for an address may not show some old transactions. See Available block ranges API endpoint to get data on which blocks are available in these blockchains. All other blockchains have full historical data. It's our intent to have full historical data for all blockchains.

Blockchair API also supports 2 layer 2 solutions (tokens) divided into 2 groups:

Omni-like tokens (Omni Layer on top of Bitcoin) ERC-20-like tokens (ERC-20's on top of Ethereum) Like with blockchains, within a group, there's no or little difference between the available endpoints.

Layer 2 Group Parent blockchain API path prefix Support status Omni Layer Omni-like Bitcoin https://api.blockchair.com/bitcoin/omni Alpha support ERC-20 ERC-20-like Ethereum https://api.blockchair.com/ethereum/erc-20 Beta support We also plan to bring ERC-721 support in the future.

Ethereum Goerli Testnet also supports ERC-20's.

Wormhole support was dropped on January 1st, 2020 with a 3-month notice as it's not used by anyone anymore.

Quick endpoint reference This is the full list of available API endpoints.

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, or bitcoin/testnet {:eth_chain} can be ethereum or ethereum/testnet {:xrp_chain} can be only ripple {:xlm_chain} can be only stellar {:xmr_chain} can be only monero {:ada_chain} can be only cardano {:xin_chain} can be only mixin {:xtz_chain} can be only tezos {:eos_chain} can be only eos {:xchain_token} can be tether, usd-coin, or binance-usd Endpoint path Docs Base request cost Status General stats — — — https://api.blockchair.com/stats 👉 1 Stable https://api.blockchair.com/{:btc_chain}/stats 👉 1 Stable https://api.blockchair.com/{:eth_chain}/stats 👉 1 Stable https://api.blockchair.com/{:xrp_chain}/stats 👉 1 Stable https://api.blockchair.com/{:xlm_chain}/stats 👉 1 Stable https://api.blockchair.com/{:xmr_chain}/stats 👉 1 Stable https://api.blockchair.com/{:ada_chain}/stats 👉 1 Stable https://api.blockchair.com/{:xin_chain}/stats 👉 1 Stable https://api.blockchair.com/{:xtz_chain}/stats 👉 1 Stable https://api.blockchair.com/{:eos_chain}/stats 👉 1 Stable https://api.blockchair.com/cross-chain/{:xchain_token}/stats 👉 1 Alpha Block-related information — — — https://api.blockchair.com/{:btc_chain}/dashboards/block/{:height}₀ 👉 1 Stable https://api.blockchair.com/{:btc_chain}/dashboards/block/{:hash}₀ 👉 1 Stable https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ 👉 1 + 0.1c Stable https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ 👉 1 + 0.1c Stable https://api.blockchair.com/{:btc_chain}/raw/block/{:height}₀ 👉 1 Unstable https://api.blockchair.com/{:btc_chain}/raw/block/{:hash}₀ 👉 1 Unstable https://api.blockchair.com/{:btc_chain}/blocks?{:query} 👉 2 Stable https://api.blockchair.com/{:eth_chain}/dashboards/block/{:height}₀ 👉 1 Stable https://api.blockchair.com/{:eth_chain}/dashboards/block/{:hash}₀ 👉 1 Stable https://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ 👉 1 + 0.1c Stable https://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ 👉 1 + 0.1c Stable https://api.blockchair.com/{:eth_chain}/raw/block/{:height}₀ 👉 1 Unstable https://api.blockchair.com/{:eth_chain}/raw/block/{:hash}₀ 👉 1 Unstable https://api.blockchair.com/{:eth_chain}/blocks?{:query} 👉 2 Stable https://api.blockchair.com/{:xrp_chain}/raw/ledger/{:height}₀ 👉 1 Alpha https://api.blockchair.com/{:xrp_chain}/raw/ledger/{:hash}₀ 👉 1 Alpha https://api.blockchair.com/{:xlm_chain}/raw/ledger/{:height}₀ 👉 1 Alpha https://api.blockchair.com/{:xmr_chain}/raw/block/{:height}₀ 👉 1 Alpha https://api.blockchair.com/{:xmr_chain}/raw/block/{:hash}₀ 👉 1 Alpha https://api.blockchair.com/{:ada_chain}/raw/block/{:height}₀ 👉 1 Alpha https://api.blockchair.com/{:ada_chain}/raw/block/{:hash}₀ 👉 1 Alpha https://api.blockchair.com/{:xin_chain}/raw/snapshot/{:height}₀ 👉 1 Alpha https://api.blockchair.com/{:xin_chain}/raw/snapshot/{:hash}₀ 👉 1 Alpha https://api.blockchair.com/{:xin_chain}/raw/snapshots?{:query} 👉 1 Alpha https://api.blockchair.com/{:xtz_chain}/raw/block/{:height}₀ 👉 1 Alpha https://api.blockchair.com/{:xtz_chain}/raw/block/{:hash}₀ 👉 1 Alpha https://api.blockchair.com/{:xtz_chain}/raw/blocks?{:query} 👉 1 Alpha https://api.blockchair.com/{:eos_chain}/raw/block/{:height}₀ 👉 1 Alpha Transaction-related information and actions — — — https://api.blockchair.com/{:btc_chain}/dashboards/transaction/{:hash}₀ 👉 1 Stable https://api.blockchair.com/{:btc_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ 👉 1 + 0.1c Stable https://api.blockchair.com/{:btc_chain}/raw/transaction/{:hash}₀ 👉 1 Unstable https://api.blockchair.com/{:btc_chain}/push/transaction (POST) 👉 1 Stable https://api.blockchair.com/{:btc_chain}/transactions?{:query} 👉 5 Stable https://api.blockchair.com/{:btc_chain}/mempool/transactions?{:query} 👉 2 Stable https://api.blockchair.com/{:eth_chain}/dashboards/transaction/{:hash}₀ 👉 1 Stable https://api.blockchair.com/{:eth_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ 👉 1 + 0.1c Stable https://api.blockchair.com/{:eth_chain}/raw/transaction/{:hash}₀ 👉 1 Unstable https://api.blockchair.com/{:eth_chain}/push/transaction (POST) 👉 1 Stable https://api.blockchair.com/{:eth_chain}/transactions?{:query} 👉 5 Stable https://api.blockchair.com/{:eth_chain}/mempool/transactions?{:query} 👉 2 Stable https://api.blockchair.com/{:xrp_chain}/raw/transaction/{:hash}₀ 👉 1 Alpha https://api.blockchair.com/{:xlm_chain}/raw/transaction/{:hash}₀ 👉 1 Alpha https://api.blockchair.com/{:xmr_chain}/raw/transaction/{:hash}₀ 👉 1 Alpha https://api.blockchair.com/{:ada_chain}/raw/transaction/{:hash}₀ 👉 1 Alpha https://api.blockchair.com/{:xin_chain}/raw/transaction/{:hash}₀ 👉 1 Alpha https://api.blockchair.com/{:xin_chain}/push/transaction (POST) 👉 1 Stable https://api.blockchair.com/{:xtz_chain}/raw/operation/{:hash}₀ 👉 1 Alpha https://api.blockchair.com/{:eos_chain}/raw/transaction/{:hash}₀ 👉 1 Alpha https://api.blockchair.com/{:eos_chain}/raw/transaction/({:block_height},{:hash}) 👉 1 Alpha Address-related information — — — https://api.blockchair.com/{:btc_chain}/dashboards/address/{:address}₀ 👉 1 Stable https://api.blockchair.com/{:btc_chain}/dashboards/addresses/{:address}₀,...,{:address}ᵩ 👉 1 + 0.1c Stable https://api.blockchair.com/{:btc_chain}/addresses/balances (POST, mass balance check) 👉 1 + 0.001c Stable https://api.blockchair.com/{:btc_chain}/dashboards/xpub/{:extended_key} 👉 1 + 0.1d Beta https://api.blockchair.com/{:btc_chain}/addresses?{:query} 👉 2 Stable https://api.blockchair.com/{:eth_chain}/dashboards/address/{:address}₀ 👉 1 Stable https://api.blockchair.com/{:eth_chain}/addresses?{:query} 👉 2 Stable https://api.blockchair.com/{:xrp_chain}/raw/account/{:address}₀ 👉 1 Alpha https://api.blockchair.com/{:xlm_chain}/raw/account/{:address}₀ 👉 1 Alpha https://api.blockchair.com/{:ada_chain}/raw/address/{:address}₀ 👉 1 Alpha https://api.blockchair.com/{:xtz_chain}/raw/account/{:address}₀ 👉 1 Alpha https://api.blockchair.com/{:eos_chain}/raw/account/{:address}₀ 👉 1 Alpha https://api.blockchair.com/multi/dashboards/addresses/{:address}₀,...,{:address}ᵩ 👉 Complex Alpha Special entities — — — https://api.blockchair.com/{:btc_chain}/outputs?{:query} 👉 10 Beta https://api.blockchair.com/{:btc_chain}/mempool/outputs?{:query} 👉 2 Beta https://api.blockchair.com/{:eth_chain}/dashboards/uncle/{:hash}₀ 👉 1 Stable https://api.blockchair.com/{:eth_chain}/dashboards/uncles/{:hash}₀,...,{:hash}ᵩ 👉 1 + 0.1c Stable https://api.blockchair.com/{:eth_chain}/uncles?{:query} 👉 2 Stable https://api.blockchair.com/{:eth_chain}/calls?{:query} 👉 10 Stable https://api.blockchair.com/{:xmr_chain}/outputs?{:query} 👉 1 Alpha https://api.blockchair.com/zcash/raw/validate?paymentdisclosure=zpd:... N/A 1 Alpha https://api.blockchair.com/{:xin_chain}/raw/round/{:hash} 👉 1 Alpha https://api.blockchair.com/{:xin_chain}/raw/round/({:node_hash},{:id}) 👉 1 Alpha https://api.blockchair.com/{:xin_chain}/raw/node/{:hash} 👉 1 Alpha https://api.blockchair.com/{:xin_chain}/raw/graph 👉 1 Alpha https://api.blockchair.com/{:xin_chain}/raw/mintings?{:query} 👉 1 Alpha https://api.blockchair.com/{:xin_chain}/raw/nodes?{:query} 👉 1 Alpha Special second layer protocol endpoints (Omni Layer and ERC-20 tokens) — — — https://api.blockchair.com/bitcoin/omni/stats 👉 1 Alpha https://api.blockchair.com/bitcoin/omni/dashboards/property/{:prorerty_id} 👉 1 Alpha https://api.blockchair.com/bitcoin/omni/properties 👉 10 Alpha https://api.blockchair.com/ethereum/erc-20/{:token_address}/stats 👉 1 Beta https://api.blockchair.com/ethereum/erc-20/{:token_address}/dashboards/address/{:address} 👉 1 Beta https://api.blockchair.com/ethereum/erc-20/tokens?{:query} 👉 2 Beta https://api.blockchair.com/ethereum/erc-20/transactions?{:query} 👉 5 Beta https://api.blockchair.com/ethereum/erc-20/{:token_address}/utils/allowance?owner={:owner_address}&spender={:spender_address} N/A 1 Alpha State changes — — — https://api.blockchair.com/{:btc_chain}/state/changes/block/{:block_id} 👉 5 Stable https://api.blockchair.com/{:btc_chain}/state/changes/mempool 👉 10 Stable https://api.blockchair.com/{:eth_chain}/state/changes/block/{:block_id} 👉 5 Stable Misc — — — https://api.blockchair.com/range 👉 1 Stable https://api.blockchair.com/tools/releases 👉 1 Stable https://api.blockchair.com/tools/halvening 👉 1 Stable https://api.blockchair.com/news (News API) 👉 1 Stable Network nodes — — — https://api.blockchair.com/nodes 👉 1 Stable https://api.blockchair.com/{:btc_chain}/nodes 👉 1 Stable Special Premium API endpoints — — — https://api.blockchair.com/premium/stats?key={:api_key} 👉 0 Stable Please note there are some endpoints which aren't listed here (most of the times they have the https://api.blockchair.com/internal prefix), but used by our web interface — these endpoints aren't meant to be used by 3rd parties.

The base request cost is used only if there are no additional parameters included in the request, and the default limits on the number of results are used. For example, if you're requesting info on ERC-20 tokens while getting data on an Ethereum address using a special parameter or increasing the number of latest transactions for this address, you may be charged additional request points. c in formulas means "number of requested entities". d means "depth" (applied to xpub lookups). Detailed cost formulas are available in the corresponding documentation sections.

Basic API request Requests to the API should be made through the HTTPS protocol by GET requests to the domain api.blockchair.com. Here's an example request URL: https://api.blockchair.com/bitcoin/blocks?a=sum(generation)

curl 'https://api.blockchair.com/bitcoin/blocks?a=sum(generation)' {"data":[{"sum(generation)":1800957104497237}],"context":{"code":200,"source":"A","time":0.007825851440429688,"limit":10000,"offset":null,"rows":1,"pre_rows":1,"total_rows":1,"state":600767,"cache":{"live":true,"duration":60,"since":"2019-10-23 21:33:00","until":"2019-10-23 21:34:00","time":null},"api":{"version":"2.0.38","last_major_update":"2019-07-19 18:07:19","next_major_update":null,"documentation":"https://github.com/Blockchair/Blockchair.Support/blob/master/API.md","notice":"Beginning July 19th, 2019 all applications using Blockchair API on a constant basis should apply for an API key (mailto:info@blockchair.com)"}}} Here are some considerations:

If you're building a web app, your users shouldn't make direct API requests from there. While we don't have any limitations in our CORS policy (API currently responds with a Access-Control-Allow-Origin: * header), that policy may be changed in the future without any warnings Please don't use some random keys in your requests (e.g. ?random_key=random_value) as this can result in a 400 error (though we don't force this rule at the moment for most of our endpoints) If you're using the API with an API key, you should keep it in secret. In order to build an app for public use using our API, you should build a proxy, so the requrst flow will look like the following: user → https://your-proxy/{:request_string} → https://api.blockchair.com/{:request_string}?key={:api_key} — that way you won't disclose the key to your users The only exception to the "requests should be made using GET" rule is the Broadcasting transactions endpoint accepting POST requests Basic API response API returns JSON-encoded data. Typically, the response is an array consisting of two subarrays:

data — contains the data you requested

context — contains some metadata, e.g. a status code, query execution time, used options, etc. Here are some of it (note that not all endpoints return all of the keys listed here):

context.code — server response code (also included in HTTP headers), can return: 200 if the request succeeded 400 if there is a user error in the request 404 for some endpoints in case there's no results (this behavior is deprecated), also if you're requesting non-existing endpoint 402, 429, 435, 436, or 437 if any limit on the number or complexity of requests is exceeded (see the list of limits, and please contact us if you'd like to increase them) — your IP address will be unblocked automatically after some time 430, 434, or 503 if your IP address is temporarily blocked 500 or 503 in case of a server error (it makes sense to wait and repeat the same request or open a ticket at https://github.com/Blockchair/Blockchair.Support/issues/new or write to info@blockchair.com) context.error — error description in the case there's an error context.state — number of the latest known block (e.g., for all requests to endpoints connected to the Bitcoin blockchain this will yield the latest block number for Bitcoin). For example, it may be useful to calculate the number of network сonfirmations, or correctly iterate trough the results using ?offset=. Not returned if the request has failed. context.state_layer_2 — the latest block number for which our engine has processed second layer (e.g. ERC-20) transactions. If it's less than the block id in your current environment (e.g. block id of a transaction you requested), it makes sense to repeat the request after some time to retrieve second layer data. With our current architecture it always equals to context.state, but that may change in future. context.results — contains the number of found results (dashboard and raw endpoints) context.limit — applied limit to the number of results (the default one or user set in the ?limit= query section) context.offset — applied offset (the default one or user set in the ?offset= query section) context.rows — contains the number of shown rows returned from the database (infinitable endpoints) context.total_rows — total number of rows meeting the request (infinitable endpoints) context.api — array of data on the status of the API: context.api.version — version of API context.api.last_major_update — timestamp of the last update, that somehow has broken backward compatibility for "stable" endpoints context.api.next_major_update — timestamp of the next scheduled update, that can break compatibility, or null, if there are no updates scheduled context.api.documentation — an URL to the latest version of documentation context.api.notice — just a text notice which, for example, may describe upcoming changes (this is an optional field) context.cache — array of info on whether the response comes from the cache or not context.cache.live — false if the response comes from the cache, true otherwise context.cache.until — cache expiry timestamp context.request_cost — API request cost (1 for ordinary queries, more than 1 for complex requests, see the next section for details) There are also some things which are the same across all endpoints:

All timestamps are in the UTC timezone, and have the following format: YYYY-MM-DD hh:ii:ss . If you require an ISO 8601 timestamp with the timezone, just replace the space with a T, and append Z to the timestamp (e.g. 2009-01-03 18:15:05 will then become 2009-01-03T18:15:05Z) There are some endpoints allowing you to request data in formats other than JSON (e.g. TSV or CSV). In that case, the API returns plain output data in the desired format without metadata Most of the responses are cached for some amount of time. Bypassing cache is allowed in some of our Premium API plans (see the next documentation section) API rate limits, API keys, and Premium API While we do allow to perform some amount of requests free of charge, generally our API is not free to use.

Here's our policy:

If you use our API occasionally for personal use or testing up to 1440 requests a day (1 request a minute in average) — a key is not required Non-commercial and academic projects which require up to 1440 requests a day — a key is not required Non-commercial and academic projects requiring more than 1440 requests a day should apply for a Premium API key, and are subject to a discount up to 50% Non-commercial and academic projects requiring more than 1440 requests a day which are also Blockchair partners are subject to a discount up to 100% Commercial projects should apply for a key to Premium API not depending on the required number of requests Commercial projects which are also Blockchair partners (e.g. linking to Blockchair from the app's interface) are subject to a discount up to 10% Up to 1440 requests a day More than 1440 requests a day Personal or testing Key is not needed Key is required Non-commercial or academic Key is not needed Key is required, up to 100% discount Commercial Key is required Key is required, up to 10% discount Our Premium API plans are available here: https://blockchair.com/api/plans, please contact us if you have any questions or would like to have a custom plan.

The daily request counter is reset at 00:00 UTC every day.

There's an additional hard limit of 30 requests per minute on the free plan.

If you exceed the limit, an error 402 or 429 will be returned. On some of our Premium API plans it's possible to "borrow" requests from the next day if you hit the limit (if your daily limit is n and you hit it, n more requests will be added to the limit for 1 day, you will be notified, and your subscription period will shrink by 1 day) — this behavior is turned off by default.

There's an additional soft limit of 5 requests per second on both free and paid plans. This limit is applied only if we experience a very high load on our servers, and it's turned on and off manually by our admins. In case you hit this limit, an error 435 will be returned.

If you have exceeded the limit multiple times without using a key, an error 430, 434, or 503 may be returned meaning that you've been blocked. It's also possible to get automatically blocked without exceeding the limit in case we're seeing botnet usage in order to bypass the limit. If you've been blocked and you believe you haven't abused our API above the limit, please contact us. If you're using a valid API key it's not possible to get blocked; if you've been previously blocked and starting to use a key, you'll get automatically unblocked.

Please note that some of API requests may "cost" more than 1 request. Here's an example:

https://api.blockchair.com/bitcoin/dashboards/block/0 — requesting information about one block via one request "costs" 1 request https://api.blockchair.com/bitcoin/dashboards/blocks/0,1,2,3,4,5,6,7,8,9 — requesting information about ten blocks via one request "costs" 1.9 requests Every API endpoint documentation has the "Request cost formula" section describing how the "cost" is calculated. For most API requests it's always 1. It's more than 1 in cases when you're requiring additional data (e.g. when you're requesting data on an Ethereum address, and you're also requesting its ERC-20 token balances).

Every API response yields context.request_cost with the request cost number ("request points").

As a kindly reminder, there are tasks such as extracting lots of blockchain data (e.g. all transactions over a 2 month period) which require lots of requests done — it may be better to use our Database dumps feature instead of the API (see https://blockchair.com/dumps for documentation)

What are the steps to acquire an API key?

Our Premium API dashboard is available here: https://api.blockchair.com/premium

First, you need to choose a suitable plan: https://blockchair.com/api/plans

At the moment, this automated system accepts PayPal payments only (which also allows you to pay with your card). If you'd like to pay via wire transfer or crypto, please contact us at info@blockchair.com

Once you've paid, you will receive a one-time password which can be used to generate and activate your API key. Enter it on this page into the "I want to activate an API key I've just purchased..." form, then fill in a small form about yourself, and you'll get the key.

After you have received a key, you can track your stats and extend your subscription. Enter your API key on this page into the "I already have an API key and would like to see some stats or extend my subscription..." form. If you'd like to extend your subscription, you'd need to buy a one-time extension password and enter it on your key management page.

If you have any questions about how to buy and use your key, you can always contact us.

In order to use an API key, you need to append ?key={:api_key} or &key={:api_key} to the end of request URLs. You should use ? if there are no other parameters in the URL, and & otherwise. Here are three examples of correct URLs with a key:

https://api.blockchair.com/bitcoin/dashboards/block/0?key=myfirstpasswordwas4321andifeltsmartaboutit

https://api.blockchair.com/bitcoin/dashboards/block/0?limit=0&key=myfirstpasswordwas4321andifeltsmartaboutit

https://api.blockchair.com/bitcoin/dashboards/block/0?key=myfirstpasswordwas4321andifeltsmartaboutit&limit=0

There's an extra API endpoint for those who have an API key allowing to track the number of request made.

API versioning and changelog As a reminder, there's the context.api array in every API response which contains the following data:

context.api.version — version of API context.api.last_major_update — timestamp of the last update, that somehow has broken backward compatibility for "stable" endpoints context.api.next_major_update — timestamp of the next scheduled update, that can break compatibility, or null, if there are no updates scheduled context.api.documentation — an URL to the latest version of documentation context.api.notice — just a text notice which, for example, may describe upcoming changes (this is an optional field) When we change something, or add new functions, we bump the API version number. Generally, we try as hard as possible not to bring any compatibility-breaking changes in API updates, but sometimes this is needed as some blockchains change their features themselves, we're fixing various bugs, etc. This doesn't apply, however, to changes to endpoints which are either marked as alpha- or beta-stage functions, or unstable in nature (e.g. all raw endpoints where the API returns data directly from our nodes, and the response may change as we upgrade the nodes). These marks are reflected in the Quick endpoint reference.

The changelog is available here: https://github.com/Blockchair/Blockchair.Support/blob/master/API.md

It makes sense to check if context.api.version has increased and/or just whether context.api.next_major_update is not null or larger than the latest update date known to you. If that's the case — you can send yourself a notification and review the changelog to make your application compatible with the changes starting from context.api.next_major_update.

General stats endpoints Stats on multiple blockchains at once Allows to retrieve the most important stats on all blockchains we support via just one API request.

Endpoint:

https://api.blockchair.com/stats If you require data on just one blockchain, please use https://api.blockchair.com/{:chain}/stats instead.

Output:

data contains an array with stats on 15 blockchains we support at once:

Bitcoin Bitcoin Cash Ethereum Litecoin Bitcoin SV Dogecoin Dash Ripple Groestlcoin Stellar Monero Cardano Zcash Mixin Tezos eCash and on 3 cross-chain tokens:

Tether (USDT) USD Coin (USDC) Binance USD (BUSD) Note that Bitcoin Testnet stats are not included in this output.

Description of the fields is available in the next three sections of documentation.

Example output:

https://api.blockchair.com/stats:

{ "data": { "bitcoin": { "data": { "blocks": 599952, ... } }, "bitcoin-cash": { "data": { "blocks": 605134, ... } }, "bitcoin-sv": { "data": { "blocks": 604886, ... } }, "ethereum": { "data": { "blocks": 8766052, ... } }, "litecoin": { "data": { "blocks": 1721519, ... } }, "dogecoin": { "data": { "blocks": 2941267, ... } }, "dash": { "data": { "blocks": 1156197, ... } }, "ripple": { "data": { "ledgers": 50795982, ... } }, "groestlcoin": { "data": { "blocks": 2801282, ... } }, "stellar": { "data": { "ledgers": 26968006, ... } }, "monero": { "data": { "blocks": 2014108, ... } }, "cardano": { "data": { "blocks": 3673733, ... } }, "zcash": { "data": { "blocks": 756512, ... } }, "mixin": { "data": { "snapshots": 18632532, ... } }, "tezos": { "data": { "blocks": 974144, ... } }, "cross-chain": { "tether": { "data": ... }, "usd-coin": { "data": ... }, "binance-usd": { "data": ... } } }, "context": { "code": 200, ... } } } Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/ https://blockchair.com/compare Bitcoin-like blockchain stats Endpoints:

https://api.blockchair.com/bitcoin/stats https://api.blockchair.com/bitcoin-cash/stats https://api.blockchair.com/litecoin/stats https://api.blockchair.com/bitcoin-sv/stats https://api.blockchair.com/dogecoin/stats https://api.blockchair.com/dash/stats https://api.blockchair.com/groestlcoin/stats https://api.blockchair.com/zcash/stats https://api.blockchair.com/ecash/stats https://api.blockchair.com/bitcoin/testnet/stats Output:

data contains an array with blockchain statistics:

blocks — total number of blocks (note that it's 1 more than the latest block number as there is block #0) transactions — total number of transactions outputs — total number of outputs (including spent) circulation — number of coins in circulation (in satoshi) blockchain_size — total size of all blocks in bytes (note: it's not the size of a full node, it's just bare blocks; nodes are bigger in size as they use database indexing, etc) nodes— number of full network nodes (it's an approximate number and actually not a blockchain metric) difficulty — current mining difficulty hashrate_24h — approximated hashrate over the last 24 hours (returned as a string as it doesn't fit into an integer) next_retarget_time_estimate — approximate timestamp of the next difficulty retarget (this field is available for Bitcoin and Litecoin only) next_difficulty_estimate — approximate next difficulty value (this field is available for Bitcoin and Litecoin only) best_block_height — the latest block height best_block_hash — the latest block hash best_block_time — the latest block time mempool_transactions — number of transactions in the mempool mempool_outputs — number of outputs in the mempool mempool_size — mempool size in bytes mempool_tps — number of transactions per second added to the mempool mempool_total_fee_usd — sum of transaction fees in the mempool, in USD blocks_24h — number of blocks mined over the last 24 hours transactions_24h — number of transactions confirmed over the last 24 hours volume_24h — total monetary volume of transactions over the last 24 hours average_transaction_fee_24h — average transaction fee over the last 24 hours average_transaction_fee_usd_24h — the same in USD median_transaction_fee_24h— median transaction fee over the last 24 hours median_transaction_fee_usd_24h — the same in USD inflation_24h— number of new coins mined over the last 24 hours (in satoshi), this can be considered as the daily inflation inflation_usd_24h — the same in USD cdd_24h— total coindays destroyed over the last 24 hours largest_transaction_24h — array of hash and value_usd — biggest payment over the last 24 hours market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko) market_price_btc — average market price of 1 coin in BTC (for Bitcoin it always returns 1) market_price_usd_change_24h_percentage — market price change in percent for 24 hours market_cap_usd — market capitalization (coins in circulation * price per coin in USD) market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin) countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event suggested_transaction_fee_per_byte_sat — suggests a proper transaction fee in satoshi per byte based on the latest block hodling_addresses — the total number of addresses with positive balance Example output:

https://api.blockchair.com/bitcoin/stats:

{ "data": { "blocks": 690165, "transactions": 654248075, "outputs": 1776138129, "circulation": 1875100229497096, "blocks_24h": 130, "transactions_24h": 229726, "difficulty": 14363025673660, "volume_24h": 187713267560047, "mempool_transactions": 6591, "mempool_outputs": 16532, "mempool_size": 5076549, "mempool_tps": 5.416666666666667, "mempool_total_fee_usd": 14219.1005, "best_block_height": 690164, "best_block_hash": "000000000000000000023fcb3703bf89ddbfc1ef5109f21c2387a9d630b78c6e", "best_block_time": "2021-07-08 14:37:00", "blockchain_size": 353767186147, "average_transaction_fee_24h": 14421, "inflation_24h": 81250000000, "median_transaction_fee_24h": 5269, "cdd_24h": 3696149.5996842394, "mempool_outputs": 44316, "largest_transaction_24h": { "hash": "7a83c11f42dadad1c6916cceb079835aa09ed70127dba7cdf15aa904277c907d", "value_usd": 773548352 }, "nodes": 8502, "hashrate_24h": "92904707138521187685", "inflation_usd_24h": 26587437.5, "average_transaction_fee_usd_24h": 4.719001232335435, "median_transaction_fee_usd_24h": 1.724338485, "market_price_usd": 32723, "market_price_btc": 1, "market_price_usd_change_24h_percentage": -5.7534, "market_cap_usd": 613578128025, "market_dominance_percentage": 43.03, "next_retarget_time_estimate": "2021-07-18 19:23:20", "next_difficulty_estimate": 17958208674260, "countdowns": [], "suggested_transaction_fee_per_byte_sat": 17, "hodling_addresses": 38343147 }, "context": { "code": 200, ... } } Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/bitcoin https://blockchair.com/bitcoin-cash https://blockchair.com/litecoin https://blockchair.com/bitcoin-sv https://blockchair.com/dogecoin https://blockchair.com/dash https://blockchair.com/groestlcoin https://blockchair.com/zcash https://blockchair.com/ecash https://blockchair.com/bitcoin/testnet Ethereum-like blockchain stats Endpoints:

https://api.blockchair.com/ethereum/stats https://api.blockchair.com/ethereum/testnet/stats Output:

data contains an array with blockchain statistics:

blocks — total number of blocks (note that it's 1 more than the latest block number as there is block #0) uncles — total number of uncles transactions — total number of transactions calls — total number of internal calls circulation_approximate — number of coins in circulation (in wei) blockchain_size — total size of all blocks in bytes (note: it's not the size of a full node, it's just bare blocks; nodes are bigger in size as they use database indexing, etc) difficulty — current mining difficulty hashrate_24h — approximated hashrate over the last 24 hours (returned as a string as it doesn't fit into an integer) best_block_height — the latest block height best_block_hash — the latest block hash best_block_time — the latest block time mempool_transactions — number of transactions in the mempool mempool_median_gas_price — median gas price of transactions in the mempool mempool_tps — number of transactions per second added to the mempool mempool_total_value_approximate — sum of transaction amounts in the mempool, in wei blocks_24h — number of blocks mined over the last 24 hours uncles_24h — number of uncles over the last 24 hours transactions_24h — number of transactions confirmed over the last 24 hours volume_24h_approximate — total monetary volume of transactions over the last 24 hours average_transaction_fee_24h — average transaction fee over the last 24 hours average_transaction_fee_usd_24h — the same in USD median_transaction_fee_24h— median transaction fee over the last 24 hours median_transaction_fee_usd_24h — the same in USD average_simple_transaction_fee_24h — average simple transfer (i.e. just sending ethers for 21.000 gas) fee over the last 24 hours average_simple_transaction_fee_usd_24h — the same in USD median_simple_transaction_fee_24h— median simple transfer fee over the last 24 hours median_simple_transaction_fee_usd_24h — the same in USD inflation_24h— number of new coins mined over the last 24 hours (in satoshi), this can be considered as the daily inflation inflation_usd_24h — the same in USD largest_transaction_24h: array of hash and value_usd — biggest payment over the last 24 hours market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko) market_price_btc — average market price of 1 coin in BTC market_price_usd_change_24h_percentage — market price change in percent for 24 hours market_cap_usd — market capitalization (coins in circulation * price per coin in USD) market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin) countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event layer_2.erc_20 — an array of stats on the ERC-20 token layer consisting of the following elements: tokens — total number of created ERC-20 tokens (which have at least 1 transaction) transactions — total number of ERC-20 transfers tokens_24h — number of tokens created over the last 24 hours transactions_24h — total number of ERC-20 transfers over the last 24 hours suggested_transaction_fee_gwei_options — recommended transaction fees in gwei. It has 5 options: sloth for occasions when take the risk and wait; slow, normal, and fast if you want to get the transaction confirmed within 2-10 minutes; cheetah for an almost guaranteed next-block confirmation Example output:

https://api.blockchair.com/ethereum/stats:

{ "data": { "blocks": 12023239, "transactions": 1043567165, "blocks_24h": 6433, "circulation_approximate": "115018182780730000000000000", "transactions_24h": 1302619, "difficulty": 5447494005324207, "volume_24h_approximate": "6300512633065118000000000", "mempool_transactions": 94866, "mempool_median_gas_price": 40000000000, "mempool_tps": 7.983333333333333, "mempool_total_value_approximate": "77011108570302550000000", "best_block_height": 12023240, "best_block_hash": "4338ee00f57c8d0bfcb5e9bbbdc47ab40d9685e2b41801541acda53da71132f3", "best_block_time": "2021-03-12 10:43:40", "uncles": 1121915, "uncles_24h": 307, "blockchain_size": 213678005011, "calls": 3032610029, "average_transaction_fee_24h": "9339692912924509", "median_transaction_fee_24h": "4887620538746249", "inflation_24h": 13411.4375, "average_simple_transaction_fee_24h": "2947056048574188", "median_simple_transaction_fee_24h": "3129000000000000", "largest_transaction_24h": { "hash": "0xbc4fc78885355694f0a5ffe27af7e2157f323855a4e40beaf37905e3f3617640", "value_usd": 872236755.0026 }, "hashrate_24h": "453957833777017", "inflation_usd_24h": 23792024.239375, "average_transaction_fee_usd_24h": 16.56870862445721, "median_transaction_fee_usd_24h": 8.670687711941234, "average_simple_transaction_fee_usd_24h": 5.228106900731096, "median_simple_transaction_fee_usd_24h": 5.55087729, "market_price_usd": 1774.01, "market_price_btc": 0.031517784173684, "market_price_usd_change_24h_percentage": 0.95673, "market_cap_usd": 203352392960, "market_dominance_percentage": 11.66, "layer_2": { "erc_20": { "tokens": 246816, "transactions": 604957673, "tokens_24h": 100, "transactions_24h": 859287 } }, "countdowns": [ { "event": "eth2 launch", "eth_staked": 3487170.000069, "eth_needed": 524288 } ], "suggested_transaction_fee_gwei_options": { "sloth": 102, "slow": 115, "normal": 122, "fast": 134, "cheetah": 173 } }, "context": { "code": 200, "state": 12023239, "state_layer_2": 12023239, "request_cost": 1, ... } } Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/ethereum https://blockchair.com/ethereum/testnet Ripple-like blockchain stats Endpoint:

https://api.blockchair.com/ripple/stats Output:

data contains an array with blockchain statistics:

ledgers — total number of ledgers circulation — number of coins in circulation (in XRP) best_ledger_height — the latest ledger number best_ledger_hash — the latest ledger hash best_ledger_time — the latest ledger time mempool_transactions — number of unconfirmed transactions mempool_tps — number of transactions per second added to the mempool mempool_total_fee_usd — sum of transaction fees in the mempool, in USD ledgers_24h — number of ledgers closed over the last 24 hours transactions_24h — number of transactions confirmed over the last 24 hours volume_24h — total monetary volume of transactions over the last 24 hours average_transaction_fee_24h — average transaction fee over the last 24 hours average_transaction_fee_usd_24h — the same in USD median_transaction_fee_24h— median transaction fee over the last 24 hours median_transaction_fee_usd_24h — the same in USD inflation_24h— number of new coins issued over the last 24 hours (can be negative in case more coins are destroyed than issued) inflation_usd_24h — the same in USD largest_transaction_24h: array of hash and value_usd — biggest payment over the last 24 hours market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko) market_price_btc — average market price of 1 coin in BTC market_price_usd_change_24h_percentage — market price change in percent for 24 hours market_cap_usd — market capitalization (coins in circulation * price per coin in USD) market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin) countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event Example output:

https://api.blockchair.com/ripple/stats:

{ "data": { "market_price_usd": 0.290587, "market_price_btc": 0.0000365637358586, "market_price_usd_change_24h_percentage": -3.31938, "market_cap_usd": 12543700763, "market_dominance_percentage": 5.78, "ledgers": 50795576, "best_ledger_height": 50795575, "best_ledger_hash": "07AFA06C63D6C24C31CBD83938A711C098D6C251EEAFC7AE65733CEA3D5EE32A", "best_ledger_time": "2019-10-18 16:28:41", "mempool_transactions": 43, "mempool_total_fee_usd": 0.00024496484099999997, "circulation": 99991318056632960, "average_transaction_fee_24h": 874.9259920487995, "median_transaction_fee_24h": 12, "average_transaction_fee_usd_24h": 0.00025366991765268457, "median_transaction_fee_usd_24h": 0.000003479196, "ledgers_24h": 22359, "transactions_24h": 864272, "mempool_tps": 10.003148148148147, "inflation_24h": -756174037, "inflation_usd_24h": -219.239807069521, "volume_24h": 712237245463407, "largest_transaction_24h": { "hash": "A773E7C3D07D76834280766AF7F90FE7E773E8D5AD77327A603BD6A5B1083611", "value_usd": 14496650 } }, "context": { "code": 200, ... } } Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/ripple Stellar-like blockchain stats Endpoint:

https://api.blockchair.com/stellar/stats Output:

data contains an array with blockchain statistics:

ledgers — total number of ledgers circulation — number of coins in circulation (in stroops) best_ledger_height — the latest ledger number best_ledger_hash — the latest ledger hash best_ledger_time — the latest ledger time ledgers_24h — number of ledgers closed over the last 24 hours transactions_24h — number of transactions confirmed over the last 24 hours successful_transactions_24h— number of successful transactions over the last 24 hours failed_transactions_24h— number of failed transactions over the last 24 hours operations_24h — number of operations over the last 24 hours average_transaction_fee_24h — average transaction fee over the last 24 hours average_transaction_fee_usd_24h — the same in USD market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko) market_price_btc — average market price of 1 coin in BTC market_price_usd_change_24h_percentage — market price change in percent for 24 hours market_cap_usd — market capitalization (coins in circulation * price per coin in USD) market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin) countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event Example output:

https://api.blockchair.com/stellar/stats:

{ "data": { "ledgers": 26602978, "best_ledger_height": 26602978, "best_ledger_hash": "3151f16e9a6ce9ee43f57a068c83a04c7e864ccc7d1027519d42aab79e13b40f", "best_ledger_time": "2019-11-02 16:42:01", "circulation": 1054439020873472900, "ledgers_24h": 15643, "transactions_24h": 461072, "successful_transactions_24h": 285958, "failed_transactions_24h": 175114, "operations_24h": 1085466, "average_transaction_fee_24h": 283.5731513695005, "average_transaction_fee_usd_24h": 0.000001991250668916633, "market_price_usd": 0.07022, "market_price_btc": 0.0000075229454120425, "market_price_usd_change_24h_percentage": 3.41847, "market_cap_usd": 1406714595, "market_dominance_percentage": 0.56 }, "context": { "code": 200, ... } } Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/stellar Monero-like blockchain stats Endpoint:

https://api.blockchair.com/monero/stats Output:

data contains an array with blockchain statistics:

blocks — total number of blocks (note that it's 1 more than the latest block number as there is block #0) transactions — total number of transactions circulation — number of coins in circulation (in satoshi) blockchain_size — total size of all blocks in bytes (note: it's not the size of a full node, it's just bare blocks; nodes are bigger in size as they use database indexing, etc) difficulty — current mining difficulty best_block_height — the latest block height best_block_hash — the latest block hash best_block_time — the latest block time mempool_transactions — number of transactions in the mempool mempool_size — mempool size in bytes market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko) market_price_btc — average market price of 1 coin in BTC market_price_usd_change_24h_percentage — market price change in percent for 24 hours market_cap_usd — market capitalization (coins in circulation * price per coin in USD) market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin) countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event suggested_transaction_fee_per_byte_sat — suggests a proper transaction fee in piconero per byte Example output:

https://api.blockchair.com/stellar/stats:

{ "data": { "blocks": 2012711, "transactions": 6147319, "circulation": 17402679371662576000, "difficulty": 127374112357, "hashrate_24h": 1061450936, "mempool_transactions": 140, "mempool_size": 681994000, "best_block_height": 2012710, "best_block_hash": "3cfcac0ccd9e058f56158686fd4d7258351071e113feac9c1b10da65ce62cce5", "best_block_time": "2020-01-16 20:42:47", "suggested_transaction_fee_per_byte_sat": 13, "market_price_usd": 79.36, "market_price_btc": 0.0079091090293004, "market_price_usd_change_24h_percentage": -0.96449, "market_cap_usd": 1362957367, "market_dominance_percentage": 0.52 }, "context": { "code": 200, ... } } Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/monero Cardano-like blockchain stats Endpoint:

https://api.blockchair.com/cardano/stats Output:

data contains an array with blockchain statistics:

blocks — total number of blocks transactions — total number of transactions circulation — number of coins in circulation (in satoshi) blockchain_size — total size of all blocks in bytes (note: it's not the size of a full node, it's just bare blocks; nodes are bigger in size as they use database indexing, etc) best_block_epoch — the latest epoch number best_block_slot — the latest slot number best_block_height — the latest block height best_block_hash — the latest block hash best_block_time — the latest block time blocks_24h — number of blocks over the last 24 hours transactions_24h — number of transactions over the last 24 hours market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko) market_price_btc — average market price of 1 coin in BTC market_price_usd_change_24h_percentage — market price change in percent for 24 hours market_cap_usd — market capitalization (coins in circulation * price per coin in USD) market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin) countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event Example output:

https://api.blockchair.com/cardano/stats:

{ "data": { "blocks": 3673733, "transactions": 1725714, "best_block_epoch": 170, "best_block_slot": 3790, "best_block_height": 3673733, "best_block_hash": "d70406d8707105b333f2107d6d786316f8232fd8c7beb9565b02f134fe1c03f2", "best_block_time": "2020-01-22 18:48:11", "blocks_24h": 4320, "transactions_24h": 1987, "circulation": 31112169560261348, "blockchain_size": 3474703715, "market_price_usd": 0.04703496, "market_price_btc": 0.000004687558301774, "market_price_usd_change_24h_percentage": -3.43458, "market_cap_usd": 1465483381, "market_dominance_percentage": 0.55 }, "context": { "code": 200, ... } } Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/cardano Mixin-like DAG stats Endpoint:

https://api.blockchair.com/mixin/stats Output:

data contains an array with DAG statistics:

snapshots — total number of snapshots snapshots_24h — number of snapshots over the last 24 hours transactions_24h — number of transactions over the last 24 hours mempool_transactions — number of unvonfirmed transactions tps_24h — transactions per second over 24 hours period best_snapshot_height — the latest snapshot number best_snapshot_hash — the latest snapshots hash best_snapshot_time — the latest snapshot time (UTC) circulation — number of coins in circulation (smallest denomination) circulation_xin — number of coins in circulation (in XINs) market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko) market_price_btc — average market price of 1 coin in BTC market_price_usd_change_24h_percentage — market price change in percent for 24 hours market_cap_usd — market capitalization (coins in circulation * price per coin in USD) market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin) countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event accepted_nodes — number of accepted network nodes mintings — number of coin mintings Example output:

https://api.blockchair.com/mixin/stats:

{ "data": { "snapshots": 18626733, "snapshots_24h": 135000, "transactions_24h": 135000, "mempool_transactions": 0, "tps_24h": 1.5625, "best_snapshot_height": 18626732, "best_snapshot_hash": "6cc46ccbd753dbaf09c1a72d94225af0aaabc5c0c1f705939c7ea77515d6d18c", "best_snapshot_time": "2020-04-22 16:33:08", "circulation_xin": 550991.78082032, "circulation": 55099178082032, "market_price_usd": 168.06, "market_price_btc": 0.02323, "market_price_usd_change_24h_percentage": 2.901, "market_cap_usd": 84247126, "market_dominance_percentage": 0.01, "accepted_nodes": 22, "mintings": 419 }, "context": { "code": 200, "state": 18626733, ... } } Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/mixin Tezos-like blockchain stats Endpoint:

https://api.blockchair.com/tezos/stats Output:

data contains an array with blockchain statistics:

blocks — total number of blocks operations — total number of operations operations_24h — number of operations over the last 24 hours volume_24h — volume transacted over the last 24 hours inflation_24h — newly minted coin count over the last 24 hours best_block_height — the latest block number best_block_hash — its hash… best_block_time — … and timestamp circulation and circulation_xtz — total circulating supply market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko) market_price_btc — average market price of 1 coin in BTC market_price_usd_change_24h_percentage — market price change in percent for 24 hours market_cap_usd — market capitalization (coins in circulation * price per coin in USD) market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin) countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event Example output:

https://api.blockchair.com/tezos/stats:

{ "data": { "blocks": 974146, "operations": 25664439, "operations_24h": 41556, "volume_24h": 19467451942626, "inflation_24h": 114867833312, "best_block_height": 974145, "best_block_hash": "BL5GrLjJVpKfDGBxh3GgVKE25hYcX8FJEN7LmmohyXrS42H2Yx1", "best_block_time": "2020-05-29 22:31:38", "circulation_xtz": 712341492.340773, "circulation": 712341492340773, "market_price_usd": 2.86, "market_price_btc": 0.00030425564282515, "market_price_usd_change_24h_percentage": 2.51544, "market_cap_usd": 2033457725, "market_dominance_percentage": 0.77 }, "context": { "code": 200, "state": 974145, ... } } Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tezos EOS-like blockchain stats Endpoint:

https://api.blockchair.com/eos/stats Output:

data contains an array with blockchain statistics:

blocks — total number of blocks circulation_eos — total circulating supply in EOS circulation_limit_eos — circulating supply limit staked_eos — staked amount of EOS staked_percentage — (staked_eos / circulation_eos) * 100% best_block_height — latest block number best_block_time — its timestamp... best_block_producer — and producer account name irreversible_block_height — latest irreversible block number irreversible_block_hash — its hash ram_max_size — max RAM size in bytes ram_allocated_size — allocated RAM size in bytes ram_allocated_percentage — (ram_allocated_size / ram_max_size) * 100% market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko) market_price_btc — average market price of 1 coin in BTC market_price_usd_change_24h_percentage — market price change in percent for 24 hours market_cap_usd — market capitalization (coins in circulation * price per coin in USD) market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin) countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event Example output:

https://api.blockchair.com/tezos/stats:

{ "data": { "blocks": 125855542, "circulation_eos": 1020158333.6877, "circulation_limit_eos": 10000000000, "staked_eos": 524985046.5825, "staked_percentage": 51.46113394817525, "best_block_height": 125855542, "best_block_time": "2020-06-13 17:33:53", "best_block_producer": "newdex.bp", "irreversible_block_height": 125855206, "irreversible_block_hash": "078065e6d5a20d200729a117d6747761b52b9531eddb1072a62b5fe839dec3da", "ram_max_size": 192171732992, "ram_allocated_size": 81993066226, "ram_allocated_percentage": 42.66655920171846, "market_price_usd": 2.59, "market_price_btc": 0.00027429815680111, "market_price_usd_change_24h_percentage": 0.6576, "market_cap_usd": 2433086848, "market_dominance_percentage": 0.9 }, "context": { "code": 200, "state": 125855542, "request_cost": 1, ... } } Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/eos Stats for cross-chain tokens (USDT, USDC, BUSD) Endpoints:

https://api.blockchair.com/cross-chain/tether/stats https://api.blockchair.com/cross-chain/usd-coin/stats https://api.blockchair.com/cross-chain/binance-usd/stats Output:

circulation shows the total token circulation across all supported blockchains blockchains is an array of blockchains the token supports: circulation is the token circulation on a particular blockchain explorer is a link to Blockchair's explorer for the token Example output:

https://api.blockchair.com/cross-chain/usd-coin/stats:

{ "data": { "circulation": 26017746210.430256, "blockchains": { "ethereum": { "circulation": 25058405745.44955, "explorer": "https://blockchair.com/ethereum/erc-20/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" }, "algorand": { "circulation": 174340444.981248, "explorer": null }, "solana": { "circulation": 785000019.99946, "explorer": null } } }, "context": { "code": 200, "request_cost": 1, ... } } Request cost formula:

Always 1.

Explore visualization on our front-end:

Not yet available

Omni Layer stats Allows to retrieve the some basic stats on Omni Layer (Bitcoin). Note that this endpoint is in the Alpha stage, and Wormhole (Bitcoin Cash Omni-like token system) was phased out on January 1st, 2020.

Endpoint:

https://api.blockchair.com/bitcoin/omni/stats Output:

data contains an array with second layer statistics:

properties — total number of created properties properties_mainnet — total number of "mainnet" properties properties_testnet — total number of "testnet" properties transactions_approximate — approximate number of transactions latest_transactions — array of 10 latest transactions Note that the "mainnet" and "testnet" terms don't imply using Bitcoin Testnet, the idea behind that is "testnet" properties still live on the Bitcoin Mainnet, but they have should have no monetary value, and their purpose is for testing only.

Example request:

https://api.blockchair.com/bitcoin/omni/stats Example output:

https://api.blockchair.com/bitcoin/omni/stats:

{ "data": { "properties": 1187, "properties_mainnet": 751, "properties_testnet": 436, "transactions_approximate": 14406305, "latest_transactions": [ { "property_id": 31, "property_name": "TetherUS", "type_id": 0, "type": "Simple Send", "sender": "1B4dCsH6MC9XoZ6ob2nngvJesYEfNNtMQS", "recipient": "1FoWyxwPXuj4C6abqwhjDWdz6D4PZgYRjA", "valid": false, "amount": 960000, "transaction_hash": "ee1f0401cae15e5ad35cc760c99aacc8c25f21814f234bd80038b99d0ec83d9c", "time": "2019-10-18 19:34:28" }, ... ] }, "context": { "code": 200, "state": 599972, ... } } Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/bitcoin/omni ERC-20 stats There's no separate endpoint to get ERC-20 stats, use https://api.blockchair.com/ethereum/stats instead which includes ERC-20 info. Description is available here

Dashboard endpoints Retrieve information about various entities in a neat format from our databases

The API supports a number of calls that produce some aggregated data, or data in a more convenient form for certain entities.

Dashboard endpoints for Bitcoin-like blockchains (Bitcoin, Bitcoin Cash, Litecoin, Bitcoin SV, Dogecoin, Dash, Groestlcoin, Zcash, eCash, Bitcoin Testnet) Block info Endpoints:

https://api.blockchair.com/{:btc_chain}/dashboards/block/{:height}₀ https://api.blockchair.com/{:btc_chain}/dashboards/block/{:hash}₀ https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ (up to 10 blocks, comma-separated) https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ (up to 10 blocks, comma-separated) Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet {:height}ᵢ is the block height (integer value), also known as block id {:hash}ᵢ is the block hash (regex: /^[0-9a-f]{64}$/i) Possible options:

?limit={:limit} limits the number of returned transaction hashes contained in the block. Default is 100. Maximum is 10000. In case of 0 returns an empty transaction hashes array ?offset={:offset} allows to paginate transaction hashes. Default is 0. Maximum is 1000000. Output:

data contains an associative array where found block heights or block hashes used as keys:

data.{:id}ᵢ.block - information about the block (see Bitcoin-like block object for the field descriptions) data.{:id}ᵢ.transactions - the array of transaction hashes (sorted by position in the block ascending) included in the block (respecting the set limit and offset) Where {:id}ᵢ is either {:height}ᵢ or {:hash}ᵢ from the query string. If there's no {:id}ᵢ has been found in the database, there won't be such key.

Note that the total number of transactions in the block is contained in data.{:id}ᵢ.block.transaction_count

Context keys:

context.results — number of found blocks context.limit — applied limit context.offset — applied offset context.state — best block height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1) Example requests:

https://api.blockchair.com/bitcoin/dashboards/block/0 https://api.blockchair.com/bitcoin/dashboards/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f https://api.blockchair.com/bitcoin/dashboards/blocks/0,1,2,3,4,5,6,7,8,9 https://api.blockchair.com/bitcoin-cash/dashboards/block/556045?limit=10000 https://api.blockchair.com/bitcoin-cash/dashboards/block/556045?limit=10000&offset=10000 https://api.blockchair.com/bitcoin/dashboards/block/9999999 Example output:

https://api.blockchair.com/bitcoin/dashboards/block/0:

{ "data": { "0": { "block": { "id": 0, "hash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f", "date": "2009-01-03", "time": "2009-01-03 18:15:05", "median_time": "2009-01-03 18:15:05", "size": 285, "version": 1, "version_hex": "1", "version_bits": "000000000000000000000000000001", "merkle_root": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b", "nonce": 2083236893, "bits": 486604799, "difficulty": 1, "chainwork": "0000000000000000000000000000000000000000000000000000000100010001", "coinbase_data_hex": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73", "transaction_count": 1, "input_count": 1, "output_count": 1, "input_total": 0, "input_total_usd": 0, "output_total": 5000000000, "output_total_usd": 0, "fee_total": 0, "fee_total_usd": 0, "fee_per_kb": 0, "fee_per_kb_usd": 0, "cdd_total": 0, "generation": 5000000000, "generation_usd": 0, "reward": 5000000000, "reward_usd": 0, "guessed_miner": "Unknown" }, "transactions": [ "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b" ] } ], "context": { "code": 200, "limit": 100, "offset": 0, "results": 1, "state": 555555, ... } } } Request cost formula:

1 for https://api.blockchair.com/{:btc_chain}/dashboards/block/{:height}₀ and https://api.blockchair.com/{:btc_chain}/dashboards/block/{:hash}₀ endpoints 1 + (0.1 * (entity count - 1)) for https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ and https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ endpoints (e.g. it's 1 + (0.1 * (10 - 1)) = 1.9 for requesting 10 blocks) Explore visualizations on our front-end:

https://blockchair.com/bitcoin/block/0 https://blockchair.com/bitcoin-cash/block/0 https://blockchair.com/litecoin/block/0 https://blockchair.com/bitcoin-sv/block/0 https://blockchair.com/dogecoin/block/0 https://blockchair.com/dash/block/0 https://blockchair.com/groestlcoin/block/0 https://blockchair.com/zcash/block/0 https://blockchair.com/ecash/block/0 https://blockchair.com/bitcoin/testnet/block/0 Transaction info Endpoints:

https://api.blockchair.com/{:chain}/dashboards/transaction/{:hash}₀ https://api.blockchair.com/{:chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ (up to 10 transactions, comma-separated) Where:

{:chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet {:hashᵢ} is the transaction hash (regex: /^[0-9a-f]{64}$/i), also known as txid Possible options:

?omni=true (for bitcoin only; in alpha test mode) — shows information about Omni Layer token transfers in this transaction Output:

data contains an associative array where found transaction hashes are used as keys:

data.{:hash}ᵢ.transaction — information about the transaction (see Bitcoin-like transaction object) data.{:hash}ᵢ.inputs — the array of transaction inputs (sorted by spending_index ascending), where each element is a Bitcoin-like output object (inputs represented as spent outputs), or an empty array in case of coinbase transaction data.{:hash}ᵢ.outputs — the array of transaction outputs (sorted by index ascending), where each element is a Bitcoin-like output object Additional data:

data.{:hash}ᵢ.layer_2.omni (for bitcoin only; in alpha test mode) — Omni layer transaction data in case there's any scripthash_type field for inputs and outputs (example: https://api.blockchair.com/bitcoin/dashboards/transaction/4d41241148a7cb8f4e2820d4393415ccd3d0793053a3855b44c33e5053c231ff) in the multisig_{:m}of{:n} format. Please note that if output is unspent, scripthash_type will always be null, even if the associated address multisig type can be derived from some other spent output. data.{:hash}ᵢ.transaction.is_rbf (for bitcoin and bitcoin/testnet only) — yields true if the transaction can be replaced with a transaction with a higher fee (replace-by-fee), and false otherwise; for blockchain transactions it shows whether the transaction could've been replaced before it has been included into the block. In case transaction is confirmed on the blockchain, data.{:hash}ᵢ.transaction.block_id contains the block number it's included in. If the transaction is in the mempool, data.{:hash}ᵢ.transaction.block_id yields -1. If the transaction is neither present in the blockchain, nor in the mempool, there won't be data.{:hash}ᵢ key with data.

Context keys:

context.results — number of found transactions context.state — best block height on the {:chain} chain (tip: it's possible to calculate the number of confirmation transaction received using this formula: confirmations = data.{:id}ᵢ.transaction.block_id - context.state + 1, or if data.{:id}ᵢ.transaction.block_id is -1 it's an unconfirmed transaction) Example requests:

https://api.blockchair.com/bitcoin/dashboards/block/0 https://api.blockchair.com/bitcoin/dashboards/blocks/0,1,2,3,4,5,6,7,8,9 https://api.blockchair.com/bitcoin-cash/dashboards/block/556045?limit=10000 https://api.blockchair.com/bitcoin-cash/dashboards/block/556045?limit=10000&offset=10000 https://api.blockchair.com/bitcoin/dashboards/block/9999999 Example output:

https://api.blockchair.com/bitcoin/dashboards/transaction/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16:

{ "data": { "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16": { "transaction": { "block_id": 170, "id": 171, "hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16", "date": "2009-01-12", "time": "2009-01-12 03:30:25", "size": 275, "weight": 1100, "version": 1, "lock_time": 0, "is_coinbase": false, "has_witness": false, "input_count": 1, "output_count": 2, "input_total": 5000000000, "input_total_usd": 0.5, "output_total": 5000000000, "output_total_usd": 0.5, "fee": 0, "fee_usd": 0, "fee_per_kb": 0, "fee_per_kb_usd": 0, "fee_per_kwu": 0, "fee_per_kwu_usd": 0, "cdd_total": 149.15856481481, "is_rbf": false }, "inputs": [ { "block_id": 9, "transaction_id": 9, "index": 0, "transaction_hash": "0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9", "date": "2009-01-09", "time": "2009-01-09 03:54:39", "value": 5000000000, "value_usd": 0.5, "recipient": "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S", "type": "pubkey", "script_hex": "410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac", "is_from_coinbase": true, "is_spendable": true, "is_spent": true, "spending_block_id": 170, "spending_transaction_id": 171, "spending_index": 0, "spending_transaction_hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16", "spending_date": "2009-01-12", "spending_time": "2009-01-12 03:30:25", "spending_value_usd": 0.5, "spending_sequence": 4294967295, "spending_signature_hex": "47304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901", "spending_witness": "", "lifespan": 257746, "cdd": 149.158564814815, "scripthash_type": null } ], "outputs": [ { "block_id": 170, "transaction_id": 171, "index": 0, "transaction_hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16", "date": "2009-01-12", "time": "2009-01-12 03:30:25", "value": 1000000000, "value_usd": 0.1, "recipient": "1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3", "type": "pubkey", "script_hex": "4104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac", "is_from_coinbase": false, "is_spendable": true, "is_spent": true, "spending_block_id": 92240, "spending_transaction_id": 156741, "spending_index": 0, "spending_transaction_hash": "ea44e97271691990157559d0bdd9959e02790c34db6c006d779e82fa5aee708e", "spending_date": "2010-11-16", "spending_time": "2010-11-16 20:39:27", "spending_value_usd": 2.7, "spending_sequence": 4294967295, "spending_signature_hex": "4730440220576497b7e6f9b553c0aba0d8929432550e092db9c130aae37b84b545e7f4a36c022066cb982ed80608372c139d7bb9af335423d5280350fe3e06bd510e695480914f01", "spending_witness": "", "lifespan": 58208942, "cdd": 6737.14606481481, "scripthash_type": null }, { "block_id": 170, "transaction_id": 171, "index": 1, "transaction_hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16", "date": "2009-01-12", "time": "2009-01-12 03:30:25", "value": 4000000000, "value_usd": 0.4, "recipient": "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S", "type": "pubkey", "script_hex": "410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac", "is_from_coinbase": false, "is_spendable": true, "is_spent": true, "spending_block_id": 181, "spending_transaction_id": 183, "spending_index": 0, "spending_transaction_hash": "a16f3ce4dd5deb92d98ef5cf8afeaf0775ebca408f708b2146c4fb42b41e14be", "spending_date": "2009-01-12", "spending_time": "2009-01-12 06:02:13", "spending_value_usd": 0.4, "spending_sequence": 4294967295, "spending_signature_hex": "473044022027542a94d6646c51240f23a76d33088d3dd8815b25e9ea18cac67d1171a3212e02203baf203c6e7b80ebd3e588628466ea28be572fe1aaa3f30947da4763dd3b3d2b01", "spending_witness": "", "lifespan": 9108, "cdd": 4.21666666666667, "scripthash_type": null } ] } }, "context": { "code": 200, "results": 1, "state": 555555, ... } } Bonus endpoint:

https://api.blockchair.com/{:btc_chain}/dashboards/transaction/{:hash}₀/priority For mempool transactions shows priority (position) — for chains supporting SegWit by fee_per_kwu, for others by fee_per_kb— over other transactions (out_of mempool transactions). position is null if the transaction is neither in the mempool nor in the blockchain, confirmed if it's in the blockchain. eta_seconds returns an approximate time for the transaction to confirm (in seconds, exprimental). Cost: 1.

Request cost formula:

1 for https://api.blockchair.com/{:btc_chain}/dashboards/transaction/{:hash}₀ endpoint 1 + (0.1 * (entity count - 1)) for https://api.blockchair.com/{:btc_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ endpoint (e.g. it's 1 + (0.1 * (10 - 1)) = 1.9 for requesting 10 transactions) Using ?omni=true adds 1 for each requested transaction Explore visualization on our front-end:

https://blockchair.com/bitcoin/transaction/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b Address and extended public key (xpub) info Endpoints:

https://api.blockchair.com/{:btc_chain}/dashboards/address/{:address}₀ (for a single address; further referred to as the address dashboard) https://api.blockchair.com/{:btc_chain}/dashboards/addresses/{:address}₀,...,{:address}ᵩ (for a set of up to 100 addresses, comma-separated, further referred to as the addresses dashboard) https://api.blockchair.com/{:btc_chain}/dashboards/xpub/{:extended_key} (info on xpub, ypub, or zpub extended key; further referred to as the xpub dashboard) Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet {:address}ᵢ is the address, possible formats are:

p2pk/p2pkh format (supported for all blockchains, example for Bitcoin: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa) p2sh format (supported for all blockchains, example for Bitcoin: 342ftSRCvFHfCeFFBuz4xwbeqnDw6BGUey) Only for the dashboards/address endpoint Bitcoin Cash also supports Legacy address variant, and Bitcoin SV supports CashAddr variant for p2pkh and p2sh formats. It's also possible to use bitcoincash: prefix (examples: qzyl04w3m99ddpqahzwghn3erallm3e7z5le4aqqmh or bitcoincash:qzyl04w3m99ddpqahzwghn3erallm3e7z5le4aqqmh for both Bitcoin Cash and Bitcoin SV. bech32 format (witness_v0_keyhash, witness_v0_scripthash, or witness_unknown — supported for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet only; example for Bitcoin: bc1q34aq5drpuwy3wgl9lhup9892qp6svr8ldzyy7c) Internal Blockchair format (for multisig. nulldata, and nonstandard output types) For eCash the ecash: prefix and format are used {:extended_key} is the extended public key, possible formats are:

xpub (supported for all blockchains, example for Bitcoin: xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz, yields p2pkh addresses) ypub (supported for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet only, example for Bitcoin: ypub6XiW9nhToS1gjVsFKzgmtWZuqo6V1YY7xaCns37aR3oYhFyAsTehAqV1iW2UCNtgWFQFkz3aNSZZbkfe5d1tD8MzjZuFJQn2XnczsxtjoXr, yields p2sh addresses) zpub (supported for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet only, example for Bitcoin: ypub6XiW9nhToS1gjVsFKzgmtWZuqo6V1YY7xaCns37aR3oYhFyAsTehAqV1iW2UCNtgWFQFkz3aNSZZbkfe5d1tD8MzjZuFJQn2XnczsxtjoXr, yields witness_v0_keyhash addresses) Note that custom xpub formats (e.g. ltub for Litecoin) are not supported.

Possible options:

?limit={:transaction_limit},{:utxo_limit} or a shorthand ?limit={:limit}. {:transaction_limit} limits the number of returned latest transaction hashes (in the transactions array) for an address or an address set. Default is 100. Maximum is 10000. In case of 0 returns an empty transaction hashes array. {:utxo_limit} limits the number of returned latest UTXOs (in the utxo array) for an address or an address set. Default is 100. Maximum is 10000. In case of 0 returns an empty UTXO array. If only one limit is set, it applies to both {:transaction_limit} and {:utxo_limit} (e.g. ?limit=100 is an equivalent of ?limit=100,100). ?offset={:transaction_offset},{:utxo_offest} or a shorthand ?offset={:offset} allows to paginate transaction hashes and the UTXO array. The behaviour is similar to the ?limit= section. Default for both offset is 0, and the maximum is 1000000. ?transaction_details=true — returns detailed info on transactions instead of just hashes in the transactions array. Each element contains block_id, transaction_hash, time, and balance_change (shows how the transactions affected the balance of {:address}, i.e. it can be a negative value). This option is available for all three endpoints: dashboards/address, dashboards/addresses, and dashboards/xpub. ?omni=true (for bitcoin only; in alpha test mode) — shows information about Omni Layer tokens belonging to the address. At the moment, this option is available for the address endpoint only. The data is returned in the layer_2.omni array. ?state=latest — discards unconfirmed transactions from the output — balance will show only confirmed balance, and transactions and utxo arrays won't include unconfirmed data. Output:

Please note that while the only difference between for example transaction and transactions dashboards is the number of elements in the data array, address and addresses differ semantically. address returns info on a single address with its recent transaction hashes and its UTXO set, while addresses and xpub return info on an address set (as well as some stats on separate addresses) where transaction hashes and the UTXO set are returned for the entire set (that's more useful for wallets as in most cases the task is, for example, to retrieve latest 10 transaction hashes for a set of addresses sorted by time descending, but not 10 transactions for each address as it's not clear how to sort them).

Here's how these three dashboard calls structured (see more detailed examples below):

address endpoint (single address):

data {:address}₀ address — an associative array with address info (balance, script_hex, transaction_count, etc.) transactions — an array of latest transaction hashes where the address is a participant (either sender or recipient) utxo — the UTXO set for the address context — some context info addresses endpoint (2 addresses for example):

data set — an associative array with info on the address set (balance yields the total balance of 2 addresses, transaction_count is for both, etc.) addresses {:address}₀ — an associative array with the first address info (balance, script_hex, output_count, etc.) {:address}₁ — an associative array with the second address info (balance, script_hex, output_count, etc.) transactions — an array of latest transaction hashes for the entire set utxo — the UTXO set for the address set context — some context info xpub endpoint:

data {:extended_key} xpub — an associative array with xpub info (balance yields the total balance of all addresses derived from the xpub, transaction_count, etc.) addresses {:address}₀ — an associative array with the first address info (balance, script_hex, output_count, etc.) {:address}₁ — an associative array with the second address info (balance, script_hex, output_count, etc.) transactions — an array of latest transaction hashes for the entire set utxo — the UTXO set for the address set context — some context info Note that currently the maximum depth for xpub address discovery is 250 main addresses and 250 change addresses (larger limits up to 10.000 main / 10.000 change are available on Premium plans). According to BIP 32, our engine looks for 20 addresses at once, and if there's no transactions associated with this set, it stops looking.

data.addresses for both the addresses and the xpub endpoints don't include addresses which don't participate in transactions.

Address object specification:

type — address type (the same as type here, can be one of these: pubkey (P2PK), pubkeyhash (P2PKH), scripthash (P2SH), multisig, nulldata (OP_RETURN), nonstandard, witness_v0_keyhash (P2WPKH), witness_v0_scripthash (P2WSH), witness_unknown) script_hex — output script (in hex) corresponding to the address balance — address balance in satoshi (hereinafter — including unconfirmed outputs unless ?state=latest option is used) balance_usd — address balance in USD received — total received in satoshi received_usd — total received in USD spent — total spent in satoshi spent_usd — total spent in USD output_count — the number of outputs this address received unspent_output_count — number of unspent outputs for this address (i.e. the number of inputs for an address can be calculated as output_count-unspent_output_count) first_seen_receiving — timestamp (UTC) when the first time this address received coins last_seen_receiving — timestamp (UTC) when the last time this address received coins first_seen_spending — timestamp (UTC) when the first time this address sent coins last_seen_spending — timestamp (UTC) when the last time this address sent coins transaction_count — number of unique transactions this address participating in (available only in the address endpoint) path — derived address path (available only in the xpub endpoint) scripthash_type — in case the type is either scripthash (P2SH) or witness_v0_scripthash (P2WSH) — yields multisig type in the following format: multisig_{:m}of{:n}. If it's not multisig, or it's not possible to derive the type because there has been no spendings from this address — yields null. Available only in the address endpoint. Context keys:

context.results — number of found addresses context.limit — applied limit context.offset — applied offset context.state — best block height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1) context.checked (for the xpub endpoint only) — lists the addresses checked by our engine with their paths Example requests:

https://api.blockchair.com/bitcoin/dashboards/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa https://api.blockchair.com/bitcoin/dashboards/addresses/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa,12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX https://api.blockchair.com/bitcoin/dashboards/xpub/xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz https://api.blockchair.com/bitcoin/dashboards/xpub/xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz?transaction_details=true&limit=10,0 https://api.blockchair.com/bitcoin/dashboards/address/12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S?transaction_details=true https://api.blockchair.com/bitcoin/dashboards/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?limit=1&offset=1&transaction_details=true Example outputs:

https://api.blockchair.com/bitcoin/dashboards/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?limit=1&offset=1&transaction_details=true:

{ "data": { "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa": { "address": { "type": "pubkey", "script_hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac", "balance": 6812392291, "balance_usd": 508913.63494609314, "received": 6812392291, "received_usd": 15293.3019, "spent": 0, "spent_usd": 0, "output_count": 1820, "unspent_output_count": 1820, "first_seen_receiving": "2009-01-03 18:15:05", "last_seen_receiving": "2019-10-24 18:47:23", "first_seen_spending": null, "last_seen_spending": null, "transaction_count": 1820, "scripthash_type": null , }, "transactions": [ { "block_id": 600890, "hash": "4db4d68b13bf667ad9a44f4222bad2239de318fa75555ef966e84315056374b5", "time": "2019-10-24 18:47:23", "balance_change": 267582 } ], "utxo": [ { "block_id": 600890, "transaction_hash": "4db4d68b13bf667ad9a44f4222bad2239de318fa75555ef966e84315056374b5", "index": 1, "value": 267582 } ] } }, "context": { "code": 200, "limit": "1,1", "offset": "1,1", "results": 1, "state": 600897, ... } } https://api.blockchair.com/bitcoin/dashboards/addresses/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa,12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX?limit=1:

{ "data": { "set": { "address_count": 2, "balance": 11846862777, "balance_usd": 885009.2215792858, "received": 11846862777, "spent": 0, "output_count": 1915, "unspent_output_count": 1915, "first_seen_receiving": "2009-01-03 18:15:05", "last_seen_receiving": "2019-10-24 18:47:23", "first_seen_spending": null, "last_seen_spending": null, "transaction_count": 1912 }, "addresses": { "12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX": { "type": "pubkeyhash", "script_hex": "76a914119b098e2e980a229e139a9ed01a469e518e6f2688ac", "balance": 5034470486, "balance_usd": 376095.5866331926, "received": 5034470486, "received_usd": 1216.4402, "spent": 0, "spent_usd": 0, "output_count": 95, "unspent_output_count": 95, "first_seen_receiving": "2009-01-09 02:54:25", "last_seen_receiving": "2019-09-18 18:29:01", "first_seen_spending": null, "last_seen_spending": null }, "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa": { "type": "pubkeyhash", "script_hex": "76a91462e907b15cbf27d5425399ebf6f0fb50ebb88f1888ac", "balance": 6812392291, "balance_usd": 508913.63494609314, "received": 6812392291, "received_usd": 15293.3019, "spent": 0, "spent_usd": 0, "output_count": 1820, "unspent_output_count": 1820, "first_seen_receiving": "2009-01-03 18:15:05", "last_seen_receiving": "2019-10-24 18:47:23", "first_seen_spending": null, "last_seen_spending": null } }, "transactions": [ "f16bcc481a8939bc1c2f1b7df061f89958e265894dc71df248dabaad8e0815ed" ], "utxo": [ { "block_id": -1, "transaction_hash": "f16bcc481a8939bc1c2f1b7df061f89958e265894dc71df248dabaad8e0815ed", "index": 0, "value": 558, "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" } ] }, "context": { "code": 200, "limit": "1,1", "offset": "0,0", "results": 2, "state": 600898, ... } } https://api.blockchair.com/bitcoin/dashboards/xpub/xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz?limit=1,2:

{ "data": { "xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz": { "xpub": { "address_count": 11, "balance": 491868, "balance_usd": 36.744556258799996, "received": 711868, "spent": 220000, "output_count": 11, "unspent_output_count": 9, "first_seen_receiving": "2014-12-22 17:42:10", "last_seen_receiving": "2019-09-25 16:12:10", "first_seen_spending": "2014-12-22 21:32:22", "last_seen_spending": "2014-12-23 17:26:21", "transaction_count": 13 }, "addresses": { "1EfgV2Hr5CDjXPavHDpDMjmU33BA2veHy6": { "path": "0/0", "type": "pubkeyhash", "script_hex": "76a91495ea668e0322bd99dac54ffdc9089d68e56c3aa188ac", "balance": 0, "balance_usd": 0, "received": 100000, "received_usd": 0.3255, "spent": 100000, "spent_usd": 0.3292, "output_count": 1, "unspent_output_count": 0, "first_seen_receiving": "2014-12-22 17:42:10", "last_seen_receiving": "2014-12-22 17:42:10", "first_seen_spending": "2014-12-23 17:26:21", "last_seen_spending": "2014-12-23 17:26:21" }, "12iNxzdF6KFZ14UyRTYCRuptxkKSSVHzqF": { "path": "0/1", "type": "pubkeyhash", "script_hex": "76a91412cb841986033f5ec9a4a1babe3a47339beac81c88ac", "balance": 0, "balance_usd": 0, "received": 120000, "received_usd": 0.3906, "spent": 120000, "spent_usd": 0.3906, "output_count": 1, "unspent_output_count": 0, "first_seen_receiving": "2014-12-22 17:42:10", "last_seen_receiving": "2014-12-22 17:42:10", "first_seen_spending": "2014-12-22 21:32:22", "last_seen_spending": "2014-12-22 21:32:22" }, "1CcEugXu9Yf9Qw5cpB8gHUK4X9683WyghM": { "path": "0/2", "type": "pubkeyhash", "script_hex": "76a9147f538d66e3745866949f1b98c72c00638f16c7a088ac", "balance": 8747, "balance_usd": 0.6534367627, "received": 8747, "received_usd": 0.0506, "spent": 0, "spent_usd": 0, "output_count": 1, "unspent_output_count": 1, "first_seen_receiving": "2016-08-18 04:07:11", "last_seen_receiving": "2016-08-18 04:07:11", "first_seen_spending": null, "last_seen_spending": null }, "15xANZb5vJv5RGL263NFuh8UGgHT7noXeZ": { "path": "0/3", "type": "pubkeyhash", "script_hex": "76a914364f34453e722af26f5f861aafbb7105176edcee88ac", "balance": 100000, "balance_usd": 7.47041, "received": 100000, "received_usd": 2.6486, "spent": 0, "spent_usd": 0, "output_count": 1, "unspent_output_count": 1, "first_seen_receiving": "2017-06-21 03:01:22", "last_seen_receiving": "2017-06-21 03:01:22", "first_seen_spending": null, "last_seen_spending": null }, "1PJMBXKBYEBMRDmpAoBRbDff26gHJrawSp": { "path": "0/4", "type": "pubkeyhash", "script_hex": "76a914f49aaf692e1aca7d9de273d5b5538ad69677c74d88ac", "balance": 100000, "balance_usd": 7.47041, "received": 100000, "received_usd": 2.4581, "spent": 0, "spent_usd": 0, "output_count": 1, "unspent_output_count": 1, "first_seen_receiving": "2017-07-02 17:12:03", "last_seen_receiving": "2017-07-02 17:12:03", "first_seen_spending": null, "last_seen_spending": null }, "16ZBYSHkLkRFHAuZvyzosXYgU1UDJxRV1R": { "path": "0/5", "type": "pubkeyhash", "script_hex": "76a9143ceebd5df25f739b5025d61fa4be2346fada97fd88ac", "balance": 100000, "balance_usd": 7.47041, "received": 100000, "received_usd": 2.4581, "spent": 0, "spent_usd": 0, "output_count": 1, "unspent_output_count": 1, "first_seen_receiving": "2017-07-02 17:26:49", "last_seen_receiving": "2017-07-02 17:26:49", "first_seen_spending": null, "last_seen_spending": null }, "1EHeVKfjjq6FJpix86G2yzFeRbZ6RNg2Zm": { "path": "0/6", "type": "pubkeyhash", "script_hex": "76a91491bf9590d5cf0412d5b3fec1284d7164b161c65088ac", "balance": 100000, "balance_usd": 7.47041, "received": 100000, "received_usd": 2.4581, "spent": 0, "spent_usd": 0, "output_count": 1, "unspent_output_count": 1, "first_seen_receiving": "2017-07-02 18:11:17", "last_seen_receiving": "2017-07-02 18:11:17", "first_seen_spending": null, "last_seen_spending": null }, "1HqsYkwczwvkMXCobk5WPZmhj2S2TK613Z": { "path": "0/8", "type": "pubkeyhash", "script_hex": "76a914b8c02c75c59f6320b729af2b0a5e0bff7efab95388ac", "balance": 40161, "balance_usd": 3.0001913601, "received": 40161, "received_usd": 2.63…: About Dependabot security updates
intro: '{% data variables.product.prodname_dependabot %} can fix vulnerable dependencies for you by raising pull requests with security updates.'
shortTitle: Dependabot security updates
redirect_from:
  - /github/managing-security-vulnerabilities/about-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/about-dependabot-security-updates
  - /code-security/supply-chain-security/about-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Repositories
  - Dependencies
  - Pull requests
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About Dependabot security updates".-->

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## About {% data variables.product.prodname_dependabot_security_updates %}

{% data variables.product.prodname_dependabot_security_updates %} make it easier for you to fix vulnerable dependencies in your repository. If you enable this feature, when a {% data variables.product.prodname_dependabot %} alert is raised for a vulnerable dependency in the dependency graph of your repository, {% data variables.product.prodname_dependabot %} automatically tries to fix it. For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)" and "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."

{% data variables.product.prodname_dotcom %} may send  {% data variables.product.prodname_dependabot_alerts %} to repositories affected by a vulnerability disclosed by a recently published {% data variables.product.prodname_dotcom %} security advisory. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% data variables.product.prodname_dependabot %} checks whether it's possible to upgrade the vulnerable dependency to a fixed version without disrupting the dependency graph for the repository. Then {% data variables.product.prodname_dependabot %} raises a pull request to update the dependency to the minimum version that includes the patch and links the pull request to the {% data variables.product.prodname_dependabot %} alert, or reports an error on the alert. For more information, see "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)."

{% note %}

**Note**

The {% data variables.product.prodname_dependabot_security_updates %} feature is available for repositories where you have enabled the dependency graph and {% data variables.product.prodname_dependabot_alerts %}. You will see a {% data variables.product.prodname_dependabot %} alert for every vulnerable dependency identified in your full dependency graph. However, security updates are triggered only for dependencies that are specified in a manifest or lock file. {% data variables.product.prodname_dependabot %} is unable to update an indirect or transitive dependency that is not explicitly defined. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#dependencies-included)."

{% endnote %}

You can enable a related feature, {% data variables.product.prodname_dependabot_version_updates %}, so that {% data variables.product.prodname_dependabot %} raises pull requests to update the manifest to the latest version of the dependency, whenever it detects an outdated dependency. For more information, see "[About {% data variables.product.prodname_dependabot %} version updates](/github/administering-a-repository/about-dependabot-version-updates)."

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

## About pull requests for security updates

Each pull request contains everything you need to quickly and safely review and merge a proposed fix into your project. This includes information about the vulnerability like release notes, changelog entries, and commit details. Details of which vulnerability a pull request resolves are hidden from anyone who does not have access to {% data variables.product.prodname_dependabot_alerts %} for the repository.

When you merge a pull request that contains a security update, the corresponding {% data variables.product.prodname_dependabot %} alert is marked as resolved for your repository. For more information about {% data variables.product.prodname_dependabot %} pull requests, see "[Managing pull requests for dependency updates](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)."

{% data reusables.dependabot.automated-tests-note %}

{% ifversion fpt or ghec %}

## About compatibility scores

{% data variables.product.prodname_dependabot_security_updates %} may include compatibility scores to let you know whether updating a dependency could cause breaking changes to your project. These are calculated from CI tests in other public repositories where the same security update has been generated. An update's compatibility score is the percentage of CI runs that passed when updating between specific versions of the dependency.

{% endif %}

## About notifications for {% data variables.product.prodname_dependabot %} security updates

You can filter your notifications on {% data variables.product.company_short %} to show {% data variables.product.prodname_dependabot %} security updates. For more information, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)."
