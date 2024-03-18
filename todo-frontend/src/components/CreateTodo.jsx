import { useState } from "react"

export function CreateTodo(){
    //react query
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");

    return(
        <div>
            <input id="Title" type="text" placeholder="Title" 
            onChange={function(e){
                setTitle(e.target.value);
            }}
            style={{padding:10, margin:10}}/> <br />

            <input id="description" type="text" placeholder="Description" 
            onChange={function(e){
                setDescription(e.target.value);
            }}
            style={{padding:10, margin:10}}/> <br />

            <button onClick={()=>{
                fetch("http://localhost:3000/todo" ,{
                    method: "POST",
                    body: JSON.stringify({
                        title: Title,
                        description: Description
                        // title: document.getElementById("Title").innerHTML,   
                        // description: document.getElementById("description").innerHTML,    
                        //This is a ugly way to write  Rather we can use something called react querys
                    }), 
                    headers: {
                        "content-type": "application/json" 
                    }
                })
            }}>Add a Todo</button>
        </div>
    )
}