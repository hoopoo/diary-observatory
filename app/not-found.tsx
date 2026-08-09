import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-5 py-24 md:px-8">
      <p className="label">Not found</p>
      <h1 className="editorial text-4xl text-text">Page not found</h1>
      <p className="text-sm text-text-soft">
        このページは見つかりませんでした。索引へ戻ってください。
      </p>
      <Link
        href="/"
        className="focus-ring mt-4 inline-flex w-fit border border-text bg-text px-4 py-2 text-sm text-bg"
      >
        Back to Diary Observatory
      </Link>
    </div>
  );
}
