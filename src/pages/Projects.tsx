import Navbar from "../components/Navbar";
function Projects() {
    return (
      <div className="page">
        <h1>Projects</h1>
        {
            <>
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
            <link
              rel="stylesheet"
              as="style"
              onLoad={()=>"this.rel='stylesheet'"}
              href="https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
            />
            <title>Projects</title>
            <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
            <div
              className="relative flex size-full min-h-screen flex-col bg-[#121516] dark group/design-root overflow-x-hidden"
              style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
            >
              <div className="layout-container flex h-full grow flex-col">
                <Navbar />
                <div className="px-40 flex flex-1 justify-center py-5">
                  <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                      <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                          Projects &amp; Practice
                        </p>
                        <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                          Explore our projects and practice challenges to enhance your
                          quantitative finance skills.
                        </p>
                      </div>
                    </div>
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                      Quant Projects
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6dryHSbRBrl2j18roajBoHkktFgOKIdQMvtM1JmV_fL_7yddfE1fv4RZPQbwtMuUgoTDmdzBPHQ54jmTgQy5isSDcAkJk4vAsIto9WzG4-cE4BWP5b5qoFxY3oRafH_aFGHQSTDqFBAnpfWsnZgaaahTErHtCgfGxXMGR0HSRZRaiFO9EIhosmW6mQL1BXJ4mtUGhyfQQXxQVYsqkWEdGDvcJUcnjjteNKqNFixpmfschvHZQP7JEW9TqIa3JiDcZ5lr_YiDn5w")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Options Pricing Model
                          </p>
                          <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                            Python | Options
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjGCSjQOFEU6xMFJAkJWIdxKhicBrhXACySjQU20lNHsrhql4OGExcD3pmB4LGjDkGU-SWZxHCDyTUte6UlX8BKYDkvXgfR7CzhWbLoZxfSizGDX_nklO6G7JIP7KSn7uhvYhiGEEQy3Z_JQNAoN0Q4-q3Kfd7ygBwBJZv5VOsxAV5KrqSKppRM-FxWmNi5oMGzkgj4VWUQdllUgRH-6t9p2XrCclJR0Q-Wat0egnKG6_b94Tz5R7doRjd4q7lbxaRtCpQ3X9uIA")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Algorithmic Trading Strategy
                          </p>
                          <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                            Python | Algorithmic Trading
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmAj_tdAcflRvJmE85sDtwfnk_1Fh0BgTrbyJ6G-J-CN8wICywVIJwgvwuFBYh6MHpIpcY4YEWB8sFmUlAZbtJbuRnim4JGz5kRbGEDDxmpbKvNuskyDKqA2zUuUdw3lyV0UQloPJuOABxhaObk6yyJF0Qjlv0dtN2u_Gr8IVV3yJdQ0s8hr5jA1pvBlVp9L4Ggzdo34jFq1F59QRsKL4KO4w8vsaJItPPawWXXKuzaPrfUouaZ-ZnB7eIRPIs_RmUq0wpbXBMtA")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Machine Learning in Finance
                          </p>
                          <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                            ML | Finance
                          </p>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                      Challenge of the Week
                    </h2>
                    <div className="p-4">
                      <div className="flex items-stretch justify-between gap-4 rounded-xl">
                        <div className="flex flex-[2_2_0px] flex-col gap-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-white text-base font-bold leading-tight">
                              Weekly Trading Challenge
                            </p>
                            <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                              Participate in our weekly trading challenge and compete with
                              fellow members. Top performers will be featured on the
                              leaderboard.
                            </p>
                          </div>
                          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#2c3135] text-white text-sm font-medium leading-normal w-fit">
                            <span className="truncate">View Leaderboard</span>
                          </button>
                        </div>
                        <div
                          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-ohi4L_2W5U1UZ7rBxo36kqls6-LK3ZKyD02vq_W57Usa9Z0K0Ev39ydKM_fZ8MKdLnbBnGpwAz7M-K7zhRBpgQcWiMyys17DHpCKjLWmzIddM39MSN0aPrk0FU_omnuY8oVOXp-73rkwBFemwYr2q3TgIoFwYj9dqFggl3nLg7sAJ83nY97KCvaG_LPWzIY4lU_KYcqpg4UYbK9D7linq6bJTUZZx-DdjsC3YtFquOn9N2xVh2nl4h_UoB0Yh2B-t4-ITOgxBA")'
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex px-4 py-3 justify-start">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#b2cee5] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Launch Your First Backtest →</span>
                      </button>
                    </div>
                  </div>
                </div>
                <footer className="flex justify-center">
                  <div className="flex max-w-[960px] flex-1 flex-col">
                    <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                      <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                        <a
                          className="text-[#a2acb3] text-base font-normal leading-normal min-w-40"
                          href="#"
                        >
                          Home
                        </a>
                        <a
                          className="text-[#a2acb3] text-base font-normal leading-normal min-w-40"
                          href="#"
                        >
                          About
                        </a>
                        <a
                          className="text-[#a2acb3] text-base font-normal leading-normal min-w-40"
                          href="#"
                        >
                          Projects &amp; Practice
                        </a>
                        <a
                          className="text-[#a2acb3] text-base font-normal leading-normal min-w-40"
                          href="#"
                        >
                          Resources
                        </a>
                        <a
                          className="text-[#a2acb3] text-base font-normal leading-normal min-w-40"
                          href="#"
                        >
                          Contact
                        </a>
                      </div>
                      <div className="flex flex-wrap justify-center gap-4">
                        <a href="#">
                          <div
                            className="text-[#a2acb3]"
                            data-icon="TwitterLogo"
                            data-size="24px"
                            data-weight="regular"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                            </svg>
                          </div>
                        </a>
                        <a href="#">
                          <div
                            className="text-[#a2acb3]"
                            data-icon="LinkedinLogo"
                            data-size="24px"
                            data-weight="regular"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                            </svg>
                          </div>
                        </a>
                        <a href="#">
                          <div
                            className="text-[#a2acb3]"
                            data-icon="InstagramLogo"
                            data-size="24px"
                            data-weight="regular"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <p className="text-[#a2acb3] text-base font-normal leading-normal">
                        @2024 QuantX Club. All rights reserved.
                      </p>
                    </footer>
                  </div>
                </footer>
              </div>
            </div>
          </>
          
        }
      </div>
    );
  }
  
  export default Projects;
