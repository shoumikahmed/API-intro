const user = { id: 11, name: 'gorib amir', job: 'actor' }
const stringified = JSON.stringify(user)
// console.log(user)
// console.log(stringified)

const shop = {
    name: 'alia store',
    address: 'ranbir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'alia bhat',
        profession: 'actor'
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop)

// console.log(shop)
console.log(shopStringified)
const converted = JSON.parse(shopStringified)
console.log(converted)