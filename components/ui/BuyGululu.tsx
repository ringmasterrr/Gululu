"use client";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";

const BuyGululu = () => {

  const { buttonState } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(false);
    },
  });

  const { setVisible: setModalVisible } = useWalletModal();

  const onClick = () => {

    if (buttonState === "no-wallet") {
      setModalVisible(true);
    }
    else {
      const ele = document.getElementById("buytoken")
      ele?.scrollIntoView({ behavior: "smooth" })
    }
  };



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
