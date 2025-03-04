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

    /*function SetBloodSelect() {
        let s='';
        s+=`<option value="-1">-- כל הכתות --</option>`;
        for(let kita_id in kitot_data){
            s+=`<option value="${kita_id}">${kitot_data[kita_id]}</option>`;
        }
        document.getElementById('kitaSelect').innerHTML=s;
    }*/
    var blood_data=[];
    async function GetData(){
        let url="/B/blood";
        let response=await fetch(url);
        let reply=await response.json();
        console.log(reply);
        blood_data = reply.blood_info;
        showData();
        /*if (reply.msg === "ok") {
            blood_data = reply.data;  // The blood data from the backend
            showData();  // Call the function to display the data in the table
        } else {
            console.log("Error fetching data", reply);
        }*/
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
    GetData();
    //showData();





/*
    var kitot_data=[];
    var students_data=[];
    var student_to_show=[];
    function SetKitotSelect() {
        let s='';
        s+=`<option value="-1">-- כל הכתות --</option>`;
        for(let kita_id in kitot_data){
            s+=`<option value="${kita_id}">${kitot_data[kita_id]}</option>`;
        }
        document.getElementById('kitaSelect').innerHTML=s;
    }

    function filterData() {
        let kita = Number(document.getElementById('kitaSelect').value);
        let txt  =        document.getElementById('txtToFind').value;
        student_to_show = students_data.filter(std => {
            return (
                ((kita < 0) || (std.kita_id === kita))
                &&
                ((txt === "") || (std.name.includes(txt)) || (std.tz.includes(txt)) )
            )
        });
    }
    async function GetData(){
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
    GetData();
    */