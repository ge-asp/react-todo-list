import React from "react";
function TodoTable(props) {
    return <>
         <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todos.map((todo, index) => 
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.description}</td>
                                <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
    </>;

}

export default TodoTable;