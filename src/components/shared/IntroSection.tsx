import Image from 'next/image';

export default function IntroSection() {
  return (
    <section className="bg-gray-50 dark:bg-zinc-950 text-center py-12 px-4">
      <div className="flex justify-center">
        <Image
          src="/avatar.jpeg"
          width="100"
          height="100"
          className="rounded-full object-cover"
          alt="avatar_img"
        />
      </div>

      <h2 className="mt-4 text-4xl font-bold">Nhat Huy</h2>
      <p className="mt-2 text-gray-500">Software Engineer</p>

      <p className="mt-4 text-gray-600 dark:text-white max-w-xl mx-auto">
        Welcome to my personal blog! Here, I share my thoughts on software development, technology,
        and life as a software engineer. Join me on this journey of learning and discovery.
      </p>

      {/* <div className="mt-4 flex justify-center items-center gap-4 text-blue-600 text-sm">
                <span>Follow me</span>
                <Facebook />
                <Twitter/>
                <Linkedin/>
            </div> */}
    </section>
  );
}
