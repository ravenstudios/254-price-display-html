$(()=>{
  console.log("jquery");
  M.AutoInit();



  $.getJSON("prices.json", function (data) {
      // 'data' contains the parsed JSON content
      console.log(data);

      // Access specific properties
      var name = data.name;
      var age = data.age;
      var city = data.city;

      // Display the data on the webpage or perform other actions
      $('#result').html('Name: ' + name + '<br>Age: ' + age + '<br>City: ' + city);
    });


})
