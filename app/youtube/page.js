import Image from "next/image";
import styles from "../globals.css";
import MyLink from "../components/MyLink"; 

export default function Home() {
    return(
<div className="youtubediv">
<iframe width="640" height="360" src="https://www.youtube.com/embed/86axUCmR2E0" title="Day 1 | Long Beach to Honolulu | Southwest 737 MAX 8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="640" height="360" src="https://www.youtube.com/embed/osq0DV45U5A" title="Santa Ana to San Jose | Southwest 737-700" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
    );
}