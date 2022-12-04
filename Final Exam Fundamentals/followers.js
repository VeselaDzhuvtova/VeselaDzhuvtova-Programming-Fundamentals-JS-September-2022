function followers(input) {
    let follObj = {};
    let command = input.shift();
    while (command != 'Log out') {
        command = command.split(': ');
        if (command[0] == 'New follower') {
            let user = command[1];
            if (follObj.hasOwnProperty(user)) {
            } else {
                follObj[user] = {
                    likes: 0,
                    comment: 0,
                    total: 0
                }
            }
        } else if (command[0] == 'Like') {
            let user = command[1];
            let num = Number(command[2]);
            if (follObj.hasOwnProperty(user)) {
                follObj[user].likes += num;
                follObj[user].total += num;
            } else {
                follObj[user] = {
                    likes: num,
                    comment: 0,
                    total: num
                }
            }
        } else if (command[0] == 'Comment') {
            let user = command[1];
            if (follObj.hasOwnProperty(user)) {
                follObj[user].comment += 1;
                follObj[user].total += 1;
            } else {
                follObj[user] = {
                    likes: 0,
                    comment: 1,
                    total: 1
                }
            }
        } else if (command[0] == 'Blocked') {
            let user = command[1];
            if (follObj.hasOwnProperty(user)) {
                delete follObj[user]
            } else {
                console.log(`${user} doesn't exist.`);
            }
        }
        command = input.shift();
    }
    let arr = Object.entries(follObj);
    // let sortedArr = arr.sort((a, b) => b[1].likes -a[1].likes || a[0].localeCompare(b[0]));
    console.log(`${arr.length} followers`);
    for (const kvp of arr) {
        console.log(`${kvp[0]}: ${kvp[1].total}`);   
    }
}
followers
(["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"])

// (["New follower: George",
// "Like: George: 5",
// "New follower: George",
// "Log out"])