import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h4 className="mb-8 font-semibold tracking-tighter dark:text-neutral-800">
        nicosquiroz
      </h4>
      <p className="mb-4 text-sm dark:text-neutral-800">
        I am a developer with a background in physics and data science. I have contributed to{' '}
        <a href="https://philpapers.org/rec/MALTHP" className="underline hover:text-neutral-600">
          physics research
        </a>{' '}
        and now I explore the intersection of computational methods and cognitive science, focusing on machine learning applications in technology and business innovation.      </p>
      <p className="mb-4 text-sm dark:text-neutral-800">
        On this website you can find notes and thoughts connecting ideas about{' '}
        <a href="/learning" className="underline hover:text-neutral-600">
          what I'm learning
        </a>
        ,{' '}
        <a href="/agency" className="underline hover:text-neutral-600">
          where I'm going
        </a>
        , and the{' '}
        <a href="http://innertwist.com/" className="underline hover:text-neutral-600">
          projects
        </a>
        {' '} I'm working on.
      </p>
      <div className="my-8 text-sm dark:text-neutral-800">
        <BlogPosts />
      </div>
    </section>
  )
}
