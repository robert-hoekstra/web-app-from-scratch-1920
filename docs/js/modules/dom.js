function Remove() { // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    let htmlParent = document.getElementById("collection");
    while (htmlParent.firstChild) {
      htmlParent.removeChild(htmlParent.firstChild);
    }
  }
  export default {Remove}