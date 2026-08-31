function extractLinks(sentences) {
    let regex = /(www)\.([A-Za-z][A-Za-z0-9-]+)(\.[a-z]+)+/g;
    let matches, result = [];
    for (let s of sentences)
        while (matches = regex.exec(s))
            result.push(matches[0]);
    console.log(result.join('\n'));
}











function main(input) {
    input=input.join('');
    let arr=input.match(/www\.[a-zA-Z0-9-]+\.[a-z\.]+[a-z]{1,100}/g)
    console.log(arr.join('\n'))
 
}

