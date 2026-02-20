import { TextAnimate } from "./ui/text-animate";
import ceo from "@/assets/ceo.jpg"

function Quote() {
  return (
    <section
      id="quote"
      className="flex border-t border-slate-100 flex-col items-center justify-center gap-8 w-full p-6 md:p-14  z-20"
    >
      <blockquote className="max-w-3xl flex flex-col gap-4 text-left px-4">
        {/* nnan */}
        <TextAnimate
          className="text-md text-black md:text-2xl  font-medium mb-3"
          animation="slideUp" by="word"
          // as="p"
        >
        We built Aadily to level the playing field. It’s not just about giving answers—it’s about ensuring your hard work and real-world achievements don't get lost in the heat of a high-pressure interview.
        </TextAnimate>
        
          

        <div className="flex gap-4">
          <div className="size-10 rounded-full bg-primary border border-border">
            <img
              src={ceo}
              alt="Alex Johnson"
              className="size-full rounded-full object-contain"
            />
          </div>
          <div className="text-left ">
            <cite className="text-lg font-medium  not-italic">
              Abimbola Adewole, M.Ed.
            </cite>
            <p className="text-sm">Founder, Aadily</p>
          </div>
        </div>
      </blockquote>
    </section>
  );
}

export default Quote;
