import Link from "next/link";

export default function eventId({ params } : { params: { evetnId: string } }) {
    return (
        <div>
            <h1>Dashboard</h1>
            <h3>Management of Project : {params.evetnId}</h3>
            <Link href={"/profile/userEvents/" + params.evetnId + "/eventDashboard"}>Features of {params.evetnId}</Link>
        </div>
    );
}