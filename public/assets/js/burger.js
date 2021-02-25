
       $(function(){
           $("#burger").on("submit",function(event){
            event.preventDefault();
            var burger = {
                burgername:$("#burgername").val()
              };
           $.ajax('/api/burger',{
               type:"POST",
               data:burger
           }).then(
               function()
               {
               console.log("inserted new burger");
                location.reload();
           }
           );
        });
        $(".check").on("click",function(event){
            event.preventDefault();
            const value=$(this).data("id");
            console.log(value);
           $.ajax('/api/burger/'+value,{
               type:"PUT",
           }).then(
               function()
               {
               console.log("updated burger");
                location.reload();
           }
           );
         })
    }); 