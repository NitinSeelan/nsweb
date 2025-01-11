'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import Image from "next/image";
import styles from "../globals.css";
import MyLink from "../components/MyLink";
 
export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
      const currentUser = AuthService.getCurrentUser();
      if (!currentUser) {
          router.push("/"); // Redirect to login page if not logged in
      } else {
          setUser(currentUser); // Set user information if logged in
      }
  }, [router]);

  if (!user) {
      return <div></div>; // Show a loading state while redirecting or fetching data
  }
  return (
    <div className="mainDiv4">
      <div class="header">
  <h1>Commercial Aviation</h1>
  <p>Boeing | Airbus</p>
</div>
      <h2>Introduction</h2>
 <p>    Imagine cutting your flight time in half, speeding from New York to London in under three hours while flying faster than the speed of sound! So, you might ask yourself, why don’t all airlines use this supersonic jet? It would drastically reduce our flight time. Keep reading to learn more about the full story. So, after Orville and Wilbur Wright invented the airplane in 1903, Boeing, an airplane manufacturer, was founded in 1916 in Seattle, Washington. Soon after, Douglas, another airplane manufacturer, was founded in 1921 in Santa Monica, California. They both created military planes until they found a new market, commercial jets. Then, competition arose with McDonnell, founded in 1939 in St. Louis, Missouri. Airbus was founded in 1970 in Blagnac, France as a project everyone thought would fail. But people were wrong and it became the number one aircraft manufacturer. As of 2024, only Boeing and Airbus remain with smaller regional jet companies like Bombardier and Embraer. To understand the full story, we will explore how companies rise and fall and examine how each plays a role in the market. So, let’s time travel back to the foundations of Boeing.
      </p>
    
    <h2>1910-40s: The Founding of Boeing </h2>
    <p>In 1916, William Edward Boeing founded Aero Products Company. His company created planes and the same year, he made his first plane, the B&W Seaplane. The aircraft measured 27.6 ft in length and had a wingspan of 52.2 ft. The aircraft was constructed of wood, linen, and wire. The aircraft featured a 75 mph top speed. The aircraft had a range of 320 miles and a capacity of 2. In the end, only two were ever built. After this, Aero Products Company went on to build the Model C. This aircraft was the company’s first financial success. They made 50 Model C’s for the U.S. Military because the U.S. had significantly fewer planes then. William Boeing sold all 50 Model C’s for $2,000,000 in today's money. The following year, William changed the name of his company to Boeing. In 1919, Boeing launched the B-1 Seaplane. It had room for a pilot and 2 passengers and cargo space. Only one unit was ever made.
<br/>
<br/>

 In 1923, Boeing entered competition with a company called Curtis to make fighters for the U.S. Military. In the end, the military used both fighters. Boeing’s aircraft was called the PW-9 Fighter which featured 159 mph as its top speed, which was remarkable at the time. 157 units were made when production ceased. In 1925, Boeing introduced a mail plane for the United States Postal Service. They made the Model 40 from 1925-1933 and 77 units were made. In 1928, Boeing introduced America’s first airliner designed for passenger comfort, the Model 80 (12 passengers) & the Model 80A (18 Passengers). It had a top speed of 138mph, which is nothing compared to today. It could travel for 460 miles and had a length of 56.5 feet. 
 <br/>
 <br/>

In 1930, Boeing launched the Monomail, a very aerodynamic bomber. It had a 24,000 lb bombload, a top speed of 186 miles per hour, and a range of 1,150 miles. It was 51.4 feet long and could hold 5 passengers. The same year, Boeing made the P26 PShooter with a top speed of 234 mph and a range of 635 miles. It was 23.6 ft long and could hold only the pilot. Then in 1933, Boeing made the Model 247, a plane with 18 passengers. It could go at 200 mph and had a range of 746 miles, allowing it to travel from New York to Los Angeles in 20 hours with 20 stops. This may seem like a long time, but it was remarkable at the time. The aircraft measured 51.6 feet in length and 75 units were built. In 1938, Boeing introduced the Boeing 314 (Clipper) which was a flying boat. It saved a lot of time for passengers and could travel 5,200 miles nonstop. It was 106 feet long and could hold 84 passengers, significantly more than its predecessor! Flying aboard the clipper wasn’t cheap. A flight from New York to Southampton cost $13,000. According to Google Flights, a flight now onboard Aer Lingus costs $680, significantly lower. Famous people went onboard the Clipper. Franklin Delano Roosevelt went aboard the Clipper to meet Winston Churchill. In the end, Boeing made 34 Clippers. In 1937, Boeing went back to military planes. They created the largest and newest aircraft in the United States, the XB-15. This new aircraft was so big, that repairs to the wing could be done midflight! The aircraft features a 31,000 lbs payload and a range of 5,000 miles. Only one unit was built, though. The same year, Boeing introduced the 307 Stratoliner. It was the first American airliner with a pressurized cabin which allowed it to fly at an altitude of 20,000 feet. Its top speed was increased to 246 mph and had a range of 2,390 miles. It measured 74.3 feet and could hold 38 passengers. Only 20 units were built. 
<br/>
<br/>

In 1944, Boeing introduced the B-17. It was a bomber that could stay in the air after being under heavy poundings. It had a top speed of 287 mph, a range of 3,750 miles, was 75.8 feet, and could hold 10 passengers. In the end, 6, 981 units were built and 5,745 more with a combination of Boeing, Douglas, and Lockheed. That same year, Boeing created a successor to the B-29 (Superfortress). It was the first plane with a remote control gun and was a long-range, heavy bomber.  It had 365 mph as its top speed, 5, 830 miles in range, a length of 99 ft, and could hold 10 passengers. It had a 20,000 lb bombload. This plane dropped the first Atomic Bomb ever. 2,766 units were built. In 1945, Boeing launched the 377 Stratocruiser. It had a top speed of 375 mph, a range of 4,600 miles, a length of 141.3 ft, and could hold 100 passengers. Pan Am ordered 20 units for $372 million in today's money. 56 units were built when production ceased.
</p>
<h2>1950s: The Beginning of the Jet Age
</h2>
<p>       The 1950s saw a huge leap in aircraft innovation. In 1954, Boeing announced the 360-Dash 80. One unit was built to demonstrate the advantage of jet propulsion over turboprops. Boeing took a huge risk, spending $16 million. The pilot of the Dash 80 was Tex Johnston. He made a secret plan to sell the aircraft.
<br/>
<br/>

“Johnston decided to give them a show to remember, a plan he disclosed to his copilot and flight engineer only after they were airborne, telling them, "There are more than two hundred thousand spectators. Everyone in the airplane and airline business is here ... We're going to get their attention and make this airplane famous" (Johnston and Barton, 216-217).
<br/>
<br/>

Johnston waited for the navy's Blue Angels aerobatic team to clear the sky, then swooped the Dash-80 over the race course on a southwest heading, just 400 feet above the water. He pulled into a 35-degree climb while applying full left roll control. The 128-foot-long, 160,000-pound plane rotated on its horizontal axis, flying for a short time upside down. In case anyone missed it, Johnston performed a second barrel roll on the return run. (Some aviators claim Johnston did aileron rolls instead of barrel rolls; others disagree.) When Boeing President William Allen asked him the following day what he thought he was doing, Johnston replied, "Selling the airplane" (Johnston and Barton, 218). It was later reported that he had practiced the stunt earlier, and he told Seattle journalist Emmett Watson, "It's not a maneuver for just anybody. It was something I gave a hell of a lot of thought to. You've got to do it right or you'll bust your …" ("Pilot's Stunt Rolled ...").”
<br/>
<br/>

The Dash 80 could fly 600 miles per hour and had a range of 2,000 miles. It was 130 feet long. The Doglaus DC-7 was launched in 1956 and could fly 335 miles per hour. 4 Wright Double Cyclone R-3350 engines powered the DC-7.  Three years after the Dash 80, Boeing introduced the 707, based on the Dash 80. It opened up a new, successful era for Boeing. This was Boeing's first true jetliner. It had the same speed as the Dash 80 but an increased range of 3,000 miles and was 144.5 feet long. It could hold 181 passengers. Boeing made custom models for airlines which is probably why they sold 856 units. 
<br/>
<br/>

With the success of the 707, Douglas made their aircraft to compete in 1959, the DC-8. It had a five-seat cross-section less than the 707s six-seat cross-section. It typically flew at Mach 0.82, 0.05 Mach slower than the 707, but it was the first commercial jet to break the sound barrier, flying at Mach 1.012. The aircraft industry got ready for more advancements and breakthroughs in the following decade.
</p>
    </div>
  );
}
