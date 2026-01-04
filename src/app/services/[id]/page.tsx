const ServiceDetail = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  
  return (
    <div>
      <h1>Service Detail {id}</h1>
    </div>
  );
};

export default ServiceDetail;