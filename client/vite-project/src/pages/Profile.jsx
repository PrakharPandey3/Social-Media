import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useParams } from 'react-router-dom'

function Profile() {
  const { user } = useAuth()
  const { username } = useParams()
  console.log(username)

  const [activeTab, setActiveTab] = useState('posts')

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <div className="relative">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />
        </div>
      </div>
    )
  }

  const joinedDate = new Date(user.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* Background Decoration */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:py-10">

        {/* ================= PROFILE CARD ================= */}
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)]">

          {/* Cover */}
          <div className="relative h-52 overflow-hidden sm:h-72">

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500" />

            {/* Decorative circles */}
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[40px] border-white/10" />
            <div className="absolute -bottom-40 left-10 h-80 w-80 rounded-full border-[50px] border-white/10" />
            <div className="absolute right-1/4 top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

            {/* Cover Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-white/80">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                <span className="text-xs font-medium">Active member</span>
              </div>
            </div>
          </div>

          {/* ================= USER INFO ================= */}
          <div className="relative px-5 pb-0 sm:px-8">

            {/* Avatar */}
            <div className="-mt-16 flex flex-col sm:-mt-20 sm:flex-row sm:items-end sm:justify-between">

              <div className="flex flex-col items-start sm:flex-row sm:items-end">

                <div className="relative">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-[6px] border-white bg-gradient-to-br from-indigo-500 to-violet-600 text-5xl font-black text-white shadow-xl sm:h-40 sm:w-40 sm:text-6xl">
                    {user.name
                      ? user.name.charAt(0).toUpperCase()
                      : 'U'}
                  </div>

                  {/* Online Indicator */}
                  <div className="absolute bottom-3 right-3 h-5 w-5 rounded-full border-4 border-white bg-emerald-500" />
                </div>

                <div className="mt-4 sm:mb-3 sm:ml-5">
                  <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                    {user.name}
                  </h1>

                  <p className="mt-1 text-sm font-medium text-indigo-600">
                    @{user.username}
                  </p>
                </div>

              </div>

              {/* Actions */}
              <div className="mt-5 flex w-full gap-3 sm:mb-4 sm:mt-0 sm:w-auto">

                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 active:scale-95 sm:flex-none">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536M4 20h4l10.5-10.5a2.5 2.5 0 00-4-4L4 16v4z"
                    />
                  </svg>
                  Edit Profile
                </button>

                <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 active:scale-95">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </button>

              </div>
            </div>

            {/* ================= ACCOUNT INFO ================= */}
            <div className="mt-7 grid gap-6 border-b border-slate-100 pb-7 md:grid-cols-2">

              {/* Account */}
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Account
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-800">
                      {user.email}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      Member since {joinedDate}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 divide-x divide-slate-200 rounded-2xl bg-slate-50 p-4">

                <div className="text-center">
                  <p className="text-xl font-black text-slate-900 sm:text-2xl">
                    {user.posts?.length || 0}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
                    Posts
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xl font-black text-slate-900 sm:text-2xl">
                    {user.followers?.length || 0}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
                    Followers
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xl font-black text-slate-900 sm:text-2xl">
                    {user.followings?.length || 0}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
                    Following
                  </p>
                </div>

              </div>
            </div>

            {/* ================= TABS ================= */}
            <div className="flex gap-1">

              {[
                {
                  id: 'posts',
                  label: 'Posts',
                  count: user.posts?.length || 0,
                },
                {
                  id: 'reels',
                  label: 'Reels',
                  count: user.reels?.length || 0,
                },
              ].map((tab) => (

                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-5 text-sm font-bold transition-all ${
                    activeTab === tab.id
                      ? 'text-indigo-600'
                      : 'text-slate-400 hover:text-slate-700'
                  }`}
                >

                  {/* Icons */}
                  {tab.id === 'posts' ? (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                        strokeWidth="2"
                      />
                      <path
                        strokeWidth="2"
                        d="M8 4v16M16 4v16M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="5"
                        y="3"
                        width="14"
                        height="18"
                        rx="2"
                        strokeWidth="2"
                      />
                      <path
                        strokeWidth="2"
                        d="M10 8l5 4-5 4V8z"
                      />
                    </svg>
                  )}

                  {tab.label}

                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      activeTab === tab.id
                        ? 'bg-indigo-100 text-indigo-600'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {tab.count}
                  </span>

                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-indigo-600" />
                  )}

                </button>

              ))}

            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-8">

          {user[activeTab]?.length > 0 ? (

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {user[activeTab].map((item, idx) => (

                <div
                  key={idx}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 transition-transform duration-500 group-hover:scale-105" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Hover Info */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold">
                        {activeTab === 'posts' ? 'Post' : 'Reel'} #{idx + 1}
                      </span>

                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                        View
                      </span>
                    </div>
                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[2rem] border border-slate-200 bg-white px-6 text-center shadow-sm">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">

                {activeTab === 'posts' ? (
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                      strokeWidth="1.8"
                    />
                    <path
                      strokeWidth="1.8"
                      d="M8 4v16M16 4v16M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="5"
                      y="3"
                      width="14"
                      height="18"
                      rx="2"
                      strokeWidth="1.8"
                    />
                    <path
                      strokeWidth="1.8"
                      d="M10 8l5 4-5 4V8z"
                    />
                  </svg>
                )}

              </div>

              <h3 className="text-lg font-black text-slate-800">
                No {activeTab} yet
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                When {user.name} shares {activeTab}, they will appear here on
                their profile.
              </p>

            </div>

          )}

        </div>

      </div>
    </div>
  )
}

export default Profile

