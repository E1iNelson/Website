function updatePageWithRSS(rssFeedURL) {
  fetch(rssFeedURL)
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
      let items = data.querySelectorAll("item");
      let html = "<li><a href='/index.xml'>Blog: </a></li>";
      let limit = 5;
      for (let i = 0; i < limit && i < items.length; i++) {
        let item = items[i];
        let title = item.querySelector("title").textContent;
        let link = item.querySelector("link").textContent;
        html += `<li><a id="Rss" href="${link}">${title} </a></li>`;
      }
      document.querySelector("#rss-feed").innerHTML = html;
    });
}

updatePageWithRSS("/index.xml");
