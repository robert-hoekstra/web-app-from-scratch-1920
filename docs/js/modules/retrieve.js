export default function retrieveNavigation() {
    fetch("https://swapi.co/api/")
      .then(response => {
        return response.json();
      })
      .then(myJson => renderCards(myJson))
      // .then(renderCards => removeData(renderCards))
      .catch(err => {
        console.log(err);
      });
  }