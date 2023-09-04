// Projects data.

const projects = [
	{
		id: 0,
		title: 'Hop',
		category: 'Bridge',
		img: require('@/assets/images/projects/hop.png'),
		url: 'https://app.hop.exchange/#/send?token=ETH&destNetwork=base'
	},
	{
		id: 0,
		title: 'Basebook',
		category: 'Web3 Social',
		img: require('@/assets/images/projects/basebook.png'),
		url: 'https://basebook.xyz/'
	},
	{
		id: 0,
		title: 'Uniswap',
		category: 'DEX',
		img: require('@/assets/images/projects/uniswap.png'),
		url: 'https://app.uniswap.org/#/swap?chain=base'
	},
	{
		id: 0,
		title: 'Balancer',
		category: 'DEX',
		img: require('@/assets/images/projects/balancer.png'),
		url: 'https://app.balancer.fi/#/base'
	},
	{
		id: 0,
		title: 'OpenSea',
		category: 'NFT Marketplace',
		img: require('@/assets/images/projects/opensea.png'),
		url: 'https://opensea.io/'
	},
	{
		id: 0,
		title: 'Beefy',
		category: 'Yield Farming',
		img: require('@/assets/images/projects/beefy.png'),
		url: 'https://app.beefy.com/'
	},
	{
		id: 0,
		title: 'Basebook ID',
		category: 'Identity',
		img: require('@/assets/images/projects/basebook-id.png'),
		url: 'https://id.basebook.xyz'
	},
	{
		id: 0,
		title: 'Compound',
		category: 'Lending',
		img: require('@/assets/images/projects/compound.png'),
		url: 'https://app.compound.finance/markets?market=usdbc-basemainnet'
	},
	{
		id: 0,
		title: 'Mint.fun',
		category: 'NFT Launchpad',
		img: require('@/assets/images/projects/mint-fun.jpg'),
		url: 'https://mint.fun'
	},
	{
		id: 0,
		title: 'Bungee',
		category: 'Bridge Aggregator',
		img: require('@/assets/images/projects/bungee.png'),
		url: 'https://www.bungee.exchange/'
	},
	{
		id: 0,
		title: 'Send2name',
		category: 'Send tokens',
		img: require('@/assets/images/projects/send2name.png'),
		url: 'https://send2.name'
	},
	{
		id: 0,
		title: 'Friend.tech',
		category: 'Web3 Social',
		img: require('@/assets/images/projects/friend-tech.jpg'),
		url: 'https://www.friend.tech/'
	},
	{
		id: 0,
		title: 'DODO',
		category: 'DEX',
		img: require('@/assets/images/projects/dodo.png'),
		url: 'https://app.dodoex.io/?network=base&from=ETH&to=USDC'
	},
	{
		id: 0,
		title: 'Harvest Finance',
		category: 'Yield Farming',
		img: require('@/assets/images/projects/harvest.png'),
		url: 'https://app.harvest.finance/?chain=base'
	},
	{
		id: 0,
		title: 'Moonwell',
		category: 'Lending',
		img: require('@/assets/images/projects/moonwell.png'),
		url: 'https://moonwell.fi/markets'
	},
	{
		id: 0,
		title: 'Maverick',
		category: 'Yield Farming',
		img: require('@/assets/images/projects/maverick.jpg'),
		url: 'https://app.mav.xyz/pools?chain=8453'
	},
	{
		id: 0,
		title: 'Stargate',
		category: 'Bridge',
		img: require('@/assets/images/projects/stargate.jpg'),
		url: 'https://stargate.finance/transfer'
	},
	{
		id: 0,
		title: 'Odos',
		category: 'DEX',
		img: require('@/assets/images/projects/odos.jpg'),
		url: 'https://app.odos.xyz/'
	},
	{
		id: 0,
		title: 'Rhino.fi',
		category: 'Bridge',
		img: require('@/assets/images/projects/rhino.jpg'),
		url: 'https://app.rhino.fi/bridge?token=ETH&chainOut=BASE'
	},
	{
		id: 0,
		title: 'Sablier',
		category: 'Send tokens',
		img: require('@/assets/images/projects/sablier.jpg'),
		url: 'https://app.sablier.com/'
	},
	{
		id: 0,
		title: 'Sushi',
		category: 'DEX',
		img: require('@/assets/images/projects/sushi.png'),
		url: 'https://www.sushi.com/swap?chainId=8453'
	},
	{
		id: 0,
		title: 'FriendMEX',
		category: 'DEX',
		img: require('@/assets/images/projects/friendmex.png'),
		url: 'https://friendmex.com/'
	},
	{
		id: 0,
		title: 'Velocimeter',
		category: 'DEX',
		img: require('@/assets/images/projects/velocimeter.png'),
		url: 'https://base.velocimeter.xyz/'
	},
	{
		id: 0,
		title: 'Firebird',
		category: 'DEX aggregator',
		img: require('@/assets/images/projects/firebird.jpg'),
		url: 'https://app.firebird.finance/swap'
	},
	{
		id: 0,
		title: 'BaseSwap',
		category: 'DEX',
		img: require('@/assets/images/projects/baseswap.jpg'),
		url: 'https://baseswap.fi/swap'
	},
	{
		id: 0,
		title: 'CULTUREMEDIA',
		category: 'NFT Marketplace',
		img: require('@/assets/images/projects/culturemedia.png'),
		url: 'https://www.culturemedia.app/'
	},
	{
		id: 0,
		title: 'Maskie',
		category: 'NFT',
		img: require('@/assets/images/projects/maskie.png'),
		url: 'https://maskie.xyz/'
	},
	{
		id: 0,
		title: 'Base Name Service',
		category: 'Identity',
		img: require('@/assets/images/projects/bns.png'),
		url: 'https://basename.app'
	},
	{
		id: 0,
		title: '1inch',
		category: 'DEX Aggregator',
		img: require('@/assets/images/projects/1inch.png'),
		url: 'https://app.1inch.io/#/8453/simple/swap/ETH/WETH'
	},
	{
		id: 0,
		title: 'Jumper',
		category: 'Bridge Aggregator',
		img: require('@/assets/images/projects/jumper.jpg'),
		url: 'https://jumper.exchange/?toChain=8453'
	},
	{
		id: 0,
		title: 'Aragon',
		category: 'DAO tooling',
		img: require('@/assets/images/projects/aragon.png'),
		url: 'https://aragon.org/'
	},
	{
		id: 0,
		title: 'Unlock Protocol',
		category: 'Subscriptions',
		img: require('@/assets/images/projects/unlock.jpg'),
		url: 'https://unlock-protocol.com/'
	},
	{
		id: 0,
		title: 'MES Protocol',
		category: 'DEX',
		img: require('@/assets/images/projects/mes.png'),
		url: 'https://www.mesprotocol.com/'
	},
	{
		id: 0,
		title: 'Base Punk',
		category: 'NFT',
		img: require('@/assets/images/projects/basepunk.png'),
		url: 'https://zora.co/collect/base:0xe04519804db18433bd7f79ea857fda4e2fa1fe32'
	},
	{
		id: 0,
		title: 'Fren Game',
		category: 'Gaming',
		img: require('@/assets/images/projects/frengame.png'),
		url: 'https://frengame.tech/'
	}

	,
	{
		id: 0,
		title: 'Symbiosis',
		category: 'DEX',
		img: require('@/assets/images/projects/symbiosis.png'),
		url: 'https://app.symbiosis.finance/swap?chainIn=Base&tokenIn=ETH'
	}
	,
	{
		id: 0,
		title: 'Lorak',
		category: 'Gaming',
		img: require('@/assets/images/projects/lorak.jpg'),
		url: 'https://landtorn.com/lorak'
	}
	,
	{
		id: 0,
		title: 'Synthswap',
		category: 'DEX',
		img: require('@/assets/images/projects/synthswap.jpg'),
		url: 'https://www.synthswap.io/exchange/besttrade'
	}
	,
	{
		id: 0,
		title: 'Slice',
		category: 'NFT',
		img: require('@/assets/images/projects/slice.jpg'),
		url: 'https://slice.so/slicer'
	}
	,
	{
		id: 0,
		title: 'Indelible Labs',
		category: 'NFT',
		img: require('@/assets/images/projects/indelible-labs.jpg'),
		url: 'https://app.indelible.xyz/feed'
	}
	,
	{
		id: 0,
		title: 'Collectify',
		category: 'Launchpad',
		img: require('@/assets/images/projects/collectify.png'),
		url: 'https://launchpad.collectify.app/#/'
	}
	,
	{
		id: 0,
		title: 'Horiza',
		category: 'DEX',
		img: require('@/assets/images/projects/horiza.jpg'),
		url: 'https://app.horiza.io/'
	}
	,
	{
		id: 0,
		title: 'L2Coin',
		category: 'Yield Farming',
		img: require('@/assets/images/projects/l2coin.jpg'),
		url: 'https://l2coin.io/home'
	}
	,
	{
		id: 0,
		title: 'Swapline.com',
		category: 'DEX',
		img: require('@/assets/images/projects/swapline.jpg'),
		url: 'https://app.swapline.com/swap'
	}
	,
	{
		id: 0,
		title: 'Clique',
		category: 'DAO',
		img: require('@/assets/images/projects/myclique.png'),
		url: 'https://www.myclique.io/daos'
	}
	,
	{
		id: 0,
		title: 'LuckyBid',
		category: 'Launchpad',
		img: require('@/assets/images/projects/luckybid.png'),
		url: 'https://app.luckybid.xyz/'
	}
];

export default projects;
