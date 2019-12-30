const Demo = require("../models/demoModel");

exports.getDemo = (req, res, next) => {
    Demo.fetchAll().then(([rows]) => {
        // console.log(JSON.stringify(rows));
        // res.json(rows);
        res.render("dashboard", {data: rows, title: "Dashboard"});
    });
};