import { NextPage } from "next";

const PageTitle: NextPage<{ title: string }> = ({ title }) => {
  return <div className="font-roadstore text-5xl mb-10">{title}</div>;
};

export { PageTitle };
