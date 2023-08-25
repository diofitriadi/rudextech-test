interface SingleCardProps {
  title: string;
  img: string;
  value: number;
}

const SingleCard = ({ title, img, value }: SingleCardProps) => {
  return (
    <div className="bg-secondary rounded-lg shadow p-5 w-[195px]">
      <div className="flex items-center justify-evenly gap-3">
        <img src={img} alt="Card Image" className="w-10 h-auto rounded-lg" />
        <div className="flex flex-col text-white text-sm rounded">
          <p>{title}</p>
          <p className="mt-2 font-semibold text-xs text-[#6C747D]">${value}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
