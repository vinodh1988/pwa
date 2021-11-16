$(document).ready(
    function(){
        var db=openDatabase('tasks','1.0','Task Database',10*1024*1024)

        db.transaction(function(tx){
            tx.executeSql(
    'create table if not exists task(taskno integer primary key asc,name text,description text)')
        })

        $('#store').click(function(){
            let task=$('#task').val()
            let description=$('#description').val()

            if(task==undefined || description == undefined || task.length<5 || description.length<8)
              alert("please fill the fields properly")

           else
           {

               db.transaction(function(tx){
     tx.executeSql('insert into task(name,description) values(?,?)',[task,description])
     $('#task').val("")
     $('#description').val("")
     $('#close').click()
               })
           }
        })
    }
)