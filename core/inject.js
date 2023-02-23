async function addbookmark(partid){return await fetch("https://ficbook.net/bookmarks/create", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://ficbook.net/readfic/5124023",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "partId="+partid+"&isFromAllParts=false&fragment=1",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});}
async function deletebookmark(partid){return await fetch("https://ficbook.net/bookmarks/delete", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://ficbook.net/home/bookmarks",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "id="+partid,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});}
async function getlist(){return await fetch("https://ficbook.net/bookmarks/list", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://ficbook.net/home/bookmarks",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "p=1",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});}

