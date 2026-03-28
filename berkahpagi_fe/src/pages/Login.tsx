export default function Login() {
  return (
    <div className="h-[calc(90vh-64px)] flex items-center justify-center bg-background p-6">
      {/* CARD WRAPPER */}
      <div className="flex  flex-col lg:flex-row w-full max-w-7xl bg-surface-container-low rounded-[2.5rem] overflow-hidden shadow-xl">
        {/* ================= LEFT (IMAGE / BRANDING) ================= */}
        <div className="hidden lg:flex lg:w-1/2 relative p-10 flex-col justify-between overflow-hidden bg-[#E4DFB5]">

          {/* IMAGE BACKGROUND */}
          <div className="absolute inset-0 opacity-50 mix-blend-multiply">
            <img
              alt="Artisan Market"
              className="w-full h-full object-cover scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhhBXk1F1QnsDaZdGMDCv9_1m6xVvGzXi6Vzh3AHYt1Z4ThR80RFt1Tv5bZNd1rKPexwBzM9ORXedKG_B9lO7S9ymUwU6TV64jg2IP2SYYQebqbTSQJcNGyykirgmcXdPG4Dt6pRBfBcUqLan3KVcpJHip69jzL45qCywQa9JdepMUag3ngKsQX9HQSjAfCTNOFHzrbTo83bWUbHqENwzgcqBCM63JsJNG-ldXwVYIwqg_UmCADCKqDBzSuvtWsQEyL35NPDDL9g0c"
            />
          </div>

          {/* TOP CONTENT */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-headline text-on-primary">
                <span className="material-symbols-outlined">
                  potted_plant
                </span>
              </div>
              <span className="font-headline text-2xl font-extrabold tracking-tight font-headline text-on-surface">
                The Organic Curator
              </span>
            </div>

            <h2 className="font-headline text-5xl font-extrabold font-headline text-on-surface leading-[1.1] tracking-tight">
              Nurturing the <br />
              <span className="font-headline text-primary">local harvest</span> together.
            </h2>
          </div>

          {/* TESTIMONIAL */}
          <div className="relative z-10 p-2 bg-surface-container-lowest/60 backdrop-blur-xl p- rounded-2xl border border-white/20">
            <p className="font-headline   text-on-surface/80 font-medium italic font-headline text-base leading-relaxed">
              "This system has transformed how we manage our farm's inventory. Simple,
              clean, and intuitive."
            </p>

            <div className="mt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-fixed" />
              <div>
                <p className="font-bold font-headline text-on-surface">Elena Rossi</p>
                <p className="font-headline text-sm font-headline text-on-surface/60">Green Valley Orchards</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT (FORM) ================= */}
        <div className="w-full lg:w-1/2 bg-surface-container-lowest p-8 md:p-12 flex flex-col justify-center">

          <div className="max-w-md mx-auto w-full">

            {/* MOBILE LOGO */}
            <div className="lg:hidden flex items-center gap-1 mb-10">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-headline text-on-primary">
                <span className="material-symbols-outlined">
                  potted_plant
                </span>
              </div>
              <span className="font-headline text-xl font-extrabold">
                The Organic Curator
              </span>
            </div>

            {/* HEADER */}
            <header className="mb-5">
              <h1 className="font-headline text-3xl font-extrabold mb-2">
                Sign In
              </h1>
              <p className="font-headline text-on-surface/60">
                Welcome back to the management portal.
              </p>
            </header>

            {/* FORM */}
            <form className="space-y-2">

              {/* ROLE SWITCH */}
              <div className="flex p-1 bg-surface-container-high rounded-full">
                <button className="flex-1 py-1 rounded-full bg-white font-bold font-headline text-sm shadow-sm">
                  Vendor
                </button>
                <button className="flex-1 py-1 rounded-full font-headline text-on-surface/60 font-headline text-sm">
                  Staff
                </button>
              </div>

              {/* EMAIL */}
              <div>
                <label className="font-headline text-sm font-bold font-headline text-on-surface/70 ml-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  className="w-full mt-2 px-5 py-3 rounded-full bg-surface-container-high/40 font-headline text-on-surface focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <div className="flex justify-between items-center">
                  <label className="font-headline text-sm font-bold font-headline text-on-surface/70 ml-2">
                    Password
                  </label>
                  <a className="font-headline text-sm font-headline text-primary font-bold">
                    Forgot?
                  </a>
                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-2 px-5 py-3 rounded-full bg-surface-container-high/40 font-headline text-on-surface focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              {/* REMEMBER */}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="font-headline text-sm font-headline text-on-surface/60">
                  Stay signed in
                </span>
              </div>


              <button
                        className="w-full h-20 primary-gradient font-headline text-surface-container! font-headline text-2xl font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                        type="submit"
                    >
                        <span
                            className="material-symbols-outlined font-headline text-3xl"
                            data-icon="check_circle"
                            style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                            check_circle
                        </span>
                        Login
                    </button>

            </form>

            {/* FOOTER */}
            <div className="mt-2 pt-6 border-t border-on-surface/10 font-headline text-center">
              <p className="font-headline text-sm font-headline text-on-surface/50 mb-3">
                Don't have an account?
              </p>
              <button className="px-5 py-1 rounded-full bg-surface-container-high font-headline text-sm font-semibold">
                Apply to Join
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}