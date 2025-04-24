import { use, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Lottery() {
    let [student, setStudent] = useState([{ name: "Pratiksha", id: uuidv4(), isPresent: true }]);
    let [tempStu, setTempstu] = useState("");

    let newStu = (event) => {
        setTempstu(event.target.value)
    }

    let addStu = () => {
        setStudent((prevStu) => {
            return [...prevStu, { name: tempStu, id: uuidv4(), isPresent: false }]
        })
        setTempstu("")
    }

    let deleteStu = (id) => {
        setStudent((prevStu) => {
            return prevStu.filter((stu) => {
                return stu.id != id
            })
        })
    }

    let attendence = (id) => {
        setStudent((preStu) => {
            return preStu.map((stu) => {
                if (stu.id === id && !stu.isPresent) {
                    return { ...stu, isPresent: true }
                }
                else {
                    return { ...stu, isPresent: false }
                }
            }
            )
        })

    }
    return (
        <>
            <h1>students</h1>

            <input placeholder="enter student name" value={tempStu} onChange={newStu} />
            <br /><br />
            <button onClick={addStu}>Add</button>
            <hr />
            <ol>
                {student.map((stu) => {
                    return <li key={stu.id}> {!stu.isPresent ? <span style={{color:"green"}}>{stu.name}</span>:<span style={{color:"red"}}>{stu.name}</span>}&nbsp;&nbsp; <button onClick={() => deleteStu(stu.id)}>Delete</button>&nbsp;&nbsp;<button onClick={() => attendence(stu.id)}>Mark-Attendence</button> </li>
                })}
            </ol>
        </>
    )
}