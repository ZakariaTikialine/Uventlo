const page = ({ params }: { params: { evetnId: String } }) => {
  return <div>page of event : {params.evetnId}</div>;
};

export default page;
