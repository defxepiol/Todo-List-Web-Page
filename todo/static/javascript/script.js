var num_of_tasks = 0;

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

        num_of_tasks += 1;

        var btn_done = document.createElement("button");
        btn_done.type = "button";
        btn_done.innerText="✓";
        btn_done.className="btn btn-success"
        btn_done.setAttribute("onclick","javascript:task_done(this);");

        var btn_remove = document.createElement("button");
        btn_remove.type = "button";
        btn_remove.innerText="✗";
        btn_remove.className="btn btn-danger"
        btn_remove.setAttribute("onclick","javascript:task_delete(this);")

        const node = document.createElement("p");
        node.append(document.createTextNode(res));
        const div_item = document.createElement("div");
        div_item.id="task:".concat(num_of_tasks.toString());
        var lst = document.getElementById("task_div");
        div_item.append(node);
        div_item.appendChild(btn_done);
        div_item.appendChild(btn_remove);
        lst.append(div_item);

        document.getElementById("task").value = "";
    }
}


function task_done(e)
{
    if (e.innerText == "✓")
    {
        var fond = document.getElementById(e.parentElement.id);
        fond.style.opacity = "0.3";
        fond.style.backgroundColor = "rgb(0,196,96)";
        var butn = document.getElementById(e.parentElement.id);
        e.innerText ="Uncheck";
    }

    else if(e.innerText == "Uncheck")
    {
        var fond = document.getElementById(e.parentElement.id);
        fond.style.opacity = "1";
        fond.style.backgroundColor = null;
        var butn = document.getElementById(e.parentElement.id);
        e.innerText ="✓";
    }



    
}

function task_delete(e)
{
    var fond = document.getElementById(e.parentElement.id);
    fond.remove();
}
    
