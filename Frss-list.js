function updatePageWithRSS(rssFeedURL) {
    fetch(rssFeedURL)
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            let items = data.querySelectorAll("item");
            let html = "";
            for (let item of items) {
                let title = item.querySelector("title").textContent;
                let link = item.querySelector("link").textContent;
                html += `<li><a href="${link}">${title}</a></li>`;
            }
            document.querySelector("#Frss-feed").innerHTML = html;
        });
}

updatePageWithRSS("/index.xml");
