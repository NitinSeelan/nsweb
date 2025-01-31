'use client';

import MyLink from "app/components/MyLink";

export default function Airplanes() {
return(
<div>
  <MyLink link="/airplanes" imgsrc3={"/boeing.png"} />
<MyLink link="/airplanes" imgsrc3={"/airbus.png"} />
</div>
  );
};
