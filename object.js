//object
//its a collection of key - value pairs
let profiledata={
    name:"rohan8504",
    bio:"azaaadi",
    followers:2345,
    following:1235,
    posts:14,
    mutuals:["vinod","binod","ramesh",{v:[{name:"hello"}]}]
}
console.log(profiledata.mutuals[3].v[0].name)