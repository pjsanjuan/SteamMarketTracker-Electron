import request from 'request-promise'
import cheerio from 'cheerio'

export function formResponse(steamUrl) {
    return new Promise((resolve, reject) => {
        var response = {
            error: null,
            imageUrl: '',
            data: ''
        }
        formJsonUrl(steamUrl)
            .then((jsonUrl) => {
                return request(jsonUrl)
            })
            .then((data) => {
                response.data = data
                return fetchImage(steamUrl)
            })
            .then((imageUrl) => {
                response.imageUrl = imageUrl
                resolve(response)
            })
            .catch(() => {
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
    })
}

//return a promise that resolves an image URL
function fetchImage(steamUrl) {
    return new Promise((resolve, reject) => {
        request(steamUrl).then((html) => {
            var $ = cheerio.load(html)
            resolve($('div.market_listing_largeimage img').attr('src'))
        }).catch((err) => {
            reject(err)
        })
    })
}