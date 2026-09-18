import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-200/20 blur-3xl" />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-black text-white shadow-lg shadow-indigo-500/20">
              S
            </div>

            <span className="text-xl font-black tracking-tight">
              Social<span className="text-indigo-600">ly</span>
            </span>
          </Link>

          {/* Search */}
          <div className="hidden w-80 md:block">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 transition-all focus-within:border-indigo-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-50">

              <svg
                className="h-4 w-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m2.35-5.65a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>

              <span className="text-sm text-slate-400">
                Search
              </span>

            </div>
          </div>

          {/* Navbar actions */}
          <div className="flex items-center gap-3">

            <button className="hidden h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:flex">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0a3 3 0 01-6 0"
                />
              </svg>
            </button>

            {/* Avatar */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-black text-white shadow-md">
              {user?.name
                ? user.name.charAt(0).toUpperCase()
                : 'U'}
            </div>

          </div>

        </div>
      </nav>


      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-7 text-white shadow-2xl shadow-indigo-500/20 sm:p-10 lg:p-12">

          {/* Decorative shapes */}
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[45px] border-white/10" />
          <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full border-[50px] border-white/5" />
          <div className="absolute right-1/4 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-2xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold text-white/90">
                Welcome back
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Hey, {user?.name?.split(' ')[0] || 'there'} 👋
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
              Connect with people, share your thoughts, and discover
              something interesting today.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                to={`/profile/${user.username}`}
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-700 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 active:scale-95"
              >
                View Profile

                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6l6 6-6 6"
                  />
                </svg>
              </Link>

              <button className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95">
                Create Post
              </button>

            </div>

          </div>
        </section>


        {/* ================= CONTENT GRID ================= */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* ================= FEED ================= */}
          <section className="space-y-5 lg:col-span-2">

            {/* Section heading */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-900">
                  Your Feed
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  See what’s happening around you
                </p>
              </div>

              <button className="rounded-lg px-3 py-2 text-xs font-bold text-indigo-600 transition hover:bg-indigo-50">
                View all
              </button>
            </div>


            {/* Feed card 1 */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg">

              <div className="flex items-center justify-between p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 font-bold text-white">
                    A
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Aarav Sharma
                    </p>
                    <p className="text-xs text-slate-400">
                      12 min ago
                    </p>
                  </div>

                </div>

                <button className="text-slate-400 hover:text-slate-700">
                  •••
                </button>

              </div>

              <div className="mx-5 h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 sm:h-80">
                <div className="flex h-full items-center justify-center">
                  <span className="text-sm font-semibold text-indigo-400">
                    Post preview
                  </span>
                </div>
              </div>

              <div className="p-5">

                <div className="flex items-center gap-5">

                  <button className="flex items-center gap-2 text-slate-500 transition hover:text-red-500">
                    <span className="text-lg">♡</span>
                    <span className="text-xs font-bold">124</span>
                  </button>

                  <button className="flex items-center gap-2 text-slate-500 transition hover:text-indigo-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 10h8m-8 4h5m-9 5l3-3h9a4 4 0 004-4V7a4 4 0 00-4-4H6a4 4 0 00-4 4v5a4 4 0 004 4h1v3z"
                      />
                    </svg>

                    <span className="text-xs font-bold">
                      18
                    </span>
                  </button>

                  <button className="ml-auto text-slate-400 transition hover:text-indigo-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 5v14l7-3 7 3V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
                      />
                    </svg>
                  </button>

                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Building something cool today. 🚀
                  <span className="font-semibold text-indigo-600">
                    {' '}#buildinpublic
                  </span>
                </p>

              </div>

            </div>


            {/* Feed card 2 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-lg">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 font-bold text-white">
                  R
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Riya Kapoor
                  </p>
                  <p className="text-xs text-slate-400">
                    1 hour ago
                  </p>
                </div>

              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Sometimes the best ideas come when you stop trying to
                force them and simply start experimenting.
              </p>

              <div className="mt-5 flex gap-2">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                  #ideas
                </span>

                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
                  #creativity
                </span>
              </div>

            </div>

          </section>


          {/* ================= SIDEBAR ================= */}
          <aside className="space-y-5">

            {/* Profile mini card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-2xl font-black text-white shadow-lg shadow-indigo-500/20">
                  {user?.name
                    ? user.name.charAt(0).toUpperCase()
                    : 'U'}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-black text-slate-900">
                    {user?.name}
                  </h3>

                  <p className="truncate text-sm text-indigo-600">
                    @{user?.username}
                  </p>
                </div>

              </div>

              <Link
                to={`/profile/${user.username}`}
                className="mt-5 block w-full rounded-xl bg-slate-100 py-3 text-center text-sm font-bold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
              >
                View Profile
              </Link>

            </div>


            {/* Suggestions */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">
                <h3 className="font-black text-slate-900">
                  People to follow
                </h3>

                <button className="text-xs font-bold text-indigo-600">
                  See all
                </button>
              </div>

              <div className="mt-5 space-y-5">

                {[
                  ['K', 'Karan Mehta'],
                  ['S', 'Sneha Verma'],
                  ['D', 'Dev Patel'],
                ].map(([letter, name]) => (

                  <div
                    key={name}
                    className="flex items-center justify-between"
                  >

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-sm font-bold text-white">
                        {letter}
                      </div>

                      <div>
                        <p className="text-sm font-bold text-slate-800">
                          {name}
                        </p>

                        <p className="text-xs text-slate-400">
                          Suggested for you
                        </p>
                      </div>

                    </div>

                    <button className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-600 transition hover:bg-indigo-600 hover:text-white">
                      Follow
                    </button>

                  </div>

                ))}

              </div>

            </div>


            {/* Quick stats */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Your activity
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl font-black text-slate-900">
                    {user?.posts?.length || 0}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-400">
                    Posts
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl font-black text-slate-900">
                    {user?.followers?.length || 0}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-400">
                    Followers
                  </p>
                </div>

              </div>

            </div>

          </aside>

        </div>

      </main>

    </div>
  )
}

export default Home

