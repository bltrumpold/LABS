window.addEventListener("load", doit)

function doit()
{
    var database = document.createElement('div');
    var webDev = document.createElement('div');
    var softDev = document.createElement('div');
    
    var fName = document.querySelector("#first");
    var lName = document.querySelector("#last");
    var highPaid = document.querySelector("#highest");
    var highAvgPaid = document.querySelector("#average");
    
    var sub = document.querySelector("#search-submit"); 
    
    var searchfName = document.querySelector("#first-name");
    var searchlName = document.querySelector("#last-name");
    
    var lDataBase = document.querySelector("#list-database-analyst");
    var lWebDev = document.querySelector("#list-web-developer");
    var lSoftWare = document.querySelector("#list-software-engineer");
    
    var output = document.querySelector("#output");
    
    var para0 = document.querySelector("#p0")
    var para = document.querySelector("#p1");
    var para1 = document.querySelector("#p2")
    var para2 = document.querySelector("#p4"); 
   
    
    var dataBaseArr = [];
    var dataArr =[];
    var softArr = [];
    var webArr = [];
    
    
    fetch("http://ict.neit.edu/evanrense/salaries.php")
    .then(function(response)
    {
        return response.json();
    })
    .then(function(myJson)
    {
        console.log(myJson);
        
        var dataBaseArr = [];
        var dataArr =[];
        var softArr = [];
        var webArr = [];
        
        dataBaseArr = myJson; 
        
        
  // set first innerhtml equal to highest paid person
       
//------------------------------------------------------         
    sub.addEventListener("click", search)
        
    function search()
    {
        function callback(dataBaseArr)
        {
            var newlist = [];
        
            for (var i=0; i<dataBaseArr.length;i++)
            {
                if (searchfName.value === dataBaseArr[i].name.first )
                {
                    if (searchlName.value === dataBaseArr[i].name.last)
                    {
                        newlist.push(dataBaseArr[i]);
                    }
                }
            }
        return newlist
    }        
    
    function filter(dataBaseArr,callback)
    {
       return callback(dataBaseArr);
    }
        
    var filtered = filter(dataBaseArr,callback)
    console.log(filtered)
        
    filtered.forEach(function (index, b){
    para0.innerHTML += index.name.first
    para0.innerHTML += " "
    para0.innerHTML += index.name.last
    para0.innerHTML += " "
    para0.innerHTML += index.salary})
                     
                     
                     
    }
        
        
   //------------------------------------------------------      
      
    lDataBase.addEventListener("click",listdata);
    lWebDev.addEventListener("click",listweb);
    lSoftWare.addEventListener("click",listsoft); 
//------------------------------------------------------   
    function listdata()
    {
        function callback(dataBaseArr)
        {
            var newlist = [];
        
            for (var i=0; i<dataBaseArr.length;i++)
            {
                if (dataBaseArr[i].jobTitle === "Database Analyst")
                {
                    newlist.push(dataBaseArr[i]);
                }
            }
        return newlist
        }            
    
        function filter(dataBaseArr,callback)
        {
            return callback(dataBaseArr);
        }
        
        var filtered = filter(dataBaseArr,callback)
        console.log(filtered)   
        
       
        filtered.forEach(function (index, b){
        para1.innerHTML += index.name.first
        para1.innerHTML += " "
        para1.innerHTML +=   index.name.last
        para1.innerHTML += " "
        para1.innerHTML += index.salary
        para1.appendChild(document.createElement("br"))})
           
    } //list data end 
    
        
 //------------------------------------------------------        
    function listweb()
    {
        function callback(dataBaseArr)
        {
            var newlist = [];
        
            for (var i=0; i<dataBaseArr.length;i++)
            {
                if (dataBaseArr[i].jobTitle === "Web Developer")
                {
                    newlist.push(dataBaseArr[i]);
                }
            }
        return newlist
    }        
    
    function filter(dataBaseArr,callback)
    {
       return callback(dataBaseArr);
    }
        
    var filtered = filter(dataBaseArr,callback)
    console.log(filtered)
        
        filtered.forEach(function (index, b){
        para1.innerHTML += index.name.first
        para1.innerHTML += " "
        para1.innerHTML +=   index.name.last
        para1.innerHTML += " "
        para1.innerHTML += index.salary
        para1.appendChild(document.createElement("br"))})
        
        
    
    }
//------------------------------------------------------ 
    
    function listsoft()
    {
        function callback(dataBaseArr)
        {
            var newlist = [];
        
            for (var i=0; i<dataBaseArr.length;i++)
            {
                if (dataBaseArr[i].jobTitle === "Software Developer")
                {
                    newlist.push(dataBaseArr[i]);
                }
            }
        return newlist
    }        
    
    function filter(dataBaseArr,callback)
    {
       return callback(dataBaseArr);
    }
        
    var filtered = filter(dataBaseArr,callback)
    console.log(filtered)
        
        filtered.forEach(function (index, b){
        para1.innerHTML += index.name.first
        para1.innerHTML += " "
        para1.innerHTML +=   index.name.last
        para1.innerHTML += " "
        para1.innerHTML += index.salary
        para1.appendChild(document.createElement("br"))})
        
        
    } 
        
        
    }); // then end 
    
}