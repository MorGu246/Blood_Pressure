/*async function GetData(){
        let s="";
        const BPCheckTime=new Date()+180;
            s+="<tr>";
            s+=`<td>ישראל כהן</td>`;
            s+=`<td>120</td>`;
            s+=`<td>80</td>`;
            s+=`<td>96</td>`;
            s+=`<td>${BPCheckTime}</td>`;
            s+="</tr>";
        document.getElementById("tableBody").innerHTML=s;
    }
    GetData();*/

    var blood_data=[];
    //var blood_info_to_show=[];

    async function GetData(){
        let url="/";
        let response=await fetch(url);
        let reply=await response.json();
        blood_data = reply;//.blood_info;
        //showData();
    }

    function showData(){
        //filterData();
        let s="";
        for(let row of blood_data){
            s+="<tr>";
            s+=`<td>${row.name}</td>`;
            s+=`<td>${row.high}</td>`;
            s+=`<td>${row.low}</td>`;
            s+=`<td>${row.pulse}</td>`;
            s+=`<td>${row.date}</td>`;
            s+="</tr>";
        }
        document.getElementById("tableBody").innerHTML=s;
    }
    await GetData();
    showData();

/*async function GetData(){
        let url="/S/studentslist";
        let response=await fetch(url);
        let reply=await response.json();
        students_data = reply.students;
        kitot_data = reply.kitot;
        showData();
        SetKitotSelect();
    }
    function showData(){
        filterData();
        let s="";
        console.log(student_to_show);
        
        for(let row of student_to_show){
            s+="<tr>";
            s+=`<td>${row.name}</td>`;
            s+=`<td>${row.tz}</td>`;
            s+=`<td>${kitot_data[row.kita_id]}</td>`;
            s+="</tr>";
        }
        document.getElementById("data_table").innerHTML=s;
    }
    GetData();*/
/////////////////////////////////////////////////////////////////////////////////////
    /*let AllItems=[];
    async function getAllItems(){
        let url="/item";
        let response=await fetch(url);
        let data=await response.json();
        AllItems=data;
        console.log("data was entered");
    }
    function showItemsAsTable(){
        let html="";
        //let idx1;
        for(let idx in AllItems){
        let row=AllItems[idx];
        html+="<tr>";
        html+=`<td><button onclick="showEditItem(${idx},'${row.name}','${row.kamut}');">edit</button></td>`;
        html+=`<td>${row.name}</td>`;
        html+=`<td>${row.kamut}</td>`;
        html+=`<td><button onclick="removeItem(${idx});">delete</button></td>`;
        html+="</tr>";
        }
        document.getElementById("data_table_body").innerHTML=html;
    }

    await getAllItems();
    console.log(AllItems);
    showItemsAsTable();*/