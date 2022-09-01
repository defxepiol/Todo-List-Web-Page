function add_task_b()
{
    if(event.key === 'Enter')
    {   
        add_task();
    }
}

function add_task()
{   
    var res = document.getElementById("task").value;
    var how_many_spaces = 0;
    for(let i = 0; i < res.length; i++)
    {
        if(res[i] == " ")
        {
            how_many_spaces += 1;
        }
    }
    if(how_many_spaces == res.length || res.length == 0)
    {
        alert("You must insert a value");
    }
    else if (res.length > 0)
    {
        console.log(res);
        document.getElementById("task").value = "";
    }
}
    
