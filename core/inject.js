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
}).then((x)=>x.json()).then((w)=>{return w});}
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
}).then((x)=>x.json()).then((w)=>{return w});}
async function login(login,password){return await fetch("https://ficbook.net/login_check", {
    "headers": {
      "accept": "*/*",
      "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://ficbook.net/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "login="+login+"&password="+password+"&remember=on",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function sendinfotogithub(target, data, token){
    fetch("https://api.github.com/repos/mochalkaperduba/biggovno/contents/cache/"+target, {
  body: "{\"message\":\"add data to cache from runner\",\"committer\":{\"name\":\"Алиска Губкина\",\"email\":\"alickagubkina@gmail.com\"},\"content\":\""+btoa(encodeURIComponent(data))+"\"}",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: "Bearer "+token,
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Github-Api-Version": "2022-11-28"
  },
  method: "PUT"
})
}
async function q(loginf,pass,token, targets){
    await login(loginf,pass);
    for(let i = 0;i<targets.length;i++){
        try{
        let addr = await addbookmark(targets[i]);
        if(addr.result==false){
            throw 1;
        }
        let raw = await getlist();
        sendinfotogithub(targets[i],JSON.stringify(raw),token);
        await deletebookmark(raw.data.items[0].id);
        console.log((i+1)+" from "+targets.length+" processed!");
        await sleep(500);
        }
        catch{console.log("Falied to extract!"); sendinfotogithub(targets[i],"fall",token);}
    }
}
