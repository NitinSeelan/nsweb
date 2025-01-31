import Image from "next/image";
import styles from "../globals.css";
import MyLink from "../components/MyLink"; 

export default function Home() {
    return(
        <div className="uhdiv">
           <title>Nitin Seelan | U.S. History</title>
<h1>U.S. History</h1>

<table>
  <thead>
    <tr>
      <th colSpan={4}>
        <p>
          <span style={{ fontWeight: 400 }}><h2>Unit Name</h2></span>
        </p>
      </th>
    </tr>
    <tr>
      <th>&nbsp;</th>
      <th>
        <p>
          <span style={{ fontWeight: 400 }}>Assignment</span>
        </p>
      </th>
      <th>
        <p>
          <span style={{ fontWeight: 400 }}>History</span>
        </p>
      </th>
      <th>
        <p>
          <span style={{ fontWeight: 400 }}>Honors&nbsp;</span>
        </p>
      </th>
    </tr>
    <tr>
      <th>
        <p>
          <span style={{ fontWeight: 400 }}>xxx</span>
        </p>
      </th>
      <th>
        <p>
          <span style={{ fontWeight: 400 }}>Name</span>
        </p>
      </th>
      <th colSpan={2}>
        <p>
          <a href="/">
            <span style={{ fontWeight: 400 }}>xxx Namer</span>
          </a>
        </p>
      </th>
    </tr>
    <tr>
      <th rowSpan={2}>
        <p>
          <span style={{ fontWeight: 400 }}>xxx</span>
        </p>
      </th>
      <th rowSpan={2}>
        <p>
          <span style={{ fontWeight: 400 }}>Name</span>
        </p>
        <p>
          <a href="https://docs.google.com/document/d/1Z2qfaj6JxVOHfOZLa6b00K6zuxtof1NHy1Mj0WHAkU8/edit">
            <span style={{ fontWeight: 400 }}>EXTRA</span>
          </a>
        </p>
      </th>
      <th colSpan={2}>
        <p>
          <a href="https://docs.google.com/document/d/1IB-w4bVwpxjlNRMgWr5bi6enOR5MASz8GxyJVHcuFbY/edit">
            <span style={{ fontWeight: 400 }}>
              XXX NAME
            </span>
          </a>
        </p>
      </th>
    </tr>
    <tr>
      <th>
        <p>
          <a href="https://docs.google.com/document/d/18Ol2ER1nfDF7RxGClgtHlbtIrdRny8afW-uO7TxYerg/edit?usp=sharing">
            <span style={{ fontWeight: 400 }}>
            XXX NAME

            </span>
          </a>
        </p>
      </th>
      <th>
        <p>
          <a href="https://docs.google.com/document/d/1twkyr9XG1HoVe-aOyfI8QemJhp0ttVsr5ml-bfCM4ZY/edit">
            <span style={{ fontWeight: 400 }}>
            XXX NAME

            </span>
          </a>
        </p>
      </th>
    </tr>
  </thead>
</table>

<h2>Unit Name</h2>
<h2>Electoral College</h2>
<MyLink className="ecclass" link="https://docs.google.com/presentation/d/1fWCOVQJ686gQqcZeb0Aho1QkDrCfKkCPh4I9z30o_Nw/edit#slide=id.p" imgsrc2={"/ecpro.jpg"}/>
<h2>Road to Revolution</h2>
<h2>U.S. Constituion</h2>
<h2>Unit Name</h2>
<h2>Unit Name</h2>
<h2>Unit Name</h2>
<h2>Unit Name</h2>
<h2>Unit Name</h2>
</div>
    );
}