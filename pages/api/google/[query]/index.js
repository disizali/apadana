const { google } = require("googleapis");
const customsearch = google.customsearch("v1");
export default (req, res) => {
  const { query } = req.query;
  customsearch.cse
    .list({
      auth: "AIzaSyBHB2mAkaEAjKI7rv_Khl7hSPjx0KrXoro",
      cx: "015248437002989725512:pujuc7nsiyc",
      q: query
    })
    .then(result => {
      return result.data;
    })
    .then(result => {
      const { queries } = result;
      const page = (queries.request || [])[0] || {};
      return res.json(page);
    });
};
