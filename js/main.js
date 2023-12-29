const str = 'aaaaa bb aaa bb aa cc dd mm nn aa cccc';
const blackList = ['bb', 'mm'];

console.log(filterBadWord(str, blackList));

function filterBadWord(str, arr) {
    newStr = str.replace(/bb|mm/gi, '*');

    return newStr;
}