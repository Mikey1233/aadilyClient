// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// const FAQ: React.FC = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const faqs = [
//     {
//       question: "What is an AI Agent?",
//       answer: "An AI Agent is an autonomous system that uses artificial intelligence to perceive its environment, reason about tasks, and take actions to achieve specific goals. In the context of Intervue, our agent acts as your personal interview coach, analyzing your responses and providing real-time guidance."
//     },
//     {
//       question: "How does Intervue AI work?",
//       answer: "Intervue AI uses advanced speech-to-text and language modeling to analyze your interview conversations in real-time. It compares your answers against industry standards and behavioral frameworks (like STAR) to provide instant, private cues and feedback on your screen."
//     },
//     {
//       question: "How secure is my data?",
//       answer: "Security is our top priority. All audio streams are processed in memory and never stored permanently. Transcripts are encrypted and only accessible to you. We are SOC2 compliant and never sell your data to third parties."
//     },
//     {
//       question: "Can I integrate my existing tools?",
//       answer: "Yes! Intervue AI integrates seamlessly with popular meeting platforms like Zoom, Google Meet, and Microsoft Teams, as well as your calendar and note-taking apps, ensuring a smooth workflow without switching contexts."
//     },
//     {
//       question: "Is there a free trial available?",
//       answer: "Absolutely. We offer a 14-day free trial with full access to all features, including real-time coaching and detailed post-interview analysis, so you can experience the power of AI-assisted interviewing risk-free."
//     }
//   ];

//   return (
//     <section className="py-24 bg-white border-t border-slate-100">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//             Answers to common questions about Intervue AI and its features. If you
//             have any other questions, please don't hesitate to contact us.
//           </p>
//         </div>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-shadow hover:shadow-sm"
//             >
//               <button
//                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                 className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
//               >
//                 <span className="text-lg font-medium text-slate-900">
//                   {faq.question}
//                 </span>
//                 <ChevronDown
//                   className={`text-slate-400 transition-transform duration-300 ${
//                     openIndex === index ? 'rotate-180 text-indigo-500' : ''
//                   }`}
//                   size={20}
//                 />
//               </button>
//               <div
//                 className={`transition-all duration-300 ease-in-out ${
//                   openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
//                 }`}
//               >
//                 <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100/50 pt-4">
//                   {faq.answer}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Aadily detectable by my interviewer?",
      answer: "No. Aadily works as a local browser extension overlay or via a private mobile sync. It does not inject code into your meeting software (Zoom, Teams, etc.), meaning it remains 100% invisible to the interviewer and the platform."
    },
    {
      question: "How does the mobile sync feature work?",
      answer: "Pro users can link their phone to the browser extension. While the extension transcribes the audio on your laptop, the AI-generated prompts are sent instantly to your phone. This allows you to glance at your phone naturally, just like checking a note, keeping your main screen clear."
    },
    {
      question: "Does it work for non-technical roles?",
      answer: "Absolutely. Aadily is designed for everyone from Project Managers to Sales Executives. By analyzing your specific CV, it generates behavioral 'STAR' method responses and tailored project summaries that are relevant to your unique career path."
    },
    {
      question: "How secure is my interview data?",
      answer: "Your privacy is our priority. Audio is processed in real-time to generate prompts and is never recorded or stored on our servers. Your uploaded resume is encrypted and used only to personalize your AI responses."
    },
    {
      question: "Can I use Aadily for phone interviews?",
      answer: "Yes! If you are taking a call via your browser or a meeting app, the extension will provide live feedback. You can also use the practice mode to refine your responses before the real call starts."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Got Questions? We’ve Got Answers.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about using Aadily to land your next role. 
            Can't find what you're looking for? Reach out to our team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
              >
                <span className="text-lg font-medium text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-slate-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-indigo-500' : ''
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100/50 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;