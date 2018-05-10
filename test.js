const rbx_js = require('./index.js')

const rbx = new rbx_js({
    cookie: "Cookie in here :D "
})

const rbx2 = new rbx_js({
    username: 'username',
    password: 'password'
})


rbx.login().then(()=>{
    rbx.getProductInfo(382537702).then(asset => {
       asset.buy().then(bb=>{
           console.log(`Bought ${asset.name}: ${bb}`)
           asset.deleteFromInventory().then(d=>{
               console.log(`Deleted ${asset.name} : ${d}`)
           })
       })
    })
})

rbx2.login().then( () => {
    rbx2.getGroup(3544434).then(group=>{
        var onJoin = new group.onJoinRequest(group, {interval:2000})
        onJoin.on('requests', function(joinRequests) {
            joinRequests.forEach(joinRequest=>{
                joinRequest.isBot().then(isBot=>{
                    if (isBot)  return joinRequest.decline();
                    return joinRequest.accept();
                })
            })
        })
    })
})

