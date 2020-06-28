const router = require("express").Router();
const axios = require("axios");

const BASE_URL = `${process.env.WP_REST_API_HOST}sites/${process.env.SITE_ID}/`;

router.get("/categories", async (req, res, next) => {
  axios
    .get(BASE_URL + "categories", {
      params: {
        fields: "name,slug,description",
      },
    })
    .then((response) => res.json(response.data))
    .catch((err) => {
      console.log(err);
      next(new Error(err));
    });
});

router.get("/tags", async (req, res, next) => {
  axios
    .get(BASE_URL + "tags", {
      params: {
        number: 10,
        order: "DESC",
        order_by: "count",
        fields: "name,slug",
      },
    })
    .then((response) => res.json(response.data))
    .catch((err) => {
      console.log(err);
      next(new Error(err));
    });
});

router.get("/slug", (req, res, next) => {
  const slug = req.query.slug;

  axios
    .get(BASE_URL + "posts/slug:" + slug, {
      params: {
        fields:
          "ID,title,date,content,featured_image,title,slug,author,categories",
      },
    })
    .then((response) => res.json(response.data))
    .catch((err) => {
      console.log(err);
      next(new Error(err));
    });
});

router.get("/related", (req, res, next) => {
  const id = req.query.post_id;

  axios
    .post(BASE_URL + "posts/" + id + "/related", {
      size: 3,
    })
    .then(({ data: { hits } }) => {
      axios
        .all(
          hits.map((hit) =>
            axios.get(BASE_URL + "posts/" + hit.fields.post_id, {
              params: {
                fields: "ID,title,date,featured_image,slug",
              },
            })
          )
        )
        .then(
          axios.spread((...response) =>
            res.json(
              response
                .map((resp) => resp.data)
                .sort((post1, post2) => post2.date > post1.date)
            )
          )
        );
    })
    .catch((err) => {
      console.log(err);
      next(new Error(err));
    });
});

router.get("/", (req, res, next) => {
  const queryParams = req.query || {};
  const params = {
    number: 25,
    fields: "ID,title,date,excerpt,featured_image,title,slug,author,categories",
    ...queryParams,
  };
  console.log(queryParams, params);
  axios
    .get(BASE_URL + "posts", {
      params,
    })
    .then((response) => res.json(response.data))
    .catch((err) => {
      console.log(err);
      next(new Error(err));
    });
});

module.exports = router;
