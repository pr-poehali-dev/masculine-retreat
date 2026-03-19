import { useEffect, useState, CSSProperties } from "react";
import Icon from "@/components/ui/icon";

type IconStyle = CSSProperties & { color?: string };

const HERO_IMG = "https://cdn.poehali.dev/projects/f78de5e4-fad7-4ccd-b190-5916afea8b19/files/29b720f5-d2da-40ea-a684-589f25612fe7.jpg";
const MEDITATION_IMG = "https://cdn.poehali.dev/projects/f78de5e4-fad7-4ccd-b190-5916afea8b19/files/6fb1d00b-2edd-4ee6-bca6-24267122e27f.jpg";
const ICE_IMG = "https://cdn.poehali.dev/projects/f78de5e4-fad7-4ccd-b190-5916afea8b19/files/7e1c77f8-31f8-47df-8a56-01d2afc67a99.jpg";

const practices = [
  { icon: "Wind", title: "Дыхательные практики", desc: "Пранаяма, ШОДХАН, холотропное дыхание. Прямой доступ к нервной системе — перезагрузка за 40 минут." },
  { icon: "Brain", title: "День тишины", desc: "24 часа молчания. Топ-практика, которая решает 90% запросов участников. Вы услышите себя впервые за годы." },
  { icon: "Snowflake", title: "Ледяные медитации", desc: "Криотерапия в горной реке. Кортизол падает. Тестостерон растёт. Страх уходит. Ясность приходит." },
  { icon: "Flame", title: "Активные медитации", desc: "Динамические практики Ошо, ШОДХАН и другие. Выброс накопленного стресса через тело." },
  { icon: "Dumbbell", title: "Физические практики", desc: "Бег, беш, кардио в горах. Тело — инструмент. Когда тело сильное — голова ясная." },
  { icon: "Users", title: "Групповые сессии", desc: "1 час на каждого участника. Коллективный разум группы решает личный запрос. Это работает." },
  { icon: "Compass", title: "День выживания", desc: "24 часа без еды, воды и жилья. Когда человек выживает — он понимает, чего хочет на самом деле." },
  { icon: "Star", title: "Мастер-классы", desc: "Приглашённые эксперты мирового уровня. Психология, нейробиология, стратегия, лидерство." },
];

const forWhom = [
  { num: "01", text: "Вы зарабатываете от 1 млн в месяц, но не помните, когда последний раз были собой" },
  { num: "02", text: "Вы достигли всего, что планировали — и не знаете, зачем" },
  { num: "03", text: "Выгорание стало фоном. Раздражение — нормой. Пустота — вашим утром" },
  { num: "04", text: "Вы в кризисе: отношения, бизнес, смысл. Всё одновременно" },
  { num: "05", text: "Вы хотите принять важное решение — но голова забита шумом" },
  { num: "06", text: "Вы чувствуете, что потеряли себя. И хотите вернуться" },
];

const advantages = [
  { icon: "MapPin", title: "Архыз, 2200 м", desc: "Горный воздух, чистая вода, отсутствие цивилизационного шума — тело восстанавливается само." },
  { icon: "Shield", title: "Без гаджетов", desc: "Телефоны сдаются на входе. Мозг получает настоящий отдых впервые за годы. Это меняет всё." },
  { icon: "Zap", title: "Гормональный ребут", desc: "Холод, движение, голодание, дыхание — доказанные методы восстановления гормональной системы." },
  { icon: "Target", title: "Конкретный результат", desc: "Вы уезжаете с планом. Не с ощущением — с конкретными шагами на следующие 90 дней." },
  { icon: "Crown", title: "Элитный контекст", desc: "Только мужчины с высоким уровнем жизни. Нетворкинг, который стоит больше ретрита." },
  { icon: "Heart", title: "Безопасность", desc: "Медицинское сопровождение, опытные фасилитаторы, проверенные практики. Никакого риска." },
];

const testimonials = [
  {
    name: "Михаил К.",
    age: "42 года, предприниматель",
    text: "Приехал с выгоранием и ощущением, что всё рушится. Уехал с планом на 3 года и головой, которая наконец молчит. День тишины — это было страшно. Это было лучшее, что со мной случалось.",
    result: "Закрыл 2 неприбыльных проекта, запустил новый. +40% к чистой прибыли за 6 месяцев.",
  },
  {
    name: "Дмитрий В.",
    age: "38 лет, топ-менеджер",
    text: "Я не верил в ретриты. Друг привёл почти силой. После ледяной медитации что-то щёлкнуло. Понял, чего боюсь. Принял решение, которое откладывал 4 года.",
    result: "Сменил позицию, переехал семьёй. Говорит — это лучшее решение в жизни.",
  },
  {
    name: "Александр Р.",
    age: "45 лет, собственник бизнеса",
    text: "7 дней без телефона казались невозможными. На второй день началась ломка. На пятый — тишина внутри, которой не было 15 лет. Это не метафора.",
    result: "Восстановил отношения с сыном. Перестроил команду. Продал актив, который тянул вниз.",
  },
];

const whySevenDays = [
  { day: "1–2", title: "Детокс", desc: "Тело и мозг избавляются от шума. Ломка, сопротивление, первый контакт с собой." },
  { day: "3", title: "Кризис", desc: "Самый тяжёлый момент. Именно здесь начинается работа. 3-дневный ретрит заканчивается здесь." },
  { day: "4–5", title: "Прорыв", desc: "День тишины. Ледяная медитация. Групповая работа. 80% трансформаций происходят здесь." },
  { day: "6", title: "Интеграция", desc: "Осмысление. Создание плана. Мастер-классы. Вы понимаете, что делать дальше." },
  { day: "7", title: "Возвращение", desc: "Вы уезжаете другим. С ясностью, планом и силой, о которой забыли." },
];

const prices = [
  {
    days: "3 дня",
    title: "Начало пути",
    price: "300 000",
    features: [
      "Детокс от гаджетов и шума",
      "Дыхательные практики",
      "Групповые медитации",
      "Физические практики",
      "Здоровое питание (готовим сами)",
      "Размещение в горном лагере",
    ],
    bonus: "Мерч ретрита",
    highlight: false,
  },
  {
    days: "5 дней",
    title: "Трансформация",
    price: "500 000",
    features: [
      "Всё из 3-дневного формата",
      "День тишины (24 часа)",
      "Ледяные медитации",
      "Активные динамические медитации",
      "Групповая сессия (1 час на человека)",
      "Мастер-класс от приглашённого эксперта",
      "Личная стратегическая сессия",
    ],
    bonus: "Мерч + книга практик + 3 онлайн-сессии после",
    highlight: true,
  },
  {
    days: "7 дней",
    title: "Полное возвращение",
    price: "700 000",
    features: [
      "Всё из 5-дневного формата",
      "День выживания (без еды и воды)",
      "2 мастер-класса от экспертов",
      "Командные задачи и тимбилдинг",
      "Создание 90-дневного плана",
      "Практики эмоциональной гигиены",
      "VIP-размещение",
    ],
    bonus: "Премиум мерч + книга + 6 онлайн-сессий + закрытый клуб выпускников",
    highlight: false,
  },
];

const faqs = [
  { q: "Нужна ли физическая подготовка?", a: "Нет. Нагрузки адаптируются под каждого участника. Мы работаем с телом как с инструментом, не как со спортивным достижением." },
  { q: "Что значит «без обуви»?", a: "Часть практик проходит босиком — это заземление. Контакт с землёй восстанавливает нервную систему быстрее любых таблеток. Обувь понадобится для горных маршрутов." },
  { q: "Как попасть в Архыз?", a: "Самолёт до Минеральных Вод, далее трансфер (~3 часа). Мы организуем групповой трансфер. Детали — при бронировании." },
  { q: "Группа — это сколько человек?", a: "Максимум 12 участников. Это принципиально: маленькая группа даёт глубокую работу и настоящий контакт." },
  { q: "Что если стало плохо?", a: "Медицинское сопровождение на весь период ретрита. Врач присутствует на всех физических практиках. Все методы проверены и безопасны." },
  { q: "Как забронировать место?", a: "Оставьте заявку — мы позвоним в течение 24 часов для знакомства и ответов на вопросы. Место закрепляется после предоплаты 30%." },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-obsidian text-cream overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-[rgba(201,168,76,0.15)]" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="font-display text-xl tracking-widest" style={{ color: "#C9A84C" }}>
            АРХЫЗ<span className="font-light" style={{ color: "rgba(240,235,224,0.35)" }}> РЕТРИТ</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[["hero","Главная"],["program","Программа"],["practices","Практики"],["prices","Участие"],["testimonials","Истории"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="font-body text-xs tracking-widest uppercase transition-colors duration-300" style={{ color: "#888075" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={e => (e.currentTarget.style.color = "#888075")}
              >{label}</button>
            ))}
          </div>
          <button onClick={() => scrollTo("prices")} className="hidden md:block btn-gold">Участвовать</button>
          <button className="md:hidden" style={{ color: "#C9A84C" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t px-6 py-6 flex flex-col gap-5" style={{ background: "rgba(13,13,13,0.98)", borderColor: "rgba(201,168,76,0.15)" }}>
            {[["hero","Главная"],["program","Программа"],["practices","Практики"],["prices","Цены"],["testimonials","Истории"],["faq","Вопросы"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left font-body text-xs tracking-widest uppercase" style={{ color: "#888075" }}>{label}</button>
            ))}
            <button onClick={() => scrollTo("prices")} className="btn-gold mt-2">Участвовать</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.1) 40%, rgba(13,13,13,1) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,13,13,0.85) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="tag-label mb-6 reveal">Архыз · Краснодарский край · 2200 м</div>
            <h1 className="font-display font-light leading-none mb-6 reveal" style={{ fontSize: "clamp(3.5rem,9vw,8rem)" }}>
              Кризис<br />
              <span className="gold-text-gradient italic">живёт</span><br />
              в голове
            </h1>
            <p className="font-body text-base md:text-lg leading-relaxed mb-10 reveal max-w-xl" style={{ color: "rgba(240,235,224,0.65)" }}>
              Мужской ретрит в горах Архыза. 3, 5 или 7 дней без телефонов, без интернета, без дешёвого дофамина.
              Возвращение к себе — это маршрут, а не метафора.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 reveal">
              <button onClick={() => scrollTo("prices")} className="btn-gold">Забронировать место</button>
              <button onClick={() => scrollTo("program")} className="btn-outline-gold">Смотреть программу</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.4 }}>
          <span className="tag-label" style={{ color: "#888075" }}>прокрутите</span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, #C9A84C, transparent)" }} />
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1px", background: "rgba(201,168,76,0.08)" }}>
            {[
              { num: "87%", text: "успешных мужчин живут в хроническом стрессе" },
              { num: "3 года", text: "средний срок выгорания без вмешательства" },
              { num: "12", text: "участников максимум — глубокая работа" },
              { num: "90%", text: "запросов решает день тишины" },
            ].map((s, i) => (
              <div key={i} className="bg-[#0D0D0D] p-8 md:p-10 reveal">
                <div className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "#C9A84C" }}>{s.num}</div>
                <div className="font-body text-xs leading-relaxed" style={{ color: "#888075" }}>{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full" style={{ opacity: 0.18 }}>
          <img src={MEDITATION_IMG} alt="" className="w-full h-full object-cover" style={{ filter: "grayscale(20%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0D0D0D, transparent)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <div className="tag-label mb-6 reveal">Вы узнаёте себя?</div>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-16 reveal">
              Усталость стала<br />
              <span className="italic" style={{ color: "#C9A84C" }}>вашим фоном</span>
            </h2>
            <div className="space-y-0">
              {[
                "Вы просыпаетесь уже уставшим",
                "Достигли всего запланированного — и чувствуете пустоту",
                "Раздражение на близких стало нормой",
                "Важные решения откладываются месяцами",
                "Вы не помните, когда последний раз были по-настоящему живы",
                "Дофамин только от телефона, алкоголя или работы",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 py-6 reveal group" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="font-display text-2xl font-light transition-opacity" style={{ color: "#C9A84C", opacity: 0.3 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-base leading-relaxed" style={{ color: "rgba(240,235,224,0.65)" }}>{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 border reveal" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
              <p className="font-display text-2xl italic" style={{ color: "#C9A84C" }}>
                "Это не слабость. Это сигнал.<br />Система требует перезагрузки."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section id="for-whom" className="py-32 px-6" style={{ background: "rgba(42,37,32,0.2)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 text-center reveal">Кому это нужно</div>
          <h2 className="font-display text-5xl md:text-6xl text-center font-light mb-20 reveal">
            Этот ретрит<br />
            <span className="italic" style={{ color: "#C9A84C" }}>для вас, если...</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1px", background: "rgba(201,168,76,0.05)" }}>
            {forWhom.map((item, i) => (
              <div key={i} className="bg-[#0D0D0D] p-10 transition-all duration-300 reveal" style={{ border: "1px solid transparent" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.25)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "transparent"; (e.currentTarget as HTMLElement).style.background = "#0D0D0D"; }}
              >
                <div className="font-display leading-none mb-4" style={{ fontSize: "5rem", color: "rgba(201,168,76,0.12)" }}>{item.num}</div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(240,235,224,0.65)" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 reveal">Расписание</div>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-3 reveal">Программа дня</h2>
          <p className="font-body text-sm mb-20 reveal" style={{ color: "#888075" }}>Каждый день ретрита выверен до минуты. Хаоса нет. Только работа.</p>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              {[
                { time: "05:30", activity: "Подъём. Контрастный душ", tag: "тело" },
                { time: "06:00", activity: "Утренняя медитация на рассвете", tag: "практика" },
                { time: "07:00", activity: "Физические практики: бег, беш, кардио", tag: "тело" },
                { time: "09:00", activity: "Завтрак (готовим вместе)", tag: "питание" },
                { time: "10:00", activity: "Дыхательные сессии (пранаяма, ШОДХАН)", tag: "практика" },
                { time: "12:00", activity: "Командные задачи и тимбилдинг", tag: "группа" },
                { time: "14:00", activity: "Обед. Время для интеграции", tag: "питание" },
                { time: "15:00", activity: "Мастер-класс от эксперта", tag: "знания" },
                { time: "17:00", activity: "Групповая сессия (1 час на человека)", tag: "группа" },
                { time: "19:00", activity: "Ужин. Вечерняя беседа", tag: "питание" },
                { time: "20:30", activity: "Ледяная медитация в горной реке", tag: "практика" },
                { time: "22:00", activity: "Отбой. Тишина", tag: "восстановление" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 py-4 reveal group" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="font-display text-xl font-light w-16 shrink-0" style={{ color: "rgba(201,168,76,0.45)" }}>{item.time}</span>
                  <span className="font-body text-sm flex-1 transition-colors" style={{ color: "rgba(240,235,224,0.65)" }}>{item.activity}</span>
                  <span className="tag-label shrink-0 hidden md:block" style={{ color: "rgba(136,128,117,0.4)" }}>{item.tag}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <div className="relative h-80 overflow-hidden">
                <img src={ICE_IMG} alt="Ледяная медитация" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.85), transparent)" }} />
                <div className="absolute bottom-6 left-6">
                  <div className="tag-label mb-1" style={{ color: "#C9A84C" }}>Ледяная медитация</div>
                  <p className="font-body text-xs max-w-xs" style={{ color: "rgba(240,235,224,0.55)" }}>Горная река при +4°C. Это лечит быстрее любого психолога.</p>
                </div>
              </div>
              <div className="p-8 border" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
                <div className="tag-label mb-4">Специальные дни</div>
                <div className="space-y-4">
                  {[
                    { icon: "Moon", title: "День тишины", desc: "24 часа полного молчания. Нет слов. Нет телефона. Только вы." },
                    { icon: "TreePine", title: "День выживания", desc: "24 часа в горах без еды, воды и жилья. Только 7-дневный формат." },
                    { icon: "Users", title: "День решений", desc: "Стратегические сессии, создание плана на 90 дней." },
                  ].map((sp, i) => (
                    <div key={i} className="flex gap-4">
                      <Icon name={sp.icon} size={20} className="shrink-0 mt-0.5" style={{ color: "#C9A84C" } as IconStyle} />
                      <div>
                        <div className="font-body text-sm mb-1">{sp.title}</div>
                        <div className="font-body text-xs" style={{ color: "#888075" }}>{sp.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 border" style={{ background: "rgba(42,37,32,0.3)", borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="tag-label mb-4">Питание</div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(240,235,224,0.65)" }}>
                  Готовим вместе, как в лагере. Без дрожжей, без сахара, без обработанных продуктов.
                  Мясо, горные травы, родниковая вода. Тело начинает работать иначе уже на 2-й день.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICES */}
      <section id="practices" className="py-32 px-6" style={{ background: "rgba(42,37,32,0.1)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 text-center reveal">Инструменты</div>
          <h2 className="font-display text-5xl md:text-6xl text-center font-light mb-4 reveal">Практики ретрита</h2>
          <p className="font-body text-sm text-center mb-20 max-w-lg mx-auto reveal" style={{ color: "#888075" }}>
            Каждая практика — не развлечение. Это инструмент с доказанным нейробиологическим эффектом.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "1px", background: "rgba(201,168,76,0.05)" }}>
            {practices.map((p, i) => (
              <div key={i} className="bg-[#0D0D0D] p-8 transition-all duration-300 reveal group" style={{ border: "1px solid transparent" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "transparent"; }}
              >
                <div className="mb-5">
                  <Icon name={p.icon} size={28} style={{ color: "#C9A84C" } as IconStyle} />
                </div>
                <h3 className="font-display text-xl font-light mb-3">{p.title}</h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: "#888075" }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Hormones */}
          <div className="mt-20 p-10 md:p-16 border reveal" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
            <div className="tag-label text-center mb-10">Что происходит с гормонами</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { hormone: "Кортизол", direction: "↓", desc: "Стрессовый гормон падает. Ледяные ванны, медитации, отсутствие гаджетов работают за 48 часов.", color: "#e05a5a" },
                { hormone: "Тестостерон", direction: "↑", desc: "Физические нагрузки в горах, холод, здоровое питание без сахара — уровень растёт клинически значимо.", color: "#C9A84C" },
                { hormone: "Дофамин", direction: "⟳", desc: "Сброс зависимости от дешёвых стимулов. Рецепторы восстанавливаются. Жизнь снова приносит радость.", color: "#6ab0e8" },
                { hormone: "Серотонин", direction: "↑", desc: "Природа, физическая активность, сообщество, смысл — четыре главных источника активированы.", color: "#7ecb7e" },
              ].map((h, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-5xl mb-2" style={{ color: h.color, fontSize: "3.5rem" }}>{h.direction}</div>
                  <div className="font-body text-xs tracking-widest uppercase mb-3" style={{ color: h.color }}>{h.hormone}</div>
                  <p className="font-body text-xs leading-relaxed" style={{ color: "#888075" }}>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLACE */}
      <section id="place" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Архыз" className="w-full h-full object-cover" style={{ opacity: 0.18 }} />
          <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.88)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="tag-label mb-6 reveal">Место</div>
          <h2 className="font-display font-light mb-3 reveal" style={{ fontSize: "clamp(3rem,8vw,7rem)" }}>Архыз, Кавказ</h2>
          <p className="font-body text-sm mb-16 reveal" style={{ color: "#888075" }}>Краснодарский край · 2200 метров над уровнем моря</p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "Mountain", title: "Горный воздух", desc: "Кислород на высоте 2200 м восстанавливает митохондрии. Буквально. Это биохимия, не поэзия." },
              { icon: "Droplets", title: "Чистейшая вода", desc: "Родниковая вода с минерализацией, которой нет в городе. Тело обновляется на клеточном уровне." },
              { icon: "Waves", title: "Горная река", desc: "Температура +4–6°C круглый год. Ледяные медитации здесь — это другой опыт." },
            ].map((item, i) => (
              <div key={i} className="p-8 transition-all duration-300 reveal" style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(255,255,255,0.02)" }}>
                <Icon name={item.icon} size={32} className="mb-4" style={{ color: "#C9A84C" } as IconStyle} />
                <h3 className="font-display text-2xl font-light mb-3">{item.title}</h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: "#888075" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border-l-2 pl-8 max-w-2xl reveal" style={{ borderColor: "#C9A84C" }}>
            <p className="font-display text-2xl font-light italic leading-relaxed" style={{ color: "rgba(240,235,224,0.75)" }}>
              "Горы не дают тебе стать кем-то другим.<br />
              Они возвращают тебя к тому, кем ты был до всего этого шума."
            </p>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 reveal">Преимущества</div>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-4 reveal">
            Почему этот ретрит<br />
            <span className="italic" style={{ color: "#C9A84C" }}>работает</span>
          </h2>
          <p className="font-body text-sm mb-20 max-w-lg reveal" style={{ color: "#888075" }}>
            Не мотивация. Не визуализация. Доказанная нейробиология и проверенные мужские практики.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "1px", background: "rgba(201,168,76,0.05)" }}>
            {advantages.map((adv, i) => (
              <div key={i} className="bg-[#0D0D0D] p-10 transition-all duration-300 reveal" style={{ border: "1px solid transparent" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "transparent"; }}
              >
                <Icon name={adv.icon} size={32} className="mb-6" style={{ color: "#C9A84C" } as IconStyle} />
                <h3 className="font-display text-2xl font-light mb-3">{adv.title}</h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: "#888075" }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY 7 DAYS */}
      <section id="why7" className="py-32 px-6" style={{ background: "rgba(42,37,32,0.2)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 text-center reveal">Архитектура времени</div>
          <h2 className="font-display text-5xl md:text-6xl text-center font-light mb-4 reveal">
            Почему 7 дней<br />
            <span className="italic" style={{ color: "#C9A84C" }}>это другой уровень</span>
          </h2>
          <p className="font-body text-sm text-center mb-20 max-w-lg mx-auto reveal" style={{ color: "#888075" }}>
            3 и 5 дней — это хорошо. 7 дней — это когда жизнь делится на до и после.
          </p>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.4), rgba(201,168,76,0.1), transparent)" }} />
            {whySevenDays.map((item, i) => (
              <div key={i} className={`flex items-start gap-8 md:gap-16 py-10 reveal ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div className={`md:w-1/2 ${i % 2 === 1 ? "" : "md:text-right"}`}>
                  <div className="tag-label mb-2" style={{ color: "#C9A84C" }}>День {item.day}</div>
                  <h3 className="font-display text-3xl font-light mb-2">{item.title}</h3>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 shrink-0">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#C9A84C" }} />
                </div>
                <div className="md:w-1/2">
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#888075" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center reveal">
            <button onClick={() => scrollTo("prices")} className="btn-gold">Выбрать формат участия</button>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 text-center reveal">Участие</div>
          <h2 className="font-display text-5xl md:text-6xl text-center font-light mb-4 reveal">Выберите формат</h2>
          <p className="font-body text-sm text-center mb-20 max-w-lg mx-auto reveal" style={{ color: "#888075" }}>
            Предоплата 30%. Максимум 12 человек в группе. Следующий поток — июль 2026.
          </p>
          <div className="grid lg:grid-cols-3" style={{ gap: "1px", background: "rgba(201,168,76,0.08)" }}>
            {prices.map((plan, i) => (
              <div key={i} className="relative p-10 transition-all duration-300 reveal" style={{
                background: plan.highlight ? "rgba(42,37,32,0.5)" : "#0D0D0D",
                border: plan.highlight ? "1px solid rgba(201,168,76,0.45)" : "1px solid transparent",
              }}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1" style={{ background: "#C9A84C" }}>
                    <span className="font-body text-xs font-semibold tracking-widest uppercase" style={{ color: "#0D0D0D" }}>Популярный</span>
                  </div>
                )}
                <div className="tag-label mb-2" style={{ color: "#888075" }}>{plan.days}</div>
                <div className="font-display text-3xl font-light mb-2">{plan.title}</div>
                <div className="font-display text-5xl mb-1" style={{ color: "#C9A84C" }}>{plan.price}</div>
                <div className="font-body text-xs mb-8" style={{ color: "#888075" }}>рублей · один участник</div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Icon name="Check" size={14} className="mt-0.5 shrink-0" style={{ color: "#C9A84C" } as IconStyle} />
                      <span className="font-body text-xs" style={{ color: "rgba(240,235,224,0.65)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 mb-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="tag-label mb-2" style={{ color: "#C9A84C" }}>Бонусы</div>
                  <p className="font-body text-xs" style={{ color: "#888075" }}>{plan.bonus}</p>
                </div>
                <button className={`w-full py-4 font-body text-xs tracking-widest uppercase font-semibold transition-all duration-300 ${plan.highlight ? "btn-gold" : "btn-outline-gold"}`}>
                  Забронировать
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 text-center border reveal" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
            <p className="font-body text-sm" style={{ color: "#888075" }}>
              Нужен корпоративный ретрит для топ-команды?{" "}
              <span className="cursor-pointer hover:underline" style={{ color: "#C9A84C" }}>Напишите нам</span>
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-32 px-6" style={{ background: "rgba(42,37,32,0.1)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 text-center reveal">Истории</div>
          <h2 className="font-display text-5xl md:text-6xl text-center font-light mb-4 reveal">
            Трансформации<br />
            <span className="italic" style={{ color: "#C9A84C" }}>участников</span>
          </h2>
          <p className="font-body text-sm text-center mb-20 reveal" style={{ color: "#888075" }}>
            Реальные истории. Имена изменены по просьбе участников.
          </p>
          <div className="grid lg:grid-cols-3" style={{ gap: "1px", background: "rgba(201,168,76,0.05)" }}>
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#0D0D0D] p-10 transition-all duration-300 reveal" style={{ border: "1px solid transparent" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "transparent"; }}
              >
                <div className="font-display leading-none mb-4" style={{ fontSize: "5rem", color: "rgba(201,168,76,0.15)", lineHeight: 1 }}>"</div>
                <p className="font-body text-sm leading-relaxed mb-8 italic" style={{ color: "rgba(240,235,224,0.65)" }}>{t.text}</p>
                <div className="pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="font-display text-xl mb-1">{t.name}</div>
                  <div className="tag-label mb-4" style={{ color: "#888075" }}>{t.age}</div>
                  <div className="p-4" style={{ background: "rgba(42,37,32,0.5)", borderLeft: "2px solid #C9A84C" }}>
                    <div className="tag-label mb-1" style={{ color: "#C9A84C" }}>Результат</div>
                    <p className="font-body text-xs" style={{ color: "rgba(240,235,224,0.55)" }}>{t.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="tag-label mb-6 text-center reveal">Вопросы</div>
          <h2 className="font-display text-5xl md:text-6xl text-center font-light mb-20 reveal">Часто спрашивают</h2>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="reveal" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="font-body text-sm pr-8 transition-colors" style={{ color: "rgba(240,235,224,0.8)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,235,224,0.8)")}
                  >{faq.q}</span>
                  <Icon name={openFaq === i ? "Minus" : "Plus"} size={18} style={{ color: "#C9A84C", flexShrink: 0 } as IconStyle} />
                </button>
                {openFaq === i && (
                  <div className="pb-6">
                    <p className="font-body text-sm leading-relaxed" style={{ color: "#888075" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={MEDITATION_IMG} alt="" className="w-full h-full object-cover" style={{ opacity: 0.13 }} />
          <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.92)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="tag-label mb-8 reveal">Следующий поток</div>
          <h2 className="font-display font-light leading-none mb-8 reveal" style={{ fontSize: "clamp(3.5rem,10vw,8rem)" }}>
            Вернитесь<br />
            <span className="italic gold-text-gradient">к себе</span>
          </h2>
          <p className="font-body text-base mb-4 reveal" style={{ color: "rgba(240,235,224,0.5)" }}>
            Июль 2026 · Архыз · 12 мест
          </p>
          <p className="font-body text-sm max-w-lg mx-auto leading-relaxed mb-14 reveal" style={{ color: "#888075" }}>
            Свободных мест остаётся меньше с каждым днём. Оставьте заявку — мы позвоним в течение 24 часов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <button className="btn-gold">Оставить заявку</button>
            <button onClick={() => scrollTo("prices")} className="btn-outline-gold">Посмотреть цены</button>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-8 reveal">
            {["Без телефонов", "Без интернета", "Только мужчины", "До 12 человек", "2200 м над уровнем моря"].map((tag, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full" style={{ background: "#C9A84C" }} />
                <span className="tag-label" style={{ color: "#888075" }}>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl tracking-widest" style={{ color: "#C9A84C" }}>
            АРХЫЗ<span className="font-light" style={{ color: "rgba(240,235,224,0.25)" }}> РЕТРИТ</span>
          </div>
          <div className="font-body text-xs text-center" style={{ color: "#888075" }}>
            Архыз, Краснодарский край · Все вопросы через форму заявки
          </div>
          <div className="font-body text-xs" style={{ color: "rgba(136,128,117,0.35)" }}>© 2026 Архыз Ретрит</div>
        </div>
      </footer>

    </div>
  );
}