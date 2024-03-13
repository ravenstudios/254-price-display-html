$(()=>{
  console.log("jquery");
  M.AutoInit();

  $.getJSON("prices.json", function (data) {
      let html = ""
      // Table
      html += "<table class=\"striped\">"
      const sheet1 = data["Sheet1"]
      // Header Row
      html += "<tr>"
      for(let i = 0; i < sheet1[0].length; i++){
        html += "<td>" + sheet1[0][i] + "</td>"
      }
      html += "</tr>"
      // Rest of table
      for (i = 1; i < sheet1.length; i ++){
        // Prevents empty rows from showing
        if(sheet1[i].length > 0){
          html += "<tr>"
          // Rest of rows
          for(let j = 0; j < sheet1[0].length; j++){
            // Phone name broken out to prevent "$" in front of "name"
            if(j == 0){
              html += "<td>" + sheet1[i][j] + "</td>"
            }
            else if(sheet1[i][j] == "N/A"){
              // "N/A" broken out to prevent "$" in front of "N/A"
              html += "<td>" + sheet1[i][j] + "</td>"
            }
            else{
              // Show price with "$" and remove "USD" from end of string
              html += "<td>$" + sheet1[i][j].substring(0, sheet1[i][j].length - 4) + "</td>"
            }
          }
          html += "</tr>"
        }
      }

      html += "</table>"
      $("#price-table").html(html)
    });

})
