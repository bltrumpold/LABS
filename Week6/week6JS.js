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
    
    var para =document.querySelector("#p1");
    
    var para2 = document.querySelector("#p4"); 
   
    
        var dataBaseArr = [];
        var dataArr =[];
        var softArr = [];
        var webArr = [];
    
   
    lDataBase.addEventListener("click",listdata);
    
    function listdata()
    {
        
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status ==200)
            {
                
                dataBaseArr = xhttp.responseText
            }
        }
        xhttp.open("GET", "http://ict.neit.edu/evanrense/salaries.php",true)
        xhttp.send();
        
        
    }
        
    
    
    
    
    
    /*fetch("http://ict.neit.edu/evanrense/salaries.php")
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
        
        

    
//--------------------------------------------------------------

    function callback(dataBaseArr)
    {
            var newlist = [];
        
            for (var i=0; i<dataBaseArr.length;i++)
            {
                if (dataBaseArr[i].salary > dataBaseArr[i].salary )
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
        
    //para.innerHTML = filtered;
    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
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
        
    para.innerHTML = filtered;
        
        
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
        
        
        
            para1.innerHTML=filtered;
        
        
        
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
        
    para1.innerHTML=filtered; 
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
        
    para1.innerHTML=filtered;
    } 
        
        
    //}); // then end */
    
}