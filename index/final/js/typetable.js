let design = [
    { name: " Site Header", font-size: 42px, font-family: "Whitby or Havana" };
    { name: " Footer", font-size: 14px, font-family: "Whitby or Havana"};
    { name: " H1", font-size: 36px, font-family: "Mahalo"};
    { name: " H2", font-size: 30px, font-family: "Mahalo"};
    { name: " H3", font-size: 24px, font-family: "Mahalo"};
    { name: " Body Paragraph", font-size: 16px, font-family: "Epilogue"};
    ];
    function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
      }
      
      function generateTable(table, data) {
        for (let element of data) {
          let row = table.insertRow();
          for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
          }
        }
      }
      
      let table = document.querySelector("table");
      let data = Object.keys(design[0]);
      generateTableHead(table, data);
      generateTable(table, design);
      