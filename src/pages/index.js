import React, { useState, useEffect } from 'react';
import { Sun, Zap, Droplets, ShieldCheck, Activity } from 'lucide-react';

export default function SolarAgroDashboard() {
  const [powerGenerated, setPowerGenerated] = useState(452.8);
  const [irrigationStatus, setIrrigationStatus] = useState("অটোমেটেড - নিষ্ক্রিয়");

  // Live Simulation Data
  useEffect(() => {
    const interval = setInterval(() => {
      setPowerGenerated((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center border-b border-slate-700 pb-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-amber-400">এগ্রি-সোলার ও স্মার্ট গ্রিড ড্যাশবোর্ড</h1>
          <p className="text-xs text-slate-400">প্রস্তুতকারক: মোঃ মোশারফ হোসেন (সুজন) | ঠাকুরগাঁও সোলার এগ্রো হাব[cite: 1]</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-900/50 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs">
          <Activity className="w-4 h-4 animate-pulse" />
          লাইভ সিস্টেম চালু আছে
        </div>
      </header>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
          <div className="flex items-center gap-2 text-amber-400 mb-2">
            <Sun className="w-5 h-5" />
            <span className="text-sm font-semibold">সৌর বিদ্যুৎ উৎপাদন</span>
          </div>
          <div className="text-3xl font-extrabold">{powerGenerated} kW</div>
          <p className="text-xs text-slate-400 mt-1">চিন্ত সোলার প্যানেল গ্রিড (লাইভ)</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <Droplets className="w-5 h-5" />
            <span className="text-sm font-semibold">কৃষি সেচ অটোমেশন</span>
          </div>
          <div className="text-lg font-bold text-emerald-400">{irrigationStatus}</div>
          <p className="text-xs text-slate-400 mt-1">স্মার্ট সয়েল সেন্সর যুক্ত</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
          <div className="flex items-center gap-2 text-purple-400 mb-2">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-semibold">কার্বন সঞ্চয়</span>
          </div>
          <div className="text-3xl font-extrabold">12.4 Ton</div>
          <p className="text-xs text-slate-400 mt-1">সবুজ শক্তি রূপান্তর</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
          <div className="flex items-center gap-2 text-emerald-400 mb-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm font-semibold">বিসিকি শিল্প ছাড়পত্র</span>[cite: 1]
          </div>
          <div className="text-sm font-semibold text-slate-300">রেজিস্ট্রেশন ভ্যালিড</div>[cite: 1]
          <p className="text-xs text-slate-400 mt-1">বিসিক: TH-20251124-0022958</p>[cite: 1]
        </div>
      </div>

      {/* Control & Stakeholder Action Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
          <h2 className="text-lg font-bold text-slate-200 mb-3">চিন্ত সোলার ও সরকার ভিউ (Demo Control)</h2>
          <p className="text-sm text-slate-400 mb-4">
            সোলার প্ল্যান্ট এবং স্মার্ট সেচ পাম্পের অটোমেশন টেস্ট করতে নিচের বাটন ব্যবহার করুন:
          </p>
          <button 
            onClick={() => setIrrigationStatus(irrigationStatus.includes("সক্রিয়") ? "অটোমেটেড - নিষ্ক্রিয়" : "অটোমেটেড - সক্রিয় (পাম্প চালু)")}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition"
          >
            সেচ পাম্প টেস্ট সুইচ
          </button>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
          <h2 className="text-lg font-bold text-slate-200 mb-2">প্রজেক্ট সামারি</h2>
          <ul className="text-xs text-slate-300 space-y-2">
            <li>• <strong>অঞ্চল:</strong> ঠাকুরগাঁও, উত্তরবঙ্গ (সৌর বিদ্যুৎ উপযোগী এলাকা)[cite: 1]</li>
            <li>• <strong>মডেল:</strong> এগ্রি-ভোল্টাইক (Agrivoltaics) — সোলার প্যানেল + স্মার্ট এগ্রো সলিউশন।</li>
            <li>• <strong>গ্লোবাল স্ট্যান্ডার্ড:</strong> UNGM (ID: 1815385) ও গুগল ক্লাউড এআই মানসম্পন্ন[cite: 1]।</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
