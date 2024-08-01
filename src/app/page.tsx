import { TemplateCard } from "@/components/TemplateCard";

const subPages = [
  {
    title: "List UI template",
    href: "/list-ui",
    imgSrc: "/review-img/list-ui-review.png",
    date: "1/8/2024",
  },
  {
    title: "UI Template 2",
    href: "/template2",
    imgSrc: "/review-img/list-ui-review.png",
    date: "1/8/2024",
  },
  {
    title: "UI Template 3",
    href: "/template3",
    imgSrc: "/review-img/list-ui-review.png",
    date: "1/8/2024",
  },
  // Add more templates here
];

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#fff]">
      <header className="title-web-ui w-full">
        <h1 className="text-3xl text-center p-8 font-bold">UI practice</h1>
        <p className="text-center text-base text-gray-500 font-[400]">
          The place where I experiment and store website templates.
        </p>
      </header>
      <main className="p-5 sm:p-14">
        <ul className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
          {subPages.map((page) => (
            <TemplateCard
              key={page.href}
              title={page.title}
              href={page.href}
              imgSrc={page.imgSrc}
              date={page.date}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
