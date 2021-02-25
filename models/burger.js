const orm=require('../config/orm');
const burger={
        selectAll:async function (table)
        {
            try
            {
          const result=await orm.selectAll(table);
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
           
            const result=await orm.insertOne(table,oneValue,twoValue);
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
           
            const result=await orm.updateOne(table,whereValue,idValue);
            return(result);
            }
            catch
            {
                    console.log("error");
            }
        }
};
//burger.selectAll("burger");
//burger.insertOne("burger","mogo",true);
//burger.updateOne("burger",false,6);
module.exports=burger;