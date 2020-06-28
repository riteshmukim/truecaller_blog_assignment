const router = require("express").Router();
const axios = require("axios");

router.get("/", async (req, res, next) => {
  try {
    const response = await axios.get(
      process.env.WP_REST_API_HOST + "sites/" + process.env.SITE_ID + "/posts",
      {
        params: {
          number: 25,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
});

router.get("/categories", async (req, res, next) => {
  try {
    const response = await axios.get(
      `${process.env.WP_REST_API_HOST}sites/${process.env.SITE_ID}/categories`, {
        fields: "name,slug,description",
      }
    );

    res.json(response.data);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
});

router.get("/tags", async (req, res, next) => {
  try {
    const response = await axios.get(
      `${process.env.WP_REST_API_HOST}sites/${process.env.SITE_ID}/tags`,
      {
        params: {
          number: 10,
          order: "DESC",
          order_by: "count",
          fields: "name,slug",
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
});

module.exports = router;
