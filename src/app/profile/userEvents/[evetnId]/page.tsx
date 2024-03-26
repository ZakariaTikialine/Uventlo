

export default function page({params,}: {params: {evetnId: any}}) {
    return (
        <h1>Details about event {params.evetnId}</h1>
    )
}