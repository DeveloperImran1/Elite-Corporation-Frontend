const VideoSection = () => {
  return (
    <section className="lg:mt-[80px] md:mt-[60px] mt-[40px]">
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{ paddingBottom: "45%" /* desktop-friendly */ }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/5Hp2apAxTpk?si=HhpDX-EY8mVjiDc3"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
