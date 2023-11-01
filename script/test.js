var id = function (x) {
    return document.getElementById(x);
};
var input = id('input');
var addBtn = id('add_btn');
var listContainer = id('item_list_container');
var itemList = localStorage.itemList ? JSON.parse(localStorage.itemList) : [];
var renderList = function () {
    listContainer.innerHTML = "";
    for (var i = itemList.length - 1; i > 0; i--) {
        listContainer.innerHTML += "\n            <div class=\"list-item\">\n                <div class=\"item-name\">\n                    ".concat(itemList[i], "\n                </div>\n                <div class=\"item-actions\">\n                    <button onclick=\"editItem(").concat(i, ")\">Edit</button>\n                    <button onclick=\"deleteItem(").concat(i, ")\">Delete</button>\n                </div>\n            </div>\n        ");
    }
};
var addEvent = function () {
    var value = input.value;
    if (value.length > 0) {
        itemList.push(value);
        input.value = "";
    }
    else {
        alert("Please specify a name for your task");
    }
    localStorage.itemList = JSON.stringify(itemList);
    renderList();
};
var deleteItem = function (index) {
    var item = itemList[index];
    if (item != undefined) {
        itemList.splice(index, 1);
        localStorage.itemList = JSON.stringify(itemList);
        renderList();
    }
    else {
        alert("Item has already been deleted.");
    }
};
var editItem = function (index) {
    var item = itemList[index];
    if (item != undefined) {
        var ask = prompt("Change \"".concat(item, "\" to : "));
        if (ask.length > 0) {
            itemList[index] = ask;
            localStorage.itemList = JSON.stringify(itemList);
            renderList();
        }
    }
    else {
        alert("Item not available in list.");
    }
};
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    addEvent();
});
renderList();
