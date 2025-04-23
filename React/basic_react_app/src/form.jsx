function doSomething(event) {
event.preventDefault();
    console.log("form submitted!!")
}

export default function FormSubmit() {
    return (
        <form onSubmit={doSomething}>
            <input type="text" />
            <button >submit</button>
        </form>
    )
}