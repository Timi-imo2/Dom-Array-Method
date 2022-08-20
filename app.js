const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user');
const doubleMoneyButton = document.getElementById('double-money');
const showOnlyMillionairesButton = document.getElementById('show-only-millionaires');
const sortByRichestButton = document.getElementById('sort-by-richest');
const calculateEntireWealthButton = document.getElementById('calculate-entire-wealth');


getRandomUser():
getRandomUser():
getRandomUser():


async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.result[0];

    const
}
