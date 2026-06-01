import React from "react";
import { CaseGallerySlideshow } from "./CaseGallerySlideshow";
import { Typography } from "./Typography";

type Profile = {
  name: string;
  role: string;
  email: string;
  handle: string;
  intro: string[];
};

type Project = {
  id: string;
  title: string;
  type: string;
  description: string;
  mediaType?: "image" | "video";
  image?: string;
  video?: string;
  featured?: boolean;
  showreel?: boolean;
  caseGallery?: Partial<Record<2 | 3 | 4 | 5 | 6, string>>;
  caseGallerySlideshow?: Partial<Record<2 | 3 | 4 | 5 | 6, string[]>>;
  year?: string;
  caseRole?: string;
};

function CaseGallerySlot({ src, aspect = "4/3" }: { src?: string; aspect?: "4/3" | "16/10" }) {
  const aspectClass = aspect === "16/10" ? "aspect-[16/10]" : "aspect-[4/3]";
  return (
    <div className={`${aspectClass} overflow-hidden bg-neutral-200`}>
      {src ? <img src={src} alt="" className="h-full w-full object-cover" /> : null}
    </div>
  );
}

const profile: Profile = {
  name: "Саша\nгоршкова",
  role: "сommunication designer\nbrand-designer",
  email: "spacelesspizza@gmail.com",
  handle: "@casperology",
  intro: ["спецпроекты", "коммуникации", "smm", "гайды", "брендинг", "b2b b2c"],
};

const projects: Project[] = [
  {
    id: "02",
    title: "PRO WB",
    type: "айдентика, гайдлайны, дизайн-саппорт",
    year: "2025",
    caseRole: "коммуникационный дизайнер",
    description: `pro wb — образовательный проект для поддержки предпринимателей.

задачей было проработать новый фирменный стиль, который одновременно мэтчился бы и с вб, и имел свою собственный узнаваемый почерк. в процессе я не стала полностью переделывать старый концепт, взяла из него линии и придумала новую метафору: лестница, по которой поднимается предприниматель. двигаем выше - так родилась эта концепция.

цвета выбраны в соответствии с основными гайдами вб, но с ноткой серьезности.
благодаря визуальной константе адаптивность и разноформатность работы помогает не "замыливать" взгляд пользователя

шаблоны и гайдлайны увеличили скорость работы дизайнеров в 4 раза
>150 презентаций >120 учебных материалов за последние полгода`,
    mediaType: "image",
    image: "/images/pro-wb-cover-v2.png",
    caseGallery: {
      2: "/images/pro-wb-block-2-v2.png",
      3: "/images/pro-wb-block-2.png",
      4: "/images/pro-wb-block-4.png",
      5: "/images/pro-wb-block-5.png",
    },
    caseGallerySlideshow: {
      6: ["/images/pro-wb-block-6-a.png", "/images/pro-wb-block-6-b.png"],
    },
  },
  {
    id: "03",
    title: "Платформа роста",
    type: "гайдлайны, адаптация под разные носители, дизайн-саппорт",
    year: "2026",
    caseRole: "коммуникационный дизайнер",
    description: `платформа роста — образовательный проект для поддержки производителей.

задачей было собрать воедино материалы, которые были разработаны несколькими дизайнерами и методистами параллельно. у заказчиков была проблема в неконсистености презентаций и смм-материалов.

цвета выбраны в соответствии с основными гайдами платформы роста, доработана структура и гайдлайны презентаций. введены новые иллюстрации для более эмоционального дизайна

шаблоны и гайдлайны увеличили скорость работы дизайнеров в 2 раза
>110 презентаций >40 учебных материалов за последние полгода er - 7.5%`,
    mediaType: "image",
    image: "/images/platforma-rosta-cover-v2.png",
    caseGallery: {
      2: "/images/platforma-rosta-block-2.png",
      3: "/images/platforma-rosta-block-3.png",
      4: "/images/platforma-rosta-block-4.png",
      5: "/images/platforma-rosta-block-5.png",
    },
    caseGallerySlideshow: {
      6: ["/images/platforma-rosta-block-6-a.png", "/images/platforma-rosta-block-6-b.png"],
    },
  },
  {
    id: "04",
    title: "RWB Среда",
    type: "айдентика, гайдлайны, адаптация под разные носители, дизайн саппорт",
    year: "2026",
    caseRole: "бренд-дизайнер",
    description: `рвб среда — новый проект rwb, сочетающий в себе все инструменты b2b-сервисов для предпринимателей.

задача: разработать визуал, который не считывался бы как помощь конкретному маркетплейсу. специально для этого был подобран оранжевый цвет — он не подходит ни к одному из нынешних брендов e-сom гигантов.

разработаны гайдлайны, фотостиль, базовые принципы смм, шаблоны презентаций и иллюстрации`,
    mediaType: "image",
    image: "/images/rwb-sreda-cover-v3.png",
    caseGallery: {
      2: "/images/rwb-sreda-block-4.png",
      3: "/images/rwb-sreda-block-3.png",
      4: "/images/rwb-sreda-block-2.png",
      5: "/images/rwb-sreda-block-5.png",
    },
    caseGallerySlideshow: {
      6: ["/images/rwb-sreda-block-6-a.png", "/images/rwb-sreda-block-6-b.png"],
    },
  },
  {
    id: "05",
    title: "spiritism.",
    type: "айдентика, гайдлайн",
    year: "2026",
    caseRole: "арт-директор, креатор, бренд-дизайнер",
    description: `спиритизм — нишевый магазин одежды, выходящий на рынок берлина. хозяева большие фанаты эзотерики.

задачей было разработать узнаваемый стиль для грандж-магазина, но не уйти в слишком сильную "панк" эстетику.

так появились легкие шейпы с полупрозрачностью: это дымчатый вайб магии, и небрежность субкультуры. цвета выбраны с отсылкой на 2007-2010: поколение эмо и тамблер. собраны материалы для мерча, разработан концепт офлайн магазина, базовый брендбук релиз ожидается в второй половине 2026`,
    mediaType: "image",
    image: "/images/spiritism-cover-v2.png",
    caseGallery: {
      2: "/images/spiritism-block-2.png",
      3: "/images/spiritism-block-3-v2.png",
      4: "/images/spiritism-block-4.png",
      5: "/images/spiritism-block-5.png",
    },
    caseGallerySlideshow: {
      6: ["/images/spiritism-block-6-a.png", "/images/spiritism-block-6-b.png"],
    },
  },
];

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const Wrapper: React.ElementType = project.showreel ? "div" : "a";
  const wrapperProps = project.showreel ? {} : { href: `#${project.title}` };
  return (
    <Wrapper {...wrapperProps} className={`group block ${large ? "lg:col-span-2" : ""}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
        {project.mediaType === "video" && project.video ? (
          <video
            src={project.video}
            muted
            loop
            playsInline
            autoPlay
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={project.image ?? ""}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute left-4 top-4 text-xs text-white mix-blend-difference">{project.id}</div>
      </div>
      {!project.showreel && (
        <div className="mt-4 flex items-end justify-between gap-6 border-b border-neutral-300 pb-5">
          <div>
            <h3 className="text-xl font-semibold tracking-tight uppercase">{project.title}</h3>
            <Typography as="p" className="mt-1 text-sm text-neutral-500">
              {project.type}
            </Typography>
          </div>
          <span className="text-2xl transition group-hover:translate-x-1">↗</span>
        </div>
      )}
    </Wrapper>
  );
}

function CaseSection({ project, index }: { project: Project; index: number }) {
  return (
    <section id={index === 0 ? "work" : project.title} className="px-5 py-24 md:px-10 lg:px-14">
      <div className="mb-8 flex items-start justify-between gap-6 text-sm uppercase tracking-tight">
        <Typography as="a" href="#work" className="hover:opacity-50">
          ← к списку работ
        </Typography>
        <span>
          ({String(index + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")})
        </span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
        <aside className="lg:sticky lg:top-10 lg:h-fit">
          <h2 className="text-6xl font-black uppercase leading-[0.85] tracking-tighter md:text-8xl">
            {project.title}
          </h2>
          <Typography
            as="p"
            className="mt-8 max-w-md whitespace-pre-line text-pretty text-lg leading-tight text-neutral-600"
          >
            {project.description}
          </Typography>
          <div className="mt-10 grid max-w-xs grid-cols-[90px_1fr] gap-y-2 text-xs uppercase">
            <span className="text-neutral-400">год</span>
            <span>{project.year ?? "2024"}</span>
            <span className="text-neutral-400">роль</span>
            <Typography as="span">{project.caseRole ?? "Art direction, design"}</Typography>
            <span className="text-neutral-400">задача</span>
            <Typography as="span">{project.type}</Typography>
          </div>
        </aside>

        <div className="space-y-5">
          <div className="aspect-[16/10] overflow-hidden bg-neutral-200">
            {project.mediaType === "video" && project.video ? (
              <video src={project.video} muted loop playsInline autoPlay className="h-full w-full object-cover" />
            ) : (
              <img src={project.image ?? ""} alt="" className="h-full w-full object-cover" />
            )}
          </div>
          <div className="grid grid-cols-2 gap-5">
            <CaseGallerySlot src={project.caseGallery?.[2]} />
            <CaseGallerySlot src={project.caseGallery?.[3]} />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <CaseGallerySlot src={project.caseGallery?.[4]} />
            <CaseGallerySlot src={project.caseGallery?.[5]} />
          </div>
          {project.caseGallerySlideshow?.[6] ? (
            <CaseGallerySlideshow frames={project.caseGallerySlideshow[6]} intervalMs={5000} aspect="16/10" />
          ) : (
            <CaseGallerySlot src={project.caseGallery?.[6]} aspect="16/10" />
          )}
        </div>
      </div>
    </section>
  );
}

export default function PortfolioSite() {
  return (
    <main className="min-h-screen bg-[#f4f3ef] text-neutral-950 selection:bg-neutral-950 selection:text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-[#f4f3ef] px-5 py-5 text-xs font-medium uppercase tracking-tight text-neutral-950 md:px-10 lg:px-14">
        <a href="#top">
          саша
          <br />
          касперолоджи
        </a>
        <div className="flex gap-6">
          <a href="#work">мои работы</a>
          <a href="#about">обо мне</a>
          <a href={`mailto:${profile.email}`}>контакты</a>
        </div>
      </nav>

      <section id="top" className="relative min-h-screen overflow-hidden px-5 pt-28 md:px-10 lg:px-14">
        <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col">
            <div>
              <h1 className="whitespace-pre-line text-7xl font-black uppercase leading-[0.82] tracking-tighter md:text-8xl lg:text-[8.5rem]">
                {profile.name}
              </h1>
              <p className="mt-8 whitespace-pre-line text-xl uppercase leading-tight tracking-tight md:text-2xl">
                {profile.role}
              </p>
              <div className="mt-8 text-lg leading-tight text-neutral-400">
                {profile.intro.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>

              <div className="mt-10 flex gap-6 text-sm">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <span>{profile.handle}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[1003/1024] w-full overflow-hidden">
            <img
              src="/images/hero-v6.png"
              alt="Portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="absolute bottom-8 right-8 text-xs uppercase">scroll ↓</div>
      </section>

      <section id="about" className="px-5 py-28 md:px-10 lg:px-14">
        <div className="border-t border-neutral-300 pt-8">
          <h2 className="text-sm uppercase">обо мне</h2>
          <div className="mt-8 w-full max-w-4xl space-y-6 text-4xl font-semibold leading-[0.95] tracking-tighter md:mt-[96pt] md:max-w-none md:text-6xl md:leading-[1.05]">
            <Typography as="p" className="text-pretty">
              6 лет создаю спец проекты и гайдлайны для bigtech
            </Typography>
            <Typography as="p" className="text-pretty">
              люблю и умею работать на стыке брендинга, коммуникаций и цифровых сервисов
            </Typography>
          </div>
        </div>
      </section>

      {projects.map((project, index) => (
        <CaseSection key={project.title} project={project} index={index} />
      ))}

      <footer className="flex flex-col gap-6 border-t border-neutral-300 px-5 py-8 text-sm md:flex-row md:items-end md:justify-between md:px-10 lg:px-14">
        <span>© 2026</span>
        <a href={`mailto:${profile.email}`} className="text-3xl font-semibold tracking-tight">
          {profile.email}
        </a>
      </footer>
    </main>
  );
}

