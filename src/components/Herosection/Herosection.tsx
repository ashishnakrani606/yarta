import bluePlay from "assets/Images/blue-play.svg";

const Herosection = (props: any) => {
  return (
    <div className="bg-black-darkest lg:pt-20 lg:pb-[38px] md:py-14 py-10">
      <div className="w-full h-full text-white flex gap-x-4 justify-center flex-col gap-y-8 md:gap-y-14 lg:gap-y-[100px] items-center wrapper">
        <div className="flex flex-col lg:flex-row h-full">
          <div
            className="w-full flex items-center justify-center lg:text-left text-center lg:items-start
            flex-col lg:py-5 lg:pb-0"
          >
            <div className="text-white lg:text-6xl md:text-5xl text-3xl font-bold tracking-tight leading-relaxed w-full text-center">
              {props.heading}
              <div className="flex items-center md:pt-2 justify-center">
                <span className="type xl:text-6xl lg:text-5xl md:text-5xl text-3xl lg:!leading-[64px]">
                  {props.childComp}
                </span>
              </div>
              <p>{props.Knowldge}</p>
            </div>
            <div className={`${props.className} max-w-[868px] mx-auto w-full `}>
              <p
                className={`pt-[30px] md:text-2xl text-base text-center text-[#ffffffb3] `}
              >
                {props.content}
              </p>
              {props.content2 && (
                <p
                  className={`md:pt-[30px] pt-5 md:text-2xl text-base text-center text-[#ffffffb3] w-full`}
                >
                  {props.content2}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className={`${props.stylename}`} >
          <div className="relative">
            {props.img ?
              <img src={props.img} />
              :
              <video
                src={props.video}
                width="100%"
                className="rounded-md"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            }
            {/* <button className="p-3 bg-white text-black-darkest font-bold flex items-center gap-4 md:pr-8 pr-2 min-w-[210px] rounded-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src={bluePlay} />
              Watch the video
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
