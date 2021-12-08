class Table {
    constructor(arr) {
        this.header = arr[0];   //pega a linha 1 como cabeçalho
        arr.shift();           // remove uma linha do array (a primeira)
        this.rows = arr;        //Joga o resto das linhas
    }

    get RowsCount () {
        return this.rows.length;
    }

    get ColumnsCount () {
        return this.header.length;
    }
}

module.exports = Table;