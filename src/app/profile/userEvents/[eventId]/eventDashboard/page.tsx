const page = ({ params }: { params: { eventId: String } }) => {
  return <div>page of event : {params.eventId}</div>;
};

export default page;
