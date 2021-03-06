// source: http://www.javascriptkit.com/javatutors/arraysort2.shtml
function byAverageHeight(a, b){
    return a.average_height-b.average_height
}

function byName(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    
    return 0;
}

export default {byAverageHeight, byName}