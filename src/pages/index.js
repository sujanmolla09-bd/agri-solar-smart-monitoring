import React, { useState, useEffect } from 'react';

export default function SolarAgroDashboard() {
  const [powerGenerated, setPowerGenerated] = useState(452.18);
  const [irrigationStatus, setIrrigationStatus] = useState("অটোমেটেড - নিষ্ক্রিয়");

  useEffect(() => {
    const interval = setInterval(() => {
      setPowerGenerated((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', padding: '24px' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '16px', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fbbf24', margin: 0 }}>এগ্রি-সোলার ও স্মার্ট গ্রিড ড্যাশবোর্ড</h1>
          <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>প্রস্তুতকারক: মোঃ মোশারফ হোসেন (সুজন) | ঠাকুরগাঁও সোলার এগ্রো হাব</p>
        </div>
        <div style={{ backgroundColor: '#064e3b', color: '#34d399', border: '1px solid #059669', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
          ● লাইভ সিস্টেম চালু আছে
        </div>
      </header>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
          <div style={{ color: '#fbbf24', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>☀️ সৌর বিদ্যুৎ উৎপাদন</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{powerGenerated} kW</div>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>চিন্ত সোলার প্যানেল গ্রিড (লাইভ)</p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
          <div style={{ color: '#60a5fa', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>💧 কৃষি সেচ অটোমেশন</div>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#34d399' }}>{irrigationStatus}</div>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>স্মার্ট সয়েল সেন্সর যুক্ত</p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
          <div style={{ color: '#c084fc', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>⚡ কার্বন সঞ্চয়</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>12.4 Ton</div>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>সবুজ শক্তি রূপান্তর</p>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
          <div style={{ color: '#34d399', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>🛡️ বিসিক শিল্প ছাড়পত্র</div>
          <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#cbd5e1' }}>রেজিস্ট্রেশন ভ্যালিড</div>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>বিসিক: TH-20251124-0022958</p>
        </div>
      </div>

      {/* Action Sections */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>চিন্ত সোলার ও সরকার ভিউ (Demo Control)</h2>
          <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '16px' }}>
            সোলার প্ল্যান্ট এবং স্মার্ট সেচ পাম্পের অটোমেশন টেস্ট করতে নিচের বাটন ব্যবহার করুন:
          </p>
          <button 
            onClick={() => setIrrigationStatus(irrigationStatus.includes("সক্রিয়") ? "অটোমেটেড - নিষ্ক্রিয়" : "অটোমেটেড - সক্রিয় (পাম্প চালু)")}
            style={{ backgroundColor: '#f59e0b', color: '#0f172a', fontWeight: 'bold', padding: '10px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
          >
            সেচ পাম্প টেস্ট সুইচ
          </button>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>প্রজেক্ট সামারি</h2>
          <ul style={{ fontSize: '13px', color: '#cbd5e1', paddingLeft: '20px', margin: 0, lineHeight: '1.8' }}>
            <li><strong>অঞ্চল:</strong> ঠাকুরগাঁও, উত্তরবঙ্গ (সৌর বিদ্যুৎ উপযোগী এলাকা)</li>
            <li><strong>মডেল:</strong> এগ্রি-ভোল্টাইক (Agrivoltaics) — সোলার প্যানেল + স্মার্ট এগ্রো সলিউশন</li>
            <li><strong>গ্লোবাল স্ট্যান্ডার্ড:</strong> UNGM (ID: 1815385) ও গুগল ক্লাউড এআই মানসম্পন্ন</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
