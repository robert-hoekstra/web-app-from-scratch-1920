export default function renderCards(myJson) {
    localStorage.setItem("data", JSON.stringify(myJson));
    console.log("renderCards function: ", myJson);
    // Declare variables
    let categories = Object.keys(myJson);
    let selection = document.getElementById("categorySelect");
    categories.forEach(element => {
      selection.insertAdjacentHTML(
        "beforeend",
        `<option value="${element}"> ${element}</option>`
      );
    });
  }