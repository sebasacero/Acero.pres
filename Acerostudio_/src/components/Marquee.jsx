const items = [
  { cls: 'mh', text: '· Taza #012.847 ' },
  { cls: '', text: '· Etiopía Yirgacheffe' },
  { cls: 'mc', text: ' · 1:15 · 92°C ' },
  { cls: '', text: '· Colombia Huila' },
  { cls: 'mh', text: ' · 抽出 / extracción ' },
  { cls: '', text: '· Brasil Cerrado' },
  { cls: 'mc', text: ' · #aceropress50k ' },
  { cls: '', text: '· Bourbon Rosado' },
  { cls: 'mh', text: ' · 372 días restantes · ' },
  { cls: '', text: 'AeroPress Go™' },
  { cls: 'mc', text: ' · Pink Bourbon · ' },
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="mq-wrap">
      <div className="mq-track">
        {doubled.map((it, i) => (
          <span key={i} className={it.cls}>{it.text}</span>
        ))}
      </div>
    </div>
  );
}
