const search = () => {
  const input = document.getElementById("search-item");
  const inputToUpperCase = input.value.toUpperCase()
  const collection = document.getElementsByClassName("product-list")[0];
  const items = document.getElementsByClassName("product");

  for (let i = 0; i < items.length; i++) {
    let item = items[i].getElementsByTagName("h2")[0];
    let itemText = item.innerText

    if(itemText.toUpperCase().indexOf(inputToUpperCase) > -1){
      items[i].style.display = ""
    }else{
      items[i].style.display = "none"
    }
    console.log(itemText);
  }

  // console.log(collection, input);
};

search();
