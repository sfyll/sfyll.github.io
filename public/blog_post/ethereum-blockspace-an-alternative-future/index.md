<div id="post-title">Ethereum Blockspace: An Alternative Future</div>
<div id="post-date">2023-08-15</div>

<div id="blogContent">
As I make my way through the Malaysian tropical landscape, I am subjugated by the biodiversity. The plethora of fauna and flora is a sight to behold, at least for us, fellow Europeans. Obviously, as a crypto degenerate, I started drawing some parallels with the great flourishing of our ecosystem – zero-knowledge encryption and its applications, all types of rollups, account and domain abstractions, intent-based transactions, danksharding – you name it, it’s happening.
<p></p>
<br>
Nonetheless, while participating in ZK-Lambda Week or attending ZkParis and SUAVE Salon in Paris last month, I noticed an apparent lack of overlap between the MEV and ZK communities. As such, while an emphasis on MEV is paramount and changes such as PEPC are of utmost interest, we should avoid being misguided by some form of recency bias.
<p></p>
<br>
As an ex-MEV operator turned ZK-enthusiast, let me take you through a succinct Ethereum blockspace history recap. We’ll then outline an alternative future and speculate on its ramifications.
  <p></p>
<br>

# **A Succinct Ethereum Blockspace History**
<p></p>
<br>
The goal of this essay is not to present an in-depth, historical depiction of Ethereum Blockspace history. Indeed, we'll focus on compartmentalizing two blockspace areas, pre and post-2020. Within these areas, we'll use a simple, discrete quadrant depicted below to contextualize marginal shifts in blockspace supply and demand curves.
<p></p>
<br>
<center>
<figure>
  <img src="/blog_post/ethereum-blockspace-an-alternative-future/Blockspace Marginal Economic Shifts Quadrant.png" class="padded" />
  <figcaption>Blockspace Marginal Economic Shifts Quadrant</figcaption>
</figure>
</center><br>

## **Pre 2020: an isolated system**
<p></p>
<br>
This world takes place in the early Ethereum days where most development is either experimental or too niche to have an oversized impact on blockspace economics. DeFi is known by few and as such not generating enough transactional demand. Under this paradigm, most, if not all, blockspace economic shifts come from top-down changes, or enshrined changes as early missteps get fixed along the way. You can consider most opcode gas cost specification changes, which generally observe low per-transaction impact but do shift some blockspace demand as transactions get summed up. For example, <a href="https://eips.ethereum.org/EIPS/eip-2929">EIP-2929</a>
 was proposed as a response to the 2016 Shanghai DOS attack.

## **Post 2020: Transactional blossoming**
<p></p>
<br>
DeFi growth, kickstarted during DeFi summer in 2020, led to the first major shift in blockspace economics. As blocks became composed of valuable transactions, it led to the commoditization of so-called MEV bots and an increase in their blockspace footprint. <a href="https://arxiv.org/pdf/1904.05234.pdf">Part of Phillip Daian's and co's vision</a> became reality.
<p></p>
<br>
Since DeFi protocols handle valuable assets, and their value can be derived through a large variety of pricing functions, it has created a gas price lower bound which is partly linked to DeFi biggest assets’ volatility.
Intra-domain pricing functions, which were all the rage in the early DeFi days, resulted in most forms of atomic arbitrage. Nonetheless, these were soon to be mostly deprecated by cross-domain pricing functions as a more efficient trading mechanism. Both forms of arbitrage were to have their own arc at the blockspace level, as we shall see.
<p></p>
<br>
Atomic arbitrage has interesting properties. Assuming a well-designed smart contract (i.e., no rugging risks, a strong assumption empirically), the losses are capped to the costs of failed transactions. Conversely, gains are whatever is left once gas has been paid. As such, given the few dimensions where an edge could be extracted, this led to tremendous gas optimizations. Even though private mempool services such as Taichi existed, price discovery was happening in the mempool, with so-called priority gas auctions (PGA). This led to notable blockchain pollution with failed transactions consuming a significant chunk of blockspace (the cheaper the blockspace, the merrier).
<p></p>
<br>
<center>
<figure>
  <img src="/blog_post/ethereum-blockspace-an-alternative-future/Blockchain Pollution.png" class="padded" />
  <figcaption>PGA Bots on Polygon</figcaption>
</figure>
</center><br>

Then, flashbots happened with the release of MEV-Geth. This led to a demand-side shift as you could indirectly run these PGAs, blindly, off-chain within Flashbots servers and only have the winning, non-conflicting bundles land on-chain, saving you failed transactions' gas fees. Over time, Atomic Arbitragers cannibalized each other by reducing their margins to insignificant levels. The last blow for non-tail atomic arbitrage came from cross-domain, statistical strategies. Their properties ranged from more efficient transactional costs (you need one transaction per arb, not two) to simply a bigger edge allowing for a bigger subsidy.
<p></p>
<br>
Since Paris hard-fork, a.k.a The Merge, and the subsequent rise of integrated searcher-builder, cross-domain arbitrage bots are all the rage. Again, MEV-Boost implementation of proposer-builder separation allowed statistical arbitrage firms to win a significant amount of blocks, exhibiting a positive correlation with some assets' volatility. Furthermore, MEV-Boost and subsequent iterations such as Ultra Sound Relay’s Optimistic Relaying introduced another marginal shift in blockspace consumption by making block building more efficient, thereby incentivizing an efficient consumption of blockspace.
<p></p>
<br>
Consequently, all the focus today is on how to enshrine PBS and reduce centralization tendencies around a few integrated searcher-builders. While the former seems interesting as it will allow for new protocol designs, the latter and other MEV-related focuses seem misguided as the ground is shaking below our feet, a ground shift pointing towards less of Miner Extractable Value and more of Other Extractable Value.
<p></p>
<br>
<center>
<figure>
  <img src="/blog_post/ethereum-blockspace-an-alternative-future/Depiction of EV shift.png" class="padded" />
  <figcaption>Crude Depiction of Extractable Value Split per Category</figcaption>
</figure>
</center><br>

# **An Alternative Future for Ethereum Blockspace**

## **MEV-Awareness**
<p></p>
<br>
From a protocol perspective, MEV is a form of leakage. Indeed, the extra subsidy that goes to the proposer is value that could have been captured by the protocol itself, and protocols have become well aware of that. Take Uniswap, for example, which is now mostly focusing on patching these leaks as put forward by <a href="https://open.spotify.com/episode/4pn7UD3LIpzCSTOZfUv8dB?si=d7a8814e169d4c78">Dan Robinson</a>.
<p></p>
<br>
Indeed, Uniswap X will allow for the de-duplication of arbitrage transactions, as market makers and users will agree on a price off-chain and just settle on-chain, thereby removing the backrunning leg. On the other hand, hooks create the ability to kick back the extracted value to any desired entity.
<p></p>
<br>
Obviously, one could envision a form of Tragedy of the Commons where every protocol avoids leaking value in form of subsidies to the base layer’s proposer. But the main point here is that protocols are actively working on reducing the value that gets leaked, and as such, the transactional costs on Ethereum.

## **Zero-Knowledge Encryption**
<p></p>
<br>
While Zero-Knowledge Encryption can allow for entirely new design spaces, it has perverse incentives on blockspace usage. Indeed, given the verifiability of Zero-Knowledge Proofs (ZkPs), it is in the application interest to delay verification thereby amortizing costs over user operations.
<p></p>
<br>
As such, by using smart protocol design, the act of verifying as little as possible will mean cheaper transactions and lower blockspace usage. Furthermore, the impact on blockspace demand could be further compounded if existing protocols were to refactor their codebase to use this technology, thus lowering their block footprint.

## **A Rollup Centric Future**
<p></p>
<br>
Finally, cheaper transaction costs and trustless rollups (😉zk😉) will continue pushing user activity away from Ethereum blockspace. EIP proposals such as 4844 are already working on cementing a rollup centric future by altering the blockspace ecosystem with the introduction of a new transaction type.
<p></p>
<br>
Ultimately, a rollup centric future means that Ethereum execution layer block will mostly see KZG commitments to some BLOBs of data that lives (or that lived) on the beacon chain in addition to state transition proof verifications. Most of the value generating transactions will emanate from the rollups posting these BLOBs and not Ethereum itself.
<p></p>
<br>
<center>
<figure>
  <img src="/blog_post/ethereum-blockspace-an-alternative-future/Alternative Future block.png" class="padded" />
  <figcaption>An Alternative Ethereum Block</figcaption>
</figure>
</center><br>

# **Future Implications**
<p></p>
<br>
Scaling via rollups might have seemed remote a couple of years ago, but objectively today we’re somewhat closer to that vision. As such, value generating transactions have started migrating away from Ethereum execution layer. Transactional costs are thus reduced, as rollups show less urgency in inclusion, notably by handling their latency requirements upstream.
<p></p>
<br>
For protocols that remain on Ethereum, they’ve become MEV-aware. As such, there shouldn’t be as much MEV to extract for proposers going forward as the capturing process will slowly shift to within each application boundaries.
<p></p>
<br>
Obviously, extrapolating this dynamic going forward is done ceteris paribus. It is hard to predict how will the future look like, even more when faced with many overlapping moving parts.
<p></p>
<br>
Nonetheless, it does seem like zk-encryption is criminally under-explored. There is little conversation around the potential bottlenecks introduced in the transactional pipeline. If one takes the view that ZKPs usage will explode in the future, the proving parallels to HFT are overwhelming. Both processes can get quite complex and are computationally intensive with a winner-take-all outcome. As such, whoever will be able to prove as fast and cheaply as possible will get the proving job and reap its rewards.
<p></p>
<br>
  
Hence, it puzzles me why we see no conversation on proving markets from the MEV crowd. Such market would be a natural step to lower costs for the end-user, as we’ve become well aware with the success of other MEV marketplaces. For now, most ZK-protocol proving is “gated”, with only whitelisted addresses being able to act as provers. Nonetheless, if no research gets front-loaded on proving markets, we might very well replace Miner Extractable Value with **Prover Extractable Value**.
  
<p></p>
<br>
<center>
<figure>
  <img src="/blog_post/ethereum-blockspace-an-alternative-future/gated-function.png" class="padded" />
  <figcaption>Hypothetical ungated proving function for Axiom's block hash verifications</figcaption>
</figure>
</center><br>

To conclude, we should strive to avoid placing too much emphasis on the recent past by looking forward. Failing to do so might prove costly in any sectors, and specially in high-tech.
<p></p>
<br>
We’re facing a cambrian explosion of blockchain innovation. The resulting impact is non-linear as these innovations interact with each other. Hence, looking forward with any sort of predictive power is almost impossible, let alone if carrying extensive bias during that exercise.
To convey my point, let me take you through some Malaysian adventure, one last time.
<p></p>
<br>
As I sail through the Tahan River, I am amazed by the beautiful arch of Neram Trees exerting a natural cover over the river. It is puzzling to see the trees defy gravity. Perplexed, I therefore ask my guide what would make these break, “wind, thunderstorm or water”, he retorts. As such, you do not sail under tropical storms, or its thereafter, where the water level has increased dramatically. What would you think if they only mitigated water-level risks by not sailing when water runs high, but continued sailing under heavy wind and loud thunderstorm? Indeed, let’s avoid doing so.
<p></p>
<br>
<center>
<figure>
  <img src="/blog_post/ethereum-blockspace-an-alternative-future/Taman Negara Arched Tree.jpeg" class="padded" />
  <figcaption>Taman Negara</figcaption>
</figure>
</center><br>
</div>