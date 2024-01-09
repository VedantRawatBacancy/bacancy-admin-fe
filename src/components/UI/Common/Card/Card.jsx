const Card = ({ children }) => {
   
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden p-10 shadow-lg" >
      {children}
    </div>
  );
};

export default Card;
