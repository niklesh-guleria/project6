
    let sno = 1;

    function additems() {
        const item_name = document.querySelector("#item-name");
        const item_price = document.querySelector("#item-price");
        const item_qty = document.querySelector("#item-qty");
        const item_total = document.querySelector("#item-total");

        if (item_name.value != "" && item_price.value && item_qty.value != "") {
            const tr = document.createElement("tr");
            const td_sno = document.createElement("td");
            td_sno.innerText = sno;
            sno++;
            const td_name = document.createElement("td");
            td_name.innerText = item_name.value;
            const td_price = document.createElement("td");
            td_price.innerText = item_price.value; // Fixed this line
            const td_qty = document.createElement("td");
            td_qty.innerText = item_qty.value;
            const td_total = document.createElement("td");
            td_total.innerText = Number(item_price.value) * Number(item_qty.value);
            tr.append(td_sno);
            tr.append(td_name);
            tr.append(td_price);
            tr.append(td_qty);
            tr.append(td_total);

            const tbody = document.querySelector("#tbody");
            tbody.append(tr);
        } else {
            alert("Please fill in all the fields");
        }
    }

    function puttotal() {
        const item_price = document.querySelector("#item-price");
        const item_qty = document.querySelector("#item-qty");
        const item_total = document.querySelector("#item-total");
        const total = Number(item_price.value) * Number(item_qty.value);
        item_total.value = total;
    }