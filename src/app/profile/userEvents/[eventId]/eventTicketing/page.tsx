const page = ({ params }: { params: { eventId: String } }) => {
    return <div>page of teckiting : {params.eventId}</div>;
  };


export default page;