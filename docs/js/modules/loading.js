

switch (document.readyState) {
    case "loading":
      console.log("The document is still loading.")
      break;
    case "interactive":


      console.log("The document has finished loading. We can now access the DOM elements. But sub-resources such as images, stylesheets and frames are still loading.")
    case "complete":
      // The page is fully loaded.
      console.log("The first CSS rule is: ");
      break;
  };
