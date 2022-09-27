const SecurityStatus = () => {
  return (
    <div className="flex flex-col gap-10 p-4">
      <p className="text-5xl text-white">Security Status</p>
      <div className="flex gap-2 justify-between items-center">
        <p className="text-6xl text-white">LOW RISK</p>
        <img src="/img/lowrisk.png" />
      </div>
    </div>
  );
};

export default SecurityStatus;
