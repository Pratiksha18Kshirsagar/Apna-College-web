import { useState } from "react"


export default function Form({ addNewComment }) {
    let [formData, setformData] = useState({ fullName: "", Remark: "", Rating: "" });

    function formDefault(event) {
        event.preventDefault();
        addNewComment(formData);
        setformData({ fullName: "", Remark: "", Rating: "" });

    }

    function inputChangeHandler(event) {
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setformData((currData) => {
            currData[fieldName] = newValue
            return { ...currData }
        })
    }

    return (
        <>
           
            <form onSubmit={formDefault}>
                <label htmlFor="fullName">FullName: </label>
                <input onChange={inputChangeHandler} value={formData.fullName} type="text" id="fullName" name="fullName" placeholder="Enter FullName!" />
                <label htmlFor="Remark">  Remark: </label>
                <input onChange={inputChangeHandler} value={formData.Remark} type="text" id="UserName" name="Remark" placeholder="Enter  Remark!" />
                <label htmlFor="Rating">Rating: </label>
                <input onChange={inputChangeHandler} value={formData.Rating} type="number" id="Rating" name="Rating" min={1} max={5} />
                <button>Add-Comment</button>
            </form>
        </>
    )
}