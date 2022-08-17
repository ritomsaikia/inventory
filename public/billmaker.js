let count = 1;

function addPurchaseRow() {
    count++;
    console.log('hello')
    let form = document.getElementById("stuff");
    let row = document.createElement('div');
    row.classList.add('purchase');
    let hor = document.createElement('div');
    hor.classList.add('horizontal-input-row');
    let fl = document.createElement('div');
    fl.classList.add('input-field');
    let label = document.createElement('label');
    label.attributes['for'] = 'id' + count.toString();
    label.innerHTML = "Product ID";
    let quantity = document.createElement('input');
    quantity.type = 'number';
    quantity.placeholder = 'Product ID';
    quantity.classList.add('id');
    quantity.quantity = 'id' + count.toString();
    fl.append(label);
    fl.append(quantity);
    hor.append(fl);
    fl = document.createElement('div');
    fl.classList.add('input-field');
    label = document.createElement('label');
    label.attributes['for'] = 'discount' + count.toString();
    label.innerHTML = "Discount";
    quantity = document.createElement('input');
    quantity.type = 'number';
    quantity.placeholder = 'Enter Discount';
    quantity.classList.add('discount');
    quantity.quantity = 'discount' + count.toString();
    fl.append(label);
    fl.append(quantity);
    hor.append(fl);
    fl = document.createElement('div');
    fl.classList.add('input-field');
    label = document.createElement('label');
    label.attributes['for'] = 'quantity' + count.toString();
    label.innerHTML = "Quantity";
    quantity = document.createElement('input');
    quantity.type = 'text';
    quantity.placeholder = 'Enter quantity';
    quantity.classList.add('quantity');
    quantity.quantity = 'quantity' + count.toString();
    fl.append(label);
    fl.append(quantity);
    hor.append(fl);
    row.append(hor);
    form.appendChild(row);
    console.log('created');
}

function verifyAll() {
    const ids = document.forms[0].ids;
    const discounts = document.forms[0].discounts;
    const quantities = document.forms[0].quantities;
    const parents = document.getElementsByClassName('horizontal-input-row');
    let idString = "";
    let dstring = "";
    let qstring = ""; 
    for (let i = 0; i < parents.length; i++) {
        const id = parents[i].getElementsByClassName('id');
        const discount = parents[i].getElementsByClassName('discount');
        const quantity = parents[i].getElementsByClassName('quantity');
        idString += ";" + id.value;
        dstring += ";" + discount.value;
        qstring += ";" + quantity.value;
    }
    ids.value = idString;
    discounts.value = dstring;
    quantities.value = qstring;
    document.forms[0].submit();
}