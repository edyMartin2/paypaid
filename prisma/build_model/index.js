const fs = require('fs');
const path = require('path');

const read_node = (node) => {
    let map_model = fs.readFileSync(path.resolve(`prisma/models/${node}.model.pipeline`), 'utf8');
    return map_model || []
}

const make_schema = (model) => {
    fs.writeFile('./prisma/schema.prisma', String(model), function (err) {
        if (err) return console.log(err);
        console.log('Schema generated successfull');
    });
}

const BuildModel = () => {
    let map_model = fs.readFileSync(path.resolve('prisma/models/config.json'), 'utf8');
    let maping_model = JSON.parse(map_model || {})
    let data_pushing = ""
    for (var i in maping_model) {
        data_pushing = data_pushing + read_node(i) + '\n'
    }
    make_schema(data_pushing)
}

BuildModel()