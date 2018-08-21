window.addEventListener("load", doit)

function doit()
{
    var database = document.createElement('div');
    var webDev = document.createElement('div');
    var softDev = document.createElement('div');
    
    var fName = document.querySelector("#first");
    
    var lName = document.querySelector("#last");
    
    var highPaid = document.querySelector("#highest");
    
    var highAvgPaid = document.querySelector("#average")
    
    //var dataArr[];
    //var softArr[]; 
    //var webArr[];
    
    var people = "http://ict.neit.edu/evanrense/salaries.php";
    
    fetch(people)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(myJson)
    {
        console.log(myJson);
    });
}