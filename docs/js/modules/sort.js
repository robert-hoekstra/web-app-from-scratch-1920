// source: http://www.javascriptkit.com/javatutors/arraysort2.shtml
function byAverageHeight(a, b){
    return a.average_height-b.average_height
}

function byName(a, b){
    if(a.name == true){
    let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()  // Javascript maakt onderscheid tussen A en a. 
    if (nameA < nameB)
        return -1 
    if (nameA > nameB)
        return 1
    return 0 
    } else {
        console.log("no names found")
    }
}

export default {byAverageHeight, byName}