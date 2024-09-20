function Demo() {
    return <div>
        <MyButton color="green">Approve</MyButton>
        <MyButton color="red">Reject</MyButton>
        <MyButton color="red" content={"Reject 2"}/>
    </div>
}

type Color = 'green' | 'red' | 'blue'
type MyButtonProps = {
    color: Color
    children: React.ReactNode
}
function MyButton({ color, children }: MyButtonProps) {
    return <button color={color}>
        {children}
    </button>
}

function Label({ color }: { color: Color }) {
    return <p color={color}>Label</p>;
    
}

function greeting(name: string) {
    console.log("Hi, " + name.toLowerCase())
}
greeting("Alice")

function getName(): string {
    return "Alice"
}
console.log(getName())
const getName2 = (): string => {
    return "Bob"
}
console.log(getName2())

export default Demo
