let addRow = (coinsTable, coin, color) => {
    let tableBody = coinsTable.getElementsByTagName('tbody')[0];
    let  newRow = tableBody.insertRow()
    newRow.style.backgroundColor = color;
    let newCell1 = newRow.insertCell();
    newCell1.appendChild(document.createTextNode(coin.id));
    let newCell2 = newRow.insertCell();
    newCell2.appendChild(document.createTextNode(coin.symbol));
    let newCell3 = newRow.insertCell();
    newCell3.appendChild(document.createTextNode(coin.name));
}


fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1")
    .then((response) => response.json())
    .then((results) => {
        let coinsTable = document.getElementById("coins");
        results.forEach((coin, i) => {
            let color =  coin.symbol == "usdt" ? "green" : i < 5 ? "blue" : "white"
            addRow(coinsTable, coin, color);
        });
    })
    .catch((error) => {
        console.log("Error:", error)
        alert("Unable to fetch data from the server.")
    });

(function (document) {
    'use strict';

    var LightTableFilter = (function (Arr) {

        var _input;

        function _onInputEvent(e) {
            _input = e.target;
            var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
            Arr.forEach.call(tables, function (table) {
                Arr.forEach.call(table.tBodies, function (tbody) {
                    Arr.forEach.call(tbody.rows, _filter);
                });
            });
        }

        function _filter(row) {
            var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
            row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        }

        return {
            init: function () {
                var inputs = document.getElementsByClassName('light-table-filter');
                Arr.forEach.call(inputs, function (input) {
                    input.oninput = _onInputEvent;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
            LightTableFilter.init();
        }
    });

})(document);