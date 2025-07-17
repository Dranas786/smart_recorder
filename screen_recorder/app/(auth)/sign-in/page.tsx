import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>Screen Recorder</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              Screen Recorder makes screen recording as easy as pie. Moreover,
              it's setup is as easy as stealing candy from a child
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="jason"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>Jason Rivera</h2>
                <p>Product Designer, Leta</p>
              </div>
            </article>
          </section>
        </div>
        <p>© Screen Recorder {new Date().getFullYear()}</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1>Screen Recorder</h1>
          </Link>
          <p>
            Create and share your very first <span>Screen recording</span> in no
            time!
          </p>
          <button>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={22}
              height={22}
            />
            <span>Sign in with google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default page;
