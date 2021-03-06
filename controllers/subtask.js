module.exports = {
  pagination: (req, res) => {
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);
    // Here we compute the LIMIT parameter for the query offset, row_count
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    let query = `SELECT user_id, COUNT(*) as numRows FROM tb_user`;
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      console.log(result);
      let numRows = result[0].numRows;
    //   let numPages = Math.ceil(numRows / limit);
    //   console.log(numPages,numRows,startIndex,endIndex);

      if (endIndex < numRows) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      let query = `SELECT * FROM tb_user LIMIT ${startIndex}, ${limit}`;
      try {
        db.query(query, (err, result) => {
          results.result = result;
          //console.log(results);
          res.send(results);
        });
      } catch (e) {
        if (e) {
          res.status(500).send(e);
        }
      }
    });
  },

  someid: (req, res) => {
    let query = `SELECT * FROM tb_user WHERE user_id IN (1, 5, 7)`;
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send(result);
    });
  },
  greatAdmin: (req, res) => {
    let query = `SELECT * FROM tb_user t
      WHERE EXISTS (
          SELECT 1
          FROM tb_user t2
          WHERE t2.admin_id = t.admin_id
          GROUP BY t2.admin_id
          HAVING COUNT(*) >= 3
          )`;
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send(result);
    });
  },
};
