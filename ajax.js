function ajax(){
         var xhttp=new XMLHttpRequest();
         xhttp.onreadystatechange=function()
         {
           if(this.readyState==4 && this.status==200)
           {
             var response=JSON.parse(this.responseText);
            //  console.log(response);
            var jgrocery=response.grocery;
            console.log(jgrocery);
            var output=[];
            for(var i=0;i<jgrocery.length;i++){
                for(var key in jgrocery[i]){
                  if(output.indexOf(key)== -1){
                    output.push(key);
                  }
                }
        
           }
           var table=document.createElement("table");
           var tr=table.insertRow(-1);
           for (var i = 0; i < output.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = output[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < jgrocery.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < output.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = jgrocery[i][output[j]];
            }
        }
         
        var divShowData = document.getElementById('showData');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
        document.querySelector("#loader").setAttribute("disabled", "true");
      }
    }

         xhttp.open("GET","grocery.json",true)
         xhttp.send();
        }
        function chkItem(obj) {
          if(obj.style.textDecoration == ""){
            
              obj.style.color = blur;
          }else{
              obj.style.textDecoration = "";
              obj.style.color = "black";
          } 
      }                       