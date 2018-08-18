let object = {
    name: "edo",
    age : 23
};
for (const key in object) {
    console.log("key => ", key);   
    console.log("value => ", object[key]);  
}