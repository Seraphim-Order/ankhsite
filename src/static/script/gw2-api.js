const callGW2Api = async (url) => {
    const response = await fetch(url);
    const respJson = await response.json();

    return respJson;
}

const convertCoins = (coins) => {
    const copper = Math.trunc(coins % 100);
    const silver = Math.trunc(coins / 100 % 100);
    const gold = Math.trunc(coins / 10000);

    return {
        gold: gold,
        silver: silver,
        copper: copper
    }
}

const getTPPrice = async (itemId) => {
    const url = 'https://api.guildwars2.com/v2/commerce/prices/' + itemId;

    const item = await callGW2Api(url);

    const buyPrice = convertCoins(item.buys.unit_price);
    const sellPrice = convertCoins(item.sells.unit_price);

    return {
        buyPrice: buyPrice,
        sellPrice: sellPrice
    }
}

const renderItem = async (itemId, renderTarget) => {
    const url = 'https://api.guildwars2.com/v2/items/' + itemId;
  
    const item = await callGW2Api(url);
  
    const tag = document.getElementById(renderTarget);
    tag.innerHTML = `<img class="gw2-icon-small" src="${item.icon}" /><b class="text-gw2-rarity-${item.rarity.toLowerCase()}">${item.name}</b>`
}

const renderTPSellPrice = async (itemId, renderTarget) => {
    const {sellPrice} = await getTPPrice(itemId);

    const tag = document.getElementById(renderTarget);

    if (sellPrice.gold > 0) {
        tag.innerHTML = `${sellPrice.gold}<img class="gw2-icon-coin" src="/static/img/coin_gold.png" /> ${sellPrice.silver}<img class="gw2-icon-coin" src="/static/img/coin_silver.png" /> ${sellPrice.copper}<img class="gw2-icon-coin" src="/static/img/coin_copper.png" />`
    } else if (sellPrice.silver > 0) {
        tag.innerHTML = `${sellPrice.silver}<img class="gw2-icon-coin" src="/static/img/coin_silver.png" /> ${sellPrice.copper}<img class="gw2-icon-coin" src="/static/img/coin_copper.png" />`
    } else {
        tag.innerHTML = `${sellPrice.copper}<img class="gw2-icon-coin" src="/static/img/coin_copper.png" />`
    }
}

const renderTPBuyPrice = async (itemId, renderTarget) => {
    const {buyPrice} = await getTPPrice(itemId);

    const tag = document.getElementById(renderTarget);

    if (buyPrice.gold > 0) {
        tag.innerHTML = `${buyPrice.gold}<img class="gw2-icon-coin" src="/static/img/coin_gold.png" /> ${buyPrice.silver}<img class="gw2-icon-coin" src="/static/img/coin_silver.png" /> ${buyPrice.copper}<img class="gw2-icon-coin" src="/static/img/coin_copper.png" />`
    } else if (buyPrice.silver > 0) {
        tag.innerHTML = `${buyPrice.silver}<img class="gw2-icon-coin" src="/static/img/coin_silver.png" /> ${buyPrice.copper}<img class="gw2-icon-coin" src="/static/img/coin_copper.png" />`
    } else {
        tag.innerHTML = `${buyPrice.copper}<img class="gw2-icon-coin" src="/static/img/coin_copper.png" />`
    }
}