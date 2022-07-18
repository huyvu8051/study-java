
var push = (event, path, query) => {

    event.preventDefault();


    var finalPath = path;

    if(query !== null && query !== undefined){
        var urlSearchParams = new URLSearchParams(query).toString()
        finalPath += "?" + urlSearchParams;
    }

    // console.log(finalPath, query);

    window.history.pushState("object or string", "Title", finalPath)
}

export default push;