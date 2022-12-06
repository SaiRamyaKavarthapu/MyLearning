export default function longest(string) {
    let str = string.split(" ");
    console.log("string",str)
    let longest = 0;
    let word = null;
    for (let i = 0; i < str.length ; i++) {
        console.log("string length",str.length)
        if (longest < str[i].length) {
            console.log("logest",longest)
            longest = str[i].length;
            console.log("logestout",longest)
            word = str[i];
            console.log("word",word)
        }
    }
    return word;
}
console.log(longest("hello world123 kkkkkkkkkkkk"))