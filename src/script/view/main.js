import "../component/doa-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const doaListElement = document.querySelector("doa-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchDoa(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    doaListElement.doas = results;
  };

  const fallbackResult = (message) => {
    doaListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
