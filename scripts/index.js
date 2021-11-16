$(document).ready(
    function(){
        var db=openDatabase('tasks','1.0','Task Database',10*1024*1024)

        db.transaction(function(tx){
            tx.executeSql(
    'create table if not exists task(taskno integer primary key asc,name text,description text)')
        })
    }
)