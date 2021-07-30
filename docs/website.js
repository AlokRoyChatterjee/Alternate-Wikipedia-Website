var infoinput = document.querySelector(".search-form");
infoinput.addEventListener("submit", searchinfo);

function searchinfo(e) {
  e.preventDefault();
  let query = document.querySelector(".search-input").value;
  query = query.trim();
  infosearch(query);
}

function infosearch(query) {
  fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&origin=*&srlimit=10&utf8=&format=json&srsearch=${query}`)
    .then((info) => info.json())
    .then((articleinfo) => {
      showinfo(articleinfo.query.search);
    })
   
}

function showinfo(info) {
  const infoonpage = document.querySelector(".results");
  infoonpage.innerHTML = "";
  info.forEach((article) => {
    const url = encodeURI(`https://en.wikipedia.org/wiki/${article.title}`);
    infoonpage.insertAdjacentHTML(
      "beforeend",
      `<div>
      <h3>
        <a href="${url}" target="_blank">${article.title}</a>
      </h3>
      <h2>${article.snippet}</h2><br>
      <a href="${url}" target="_blank" rel="noopener">${url}</a>
    </div>`
    );
  });
}
