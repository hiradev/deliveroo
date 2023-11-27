"use client";

import DynamicCarousel from "@/components/DynamicCarousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "/unsamples/image-1.jpg",
    "/unsamples/image-2.jpg",
    "/unsamples/image-3.jpg",
    "/unsamples/image-4.jpg",
    "/unsamples/image-5.jpg",
    "/unsamples/image-6.jpg",
    "/unsamples/image-7.jpg",
    "/unsamples/image-8.jpg",
    "/unsamples/image-9.jpg",
    "/unsamples/image-10.jpg",
  ];

  const cards = [
    {
      image: "/unsamples/image-1.jpg",
      title: "Partner with us",
      description:
        "Join Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food.",
    },
    {
      image: "/unsamples/image-2.jpg",
      title: "Ride with us",
      description:
        "The freedom to fit work around your life. Plus great fees, perks and discounts.",
    },
    {
      image: "/unsamples/image-3.jpg",
      title: "Deliveroo For Work",
      description:
        "Looking for a workplace food solution to reward your team, boost morale or treat your clients? Our corporate team can help.",
    },
    {
      image: "/unsamples/image-4.jpg",
      title: "Gift Cards",
      description:
        "Looking for an easy way to treat your friends and family? Give the gift of great food with a Deliveroo gift card.",
    },
  ];

  const backgroundStyle = {
    backgroundImage: `url(/unsamples/image-2.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div
        className="relative place-items-center"
        style={{
          backgroundImage: "url(/unsamples/image-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          marginTop: "-80px",
          padding: "30px",
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
      >
        <div className="relative pt-5 place-items-center">
          <h1 className="text-4xl font-bold text-center text-white">
            Restaurant food, takeaway and
            <br />
            groceries. <span className="font-serif">Delivered.</span>
          </h1>
        </div>

        <div className="lg:mb-12 flex flex-col items-center p-8">
          <p className="text-dark-light text-white text-center md:text-xl lg:text-base xl:text-m lg:text-left mb-2 lg:mb-0">
            Enter a postcode to see what we deliver
          </p>
          <div className="flex flex-col gap-y-2.5 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
              <input
                className="placeholder:font-bold font-semibold placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
                type="text"
                placeholder="Search food"
              />
            </div>
            <button className="w-full bg-green-500 text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
              Search
            </button>
          </div>
          <p className="text-dark-light text-center md:text-xl text-white lg:text-base xl:text-m lg:text-left mt-8 lg:mb-0">
            <span className="text-teal-500">Log in</span> for your recent
            addresses.
          </p>
        </div>
      </div>
      <div className="mb-4">
        <DynamicCarousel images={images} />
      </div>

      <div className="mb-6 p-12">
        <Card className="w-[full] grid grid-cols-1 md:grid-cols-5 gap-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <CardHeader className="md:col-span-2 pr-10">
            <CardTitle className="text-4xl font-bold text-left">
              Track orders to your <br />
              door
            </CardTitle>
            <CardDescription className="text-lg pt-4 pr-20 gap-6 sm:text-sm">
              Get your favourite food delivered in a flash. You’ll see when your
              rider’s picked up your order, and be able to follow them along the
              way. You’ll get a notification when they’re nearby, too.
            </CardDescription>
            <div className="flex gap-y-2.5 mt-15 relative pt-8 gap-x-2.5">
              <Image src="/apple.png" alt="apple" width={130} height={130} />
              <Image
                src="/android.png"
                alt="android"
                width={130}
                height={130}
              />
            </div>
          </CardHeader>

          <div className="md:col-span-3">
            <Image
              src="/map.jpg"
              alt="location"
              className="w-full h-full rounded-md"
              width={500}
              height={200}
            />
          </div>
        </Card>
      </div>

      <div className="relative place-items-center" style={backgroundStyle}>
        <div className="bg-opacity-50 bg-gray-900 p-10 text-white">
          <h1 className="text-5xl font-bold text-center p-10 font-serif">
            Up to 25% off - Meal Deals
          </h1>
          <h3 className="text-lg font-medium text-center">
            Need a midweek pick-me-up, a break from cooking for the family, or
            just
            <br />
            fancy your favorite restaurant?
          </h3>
          <p className="p-4 text-sm text-center">
            Service and delivery fees, subject to availability. Participating
            restaurants only. T&Cs
            <br /> apply.{" "}
            <a href="your-terms-link" className="underline">
              Terms.
            </a>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 pt-10 pb-10 mb-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="w-full h-[350px] md:w-[650px] lg:w-[650px] flex flex-col justify-between shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
            style={{
              backgroundImage: `url("${card.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardContent>{/* Your card content goes here */}</CardContent>
            <CardFooter className="flex flex-col items-start bg-opacity-50 p-4">
              <CardHeader>
                <CardTitle className="text-white">{card.title}</CardTitle>
                <CardDescription className="text-white">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <Link href="/second">
                <Button className="mt-2" variant="outline">
                  Get Started
                  <ArrowRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
