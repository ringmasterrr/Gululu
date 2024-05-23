"use client"

const BuyGululu = () => {
  


  const onClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  

  return (
    <button
      onClick={onClick}
      className="font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block"
    >
      BUY GULULU
    </button>
  );
};

export default BuyGululu;
