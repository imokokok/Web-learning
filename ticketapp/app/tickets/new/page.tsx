import dynamic from "next/dynamic";
import React from "react";

const TicketForm = dynamic(() => import("@/components/TicketForm"), {
  ssr: false,
});

const NewTicket = () => {
  return (
    <div>
      <TicketForm />
    </div>
  );
};

export default NewTicket;
