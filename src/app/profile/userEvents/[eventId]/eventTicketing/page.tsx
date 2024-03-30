const page = () => {
    return (
      <div className="bg-[#E9E9FF] w-full h-full p-[30px] flex flex-col gap-[30px]">
        <section className="bg-white min-w-[800px] min-h-[400px] rounded-xl">
          <select title="select" className="w-[200px] h-[40px] bg-[#E9E9FF] border-[1px] border-[#724FFF] rounded-[5px]">
            <option value="1">Spectator</option>
            <option value="2">Organizer</option>
            <option value="3">Family member</option>
          </select>
          <div className="m-auto border-t-2 border-[#724FFF] w-[80%]" />
        </section>
        <section  className="bg-white min-w-[800px] min-h-[220px] rounded-xl">

        </section>
      </div>
    );
  };


export default page;