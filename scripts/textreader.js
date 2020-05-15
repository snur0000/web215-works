//calls populatePage
populatePage();
//function
function populatePage(){
    var allImportedText = "";
    //http request
    var xhrequest = new XMLHttpRequest();
    xhrequest.onreadystatechange = function()
    {
      if(this.readyState == 4 && this. status == 200)
      {
        //typicall action to be peformed when doc is ready
      allImportedText = xhrequest.responseText;
      //splits data
      //aListOfRecords is an array
      //aListOfRecords[0] gets the first word, must split


      var aListOfRecords = allImportedText.split("\n");
    //console.log(allImportedText);


      var menuItems = "";

            for(var i = 0; i < aListOfRecords.length - 1; i++)
            {
            var currentRecord = aListOfRecords[i];
            console.log(currentRecord);
            var aListOfFields = currentRecord.split("||");
            console.log(i);

            var firstRecord = aListOfFields[0];
            menuItems +=
            '<a href = "#'  + firstRecord + '">&lt;' + firstRecord + '&gt;</a> &#x2219;';
            console.log(firstRecord);
          }
    document.getElementById("alltagsmenu").innerHTML = menuItems;
    var mainHTML = "<br>";

          for(var i = 0; i < aListOfRecords.length - 1; i++)
          {
            var currentRecord = aListOfRecords[i];
            console.log(currentRecord);
          var aListOfFields = currentRecord.split("||");
          console.log(i);

          var tagName = aListOfFields[0];
          var tagDescription = aListOfFields[1];
          var tagRelationship = aListOfFields[2];
          var tagExample = aListOfFields[3];
          var backToTop = aListOfFields[4];

mainHTML+=
'<article><a  name ="' + tagName + '"/><h3>&lt;' + tagName + "&gt;</h3><section><h4>"
 + tagDescription  +'<br>' + tagRelationship+ '</section><div>' + tagExample + '</h4><a href = "#"><h5>' + backToTop +'</h5></a>' +
 '</div></article>'  ;



  }
    document.getElementById("main").innerHTML = mainHTML;


    } // if ready state
};

    xhrequest.open("GET", "includes/html_tags.data",true);
    xhrequest.send();

//calls populateMenu
//populateMenu();

//function
function populateMenu(){
  var menuHTML = "*** ||";
  for(var i = 0; i <= 15; i++){

  menuHTML
  }
  document.getElementById('alltagsmenu').innerHTML = menuHTML + "***";

}
}
