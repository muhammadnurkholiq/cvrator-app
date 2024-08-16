import Link from "next/link";

export default function Page() {
  return (
    <main className="h-[100%]">
      <div className="h-[100%] flex flex-col gap-16 text-center justify-center items-center">
        <div className="flex flex-col gap-5">
          <p
            className={
              "text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-contrastText"
            }
          >
            Let <span className="text-primary-main font-bold">AI</span> Help You
            Create Your
          </p>
          <p
            className={
              "text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-contrastText"
            }
          >
            <span className="text-primary-main font-bold">Resume</span> or{" "}
            <span className="text-primary-main font-bold">CV</span>
          </p>
        </div>

        <Link href="/question">
          <button className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main focus:outline-none focus:ring-2 focus:ring-primary-main rounded py-2 px-4">
            Try now for free
          </button>
        </Link>
      </div>
    </main>
  );
}
