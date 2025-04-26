import TicketNum from "./ticketNum";

export default function Ticket({ ticket }) {
    return (<>
        {ticket.map((n , idx) => {
            return <TicketNum key={idx} num={n} />
        })}
    </>)
}