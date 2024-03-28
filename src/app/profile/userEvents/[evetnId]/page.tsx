

export default function page({params,}: {params: {evetnId: any}}) {
    return (
        <h1>{params.evetnId}</h1>
    )
}