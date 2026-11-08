import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';

const facts = [
  { icon: Users, title: '5 лет преподавания', desc: '30+ учеников' },
  { icon: GraduationCap, title: 'Институт бизнеса БГУ', desc: 'Бизнес-администрирование на английском' },
  { icon: Award, title: 'ЦТ по английскому — 92', desc: 'из 100 баллов' },
  { icon: BookOpen, title: 'Готовлюсь к CAE', desc: 'Cambridge C1 Advanced' },
];

export default function Founder() {
  return (
    <section id="founder" className="overflow-hidden bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://i.ibb.co/6JRVBxtS/photo-2025-05-02-20-56-05.jpg"
              alt="Ульяна Цвирко — основатель ToBe."
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-cherry)]">Кто преподаёт</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">Привет, я Ульяна</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
              <p>
                Я преподаю английский с 14 лет — за это время у меня занимались больше 30 учеников.
              </p>
              <p>
                CLIL для меня не теория из учебника. Я сама учусь так каждый день: изучаю бизнес-администрирование на английском в Институте бизнеса БГУ. Поэтому знаю, как это работает — и как сделать, чтобы работало у тебя.
              </p>
              <p className="font-serif text-xl italic text-gray-900">
                «Каждый может заговорить, если найдёт свою тему».
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.title} className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="rounded-lg bg-[var(--color-cherry)]/10 p-2 text-[var(--color-cherry)]">
                    <fact.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{fact.title}</p>
                    <p className="text-sm text-gray-500">{fact.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
