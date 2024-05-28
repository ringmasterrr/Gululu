import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import { FiCopy } from "react-icons/fi";

type TransactionStatusProps = {
  status: boolean | null;
  hashlinkaddress: string;
  onClose: () => void;
};

export function TransactionStatusPopup({
  status,
  hashlinkaddress,
  onClose,
}: TransactionStatusProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (status !== null) {
      setOpen(true);
      setIsSuccess(status);
    }
  }, [status]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const copyhashLink = () => {
    copy(hashlinkaddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="w-[40%] bg-white">
          <AlertDialogHeader className="flex items-end">
            <AlertDialogCancel onClick={handleClose} className="border-none">
              <Image src={"/close.svg"} alt="" height={30} width={30} />
            </AlertDialogCancel>
          </AlertDialogHeader>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 w-[55%]">
              <h1 className="text-5xl font-omnes">
                {isSuccess ? "Success" : "Failure"}
              </h1>
              <p className="text-base font-medium">
                {isSuccess
                  ? "Your transaction has been successful. Click on the below link to view your transaction."
                  : "Oops! Something went wrong with your transaction."}
              </p>
            </div>
            <div>
              <Image
                src={isSuccess ? "/successcat.svg" : "/failurecat.svg"}
                alt=""
                height={400}
                width={400}
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            {!isSuccess && (
              <AlertDialogAction
                onClick={handleClose}
                className="w-full rounded-full bg-black font-omnes"
              >
                TRY AGAIN
              </AlertDialogAction>
            )}
            {isSuccess && (
              <>
                <div>
                  <p className="font-medium mb-2 pl-4">
                    Transaction Hash Link
                  </p>
                  <div className="bg-white border p-2 border-slate-300 rounded-full w-full">
                    <div className=" flex text-center py-1  w-full">
                      <div>
                        <p className="break-all p-2 w-full opacity-55">
                          {hashlinkaddress}
                        </p>
                      </div>
                      <button
                        onClick={copyhashLink}
                        className="w-fit bg-transparent text-black px-4 py-2 rounded-lg outline-none"
                      >
                        <div className=" flex gap-2 items-center">
                          <FiCopy />
                          <span className="">
                            {copied ? "Copied!" : "Copy Link"}
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <AlertDialogAction
                  onClick={handleClose}
                  className="w-full rounded-full bg-black font-omnes"
                >
                  VIEW TRANSACTION
                </AlertDialogAction>
              </>
            )}
            <AlertDialogCancel
              onClick={handleClose}
              className="w-full rounded-full border-black font-omnes"
            >
              CANCEL
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
