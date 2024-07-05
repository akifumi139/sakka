import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Sakka" },
    { name: "description", content: "小説投稿アプリ" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">小説投稿アプリ</h1>
    </div>
  );
}
