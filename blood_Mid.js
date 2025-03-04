const htmlspecialchars = require("htmlspecialchars");

async function AddBloodPressure(req, res,next) {
    const BPCheckTime=new Date()+180;
    let name  = req.body.name;
    let high  = Number(req.body.high);
    let low   = Number(req.body.low);
    let pulse = Number(req.body.pulse);
    let date  = BPCheckTime;

    let Query="INSERT INTO `blood_info` ";
    Query += " ( `name`, `high`, `low`, `pulse`, `date`) ";
    Query += " VALUES ";
    Query += ` ('${name}','${high}','${low}','${pulse}','${date}') `;

    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        req.success=true;
        req.insertId=rows.insertId;
    } catch (err) {
        req.success=false;
        console.log(err);
    }
    next();
}

//export {
    //AddStudent,
//}

async function ReadBloodPressure(req,res,next){
    //let search_str=req.body.search_txt===undefined?"":req.body.search_txt;
    let Query = ` SELECT * FROM blood_info `;
    /*if(search_str !== ""){ // עוזר לעשות חיפוש במה שקיים
        Query+=` WHERE (name LIKE '%${search_str}%') `;
        Query+=` OR (tz LIKE '%${search_str}%') `;
        Query+=` OR (kita_id LIKE '%${search_str}%') `;
    }*/
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        for(let idx in rows){
            rows[idx].name=htmlspecialchars(rows[idx].name);
            //rows[idx].high=htmlspecialchars(rows[idx].high);
            //rows[idx].low=htmlspecialchars(rows[idx].low);
            //rows[idx].pulse=htmlspecialchars(rows[idx].pulse);
            rows[idx].date=htmlspecialchars(rows[idx].date);
        }
        req.success=true;
        req.blood_data=rows; //////////////////////////////////////
    } catch (err) {
        req.success=false;
        console.log(err);
    }
    next();
}

async function UpdateBloodPressure(req,res,next){
    const BPCheckTime=new Date()+180;
    let idx   = req.body.id;
    let name  = req.body.name;
    let high  = Number(req.body.high);
    let low   = Number(req.body.low);
    let pulse = Number(req.body.pulse);
    let date  = BPCheckTime;

    //let student_name     = req.body.student_name;
    let Query = ` UPDATE blood_info SET `;
    Query += ` name = '${name}' , `,
    Query += ` high = '${high}' , `,
    Query += ` low = '${low}' , `,
    Query += ` pulse = '${pulse}' , `,
    Query += ` date = '${date}' `,
    Query += ` WHERE id = ${idx} `;
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        req.success=true;
        /////////req.Last_id=rows.insertId;
        //[rows] = await promisePool.query(Query);
        //res.status(200).json({msg:"ok",data:rows});
    } catch (err) {
        req.success=false;
        console.log(err);
        //////////req.Last_id=-1;
        //return res.status(500).json({message: err});
    }
    next();
}

async function DeleteBloodPressure(req,res,next){
    let idx             = req.body.id;
    let Query = `DELETE FROM blood_info  `;
    Query += ` WHERE id = ${idx} `;
    // console.log(Query);
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        req.success=true;
        [rows] = await promisePool.query(Query);
    } catch (err) {
        req.success=false;
        console.log(err);
    }
    next();
}

module.exports={
    AddBloodPressure,
    ReadBloodPressure,
    UpdateBloodPressure,
    DeleteBloodPressure
}
