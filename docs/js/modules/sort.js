function byAverageHeight(a, b){
    return a.average_height-b.average_height
}

function byName(a, b){
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1 
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
}


export default {byAverageHeight, byName}