const { google } = require("googleapis");
const customsearch = google.customsearch("v1");
import { sequelize as db, Sequelize } from "../../../../models";
const { Key } = db.models;
const { Op } = Sequelize;
import { HOST } from "../../../../src/config";
export default async (req, res) => {
  if (HOST.endsWith(req.headers.host)) {
    const { query } = req.query;
    const activeKey = await Key.findOne({
      where: { active: 1, used: { [Op.lt]: 100 } }
    });
    customsearch.cse
      .list({
        auth: activeKey.token,
        cx: activeKey.searchEngine,
        q: query
      })
      .then(async result => {
        await activeKey.update({ used: activeKey.used + 1 });
        return result.data;
      })
      .then(result => {
        const { queries } = result;
        const page = (queries.request || [])[0] || {};
        return res.json(page);
      });
  } else {
    return res.status(400).send("permission error");
  }
};
