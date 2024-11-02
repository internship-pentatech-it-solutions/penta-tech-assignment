const About = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center"> 
          <img
            src="/images/image (4).avif"
            alt=""
            className="w-full lg:w-1/3 object-cover mb-4 lg:mb-0 lg:h-[400px] rounded-lg" 
          />
          <div className="text-md pt-8 max-w-6xl lg:pl-8 flex flex-col items-center"> 
            <h1 className="text-black text-3xl font-bold pt-6 text-center"> 
              About Our Mattress Home
            </h1>
            <div className="space-y-6 mt-8 text-base text-center"> 
              <p>
                Welcome to Mattress Home, your ultimate sleep partner and
                solution. We specialize in providing high-quality new mattresses
                and offer expert restoration services for your old ones. Our
                mission is to ensure you get the best sleep possible, tailored
                to your unique needs.
              </p>

              <p>
                At Mattress Home, we understand that a good night's sleep is
                essential for a healthy and productive life. That’s why we offer
                a diverse range of mattresses from top brands such as Royal
                Foam, Latex Foam, Ashfoam, and various foreign brands. Whether
                you're looking for a new mattress or need to rejuvenate your
                existing one, we've got you covered.
              </p>
              <p>
                We are here to solve your sleep needs. Give us a call or chat
                with us today to find the perfect mattress that suits you.
                Experience the difference with Mattress Home, where your comfort
                and satisfaction are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
