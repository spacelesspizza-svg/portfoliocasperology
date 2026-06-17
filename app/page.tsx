import React from "react";
import { CaseGallerySlideshow } from "./CaseGallerySlideshow";
import { CaseGalleryWide } from "./CaseGalleryWide";
import { Typography } from "./Typography";
import { WorksNavMenu } from "./WorksNavMenu";

type Profile = {
  name: string;
  role: string;
  email: string;
  handle: string;
  intro: string;
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
  caseGallery?: Partial<Record<2 | 3 | 4 | 5 | 6 | 7, string>>;
  caseGallerySlideshow?: Partial<Record<2 | 3 | 4 | 5 | 6, string[]>>;
  year?: string;
  caseRole?: string;
  descriptionAfterCover?: string;
  descriptionAfterGalleryRow1?: string;
  descriptionAfterGalleryRow2?: string;
};

function CaseDescriptionBlock({ text }: { text: string }) {
  return (
    <div className="case-block-mt w-full">
      <Typography
        as="p"
        className="w-full whitespace-pre-line text-pretty text-sm leading-snug text-neutral-600 sm:text-base sm:leading-tight md:text-lg"
      >
        {text}
      </Typography>
    </div>
  );
}

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
  intro:
    "Создаю визуальные системы и коммуникации для брендов — от идеи и концепции до гайдов, презентаций и рекламных материалов. Люблю сочетать системный подход, скорость и креатив.",
};

const projects: Project[] = [
  {
    id: "02",
    title: "PRO WB",
    type: "айдентика, гайдлайны, дизайн-саппорт",
    year: "2025",
    caseRole: "коммуникационный дизайнер",
    description: `образовательный проект для поддержки предпринимателей RWB, занимается обучением на старте и развитием малого и среднего бизнеса.`,
    descriptionAfterCover: `задачей было проработать новый фирменный стиль, который одновременно мэтчился бы и с Wildberries, и имел свою собственный узнаваемый почерк. в процессе я не стала полностью переделывать старый концепт, взяла из него линии и придумала новую метафору: лестница, по которой поднимается предприниматель. двигаем выше — так родилась эта концепция.`,
    descriptionAfterGalleryRow1: `цвета выбраны в соответствии с основными гайдами wildberries, но с ноткой серьезности.
благодаря визуальной константе адаптивность и разноформатность работы помогает не "замыливать" взгляд пользователя.`,
    descriptionAfterGalleryRow2: `шаблоны и гайдлайны увеличили скорость работы дизайнеров в 4 раза.
>150 презентаций >120 учебных материалов за последние полгода.`,
    mediaType: "image",
    image: "/images/pro-wb-cover-2048.png",
    caseGallery: {
      2: "/images/pro-wb-block-2-v2.png",
      3: "/images/pro-wb-block-2.png",
      4: "/images/pro-wb-block-4-v2.png",
      5: "/images/pro-wb-block-5-v2.png",
      7: "/images/pro-wb-block-7-v2.png",
    },
    caseGallerySlideshow: {
      6: [
        "/images/pro-wb-block-6-a-v2.png",
        "/images/pro-wb-block-6-c.png",
      ],
    },
  },
  {
    id: "03",
    title: "Платформа роста",
    type: "гайдлайны, адаптация под разные носители, дизайн-саппорт",
    year: "2026",
    caseRole: "коммуникационный дизайнер",
    description: `образовательный проект для поддержки селлеров RWB. занимается поддержкой и предоставлением помощи предпринимателям, которые развивают собственное производство.`,
    descriptionAfterCover: `задачей было собрать воедино материалы, которые были разработаны несколькими дизайнерами и методистами параллельно. у заказчиков была проблема в неконсистености презентаций и смм-материалов.`,
    descriptionAfterGalleryRow2: `цвета выбраны в соответствии с основными гайдами платформы роста, доработана структура и гайдлайны презентаций. введены новые иллюстрации для более эмоционального дизайна.

шаблоны и гайдлайны увеличили скорость работы дизайнеров в 2 раза.
>110 презентаций >40 учебных материалов за последние полгода ER — 7.5%.`,
    mediaType: "image",
    image: "/images/platforma-rosta-cover-2048.png",
    caseGallery: {
      2: "/images/platforma-rosta-block-2.png",
      3: "/images/platforma-rosta-block-3.png",
      4: "/images/platforma-rosta-block-4.png",
      5: "/images/platforma-rosta-block-5.png",
      7: "/images/platforma-rosta-block-7.png",
    },
    caseGallerySlideshow: {
      6: [
        "/images/platforma-rosta-block-6-a-v3.png",
        "/images/platforma-rosta-block-6-b-v3.png",
        "/images/platforma-rosta-block-6-c-v3.png",
      ],
    },
  },
  {
    id: "04",
    title: "RWB Среда",
    type: "айдентика, гайдлайны, адаптация под разные носители, дизайн саппорт",
    year: "2026",
    caseRole: "бренд-дизайнер",
    description: `новый проект RWB, сочетающий в себе все инструменты b2b-сервисов для предпринимателей.`,
    descriptionAfterCover: `задача: разработать визуал, который не отсылал к конкретному маркетплейсу. специально для этого был подобран оранжевый цвет — он не ассоциируется с айдентикой ни одного из нынешних брендов e-com гигантов.`,
    descriptionAfterGalleryRow2: `разработаны гайдлайны, фотостиль, базовые принципы смм, шаблоны презентаций и иллюстрации.`,
    mediaType: "image",
    image: "/images/rwb-sreda-cover-2048.png",
    caseGallery: {
      2: "/images/rwb-sreda-block-4.png",
      3: "/images/rwb-sreda-block-3.png",
      4: "/images/rwb-sreda-block-4-v2.png",
      5: "/images/rwb-sreda-block-5-v2.png",
      7: "/images/rwb-sreda-block-7.png",
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
    description: `нишевый магазин одежды, выходящий на рынок берлина. хозяева большие фанаты эзотерики и хотели отразить это в айдентике своего бренда.`,
    descriptionAfterCover: `задачей было разработать узнаваемый стиль для грандж-магазина и соединить панк-культуру и эзотерику.`,
    descriptionAfterGalleryRow2: `так появились легкие шейпы с полупрозрачностью: это дымчатый вайб магии, и небрежность субкультуры. цвета выбраны с отсылкой на 2007-2010: поколение эмо и тамблер. собраны материалы для мерча, разработан концепт офлайн магазина, базовый брендбук.`,
    mediaType: "image",
    image: "/images/spiritism-cover-v2.png",
    caseGallery: {
      2: "/images/spiritism-block-2.png",
      3: "/images/spiritism-block-3-v2.png",
      4: "/images/spiritism-block-4-v2.png",
      5: "/images/spiritism-block-5-v2.png",
      6: "/images/spiritism-block-6-v2.png",
      7: "/images/spiritism-block-7-v3.png",
    },
  },
];

const workNavItems = projects.map((project, index) => ({
  title: project.title,
  href: index === 0 ? "#work" : `#${encodeURIComponent(project.title)}`,
}));

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
  const galleryGap = "gap-2 sm:gap-3";
  const galleryMt = (hasDescriptionBefore: boolean) =>
    hasDescriptionBefore ? "case-block-mt" : "mt-2 sm:mt-3";

  return (
    <section id={index === 0 ? "work" : project.title} className="page-px scroll-mt-20 py-12 sm:scroll-mt-24 sm:py-16 md:py-24">
      <div className="w-full">
        <div className="mb-4 text-right text-[10px] uppercase tracking-tight sm:mb-6 md:mb-8 md:text-sm">
          ({String(index + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")})
        </div>

        <div className="w-full">
          <h2 className="w-full text-3xl font-black uppercase leading-[0.9] tracking-tighter sm:text-4xl sm:leading-[0.88] md:text-6xl md:leading-[0.85] lg:text-8xl">
            {project.title}
          </h2>
          <Typography
            as="p"
            className="mt-4 w-full whitespace-pre-line text-pretty text-sm leading-snug text-neutral-600 sm:mt-6 sm:text-base sm:leading-tight md:mt-8 md:text-lg"
          >
            {project.description}
          </Typography>
          <div className="mt-6 grid w-full grid-cols-[minmax(4.5rem,auto)_1fr] gap-x-3 gap-y-2 text-[10px] uppercase sm:mt-8 sm:grid-cols-[90px_1fr] sm:text-xs md:mt-10 md:grid-cols-[120px_1fr]">
            <span className="text-neutral-400">год</span>
            <span>{project.year ?? "2024"}</span>
            <span className="text-neutral-400">роль</span>
            <Typography as="span">{project.caseRole ?? "Art direction, design"}</Typography>
            <span className="text-neutral-400">задача</span>
            <Typography as="span">{project.type}</Typography>
          </div>
        </div>
      </div>

      <div className="case-block-mt w-full">
        {project.mediaType === "video" && project.video ? (
          <div className="aspect-[2048/1280] w-full overflow-hidden bg-neutral-200">
            <video src={project.video} muted loop playsInline autoPlay className="h-full w-full object-cover" />
          </div>
        ) : (
          <CaseGalleryWide src={project.image ?? ""} priority={index === 0} />
        )}
      </div>
      {project.descriptionAfterCover ? <CaseDescriptionBlock text={project.descriptionAfterCover} /> : null}
      <div
        className={`grid w-full grid-cols-1 ${galleryGap} sm:grid-cols-2 ${galleryMt(!!project.descriptionAfterCover)}`}
      >
        <CaseGallerySlot src={project.caseGallery?.[2]} />
        <CaseGallerySlot src={project.caseGallery?.[3]} />
      </div>
      <div className="mt-2 w-full sm:mt-3">
        {project.caseGallerySlideshow?.[6] ? (
          <CaseGallerySlideshow frames={project.caseGallerySlideshow[6]} intervalMs={7000} aspect="2048/1280" />
        ) : project.caseGallery?.[6] ? (
          <CaseGalleryWide src={project.caseGallery[6]} />
        ) : null}
      </div>
      {project.descriptionAfterGalleryRow1 ? (
        <CaseDescriptionBlock text={project.descriptionAfterGalleryRow1} />
      ) : null}
      {project.descriptionAfterGalleryRow2 ? (
        <CaseDescriptionBlock text={project.descriptionAfterGalleryRow2} />
      ) : null}
      <div
        className={`grid w-full grid-cols-1 ${galleryGap} sm:grid-cols-2 ${galleryMt(!!(project.descriptionAfterGalleryRow1 || project.descriptionAfterGalleryRow2))}`}
      >
        <CaseGallerySlot src={project.caseGallery?.[4]} />
        <CaseGallerySlot src={project.caseGallery?.[5]} />
      </div>
      <div className={galleryMt(!!(project.descriptionAfterGalleryRow1 || project.descriptionAfterGalleryRow2))}>
        {project.caseGallery?.[7] ? (
          <CaseGalleryWide src={project.caseGallery[7]} />
        ) : (
          <div className="aspect-[2048/1280] w-full bg-neutral-200" />
        )}
      </div>
    </section>
  );
}

export default function PortfolioSite() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4f3ef] text-neutral-950 selection:bg-neutral-950 selection:text-white">
      <nav className="page-px fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-[#f4f3ef]/95 py-3 backdrop-blur-sm sm:py-4 md:py-5 text-[10px] font-medium uppercase leading-tight tracking-tight text-neutral-950 md:text-xs">
        <a href="#top" className="shrink-0" aria-label="На главную">
          <img
            src="/images/casperology-icon.png"
            alt=""
            width={60}
            height={50}
            className="h-5 w-auto sm:h-6"
          />
        </a>
        <div className="flex shrink-0 gap-3 md:gap-6">
          <WorksNavMenu items={workNavItems} />
          <a href="#contacts">контакты</a>
        </div>
      </nav>

      <section id="top" className="page-px relative min-h-[100svh] overflow-hidden pt-20 sm:pt-24 md:pt-28">
        <div className="grid min-h-[calc(100svh-5rem)] grid-cols-1 items-stretch gap-8 sm:min-h-[calc(100svh-7rem)] sm:gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col justify-center">
            <div>
              <h1 className="whitespace-pre-line text-[2.25rem] font-black uppercase leading-[0.85] tracking-tighter sm:text-5xl md:text-7xl md:leading-[0.82] lg:text-8xl lg:text-[8.5rem]">
                {profile.name}
              </h1>
              <p className="mt-4 whitespace-pre-line text-sm uppercase leading-tight tracking-tight sm:mt-6 sm:text-base md:mt-8 md:text-xl lg:text-2xl">
                {profile.role}
              </p>
              <Typography
                as="p"
                className="mt-4 text-sm leading-snug text-neutral-400 sm:mt-6 sm:text-base sm:leading-tight md:mt-8 md:text-lg"
              >
                {profile.intro}
              </Typography>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden sm:max-w-none lg:mx-0">
            <img
              src="/images/hero-v12.png"
              alt="Portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-[10px] uppercase sm:bottom-6 sm:right-5 md:bottom-8 md:right-8 md:text-xs">
          scroll ↓
        </div>
      </section>

      {projects.map((project, index) => (
        <CaseSection key={project.title} project={project} index={index} />
      ))}

      <footer id="contacts" className="page-px flex flex-col gap-4 border-t border-neutral-300 py-6 text-sm sm:gap-6 sm:py-8 md:flex-row md:items-end md:justify-between">
        <a
          href="http://t.me/casperology"
          className="text-lg font-semibold tracking-tight sm:text-xl md:text-2xl lg:text-3xl"
        >
          {profile.handle}
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="break-all text-lg font-semibold tracking-tight sm:break-normal sm:text-xl md:text-2xl lg:text-3xl"
        >
          {profile.email}
        </a>
      </footer>
    </main>
  );
}

