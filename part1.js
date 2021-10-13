// Part 1

/// create new get request and return Promise object
function get(url) {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        
        request.onload = function() {
            if (request.readyState !== 4) return;

            if (request.status >= 200 && request.status < 300) {
                resolve(JSON.parse(request.response));
            } else {
                reject(request.status);
            }
        };

        request.onerror = function handleError() {
            request = null;
            reject('NETWORK ERROR');
        }

        request.open('GET', url);

        request.send();
    });
}

// 1

const URL = 'http://numbersapi.com/5?json'

get(URL)
    .then(res => $('#p1-1').text(res['text']))
    .catch(err => console.log(err));

// 2

const nums = [1, 2, 3];
const $p1_2 = $('#p1-2');

get(`http://numbersapi.com/${nums}?json`)
    .then(res => nums.forEach(num => $p1_2.append($('<p>').text(res[num]))))
    .catch(err => console.log(err));

// 3

const $p1_3 = $('#p1-3');

for (let i = 1; i <= 4; i++) {
    get(URL)
        .then(res => $p1_3.append($('<p>').text(res['text'])))
        .catch(err => console.log(err));
}