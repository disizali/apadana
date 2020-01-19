const { google } = require("googleapis");
const customsearch = google.customsearch("v1");
q = "خرید";
customsearch.cse
  .list({
    auth: "AIzaSyBHB2mAkaEAjKI7rv_Khl7hSPjx0KrXoro",
    cx: "015248437002989725512:pujuc7nsiyc",
    q
  })
  .then(result => result.data)
  .then(result => {
    const { queries, items, searchInformation } = result;
    const page = (queries.request || [])[0] || {};
    const previousPage = (queries.previousPage || [])[0] || {};
    const nextPage = (queries.nextPage || [])[0] || {};
    const data = {
      q,
      totalResults: page.totalResults,
      count: page.count,
      startIndex: page.startIndex,
      nextPage: nextPage.startIndex,
      previousPage: previousPage.startIndex,
      time: searchInformation.searchTime,
      items: items.map(o => ({
        link: o.link,
        title: o.title,
        snippet: o.snippet,
        img: (((o.pagemap || {}).cse_image || {})[0] || {}).src
      }))
    };
    // res.status(200).send(result);
    // res.status(200).send(data);
    console.log(data);
    console.log(page.totalResults);
  })
  .catch(err => {
    console.log(err);
  });
