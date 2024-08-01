import React from "react";

const SearchBar = () => (
  <form className="max-w-md">
    <div className="relative border border-[#C5C5F8] rounded-lg">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none bg-white rounded-lg">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-white focus:outline-none"
        placeholder="Search"
        required
      />
    </div>
  </form>
);

const IconNoti = () => (
  <div className="icon-noti flex items-center">
    <button
      type="button"
      className="text-[#0E0D46] hover:bg-[#0E0D46] hover:text-white focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2  transition duration-300 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
        />
      </svg>
    </button>
    <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-[#8598FC] rounded-full">
      <span className="font-medium text-white">QL</span>
    </div>
  </div>
);

const ListItem = ({ title, site, accounts, icon }: any) => (
  <div className="list-items w-full rounded-xl sm:rounded-[24px] bg-white hover:bg-[#FAF2FE] flex items-center justify-between p-2 sm:p-5">
    <div className="list-item-header flex gap-5">
      <div className="flex justify-center items-center">
        <div className="icon-header flex justify-center items-center p-2 sm:p-3 rounded-full bg-white">
          <img
            src={icon}
            width={40}
            height={40}
            alt={title}
            className="w-5 h-5 sm:w-10 sm:h-10"
          />
        </div>
      </div>
      <div className="info-header flex flex-col justify-center">
        <h1 className="font-bold text-xl sm:text-2xl">{title}</h1>
        <p className="text-sm font-light sm:font-medium sm:text-lg">{site}</p>
      </div>
    </div>
    <div className="list-item-detail text-sm sm:text-lg font-light sm:font-medium">{accounts} accounts</div>
    <div className="list-item-setting flex justify-center items-center">
      <div className="rounded-full w-8 h-8 bg-white flex justify-center items-center">
        <svg
          className="text-[#000]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M6 12h.01m6 0h.01m5.99 0h.01"
          />
        </svg>
      </div>
    </div>
  </div>
);

const ListUI: React.FC = () => {
  const listItems = [
    {
      title: "Dropbox",
      site: "dropbox.com",
      accounts: 24,
      icon: "/dropbox.png",
    },
    {
      title: "Pinterest",
      site: "pinterest.com",
      accounts: 24,
      icon: "/pinterest.png",
    },
    {
      title: "Microsoft",
      site: "microsoft.com",
      accounts: 3,
      icon: "/microsoft.png",
    },
  ];

  return (
    <div className="w-full h-screen bg-[#EBEBFF] flex items-center justify-center">
      <div className="w-[97%] sm:w-[80%] md:w-[90%] lg:w-3/5 bg-[#FFFFFF] rounded-[36px] p-6 sm:p-6 md:p-20">
        <div className="header w-full flex justify-between">
          <SearchBar />
          <IconNoti />
        </div>
        <div className="title my-5 sm:my-10">
          <h1 className="text-xl sm:text-3xl font-bold">Accounts</h1>
        </div>
        <div className="list-acount w-full flex flex-col gap-2">
          {listItems.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              site={item.site}
              accounts={item.accounts}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListUI;
