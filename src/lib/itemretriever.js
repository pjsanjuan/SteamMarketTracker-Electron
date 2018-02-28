import cheerio from 'cheerio'
import fetch from 'node-fetch'
import Item from '../../classes/Item'

//Resolves with an Item
export default function getItem(rawItem) {
	return new Promise((resolve, reject) => {
		var item = new Item()

		item.purchasePrice = rawItem.purchasePrice

		formJsonUrl(rawItem.url)
			.then((jsonUrl) => {
				return fetch(jsonUrl)
			})
			.then(res => res.json())
			.then((body) => {
				item.steamData = body
				return fetchImage(rawItem.url)
			})
			.then((imageUrl) => {
				item.imgUrl = imageUrl
				resolve(item)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

//return a promise that resulves a JSON URL
function formJsonUrl(steamUrl, currency = 1) {
	return new Promise((resolve, reject) => {
		var hashName = steamUrl.split('/')[6]
		var appId = steamUrl.split('/')[5]
		if (appId && hashName) {
			var jsonUrl = `http://steamcommunity.com/market/priceoverview/?currency=${currency}&appid=${appId}&market_hash_name=${hashName}`
			resolve(jsonUrl)
		} else {
			reject(new Error('URL could not be generated'))
		}
	});
}

//return a promise that resolves an image URL
function fetchImage(steamUrl) {
	return new Promise((resolve, reject) => {
		fetch(steamUrl)
			.then(res => res.text())
			.then((body) => {
				var $ = cheerio.load(body)
				resolve($('div.market_listing_largeimage img')
					.attr('src'))
			})
			.catch((err) => {
				reject(err)
			})
	})
};
