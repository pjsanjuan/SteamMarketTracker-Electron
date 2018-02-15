import request from 'request-promise'
import cheerio from 'cheerio'


function formResponse(steamUrl) {
    return {
        'imageUrl': fetchImage(steamUrl),
        'data': fetchJson(steamUrl)
    }
}

function jsonUrl(steamUrl, currency = 1) {
    var hashName = steamUrl.split('/')[6]
    var appId = steamUrl.split('/')[5]
    return `http://steamcommunity.com/market/priceoverview/?currency=${currency}&appid=${appId}&market_hash_name=${hashName}`
}

function fetchJson(steamUrl) {
    request(jsonUrl(steamUrl)).then((body) => {
        return body
    }).catch((err) => {
        return err
    })
}

function fetchImage(steamUrl) {
    request(steamUrl).then((html) => {
        var $ = cheerio.load(html)
        return $('div.market_listing_largeimage img').attr('src') //fetches the image url
    }).catch((err) => {
        return err
    })
};