import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  href: string;
  imgSrc: string;
  date: string;
}

export const TemplateCard = ({ title, href, imgSrc, date }: Props) => (
  <li>
    <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
      <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
        <img
          src={imgSrc}
          alt=""
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
        <a href={href}>
          <span className="absolute -inset-2.5 z-10"></span>
          <span className="relative">{title}</span>
        </a>
      </h4>
      <p className="relative mt-1.5 text-xs font-medium text-slate-500">
        {date}
      </p>
    </div>
  </li>
);
