let x = document.getElementById("users");
let y = document.querySelectorAll("td");
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1")
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
        // 2. Create a variable to store HTML table headers
        let li = `<thead><tr><th>ID</th><th>Symbol</th><th>Name</th></tr></thead>`;
        // 3. Loop through each data and add a table row
        json.forEach((user) => {
            li += `<tr>
                <td>${user.id}</td>
                <td>${user.symbol} </td>
                <td>${user.name}</td>
            </tr>`;
        });
        // 4. DOM Display result
        x.innerHTML = li;
        let n = 10;
        x.rows[0].style.background = "transparent";
        x.rows[3].cells[1].style.backgroundColor = "green";
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

