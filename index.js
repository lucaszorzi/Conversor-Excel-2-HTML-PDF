const Reader = require("./Reader");
const Processor = require('./Processor');
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main() {
    var data = await leitor.Read("./users.csv");
    
    var processedData = Processor.Process(data);

    var users = new Table(processedData);

    var html = await HtmlParser.Parse(users);

    escritor.Write("users.html", html);

    PDFWriter.WritePDF("users.pdf", html);
}

main();