// import doas from "./doas.js";

class DataSource {
  static searchDoa(keyword) {
    return fetch(`https://doa-doa-api-ahmadramadhan.fly.dev/api/${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
