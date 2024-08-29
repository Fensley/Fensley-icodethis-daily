class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }
  put(endpoint, body) {
    return this.#send("put", endpoint, body);
  }
  post(endpoint, body) {
    return this.#send("post", endpoint, body);
  }
  delete(endpoint, body) {
    return this.#send("delete", endpoint, body);
  }
  #send(method, endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}

const select = document.querySelector("select");
select.addEventListener("change", (e) => {
  const result = document.querySelector("#weather-result");

  const value = e.target.value;

  const api = new FetchWrapper(
    `https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/`
  );

  api.get(`${value}.json`).then((data) => {
    const tem = data.current.temperature;
    result.textContent = `It's ${tem} degrees celsius.`;
    result.style.fontSize = "20px";
    result.style.color = "red";
  });
});
