import { useEffect, useState, CSSProperties } from "react";
import Icon from "@/components/ui/icon";

type IconStyle = CSSProperties & { color?: string; flexShrink?: number };

const HERO_IMG = "https://cdn.poehali.dev/projects/f78de5e4-fad7-4ccd-b190-5916afea8b19/files/29b720f5-d2da-40ea-a684-589f25612fe7.jpg";
const MEDITATION_IMG = "https://cdn.poehali.dev/projects/f78de5e4-fad7-4ccd-b190-5916afea8b19/files/6fb1d00b-2edd-4ee6-bca6-24267122e27f.jpg";
const ICE_IMG = "https://cdn.poehali.dev/projects/f78de5e4-fad7-4ccd-b190-5916afea8b19/files/7e1c77f8-31f8-47df-8a56-01d2afc67a99.jpg";

const practices = [
  { icon: "Wind", title: "Дыхательные практики", desc: "Пранаяма, ШОДХАН, холотропное дыхание. Прямой доступ к нервной системе — перезагрузка за 40 минут.", color: "#5a9e72" },
  { icon: "Brain", title: "День тишины", desc: "24 часа молчания. Топ-практика, которая решает 90% запросов участников. Вы услышите себя впервые за годы.", color: "#C9A84C" },
  { icon: "Snowflake", title: "Ледяные медитации", desc: "Криотерапия в горной реке. Кортизол падает. Тестостерон растёт. Страх уходит. Ясность приходит.", color: "#4ab8b8" },
  { icon: "Flame", title: "Активные медитации", desc: "Динамические практики Ошо, ШОДХАН и другие. Выброс накопленного стресса через тело.", color: "#C9A84C" },
  { icon: "Dumbbell", title: "Физические практики", desc: "Горные маршруты, кардио, упражнения с весом тела. Тело — инструмент. Когда тело сильное — голова ясная.", color: "#5a9e72" },
  { icon: "Users", title: "Групповые сессии", desc: "1 час на каждого участника. Коллективный разум группы решает личный запрос. Это работает.", color: "#C9A84C" },
  { icon: "Compass", title: "День выживания", desc: "24 часа без еды, воды и жилья. Когда человек выживает — он понимает, чего хочет на самом деле.", color: "#4ab8b8" },
  { icon: "BookOpen", title: "Дневник практик", desc: "Ежедневное ведение дневника. Мысли, инсайты, решения — в письменной форме. Инструмент, который вы заберёте домой.", color: "#5a9e72" },
];

const forWhom = [
  { num: "01", text: "Вы добились успеха — жизнь наладилась, но вы не помните, когда последний раз чувствовали себя по-настоящему счастливым" },
  { num: "02", text: "Вы достигли всего, что планировали — и не знаете, зачем" },
  { num: "03", text: "Выгорание стало фоном. Раздражение — нормой. Пустота — вашим утром" },
  { num: "04", text: "Вы в кризисе: отношения, бизнес, смысл. Всё одновременно" },
  { num: "05", text: "Вы хотите принять важное решение — но голова забита шумом" },
  { num: "06", text: "Вы чувствуете, что потеряли себя. И хотите вернуться" },
];

const advantages = [
  { icon: "MapPin", title: "Архыз, 2200 м", desc: "Горный воздух, чистая вода, отсутствие цивилизационного шума — тело восстанавливается само.", color: "#5a9e72" },
  { icon: "Shield", title: "Без гаджетов", desc: "Телефоны сдаются на входе. Мозг получает настоящий отдых впервые за годы. Это меняет всё.", color: "#C9A84C" },
  { icon: "Zap", title: "Гормональный ребут", desc: "Холод, движение, голодание, дыхание — доказанные методы восстановления гормональной системы.", color: "#4ab8b8" },
  { icon: "Target", title: "Конкретный результат", desc: "Вы уезжаете с планом. Не с ощущением — с конкретными шагами на следующие 90 дней.", color: "#C9A84C" },
  { icon: "Crown", title: "Элитный контекст", desc: "Только мужчины с высоким уровнем жизни. Нетворкинг, который стоит больше ретрита.", color: "#5a9e72" },
  { icon: "Heart", title: "Безопасность", desc: "Медицинское сопровождение, опытные фасилитаторы, проверенные практики. Никакого риска.", color: "#4ab8b8" },
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
    url: "https://watbot.ru/w/B3pT",
    features: [
      "Детокс от гаджетов и шума",
      "Дыхательные практики",
      "Групповые медитации",
      "Физические практики",
      "Здоровое питание (готовим сами)",
      "Размещение в горном лагере",
      "Дневник практик",
    ],
    bonus: "Мерч ретрита",
    highlight: false,
  },
  {
    days: "5 дней",
    title: "Трансформация",
    price: "500 000",
    url: "https://watbot.ru/w/B3pV",
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
    url: "https://watbot.ru/w/B3pW",
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
  { q: "Условия оплаты", a: "Место закрепляется после предоплаты 30%. Остаток оплачивается за 14 дней до начала. Доступны банковский перевод и карта." },
  { q: "Условия возврата и отмены", a: "В случае отмены ретрита с нашей стороны возвращается полная сумма за минусом комиссии платёжной системы. В случае отказа от участия после прибытия на площадку возвращается часть суммы за минусом себестоимости уже оказанных услуг ретрита." },
  { q: "Как забронировать место?", a: "Оставьте заявку — мы позвоним в течение 24 часов для знакомства и ответов на вопросы. Место закрепляется после предоплаты 30%." },
];

// SVG leaf decorator
const Leaf = ({ style, className }: { style?: CSSProperties; className?: string }) => (
  <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className}>
    <path d="M30 78 C30 78 5 55 5 30 C5 13 16 2 30 2 C44 2 55 13 55 30 C55 55 30 78 30 78Z" fill="currentColor" opacity="0.85"/>
    <path d="M30 78 L30 15" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5"/>
    <path d="M30 35 C20 28 10 30 10 30" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
    <path d="M30 50 C40 43 50 45 50 45" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
  </svg>
);

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
          <div className="font-display text-xl tracking-widest font-bold" style={{ color: "#C9A84C" }}>
            ВОЗВРАЩЕНИЕ К СЕБЕ
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[["Практики","practices"],["Программа","program"],["Цены","prices"],["Отзывы","testimonials"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="font-body text-xs tracking-widest uppercase transition-colors hover:text-cream"
                style={{ color: "rgba(240,235,224,0.45)" }}>
                {label}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo("prices")} className="btn-gold hidden md:block">Забронировать</button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "#C9A84C" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0D0D0D]/98 border-t" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
            <div className="px-6 py-4 space-y-4">
              {[["Практики","practices"],["Программа","program"],["Цены","prices"],["Отзывы","testimonials"]].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="block font-body text-xs tracking-widest uppercase w-full text-left" style={{ color: "rgba(240,235,224,0.55)" }}>{label}</button>
              ))}
              <button onClick={() => scrollTo("prices")} className="btn-gold w-full mt-4">Забронировать</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Горы Архыза" className="w-full h-full object-cover" style={{ filter: "brightness(0.35) saturate(0.8)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.85) 100%)" }} />
          {/* Forest & teal overlays */}
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: "linear-gradient(to top, rgba(61,107,79,0.12), transparent)" }} />
        </div>

        {/* Floating leaves */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Leaf style={{ position: "absolute", top: "15%", right: "8%", width: 40, color: "rgba(90,158,114,0.22)" }} className="leaf-float" />
          <Leaf style={{ position: "absolute", top: "35%", right: "18%", width: 24, color: "rgba(90,158,114,0.15)" }} className="leaf-float-2" />
          <Leaf style={{ position: "absolute", bottom: "25%", right: "5%", width: 56, color: "rgba(74,184,184,0.12)" }} className="leaf-float-3" />
          <Leaf style={{ position: "absolute", top: "60%", right: "30%", width: 20, color: "rgba(90,158,114,0.1)" }} className="leaf-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="tag-label mb-8 reveal">Мужской ретрит · Архыз · 2200 м</div>
            <h1 className="font-display font-bold leading-none mb-8 reveal" style={{ fontSize: "clamp(3.5rem,10vw,7.5rem)" }}>
              ВОЗВРАЩЕНИЕ<br />
              <span style={{ color: "#C9A84C" }}>К СЕБЕ</span>
            </h1>
            <p className="font-body text-base md:text-lg leading-relaxed mb-4 reveal max-w-xl" style={{ color: "rgba(240,235,224,0.7)" }}>
              Мужской трансформационный ретрит в горах Архыза. 7 дней без телефонов, без интернета, без дешёвого дофамина.
            </p>
            <p className="font-body text-sm leading-relaxed mb-10 reveal max-w-lg" style={{ color: "rgba(74,184,184,0.85)" }}>
              Ледяные медитации в горной реке · Тишина · Дыхание · Лес
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
              { num: "3 ГОДА", text: "средний срок выгорания без вмешательства" },
              { num: "12", text: "участников максимум — глубокая работа" },
              { num: "90%", text: "запросов решает день тишины" },
            ].map((s, i) => (
              <div key={i} className="bg-[#0D0D0D] p-8 md:p-10 reveal">
                <div className="stat-big mb-3" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", color: "#C9A84C" }}>{s.num}</div>
                <div className="font-body text-xs leading-relaxed" style={{ color: "#888075" }}>{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* forest accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "linear-gradient(to bottom, transparent, rgba(90,158,114,0.4), transparent)" }} />
        <div className="absolute right-0 top-0 w-1/2 h-full" style={{ opacity: 0.18 }}>
          <img src={MEDITATION_IMG} alt="" className="w-full h-full object-cover" style={{ filter: "grayscale(20%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0D0D0D, transparent)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <div className="tag-label mb-6 reveal">Вы узнаёте себя?</div>
            <h2 className="font-display font-bold mb-16 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
              УСТАЛОСТЬ СТАЛА<br />
              <span style={{ color: "#C9A84C" }}>ВАШИМ ФОНОМ</span>
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
                <div key={i} className="flex items-start gap-6 py-6 reveal" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="font-display font-bold text-2xl transition-opacity" style={{ color: "rgba(201,168,76,0.3)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-base leading-relaxed" style={{ color: "rgba(240,235,224,0.65)" }}>{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 border reveal" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
              <p className="font-display font-bold text-2xl" style={{ color: "#C9A84C" }}>
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
          <h2 className="font-display font-bold text-center mb-20 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
            ЭТОТ РЕТРИТ<br />
            <span style={{ color: "#C9A84C" }}>ДЛЯ ВАС, ЕСЛИ...</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1px", background: "rgba(201,168,76,0.05)" }}>
            {forWhom.map((item, i) => (
              <div key={i} className="bg-[#0D0D0D] p-10 transition-all duration-300 reveal" style={{ border: "1px solid transparent" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(90,158,114,0.3)"; (e.currentTarget as HTMLElement).style.background = "rgba(61,107,79,0.06)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "transparent"; (e.currentTarget as HTMLElement).style.background = "#0D0D0D"; }}
              >
                <div className="font-display font-bold leading-none mb-4" style={{ fontSize: "5rem", color: "rgba(201,168,76,0.1)" }}>{item.num}</div>
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
          <h2 className="font-display font-bold mb-2 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>ПРОГРАММА ДНЯ</h2>
          <p className="font-body text-sm mb-3 reveal" style={{ color: "#888075" }}>Каждый день ретрита уникальный — расписание может меняться. Программа примерная.</p>
          <p className="font-body text-xs mb-20 reveal" style={{ color: "rgba(90,158,114,0.8)" }}>Каждый вечер — ведение личного дневника практик</p>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              {[
                { time: "05:30", activity: "Подъём. Контрастный душ", tag: "тело" },
                { time: "06:00", activity: "Утренняя медитация на рассвете", tag: "практика" },
                { time: "07:00", activity: "Физические практики: горные маршруты, кардио", tag: "тело" },
                { time: "09:00", activity: "Завтрак (готовим вместе)", tag: "питание" },
                { time: "10:00", activity: "Дыхательные сессии (пранаяма, ШОДХАН)", tag: "практика" },
                { time: "12:00", activity: "Командные задачи и тимбилдинг", tag: "группа" },
                { time: "14:00", activity: "Обед. Время для интеграции", tag: "питание" },
                { time: "15:00", activity: "Мастер-класс от эксперта", tag: "знания" },
                { time: "17:00", activity: "Групповая сессия (1 час на человека)", tag: "группа" },
                { time: "19:00", activity: "Ужин. Вечерняя беседа", tag: "питание" },
                { time: "20:30", activity: "Ледяная медитация в горной реке", tag: "практика" },
                { time: "21:30", activity: "Ведение дневника практик", tag: "рефлексия" },
                { time: "22:30", activity: "Отбой. Тишина", tag: "восстановление" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 py-4 reveal" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="font-display font-bold text-xl w-16 shrink-0" style={{ color: "rgba(201,168,76,0.45)" }}>{item.time}</span>
                  <span className="font-body text-sm flex-1" style={{ color: "rgba(240,235,224,0.65)" }}>{item.activity}</span>
                  <span className="tag-label shrink-0 hidden md:block" style={{ color: item.tag === "практика" ? "rgba(74,184,184,0.5)" : item.tag === "рефлексия" ? "rgba(90,158,114,0.5)" : "rgba(136,128,117,0.4)" }}>{item.tag}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <div className="relative h-80 overflow-hidden">
                <img src={ICE_IMG} alt="Ледяная медитация" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.85), transparent)" }} />
                <div className="absolute bottom-6 left-6">
                  <div className="tag-label mb-1" style={{ color: "#4ab8b8" }}>Ледяная медитация</div>
                  <p className="font-body text-xs max-w-xs" style={{ color: "rgba(240,235,224,0.55)" }}>Горная река при +4°C. Это лечит быстрее любого психолога.</p>
                </div>
              </div>
              <div className="p-8 border" style={{ borderColor: "rgba(90,158,114,0.25)", background: "rgba(61,107,79,0.05)" }}>
                <div className="tag-label mb-4" style={{ color: "#5a9e72" }}>Специальные дни</div>
                <div className="space-y-4">
                  {[
                    { label: "День тишины", desc: "24 часа полного молчания", color: "#C9A84C" },
                    { label: "Ледяные медитации", desc: "Криотерапия в горной реке +4°C", color: "#4ab8b8" },
                    { label: "День выживания", desc: "24 часа автономно в природе", color: "#5a9e72" },
                    { label: "Дневник практик", desc: "Каждый вечер — рефлексия на бумаге", color: "#5a9e72" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-1 shrink-0" style={{ background: s.color }} />
                      <div>
                        <div className="font-body text-sm font-semibold" style={{ color: s.color }}>{s.label}</div>
                        <div className="font-body text-xs" style={{ color: "#888075" }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ICE MEDITATION INFOGRAPHIC */}
      <section className="py-32 px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0d0d0d 0%, rgba(13,30,35,1) 50%, #0d0d0d 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: "20%", left: "5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,142,142,0.07) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "20%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(74,184,184,0.05) 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="tag-label mb-6 text-center reveal" style={{ color: "#4ab8b8" }}>Ледяные медитации</div>
          <h2 className="font-display font-bold text-center mb-6 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
            КАК ХОЛОД<br />
            <span style={{ color: "#4ab8b8" }}>МЕНЯЕТ МОЗГ</span>
          </h2>
          <p className="font-body text-sm text-center mb-16 reveal max-w-lg mx-auto" style={{ color: "rgba(240,235,224,0.5)" }}>
            Горная река Архыза, +4–6°C круглый год. 3–10 минут в воде — и биохимия мозга меняется навсегда
          </p>

          {/* Ripple effect */}
          <div className="flex justify-center mb-16 reveal">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border ripple-ring" style={{ borderColor: "rgba(74,184,184,0.4)" }} />
              <div className="absolute inset-0 rounded-full border ripple-ring-2" style={{ borderColor: "rgba(74,184,184,0.25)" }} />
              <div className="absolute inset-0 rounded-full border ripple-ring-3" style={{ borderColor: "rgba(74,184,184,0.12)" }} />
              <div className="w-28 h-28 rounded-full flex items-center justify-center" style={{ background: "rgba(45,142,142,0.15)", border: "1px solid rgba(74,184,184,0.4)" }}>
                <Icon name="Snowflake" size={40} style={{ color: "#4ab8b8" } as IconStyle} />
              </div>
            </div>
          </div>

          {/* Hormones infographic */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                name: "Кортизол",
                direction: "↓ −35%",
                dirColor: "#ef4444",
                icon: "TrendingDown",
                desc: "Главный гормон стресса. После холодовой практики уровень кортизола падает на 35% и остаётся низким 48–72 часа. Хроническое тревожное состояние уходит.",
                effect: "Меньше тревоги, меньше реактивности, больше спокойствия",
                iconColor: "#ef4444",
              },
              {
                name: "Тестостерон",
                direction: "↑ +15–25%",
                dirColor: "#5a9e72",
                icon: "TrendingUp",
                desc: "Холод стимулирует выработку тестостерона. Это гормон силы, решимости, сексуальной энергии. После курса ледяных медитаций уровень повышается на 15–25%.",
                effect: "Больше энергии, решимости, ясности в принятии решений",
                iconColor: "#5a9e72",
              },
              {
                name: "Дофамин",
                direction: "↑ +250%",
                dirColor: "#C9A84C",
                icon: "Zap",
                desc: "Холодная вода вызывает выброс дофамина — в 2,5 раза выше нормы. Это устойчивый подъём без зависимости. Не как от кофе или телефона — длится часами.",
                effect: "Устойчивая мотивация, удовольствие без стимуляторов",
                iconColor: "#C9A84C",
              },
              {
                name: "Норадреналин",
                direction: "↑ +300%",
                dirColor: "#4ab8b8",
                icon: "Activity",
                desc: "Выброс норадреналина — гормона фокуса и внимания — увеличивается в 3 раза. Мозг становится острее. Шум в голове исчезает. Мысли — чёткими.",
                effect: "Фокус, ясность, концентрация без стимуляторов",
                iconColor: "#4ab8b8",
              },
            ].map((h, i) => (
              <div key={i} className="p-6 reveal" style={{ border: "1px solid rgba(74,184,184,0.15)", background: "rgba(45,142,142,0.04)" }}>
                <div className="flex items-center justify-between mb-4">
                  <Icon name={h.icon} size={20} style={{ color: h.iconColor } as IconStyle} />
                  <span className="font-display font-bold text-lg" style={{ color: h.dirColor }}>{h.direction}</span>
                </div>
                <div className="font-display font-bold text-xl mb-3" style={{ color: "#f0ebe0" }}>{h.name}</div>
                <p className="font-body text-xs leading-relaxed mb-3" style={{ color: "rgba(240,235,224,0.5)" }}>{h.desc}</p>
                <p className="font-body text-xs font-semibold" style={{ color: h.iconColor }}>{h.effect}</p>
              </div>
            ))}
          </div>

          {/* Cold water protocol */}
          <div className="grid md:grid-cols-3 gap-6 reveal">
            {[
              { time: "0–1 мин", title: "Шок", desc: "Тело сопротивляется. Дыхание частое. Мозг кричит «выйди». Именно здесь начинается тренировка воли.", color: "#ef4444" },
              { time: "1–5 мин", title: "Адаптация", desc: "Тело привыкает. Дыхание замедляется. Выброс дофамина и норадреналина достигает пика. Страх уходит.", color: "#C9A84C" },
              { time: "5–10 мин", title: "Медитация", desc: "Полная тишина внутри. Мозг в состоянии потока. Мысли острые. Решения приходят сами. Это и есть ледяная медитация.", color: "#4ab8b8" },
            ].map((p, i) => (
              <div key={i} className="p-6" style={{ border: `1px solid ${p.color}22`, background: `${p.color}08` }}>
                <div className="tag-label mb-2" style={{ color: p.color }}>{p.time}</div>
                <div className="font-display font-bold text-2xl mb-3" style={{ color: p.color }}>{p.title}</div>
                <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(240,235,224,0.55)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATE BLOCK */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Leaves decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Leaf style={{ position: "absolute", top: "10%", right: "3%", width: 70, color: "rgba(90,158,114,0.1)" }} className="leaf-float-2" />
          <Leaf style={{ position: "absolute", bottom: "15%", left: "2%", width: 50, color: "rgba(90,158,114,0.08)" }} className="leaf-float-3" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="tag-label mb-6 text-center reveal" style={{ color: "#5a9e72" }}>Ключевой принцип ретрита</div>
          <h2 className="font-display font-bold text-center mb-4 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
            СОСТОЯНИЕ —<br />
            <span style={{ color: "#5a9e72" }}>ЭТО ВСЁ</span>
          </h2>
          <p className="font-body text-base text-center mb-20 reveal max-w-2xl mx-auto" style={{ color: "rgba(240,235,224,0.55)" }}>
            Ваш доход, отношения, решения, удовольствие от жизни — всё зависит не от внешних обстоятельств, а от вашего внутреннего состояния
          </p>

          <div className="grid md:grid-cols-3 gap-0 mb-16" style={{ border: "1px solid rgba(90,158,114,0.15)" }}>
            {[
              {
                title: "Состояние создаёт реальность",
                icon: "Eye",
                desc: "Мозг в состоянии стресса буквально видит мир иначе. Угрозы кажутся крупнее. Возможности — невидимы. Один и тот же проект в ресурсном состоянии выглядит как шанс, в истощённом — как риск.",
                color: "#5a9e72",
              },
              {
                title: "Состояние управляет решениями",
                icon: "GitBranch",
                desc: "87% важных решений принимается в состоянии усталости, стресса или тревоги. Именно поэтому они часто ошибочны. Ресурсный мозг видит больше вариантов, оценивает трезво, выбирает лучшее.",
                color: "#4ab8b8",
              },
              {
                title: "Состояние определяет поведение",
                icon: "Repeat",
                desc: "Вы не меняете поведение усилием воли — вы меняете состояние. Человек в ресурсном состоянии автоматически действует иначе: говорит по-другому, принимает другие решения, создаёт другие результаты.",
                color: "#C9A84C",
              },
            ].map((s, i) => (
              <div key={i} className="p-10 reveal" style={{ borderRight: i < 2 ? "1px solid rgba(90,158,114,0.1)" : "none", background: i === 1 ? "rgba(61,107,79,0.04)" : "transparent" }}>
                <Icon name={s.icon} size={32} className="mb-6" style={{ color: s.color } as IconStyle} />
                <h3 className="font-display font-bold text-xl mb-4" style={{ color: s.color }}>{s.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(240,235,224,0.55)" }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-10 text-center reveal" style={{ border: "1px solid rgba(90,158,114,0.2)", background: "rgba(61,107,79,0.05)" }}>
            <p className="font-display font-bold mb-4" style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)", color: "#5a9e72" }}>
              РЕТРИТ — ЭТО ПРАКТИКА УПРАВЛЕНИЯ СОСТОЯНИЕМ
            </p>
            <p className="font-body text-sm max-w-2xl mx-auto" style={{ color: "rgba(240,235,224,0.55)" }}>
              Не «перезарядка батарейки». Не отпуск. Это набор инструментов — дыхание, холод, тишина, движение, дневник — которые вы освоите настолько, что сможете применять самостоятельно каждый день
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU TAKE HOME */}
      <section className="py-32 px-6" style={{ background: "rgba(42,37,32,0.15)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 text-center reveal" style={{ color: "#5a9e72" }}>По возвращении домой</div>
          <h2 className="font-display font-bold text-center mb-6 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
            ВЫ ЗАБЕРЁТЕ<br />
            <span style={{ color: "#5a9e72" }}>С СОБОЙ</span>
          </h2>
          <p className="font-body text-sm text-center mb-16 reveal max-w-xl mx-auto" style={{ color: "rgba(240,235,224,0.45)" }}>
            Не ощущение. Конкретные инструменты, которые работают ежедневно
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "BookOpen", title: "Дневник практик", desc: "Заполненный дневник всех 7 дней — мысли, инсайты, решения. Ваша личная карта возвращения к себе.", color: "#5a9e72" },
              { icon: "Wind", title: "Дыхательные техники", desc: "2–3 практики, которые вы освоили до автоматизма. Включают состояние за 10–15 минут в любой точке мира.", color: "#4ab8b8" },
              { icon: "Snowflake", title: "Холодовой протокол", desc: "Простая система утреннего холода, которую можно делать под контрастным душем дома. 3 минуты в день.", color: "#4ab8b8" },
              { icon: "Target", title: "90-дневный план", desc: "Конкретные шаги на ближайшие 90 дней. Не мечты — задачи с датами и метриками. Создаётся на 6-й день.", color: "#C9A84C" },
              { icon: "Brain", title: "Практики тишины", desc: "Короткие медитации молчания — от 5 минут. Возвращают в ресурсное состояние без медитационной подушки и класса.", color: "#C9A84C" },
              { icon: "Users", title: "Сообщество", desc: "Закрытый чат выпускников. Люди, которые прошли то же. Поддержка, контакты, партнёрства.", color: "#5a9e72" },
            ].map((item, i) => (
              <div key={i} className="p-8 reveal transition-all duration-300" style={{ border: "1px solid rgba(90,158,114,0.12)", background: "rgba(61,107,79,0.03)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(90,158,114,0.3)"; (e.currentTarget as HTMLElement).style.background = "rgba(61,107,79,0.07)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(90,158,114,0.12)"; (e.currentTarget as HTMLElement).style.background = "rgba(61,107,79,0.03)"; }}
              >
                <Icon name={item.icon} size={28} className="mb-4" style={{ color: item.color } as IconStyle} />
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: "#f0ebe0" }}>{item.title}</h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: "#888075" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICES */}
      <section id="practices" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 text-center reveal">Методы работы</div>
          <h2 className="font-display font-bold text-center mb-20 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
            8 ПРАКТИК<br />
            <span style={{ color: "#C9A84C" }}>ТРАНСФОРМАЦИИ</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0" style={{ border: "1px solid rgba(201,168,76,0.08)" }}>
            {practices.map((item, i) => (
              <div key={i} className="p-8 transition-all duration-300 reveal" style={{ border: "1px solid rgba(201,168,76,0.08)", background: "rgba(255,255,255,0.02)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${item.color}33`; (e.currentTarget as HTMLElement).style.background = `${item.color}08`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.08)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}
              >
                <Icon name={item.icon} size={32} className="mb-4" style={{ color: item.color } as IconStyle} />
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: "#f0ebe0" }}>{item.title}</h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: "#888075" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-32 px-6 relative overflow-hidden" style={{ background: "rgba(13,20,15,0.9)" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Leaf style={{ position: "absolute", top: "5%", left: "3%", width: 90, color: "rgba(90,158,114,0.12)" }} className="leaf-float" />
          <Leaf style={{ position: "absolute", top: "30%", right: "2%", width: 60, color: "rgba(90,158,114,0.08)" }} className="leaf-float-2" />
          <Leaf style={{ position: "absolute", bottom: "10%", left: "15%", width: 45, color: "rgba(74,184,184,0.1)" }} className="leaf-float-3" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="tag-label mb-6 text-center reveal" style={{ color: "#5a9e72" }}>Место</div>
          <h2 className="font-display font-bold text-center mb-20 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
            ПРИРОДА КАК<br />
            <span style={{ color: "#5a9e72" }}>ТЕРАПИЯ</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "Mountain", title: "Горный воздух", desc: "2200 м над уровнем моря. Насыщенность кислородом, чистота, тишина. Мозг восстанавливается в первые 24 часа.", color: "#5a9e72" },
              { icon: "Droplets", title: "Горная река", desc: "Температура +4–6°C круглый год. Ледяные медитации здесь — это другой опыт.", color: "#4ab8b8" },
              { icon: "TreePine", title: "Лес и тишина", desc: "Отсутствие городского шума снижает уровень кортизола на 21% за первые 48 часов. Это не метафора — это физиология.", color: "#5a9e72" },
            ].map((item, i) => (
              <div key={i} className="p-8 transition-all duration-300 reveal" style={{ border: "1px solid rgba(90,158,114,0.15)", background: "rgba(61,107,79,0.04)" }}>
                <Icon name={item.icon} size={32} className="mb-4" style={{ color: item.color } as IconStyle} />
                <h3 className="font-display font-bold text-2xl mb-3" style={{ color: "#f0ebe0" }}>{item.title}</h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: "#888075" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 text-center reveal">Почему мы</div>
          <h2 className="font-display font-bold text-center mb-20 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
            6 ПРИЧИН<br />
            <span style={{ color: "#C9A84C" }}>ВЫБРАТЬ НАС</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0" style={{ border: "1px solid rgba(201,168,76,0.08)" }}>
            {advantages.map((adv, i) => (
              <div key={i} className="p-10 transition-all duration-300 reveal" style={{ border: "1px solid transparent" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${adv.color}33`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "transparent"; }}
              >
                <Icon name={adv.icon} size={32} className="mb-6" style={{ color: adv.color } as IconStyle} />
                <h3 className="font-display font-bold text-2xl mb-3" style={{ color: "#f0ebe0" }}>{adv.title}</h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: "#888075" }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY 7 DAYS */}
      <section className="py-32 px-6" style={{ background: "rgba(42,37,32,0.15)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 text-center reveal">Архитектура времени</div>
          <h2 className="font-display font-bold text-center mb-20 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
            ПОЧЕМУ<br />
            <span style={{ color: "#C9A84C" }}>7 ДНЕЙ?</span>
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />
            <div className="grid md:grid-cols-5 gap-8">
              {whySevenDays.map((w, i) => (
                <div key={i} className="text-center reveal">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6 mx-auto">
                    <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(201,168,76,0.25)" }} />
                    <span className="font-display font-bold" style={{ fontSize: "1.5rem", color: "#C9A84C" }}>{w.day}</span>
                  </div>
                  <div className="font-display font-bold text-2xl mb-3" style={{ color: "#f0ebe0" }}>{w.title}</div>
                  <p className="font-body text-xs leading-relaxed" style={{ color: "#888075" }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 text-center reveal">Результаты</div>
          <h2 className="font-display font-bold text-center mb-20 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
            ИСТОРИИ<br />
            <span style={{ color: "#C9A84C" }}>ВОЗВРАЩЕНИЯ</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-10 reveal" style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(255,255,255,0.02)" }}>
                <div className="font-body font-bold text-sm mb-1" style={{ color: "#f0ebe0" }}>{t.name}</div>
                <div className="tag-label mb-6" style={{ color: "#888075" }}>{t.age}</div>
                <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "rgba(240,235,224,0.6)" }}>"{t.text}"</p>
                <div className="pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
                  <div className="tag-label mb-2" style={{ color: "#5a9e72" }}>Результат</div>
                  <p className="font-body text-xs leading-relaxed" style={{ color: "#5a9e72" }}>{t.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-32 px-6" style={{ background: "rgba(42,37,32,0.15)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="tag-label mb-6 text-center reveal">Инвестиция</div>
          <h2 className="font-display font-bold text-center mb-20 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
            ВЫБЕРИТЕ<br />
            <span style={{ color: "#C9A84C" }}>ФОРМАТ</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {prices.map((plan, i) => (
              <div key={i} className="p-10 reveal flex flex-col transition-all duration-300" style={{
                border: plan.highlight ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(255,255,255,0.07)",
                background: plan.highlight ? "rgba(201,168,76,0.05)" : "rgba(255,255,255,0.02)",
              }}>
                {plan.highlight && <div className="tag-label mb-4" style={{ color: "#C9A84C" }}>Наиболее популярный</div>}
                <div className="tag-label mb-2" style={{ color: "#888075" }}>{plan.days}</div>
                <h3 className="font-display font-bold text-3xl mb-6" style={{ color: "#f0ebe0" }}>{plan.title}</h3>
                <div className="stat-big mb-8" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", color: "#C9A84C" }}>
                  {plan.price} <span className="font-body font-normal text-sm" style={{ color: "#888075" }}>₽</span>
                </div>
                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Icon name="Check" size={14} className="mt-0.5 shrink-0" style={{ color: "#5a9e72" } as IconStyle} />
                      <span className="font-body text-xs" style={{ color: "rgba(240,235,224,0.65)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 mb-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="tag-label mb-1" style={{ color: "#5a9e72" }}>Бонус</div>
                  <p className="font-body text-xs" style={{ color: "#888075" }}>{plan.bonus}</p>
                </div>
                <a href={plan.url} target="_blank" rel="noopener noreferrer"
                  className={plan.highlight ? "btn-gold w-full text-center block" : "btn-outline-gold w-full text-center block"}>
                  Забронировать
                </a>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-center mt-8 reveal" style={{ color: "rgba(136,128,117,0.6)" }}>
            Оплата 30% при бронировании, остаток за 14 дней до начала · Трансфер организуется отдельно
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="tag-label mb-6 text-center reveal">Вопросы</div>
          <h2 className="font-display font-bold text-center mb-20 reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
            ЧАСТО<br />
            <span style={{ color: "#C9A84C" }}>СПРАШИВАЮТ</span>
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between gap-4 text-left transition-colors"
                  style={{ color: openFaq === i ? "#f0ebe0" : "rgba(240,235,224,0.7)" }}
                >
                  <span className="font-display font-bold text-xl">{faq.q}</span>
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
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(61,107,79,0.06) 0%, transparent 50%, rgba(45,142,142,0.06) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="tag-label mb-8 reveal">Следующий поток</div>
          <h2 className="font-display font-bold leading-none mb-8 reveal" style={{ fontSize: "clamp(3.5rem,10vw,8rem)" }}>
            ВЕРНИТЕСЬ<br />
            <span className="gold-text-gradient">К СЕБЕ</span>
          </h2>
          <p className="font-body text-base mb-4 reveal" style={{ color: "rgba(240,235,224,0.5)" }}>
            Июль 2026 · Архыз · 12 мест
          </p>
          <p className="font-body text-sm max-w-lg mx-auto leading-relaxed mb-14 reveal" style={{ color: "#888075" }}>
            Свободных мест остаётся меньше с каждым днём. Оставьте заявку — мы позвоним в течение 24 часов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <a href="https://watbot.ru/w/B3pV" target="_blank" rel="noopener noreferrer" className="btn-gold">Оставить заявку</a>
            <button onClick={() => scrollTo("prices")} className="btn-outline-gold">Посмотреть цены</button>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-8 reveal">
            {["Без телефонов", "Без интернета", "Только мужчины", "До 12 человек", "2200 м над уровнем моря"].map((tag, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full" style={{ background: "#5a9e72" }} />
                <span className="tag-label" style={{ color: "#888075" }}>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display font-bold text-xl tracking-widest" style={{ color: "#C9A84C" }}>
            ВОЗВРАЩЕНИЕ К СЕБЕ
          </div>
          <div className="font-body text-xs text-center" style={{ color: "#888075" }}>
            Архыз, Краснодарский край · Все вопросы через форму заявки
          </div>
          <div className="font-body text-xs" style={{ color: "rgba(136,128,117,0.35)" }}>© 2026</div>
        </div>
      </footer>

    </div>
  );
}