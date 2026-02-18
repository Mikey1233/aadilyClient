import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer at TechCorp",
    content: "I was terrified of the system design round. Interview Hammer gave me the structure I needed in real-time. Got the offer!",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=11"
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    content: "The behavioral cues were a lifesaver. It helped me frame my answers using the STAR method perfectly without memorizing scripts.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=5"
  },
  {
    name: "Michael Chen",
    role: "Sales Director",
    content: "Used it for a VP level interview. The objection handling suggestions were spot on. It felt like having a coach whispering in my ear.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=3"
  }
];

export const SocialProof: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Loved by Job Seekers</h2>
          <div className="flex items-center justify-center gap-2 text-yellow-500 mb-4">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="text-slate-700 font-semibold ml-2">4.9 Average Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 mb-6 flex-1 italic">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};