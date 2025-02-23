async function GetData(){
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
    GetData();