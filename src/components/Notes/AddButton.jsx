import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <div className="fixed bottom-0 right-0">
      <Link to={"/postnotes"}>
        <button className="h-14 w-14">
          <BsFillPlusSquareFill size={25} />
        </button>
      </Link>
    </div>
  );
};

export default AddButton;
