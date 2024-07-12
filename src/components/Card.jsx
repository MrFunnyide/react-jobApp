const Card = ({ children, backgroundCard = 'bg-gray-100' }) => {
  return (
    <div className={`${backgroundCard} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  );
};

export default Card;
