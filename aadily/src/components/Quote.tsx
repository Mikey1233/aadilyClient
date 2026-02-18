import { TextAnimate } from "./ui/text-animate";
function Quote() {
  return (
    <section
      id="quote"
      className="flex border-t border-slate-100 flex-col items-center justify-center gap-8 w-full p-2 md:p-14  z-20"
    >
      <blockquote className="max-w-3xl flex flex-col gap-4 text-left px-4">
        {/* nnan */}
        <TextAnimate
          className="text-md text-black md:text-2xl  font-medium mb-3"
          animation="blurIn"
          as="p"
        >
          Aadily has transformed our daily operations. Tasks that once consumed
          hours now complete in moments, freeing our team to focus on creativity
          and strategic growth.
        </TextAnimate>
        <div className="flex gap-4">
          <div className="size-10 rounded-full bg-primary border border-border">
            <img
              src="https://randomuser.me/api/portraits/men/91.jpg"
              alt="Alex Johnson"
              className="size-full rounded-full object-contain"
            />
          </div>
          <div className="text-left ">
            <cite className="text-lg font-medium  not-italic">
              Adewale Abimbola
            </cite>
            <p className="text-sm">CEO, Aadily</p>
          </div>
        </div>
      </blockquote>
    </section>
  );
}

export default Quote;
