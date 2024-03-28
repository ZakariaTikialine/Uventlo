import Link from "next/link";

export default function userEventsPage() {
    const eventsIds = [1, 2, 3, 4, 5]
    return (
        <div>
            <h1>Management</h1>
            <h3>All Projects : </h3>
            <ul>
                {
                    eventsIds.map((v, i) => (
                        <li key={i}>
                            <Link href={'/profile/userEvents/' + v}>
                                Event {v}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}