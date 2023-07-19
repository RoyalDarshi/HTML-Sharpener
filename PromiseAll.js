let curTime = new Date();
let posts=[];
var lastActiveTime="" + curTime.getHours() + ":" + curTime.getMinutes() + ":" + curTime.getSeconds();
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActiveTime = "" + curTime.getHours() + ":" + curTime.getMinutes() + ":" + curTime.getSeconds();
            //console.log(lastActiveTime)
            resolve(lastActiveTime);
        },1000)
    })
}
function showPost() {
    return new Promise((resolve, reject) => {
        console.log(posts);
    })
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        },1000)
    })
}

function deletePromis() {
    return new Promise((resolve, reject) => {
        let post = posts.pop()
        resolve(post)
    })
}
createPost({ title: 'POST1' }).then(updateLastUserActivityTime).then(showPost);
console.log(lastActiveTime)
createPost({ title: 'POST2' }).then(updateLastUserActivityTime).then(showPost);
deletePromis().then(updateLastUserActivityTime).then(showPost);