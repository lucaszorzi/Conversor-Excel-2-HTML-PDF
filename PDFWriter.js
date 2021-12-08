const pdf = require("html-pdf");

class PDFWriter {
    static WritePDF (filmeName, html) {
        pdf.create(html, {}).toFile(filmeName, (err) => {});
    }
}

module.exports = PDFWriter;