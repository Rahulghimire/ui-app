import React from "react";
import { FaHandshake } from "react-icons/fa";
const Card = () => {
  return (
    <div className="App">
      <div className="inline-flex p-4 bg-slate-600 text-white relative ml-5 mb-2">
        <div className=" max-w-xs rounded overflow-hidden shadow-lg object-center text-center ">
          <div className="px-4 py-2 ">
            <div>
              <FaHandshake size={35} className="mx-auto mb-3" />
            </div>
            <div className="font-bold text-xl mb-2 truncate">Coldest</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, beatae, doloremque doloribus enim quo, ratione ducimus
              debitis natus minus necessitatibus recusandae veritatis voluptatum
              fugit animi vitae placeat repellendus soluta officia!
            </p>
          </div>
        </div>
      </div>
      <div className="inline-flex p-4 bg-slate-600 text-white relative ml-5">
        <div className=" max-w-xs rounded overflow-hidden shadow-lg object-center text-center ">
          <div className="px-4 py-2 ">
            <div>
              <FaHandshake size={35} className="mx-auto mb-3" />
            </div>
            <div className="font-bold text-xl mb-2 truncate">Coldest</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, beatae, doloremque doloribus enim quo, ratione ducimus
              debitis natus minus necessitatibus recusandae veritatis voluptatum
              fugit animi vitae placeat repellendus soluta officia!
            </p>
          </div>
        </div>
      </div>
      <div className="inline-flex p-4 bg-slate-600 text-white relative ml-5">
        <div className=" max-w-xs rounded overflow-hidden shadow-lg object-center text-center ">
          <div className="px-4 py-2 ">
            <div>
              <FaHandshake size={35} className="mx-auto mb-3" />
            </div>
            <div className="font-bold text-xl mb-2 truncate">Coldest</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, beatae, doloremque doloribus enim quo, ratione ducimus
              debitis natus minus necessitatibus recusandae veritatis voluptatum
              fugit animi vitae placeat repellendus soluta officia!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
