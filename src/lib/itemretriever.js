var axios = require('axios')
var cheerio = require('cheerio')

export default function getItemObject(steamUrl) {
    return new Promise((resolve, reject) => {
        var itemObject = {
            error: null,
            imageUrl: '',
            data: ''
        }
        formJsonUrl(steamUrl)
            .then((jsonUrl) => {
                return axios.get(jsonUrl)
            })
            .then((response) => {
                itemObject.data = response.data
                return fetchImage(steamUrl)
            })
            .then((imageUrl) => {
                itemObject.imageUrl = imageUrl
                resolve(itemObject)
            })
            .catch((error) => {
                reject(new Error('Data could not fetched'))
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
        axios.get(steamUrl).then((response) => {
            var $ = cheerio.load(response.data)
            resolve($('div.market_listing_largeimage img').attr('src'))
        }).catch((err) => {
            reject(err)
        })
    })
};