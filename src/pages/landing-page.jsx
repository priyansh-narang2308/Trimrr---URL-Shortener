import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) {
      navigate(`/auth?createNew=${longUrl}`);
    }
  };

  return (
    <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="mt-16 mb-10 text-4xl sm:text-6xl lg:text-7xl text-center font-extrabold leading-tight bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
        The only URL Shortener <br />
        you'll ever need! <span role="img" aria-label="point-down">👇</span>
      </h2>
      <form
        onSubmit={handleShorten}
        className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 items-center justify-center"
      >
        <Input
          onChange={(e) => setLongUrl(e.target.value)}
          value={longUrl}
          type="url"
          placeholder="Paste your loooong URL here"
          className="flex-1 h-14 px-4 text-lg rounded-xl shadow-md"
        />

        <Button
          type="submit"
          className="h-14 px-8 rounded-xl cursor-pointer bg-red-600 hover:bg-red-700 transition-all duration-300 font-semibold text-white shadow-lg hover:scale-105 active:scale-100"
        >
          🚀 Shorten
        </Button>
      </form>

      <div className="w-full my-14">
        <img
          src="/mubanner.jpeg"
          alt="banner"
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>

      <Accordion
        type="multiple"
        collapsible
        className="w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg text-white"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium">
            How does the Trimrr URL shortener work?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            When you enter a long URL, our system generates a shorter version
            of that URL. This shortened URL redirects to the original long URL
            when accessed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium">
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Yes. Creating an account allows you to manage your URLs, view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium">
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            You can view the number of clicks, geolocation data of the clicks,
            and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default LandingPage;
