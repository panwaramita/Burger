const connection=require('./connection');
const util=require('util');
const queryAsync=util.promisify(connection.query).bind(connection);
const orm={
        selectAll:async function (table)
        {
            try
            {
            const queryString="select * from ??";
            const result=await queryAsync(queryString,[table]);
            return(result);
            }
            catch
            {
                    console.log("error");
            }
        },
        insertOne:async function (table,oneValue,twoValue)
        {
            try
            {
            const queryString="insert into ??(burger_name,devoured)values(?,?)";
            console.log(queryString);
            const result=await queryAsync(queryString,[table,oneValue,twoValue]);
            return(result);
            }
            catch
            {
                    console.log("error");
            }
        },
        updateOne:async function (table,whereValue,idValue)
        {
            try
            {
            const queryString="update ?? set devoured=? where id=?";
            console.log(queryString);
            const result=await queryAsync(queryString,[table,whereValue,idValue]);
            return(result);
            }
            catch
            {
                    console.log("error");
            }
        }
};
//orm.selectAll("burger");
//orm.insertOne("burger","choco",true);
//orm.updateOne("burger",false,1);
module.exports=orm;