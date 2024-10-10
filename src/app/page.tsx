"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const dozeHorasEmSeg = 39200;
    setTimeLeft(dozeHorasEmSeg);

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime && prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  if (timeLeft === null) {
    return null;
  }

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const handleNavigation = () => {
    window.location.href =
      "https://www.sailgeneral.com/2J14R5D8/X8HB7DX/?uid=3322";
  };

  const faqItems = [
    {
      title:
        "How long will Grid Doctor Generator System keep me safe in an extended blackout?",
      contents: [
        "You can charge it over 500 times — from ZERO to 100% power.",
        "And even after 6 months sitting in storage, it can still hold 80% of its charge. So it's ready to go when SHTF.",
      ],
    },
    {
      title: "How fast does it charge?",
      contents: [
        "You can charge it in just 5 hours using AC power.",
        "Or you can use your 2 BONUS 100W solar panels and charge to 100% in less than 8 sun hours.",
        "Whether you choose to use an AC outlet or FREE energy from the sun…",
        "You’ll always have reliable backup power.",
      ],
    },
    {
      title:
        "Can I charge my Grid Doctor Solar Generator System from my vehicle?",
      contents: [
        "Yes! You can charge it using your vehicle charging port, an AC outlet or FREE energy from the sun.",
      ],
    },
  ];

  return (
    <div className="h-screen bg-blue-500">
      <div className="bg-[#242570] text-white flex flex-col justify-center items-center">
        <p className="md:mx-20 lg:mx-44 mx-5 pt-4 text-center md:text-md text-sm md:max-w-[900px]">
          <b>American-Made, American-Priced: Free USA Shipping Today!</b> Secure
          Your <b>Grid Doctor 300 Solar Generator System</b> with{" "}
          <b>Free Delivery</b> Right to Your Door + a <b>Free Ebook</b>, The
          Last Blackout! Discounted Units Are Running Out Fast, Stock is Low,
          Final call ! ! <br />
          <b className="md:text-xl text-lg">
            Order Now and Be Ready for Anything!
          </b>
        </p>
        <div className="text-red-600 my-3 font-bold md:text-3xl text-xl">
          {hours}h {minutes}m {seconds}s
        </div>
      </div>

      <div>
        <p className="bg-[#EAB11F] text-center font-medium text-xl md:text-2xl py-2 md:py-6">
          Last Units With Discount – 42% Off + 2 Free Bonuses + Free USA
          Shipping Ends Today
        </p>
      </div>
      <div className="w-full bg-center bg-cover bg-wall-black flex flex-col justify-center items-center py-3 gap-4">
        <p className="text-[#FFD200] font-bold md:text-3xl text-xl text-center">
          The Last BlackOut: Grid Doctor 300 Solar Generator System
        </p>
        <div>
          <Image
            src="/images/hero-1.png"
            width={1000}
            height={1000}
            alt="the last blackout"
          ></Image>
        </div>
        <div className="mx-3">
          <button
            className="bg-[#FFD200] rounded-xl border border-slate-600 py-4 md:px-16 px-8 font-semibold text-3xl hover:scale-110 ease-in-out duration-200"
            onClick={handleNavigation}
          >
            BUY NOW
            <br />
            The Last Blackout:
            <br /> Grid Doctor 300 Solar +
            <br /> Generator System Ends Today!
          </button>
        </div>
      </div>
      <div className="bg-white w-full h-auto md:h-20 px-4 py-4 md:py-12 flex flex-col justify-center items-center ">
        <Image src="/images/trust.webp" height={200} width={275} alt="trust" />
        <p className="text-center">
          Stay Safe from Scams and Imitations, Assurance of Quality.
          Authenticity Matters – Order Now.
        </p>
      </div>
      <div className="bg-[#101212] h-auto w-full">
        <h2 className="text-[#EA671F] font-bold text-3xl text-center pt-2">
          Grid Doctor 300 Solar Generator System
        </h2>
        <div className="flex items-center justify-center mt-5">
          <div className="flex md:flex-row flex-col mx-4 gap-6 py-4">
            <div className="text-white flex flex-col max-w-lg gap-4">
              <p>
                Whether by force or by choice, there will come a time when you
                won’t have access to public power.
              </p>
              <p>
                A natural disaster could knock down power lines, cyberattacks
                might shut it off, or an adventure in the wilderness could leave
                you disconnected longer than expected.
              </p>
              <p>
                With the{" "}
                <span className="font-bold text-[#EA671F]">
                  Grid Doctor 300 Solar Generator System
                </span>{" "}
                within reach, you can restore your connection to precious power.
                This portable, multifunctional powerhouse is fully loaded,
                dependable, and simple to use!
              </p>
              <p>
                Generates more power than other generators by connecting to TWO
                solar panels at once (second panel sold separately).
              </p>
              <ul className="list-disc ml-6">
                <li>
                  <span className="font-bold text-[#EA671F]">
                    PLENTY OF WAYS TO POWER
                  </span>{" "}
                  – Equipped with AC, 12V DC, USB-A 3.0, and USB-C PD 30W and
                  60W ports to power it all, from mobile phones to
                  mini-refrigerators.
                </li>
                <li>
                  <span className="font-bold text-[#EA671F]">
                    LIGHT IT UP FOR UP TO 100 HOURS
                  </span>{" "}
                  – eatures a powerful LED light with four functions: hi-power,
                  lo-power, flashing, and SOS. This light can last for up to 100
                  continuous hours, eliminating the dangers of the dark during a
                  disaster..
                </li>
                <li>
                  <span className="font-bold text-[#EA671F]">
                    DISASTER-READY BATTERY
                  </span>{" "}
                  – Loaded inside this system is a powerful lithium iron
                  phosphate battery (LiFePO4) with more power than most other
                  models. This durable, high-quality battery can be cycled over
                  2,000 times, making it safer and longer-lasting than older
                  options.
                </li>
                <li>
                  <span className="font-bold text-[#EA671F]">
                    FOUR CHOICES FOR CHARGING
                  </span>{" "}
                  – Charge just about any appliance or device you own! Power up
                  this generator with the sun, through a wall outlet, in the car
                  socket, or with a USB-C and power block pair. Trudging through
                  the backcountry or bugging out in the bunker, you’ve got the
                  power.
                </li>
                <li>
                  <span className="font-bold text-[#EA671F]">
                    SPEEDY CHARGING
                  </span>{" "}
                  – Utilizes the latest technology to charge your electric
                  appliances and digital devices in a fraction of the time that
                  standard chargers take.
                </li>
                <li>
                  <span className="font-bold text-[#EA671F]">
                    UNMATCHED MULTI-TASKING
                  </span>{" "}
                  – Keep essential electronics completely operational with
                  pass-thru charging capabilities. No need to wait for a full
                  battery! Charge the generator while you use it for an
                  uninterrupted power supply in survival.
                </li>
                <li>
                  <span className="font-bold text-[#EA671F]">SIMPLE POWER</span>{" "}
                  – Power awaits with the quick and simple press of a button.
                  Kids, teens, and older folks alike can figure out how to use
                  this generator. No experience or special knowledge needed!
                </li>
                <li>
                  <span className="font-bold text-[#EA671F]">
                    EASY-TO-READ DISPLAY
                  </span>{" "}
                  – Check the battery level, battery life, watts in and out, and
                  more with identifiable icons. Sleek and digestible, this
                  display delivers all the information you need on one screen.
                  This generator offers better tech, more features, and greater
                  value than the others out there!
                </li>
                <li>
                  <span className="font-bold text-[#EA671F]">
                    YOUR LIGHTWEIGHT LEVERAGE
                  </span>{" "}
                  – This compact cube can tuck into tight spaces from the camper
                  to the car. Grab it and go in an instant with a collapsible
                  handle, too!
                </li>
                <li>
                  <span className="font-bold text-[#EA671F]">
                    STACK THEM UP
                  </span>{" "}
                  – Need power for a number of people? Stack units on top of
                  each other and keep the power coming.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Image
                src="/images/grid-1.png"
                width={550}
                height={500}
                alt="griddoctor"
              />
              <Image
                src="/images/grid-2.png"
                width={550}
                height={500}
                alt="griddoctor"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 justify-center items-center p-6">
        <button
          className="bg-[#FFD200] rounded-xl border border-slate-900 py-2 md:px-8 px-8 font-semibold text-3xl hover:scale-110 ease-in-out duration-200"
          onClick={handleNavigation}
        >
          BUY NOW
          <br />
          The Last Blackout:
          <br /> Grid Doctor 300 Solar +
          <br /> Generator System Ends Today!
        </button>
        <div className="text-center gap-4 flex flex-col">
          <p className="font-bold text-3xl">
            Grid Doctor 300 Solar Generator System
          </p>
          <p>If you think your bug-out bag is fully packed, think again.</p>
          <p>
            With its compact size, collapsible handle, and weight under ten
            pounds, why isn’t this already part of your grab ‘n’ go backup plan?
            Your bug-out bag just isn’t complete without it, plain and simple.
          </p>
          <p>
            Charge your cell phone and electronics for essential communication
            and news updates. Power your personal lights when you’re stuck in
            the pitch-dark wilderness. Run your CPAP machine and other critical
            medical devices to keep yourself alive. This kind of connection
            isn’t optional—it’s crucial.
          </p>
        </div>
      </div>
      <div className="text-center font-bold text-3xl bg-black text-[#EA671F]">
        <p className="py-2">YOUR ALL-IN-ONE EMERGENCY POWER STATION</p>
      </div>
      <div className="bg-[#101212] text-white">
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center md:items-start py-4">
          <div className="max-w-lg flex flex-col gap-3 text-lg">
            <p>
              The Grid Doctor 300 Solar Generator System offers long-lasting,
              reliable power on demand regardless of your location or
              circumstances. Since it can be used while the battery charges, you
              won’t waste any time waiting for a full charge before you can use
              it.
            </p>
            <p>
              This powerhouse may look little, but it packs a powerful punch.
              Unlock 25,000 mAh to use wherever, whenever. Because it’s so
              compact, it’s no burden to carry around! Take it with you on your
              travels—you never know what might happen while you’re away.
            </p>
            <p>
              How long can a single charge of this generator keep your
              electronics running?
            </p>
            <ul className="list-disc ml-8">
              <li>Box Fan – Up to 5 hours</li>
              <li>CPAP Machine – Up to 8 hours</li>
              <li>DSLR Camera – Up to 20 recharges</li>
              <li>Laptop – Up to 6 recharges</li>
              <li>Light Bulb (60W) – Up to 5 hours</li>
              <li>Mini Refrigerator (1.5 F3) – Up to 4 hours</li>
              <li>Smartphone – Up to 20 recharges</li>
              <li>Tablet – Up to 14 recharges</li>
              <li>TV (42-Inch LED) – Up to 4 hours</li>
              <li>Wi-Fi Router – Up to 16 hours</li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/image-2.png"
              width={450}
              height={300}
              alt="blackout"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-3 flex flex-col justify-center items-center text-lg gap-4">
        <div>
          <p className="font-bold text-3xl text-center flex pb-5">
            NO TIME WASTED WITH PASS-THRU CHARGING
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-[1000px] r">
          <p>
            Being able to use your much-needed electronics as your generator
            charges is an invaluable asset in an emergency.
          </p>
          <p>You won’t miss out on any of this:</p>
          <ul className="list-disc ml-8">
            <li>
              <span className="font-bold text-[#EA671F]">COMMUNICATION</span> –
              Keep cell phones, hand radios, and other electronics charged to
              remain connected to your survival crew. Plug in the radio or TV
              for breaking news, weather forecasts, and critical emergency
              information.
            </li>
            <li>
              <span className="font-bold text-[#EA671F]">SAFETY</span> –Turn on
              your rechargeable lights to continue tasks in the dark, as well as
              prevent accidents and other dangers.
            </li>
            <li>
              <span className="font-bold text-[#EA671F]">MEDICAL SUPPORT</span>{" "}
              – If someone in your group relies on electric medical equipment,
              this uninterrupted power supply will truly be a lifesaver.
            </li>
            <li>
              <span className="font-bold text-[#EA671F]">
                FOOD PRESERVATION
              </span>{" "}
              – Prevent food from spoiling when stored inside a refrigerator.
              Food is among your most precious resources. Save as much of it as
              you possibly can!
            </li>
            <li>
              <span className="font-bold text-[#EA671F]">ADAPTABILITY</span> –
              Adapt to different situations as your survival circumstances
              change. Use the generator as it charges from solar power during
              the day, then rely on stored energy at night.
            </li>
            <li>
              <span className="font-bold text-[#EA671F]">
                LONG BATTERY LIFE
              </span>{" "}
              ­– Since you can charge the generator while you use it, you’re
              less likely to deplete the battery. This extends the life of your
              battery for years and years of use!
            </li>
          </ul>
          <p>
            <strong>The Grid Doctor 300 Solar Generator System</strong> provides
            protected charging options. Maximum Power Point Tracking, or MPPT,
            protects you and your electronics in an emergency through efficient
            charging.
          </p>
          <p>
            This efficient charging refuels faster, ensuring your electronics
            operate fully sooner. Plus, the more efficient your energy use, the
            longer your electronics can run. Energy efficiency is optimal,
            reducing your dependence on unstable or unavailable power grids and
            making you more self-sufficient during disasters!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <Image
            src="/images/details-1.png"
            width={300}
            height={300}
            alt="product details one"
          />
          <Image
            src="/images/details-2.png"
            width={300}
            height={300}
            alt="product details one"
          />
          <Image
            src="/images/details-3.png"
            width={300}
            height={300}
            alt="product details one"
          />
        </div>
      </div>
      <div className="text-center font-bold text-3xl bg-black text-[#EA671F]">
        <p className="py-2">PASS-THRU CHARGING: AN INVALUABLE ASSET</p>
      </div>
      <div className="flex items-center justify-center bg-[#101212]">
        <div className="flex md:flex-row flex-col mx-4 gap-6 py-4">
          <div className="flex flex-col gap-3">
            <Image
              src="/images/product-1.png"
              width={550}
              height={500}
              alt="griddoctor"
            />
          </div>
          <div className="text-white flex flex-col max-w-lg gap-4 text-lg">
            <p>
              Having the ability to use your appliances and devices as the
              generator charges is an underrated convenience in an emergency.
            </p>
            <p>You won’t have to go without anything:</p>
            <ul className="list-disc ml-6">
              <li>
                <span className="font-bold text-[#EA671F]">
                  COMMUNICATION & INFORMATION
                </span>{" "}
                – Keep phones, walkie talkies, and other electronics charged to
                stay connected to family, friends, and emergency services. Plug
                in the radio or TV for breaking news, weather forecasts, and
                critical emergency information.
              </li>
              <li>
                <span className="font-bold text-[#EA671F]">SAFETY</span> – Turn
                on your rechargeable lights to continue crucial tasks in the
                dark, as well as prevent accidents and other hazards.
              </li>
              <li>
                <span className="font-bold text-[#EA671F]">
                  MEDICAL TREATMENT
                </span>{" "}
                – If someone in your survival circle relies on medical equipment
                that requires electricity, this uninterrupted power supply will
                be a lifesaver.
              </li>
              <li>
                <span className="font-bold text-[#EA671F]">
                  FOOD PRESERVATION
                </span>{" "}
                – Prevent food from spoiling when connected to a refrigerator.
                Food is among your most precious resources, so you’ll want to
                save as much of it as you can!
              </li>
              <li>
                <span className="font-bold text-[#EA671F]">FLEXIBILITY</span> –
                Adapt to different situations. Use the generator as it charges
                from solar power during the day, then rely on stored energy at
                night.
              </li>
              <li>
                <span className="font-bold text-[#EA671F]">
                  EXTENDED BATTERY LIFE
                </span>{" "}
                – Because the generator can be charged while in use, you’re less
                likely to deplete the battery. This extends the longevity of the
                unit.
              </li>
            </ul>
            <p>
              In addition to pass-thru charging capabilities, the 300 Solar
              Generator System offers protected charging options. Maximum Power
              Point Tracking, or MPPT, protects you and your electronics in an
              emergency through efficient charging.
            </p>
            <p>
              Energy-efficient charging refuels faster, returning your
              electronics to full operational status sooner. Plus, the more
              efficient your energy use, the longer your electronics can run.
              Overall, energy efficiency reduces your dependence on unstable or
              unavailable power grids, making you more self-sufficient during
              disasters!
            </p>
          </div>
        </div>
      </div>
      <div className="text-center font-bold text-3xl bg-black text-[#EA671F]">
        <p className="py-2">HOW TO USE THE SYSTEM</p>
      </div>
      <div className="flex justify-center bg-[#101212]">
        <div className="flex md:flex-row flex-col mx-4 gap-6 py-4">
          <div className="text-white flex flex-col max-w-lg gap-4 text-lg">
            <strong>
              The Grid Doctor 300 Solar Generator System includes the following
              components:
            </strong>
            <ul className="list-decimal ml-8">
              <li>300W inverter with</li>
              <li>320Wh battery</li>
              <li>100W solar panel</li>
              <li>Power cable</li>
              <li>Adapter</li>
              <li>12V DC lighter adapter</li>
              <li>“Y” splitter cable</li>
              <li>Instruction manual</li>
            </ul>
            <p>To use this system, follow these simple instructions:</p>
            <ul className="list-decimal ml-8">
              <li>To turn it on, press and hold the main power button.</li>
              <li>
                View the main display, which will indicate the current power
                available.
              </li>
              <li>
                Press the button that coordinates with the port you’d like to
                use.
              </li>
              <li>
                Plug in the appropriate cord, then connect your electric
                appliance or digital device.
              </li>
              <li>
                To use the light feature, press the LED power button. Press it
                multiple times to cycle through the four options.
              </li>
              <li>
                To charge the generator, plug it into a wall outlet, solar
                panel, or car adapter.*
              </li>
              <li>
                To turn off the generator, press and hold the main power button.
              </li>
            </ul>
            <p>
              Refer to the included instruction manual for more detailed
              directions on use, charging, and more.
            </p>
          </div>
          <div>
            <Image
              src="/images/image-2.png"
              width={550}
              height={500}
              alt="griddoctor"
            />
          </div>
        </div>
      </div>
      <div className="text-center font-bold text-3xl bg-white text-[#EA671F]">
        <p className="py-2 underline">
          Testimonial from Mark and Emily Johnson
        </p>
        <p>Concerned Parents and Preparedness Advocates</p>
      </div>
      <div className="bg-[#EA671F] py-4">
        <div className="flex md:flex-row flex-col justify-center items-center md:items-start mx-4 gap-6 py-4 text-white">
          <div>
            <Image
              src="/images/testimonial.png"
              width={450}
              height={450}
              alt="family together"
            />
          </div>
          <div className="text-white flex flex-col max-w-[80%] md:max-w-[40%] gap-4 text-center italic">
            <p>
              “As parents, our family’s safety is our top priority. We live in
              an area prone to severe storms and power outages, and the thought
              of being unprepared was something we simply couldn’t accept.
              That’s why we decided to invest in the Grid Doctor 300 Solar
              Generator System, and it has been one of the best decisions we’ve
              ever made.
            </p>
            <p>
              From the moment we unpacked it, we were impressed by its compact
              design and ease of use. The simple setup allowed us to start using
              it right away—something we truly appreciate when time is of the
              essence. With two kids and a busy household, we need reliable
              power for everything, from charging our phones to running
              essential medical devices.
            </p>
            <p>
              During a recent storm, when our neighborhood lost power for over
              48 hours, the Grid Doctor 300 was our lifeline. We kept our phones
              charged, used it to power our son’s CPAP machine, and even ran a
              small refrigerator to preserve our food. The LED light feature
              provided comfort in the dark, allowing us to navigate our home
              safely and maintain a sense of normalcy for our kids.
            </p>
            <p>
              What impressed us most was the peace of mind that came with
              knowing we were prepared. No longer did we have to worry about
              being caught off guard. We feel empowered and secure, knowing that
              we have a dependable source of power at our fingertips
            </p>
            <p>
              The Grid Doctor 300 isn’t just a product; it’s an investment in
              our family’s safety and well-being. We can’t recommend it enough
              to other families who want to ensure they’re ready for anything.
              It’s more than a generator; it’s a promise that we will always be
              prepared for whatever comes our way.”
            </p>
            <p>
              <strong>— Mark and Emily Johnson.</strong> New Orleans, Louisiana
            </p>
          </div>
        </div>
      </div>
      <div className="text-center font-bold text-3xl bg-white text-[#EA671F]">
        <p className="py-2">RUGGED & RESILIENT</p>
      </div>
      <div className="font-sans">
        <div className="flex md:flex-row flex-col justify-center items-center md:items-start mx-4 gap-6 py-4">
          <div>
            <Image
              src="/images/person-1.png"
              width={235}
              height={235}
              alt="a person with solar panel"
            />
          </div>
          <div className="flex flex-col max-w-[80%] md:max-w-[40%] gap-4">
            <p>
              These monocrystalline solar panels are engineered for durability.
              From harsh weather conditions to the knocks and drops that occur
              during disasters, there’s no need to handle this panel delicately.
            </p>
            <ul className="list-disc ml-6">
              <li>
                <strong className="text-[#EA671F]">
                  TOUGH AGAINST IMPACTS
                </strong>{" "}
                – Crafted from a single-crystal structure, this solar panel is
                sturdier compared to its polycrystalline counterparts.
              </li>
              <li>
                <strong className="text-[#EA671F]">WEATHERPROOF</strong> – This
                solar panel can withstand scorching heat, freezing cold, heavy
                rainfall, and even hail. The single-crystal structure minimizes
                weak points between cells, ensuring efficient thermal expansion
                and contraction while reducing the risk of stress and cracks.
              </li>
            </ul>
            <div className="flex justify-center items-center">
              <button
                className="bg-[#FFD200] rounded-xl border border-slate-900 py-2 md:px-8 px-2 font-semibold text-3xl hover:scale-105 ease-in-out duration-200 md:max-w-[65%]"
                onClick={handleNavigation}
              >
                BUY NOW
                <br />
                The Last Blackout:
                <br /> Grid Doctor 300 Solar +
                <br /> Generator System Ends Today!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center font-bold text-3xl bg-white text-[#EA671F]">
        <p className="py-2">ESSENTIAL ADAPTABILITY</p>
      </div>
      <div className="md:text-lg">
        <div className="flex md:flex-row flex-col justify-center items-center md:items-start mx-4 gap-6 py-4">
          <div className="flex flex-col max-w-[80%] md:max-w-[40%] gap-4">
            <p>
              Adaptability is, arguably, the most important trait in an
              emergency. Not only for you, but for your gear, too!
            </p>
            <p>
              This solar panel features foldable construction and collapsible
              legs, allowing the ultimate adaptability when your circumstances
              head south.
            </p>

            <p>
              <strong>SURFACE FLEXIBILITY</strong> – You never know where an
              emergency might take you. Regardless of where you land, this solar
              panel offers endless setup options. Place it on flat rocks or
              concrete, the picnic table at your campground, or on the roof of
              your truck. Bugging out just got a whole lot easier.
            </p>
            <p>
              <strong>SEAMLESS SUN TRACKING</strong> – Follow the sun’s changing
              position without completely moving the panel.
            </p>
            <p>
              <strong>SPACE-SAVING STORAGE</strong> – With folded dimensions of
              just 21″ x 15.5″ and only 1.75″ thick, this solar panel can be
              stored without taking up precious space. Slide it under a bed or
              couch, slip it into the trunk of your car, or tuck it behind a
              door.
            </p>
          </div>
          <div>
            <Image
              src="/images/solar-panel.png"
              width={450}
              height={450}
              alt="a person with solar panel"
            />
          </div>
        </div>
      </div>
      <div className="text-center font-bold text-3xl bg-white text-[#EA671F]">
        <p className="py-2">USING THE 100W SOLAR PANEL KIT BY GRID DOCTOR</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col gap-3 text-start max-w-[80%]">
          <p>
            The 100W Solar Panel Kit by Grid Doctor includes the following
            components:
          </p>
          <strong>
            100W solar panel <br />
            “Y” splitter cable
          </strong>
          <p>These simple steps illustrate how to set up this solar panel:</p>
          <p>Open the solar panel to expose solar cells.</p>
          <p>
            To maximize solar energy collection, place the solar panel in direct
            sunlight and position it perpendicular to the sun’s rays.
          </p>
          <strong className=" text-[#EA671F]">
            Here’s how to connect the 100W Solar Panel Kit by Grid Doctor to the
            300 Solar Generator System by Grid Doctor:
          </strong>
          <p>
            Open the zipper pouch on the solar panel and pull out the cable with
            the barrel connector. <br />
            Plug the barrel connector into the front panel port labeled “INPUT”
            on the generator.
            <br />
            The battery will automatically begin to charge. When fully charged,
            it will immediately stop charging.
          </p>
          <p>
            Refer to the included instruction manual for more detailed
            directions on setup, charging, using with the generator, and more.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 items-center mt-3 pb-4 px-3">
        <Image
          src="/images/trust-2.png"
          width={500}
          height={500}
          alt="a person with solar panel"
        />
        <button
          className="bg-[#FFD200] rounded-xl border border-slate-900 py-2 md:px-8 px-4 font-semibold text-3xl hover:scale-110 ease-in-out duration-200"
          onClick={handleNavigation}
        >
          BUY NOW
          <br />
          Only Today: 42% Off + Free Bonuses
          <br /> Ends Today!
        </button>
      </div>
      <div className="text-center font-bold text-3xl bg-[#101212] text-white py-3">
        <p>Frequently</p>
        <p>
          Asked Questions About{" "}
          <strong className="italic underline">The Last BlackOut</strong>
        </p>
      </div>
      <div className="bg-black pb-16">
        <Accordion items={faqItems} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
