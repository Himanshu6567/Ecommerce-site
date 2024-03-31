import React from "react";

function NoMatching() {
  return (
    <div className=" mx-8 my-2 text-4xl px-10 py-12 rounded-md ">
      <div className="w-40">
        <img src="https://media.discordapp.net/attachments/1005498488517312653/1015872118459732018/WhatsApp_Image_2022-09-04_at_12.00.55_PM.jpeg"></img>
      </div>

      <h> No "Items" Match Your Search</h>
      <br></br>
      <p className="text-gray-700 text-2xl">
        Check your spelling and filter options, or search for a different
        keyword..
      </p>
    </div>
  );
}

export default NoMatching;
