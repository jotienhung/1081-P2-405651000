const db = require("../utils/database");

const Demo = class Demo {
    constructor(ID, name, link) {
        this.ID = ID;
        this.name = name;
        this.link = link;
    }

    static fetchAll() {
        return db.execute("SELECT * FROM demo");
    }
};

// testing
// const test = async () => {
//     console.log(await Demo.fetchAll());
// };
// test();

module.exports = Demo;
