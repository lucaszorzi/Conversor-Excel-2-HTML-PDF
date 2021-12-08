class Processor {
    static Process(data) {
        var splitLine = data.split("\r\n");
        var rows = [];

        splitLine.forEach(row => {
            rows.push(row.split(","));
        })

        return (rows);
    }
}

module.exports = Processor;