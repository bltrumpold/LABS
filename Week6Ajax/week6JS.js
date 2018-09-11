//  ToDO-highlight highest paid avg in green and use local storage
window.addEventListener("load", doit) 
 
function doit()
{
    var database = document.createElement('div');
    var webDev = document.createElement('div');
    var softDev = document.createElement('div');
    

    
    var sub = document.querySelector("#search-submit"); 
    
    var searchfName = document.querySelector("#first-name");
    var searchlName = document.querySelector("#last-name");
    
    var lDataBase = document.querySelector("#list-database-analyst");
    var lWebDev = document.querySelector("#list-web-developer");
    var lSoftWare = document.querySelector("#list-software-engineer");
    
    var output = document.querySelector("#output");
    
    var para0 = document.querySelector("#p0")
    var para1 = document.querySelector("#p2")

   
    
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
        
        var softArr = [];
        var webArr = [];
        
        dataBaseArr = myJson; 
        
// fill in database analyst below  ---------------------------------------
        
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
        
var dataArr = []
dataArr = filtered
        
var biggestNum = 0
var fName
var lName

for (var i=0; i < dataArr.length; i++)
{
    if (dataArr[i].salary > biggestNum)
    {
        biggestNum = dataArr[i].salary
        fName = dataArr[i].name.first
        lName  = dataArr[i].name.last
    }
            
            
}
 var fNameD = document.querySelector("#FnameData")
 var lNameD = document.querySelector("#LnameData")
var DataS = document.querySelector("#DataS")
        
fNameD.innerHTML += fName
lNameD.innerHTML += lName
DataS.innerHTML += biggestNum;
//-----------------------------------------------------------       
function webDev()
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
    
    var webArr = []
    webArr = filtered
    
    var biggestNum = 0
    var webFname
    var webLname
    
    for (var i = 0; i < webArr.length; i++)
    {
        if (webArr[i].salary > biggestNum)
        {
            biggestNum = webArr[i].salary
            webFname = webArr[i].name.first
            webLname = webArr[i].name.last
        }
    }
    
    var pWebF = document.querySelector("#FNameW")
    var pWebL = document.querySelector("#LNameW")
    var pWebS = document.querySelector("#WebS")
    
    pWebF.innerHTML += webFname
    pWebL.innerHTML += webLname
    pWebS.innerHTML += biggestNum
}

webDev()    
         
//------------------------------------------------------  
        
function SoftEng()
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
    
    var SoftArr = []
    softArr = filtered
    
    var biggestNum = 0
    var softFname
    var softlname
    
    for (var i = 0; i < softArr.length; i++)
    {
        if (softArr[i].salary > biggestNum)
        {
            biggestNum = softArr[i].salary
            softFname = softArr[i].name.first
            softlname = softArr[i].name.last
        }
    }
    
    var total
    for (var i = 0; i < softArr.length; i++)
    {
        total += softArr[i].salary
    }
    var avg = total / softArr.length
    
    console.log(avg)
    
    var sFname = document.querySelector("#FNameS")
    var sLname = document.querySelector("#LNameS")
    var sSalary = document.querySelector("#SoftS")
    
    sFname.innerHTML += softFname
    sLname.innerHTML += softlname
    sSalary.innerHTML += biggestNum
    
    
    
    
}
SoftEng()
        
function highAvg()
{
    
}
highAvg()
        
//---------------------------------------------------------
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