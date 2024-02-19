var items = [
  { nama: "Item 1", harga: 100 },
  { nama: "Item 2", harga: 150 },
  { nama: "Item 3", harga: 200 },
];

function tampilkanItem() {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<h2>Daftar Item</h2>";

  for (var i = 0; i < items.length; i++) {
    var itemInfo = document.createElement("p");
    itemInfo.textContent =
      "Nama: " + items[i].nama + ", Harga: " + items[i].harga;
    resultDiv.appendChild(itemInfo);
  }

  resultDiv.classList.remove("hidden");
  resultDiv.classList.add("visible");
}

function cariItem() {
  var resultDiv = document.getElementById("result");
  var namaCari = prompt("Masukkan nama item yang dicari:");

  var foundItem = items.find(function (item) {
    return item.nama.toLowerCase() === namaCari.toLowerCase();
  });

  resultDiv.innerHTML = "<h2>Pencarian Item</h2>";

  if (foundItem) {
    var itemInfo = document.createElement("p");
    itemInfo.textContent =
      "Nama: " + foundItem.nama + ", Harga: " + foundItem.harga;
    resultDiv.appendChild(itemInfo);
  } else {
    resultDiv.innerHTML +=
      "<p>Item dengan nama '" + namaCari + "' tidak ditemukan.</p>";
  }

  resultDiv.classList.remove("hidden");
  resultDiv.classList.add("visible");
}
