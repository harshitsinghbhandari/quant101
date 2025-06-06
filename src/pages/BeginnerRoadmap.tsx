function BeginnerRoadmap() {
    return (
      <div className="page roadmap">
        <h1>beginner</h1>
        {
            <>
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
            <link
              rel="stylesheet"
              as="style"
              onLoad={() => "this.rel='stylesheet'"}
              href="https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
            />
            <title>Beginner Roadmap</title>
            <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
            <div
              className="relative flex size-full min-h-screen flex-col bg-[#141a1f] dark group/design-root overflow-x-hidden"
              style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
            >
              <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2b3740] px-10 py-3">
                  <div className="flex items-center gap-4 text-white">
                    <div className="size-4">
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <a href="/quant101-iitb/">
                      {" "}
                      <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                        Quant Community IITB
                      </h2>{" "}
                    </a>
                  </div>
                  <div className="flex flex-1 justify-end gap-8">
                    <div className="flex items-center gap-9">
                      <a
                        className="text-white text-sm font-medium leading-normal"
                        href="/quant101-iitb/"
                      >
                        Home
                      </a>
                      <a
                        className="text-white text-sm font-medium leading-normal"
                        href="/quant101-iitb/about/"
                      >
                        About
                      </a>
                      <a
                        className="text-white text-sm font-medium leading-normal"
                        href="/quant101-iitb/projects/"
                      >
                        Projects
                      </a>
                      <a
                        className="text-white text-sm font-medium leading-normal"
                        href="/quant101-iitb/resources/"
                      >
                        Resources
                      </a>
                      <a
                        className="text-white text-sm font-medium leading-normal"
                        href="/quant101-iitb/connect/"
                      >
                        Contact
                      </a>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2b3740] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">Join Us</span>
                    </button>
                  </div>
                </header>
                <div className="px-40 flex flex-1 justify-center py-5">
                  <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                      <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                          Quant Starter Kit: 7-Day Roadmap
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal">
                          Your structured guide to mastering quantitative finance
                          fundamentals.
                        </p>
                      </div>
                    </div>
                    <div className="pb-3">
                      <div className="flex border-b border-[#3d4e5c] px-4 gap-8">
                        <a
                          className="flex flex-col items-center justify-center border-b-[3px] border-b-[#b2cee5] text-white pb-[13px] pt-4"
                          href="#"
                        >
                          <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">
                            Day 1
                          </p>
                        </a>
                        <a
                          className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9dafbe] pb-[13px] pt-4"
                          href="#"
                        >
                          <p className="text-[#9dafbe] text-sm font-bold leading-normal tracking-[0.015em]">
                            Day 2
                          </p>
                        </a>
                        <a
                          className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9dafbe] pb-[13px] pt-4"
                          href="#"
                        >
                          <p className="text-[#9dafbe] text-sm font-bold leading-normal tracking-[0.015em]">
                            Day 3
                          </p>
                        </a>
                        <a
                          className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9dafbe] pb-[13px] pt-4"
                          href="#"
                        >
                          <p className="text-[#9dafbe] text-sm font-bold leading-normal tracking-[0.015em]">
                            Day 4
                          </p>
                        </a>
                        <a
                          className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9dafbe] pb-[13px] pt-4"
                          href="#"
                        >
                          <p className="text-[#9dafbe] text-sm font-bold leading-normal tracking-[0.015em]">
                            Day 5
                          </p>
                        </a>
                        <a
                          className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9dafbe] pb-[13px] pt-4"
                          href="#"
                        >
                          <p className="text-[#9dafbe] text-sm font-bold leading-normal tracking-[0.015em]">
                            Day 6
                          </p>
                        </a>
                        <a
                          className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9dafbe] pb-[13px] pt-4"
                          href="#"
                        >
                          <p className="text-[#9dafbe] text-sm font-bold leading-normal tracking-[0.015em]">
                            Day 7
                          </p>
                        </a>
                      </div>
                    </div>
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                      Day 1: Introduction to Quantitative Finance
                    </h3>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Topic: What is Quantitative Finance?
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Understanding the basics of quantitative finance and its
                          applications.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2 justify-between">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Resource: Video - Introduction to Quant Finance
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Watch the introductory video on quantitative finance.
                        </p>
                      </div>
                      <div className="shrink-0">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#2b3740] text-white text-sm font-medium leading-normal w-fit">
                          <span className="truncate">Watch</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Action: Reflect on Key Concepts
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Reflect on the key concepts and applications discussed.
                        </p>
                      </div>
                    </div>
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                      Day 2: Probability and Statistics
                    </h3>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Topic: Probability and Statistics Basics
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Review fundamental concepts in probability and statistics.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2 justify-between">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Resource: Book - Probability and Statistics for Finance
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Read the chapter on probability and statistics.
                        </p>
                      </div>
                      <div className="shrink-0">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#2b3740] text-white text-sm font-medium leading-normal w-fit">
                          <span className="truncate">Read</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Action: Solve Practice Problems
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Solve practice problems on probability and statistics.
                        </p>
                      </div>
                    </div>
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                      Day 3: Linear Algebra
                    </h3>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Topic: Linear Algebra for Finance
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Learn about linear algebra concepts relevant to finance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2 justify-between">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Resource: Video Series - Linear Algebra Fundamentals
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Watch the video series on linear algebra.
                        </p>
                      </div>
                      <div className="shrink-0">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#2b3740] text-white text-sm font-medium leading-normal w-fit">
                          <span className="truncate">Watch</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Action: Practice Linear Algebra
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Practice linear algebra problems.
                        </p>
                      </div>
                    </div>
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                      Day 4: Time Series Analysis
                    </h3>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Topic: Introduction to Time Series
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Introduction to time series analysis and its applications in
                          finance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2 justify-between">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Resource: Article - Time Series Analysis in Finance
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Read the article on time series analysis.
                        </p>
                      </div>
                      <div className="shrink-0">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#2b3740] text-white text-sm font-medium leading-normal w-fit">
                          <span className="truncate">Read</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Action: Analyze Time Series Data
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Analyze a sample time series dataset.
                        </p>
                      </div>
                    </div>
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                      Day 5: Financial Modeling
                    </h3>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Topic: Basics of Financial Modeling
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Learn about basic financial modeling techniques.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2 justify-between">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Resource: Tutorial - Financial Modeling Basics
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Follow the tutorial on financial modeling.
                        </p>
                      </div>
                      <div className="shrink-0">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#2b3740] text-white text-sm font-medium leading-normal w-fit">
                          <span className="truncate">Follow</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Action: Build a Financial Model
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Build a simple financial model.
                        </p>
                      </div>
                    </div>
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                      Day 6: Machine Learning in Finance
                    </h3>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Topic: ML Applications in Finance
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Introduction to machine learning applications in finance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2 justify-between">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Resource: Lecture - Machine Learning in Finance
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Watch the lecture on machine learning in finance.
                        </p>
                      </div>
                      <div className="shrink-0">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#2b3740] text-white text-sm font-medium leading-normal w-fit">
                          <span className="truncate">Watch</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Action: Explore ML Case Study
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Explore a machine learning case study in finance.
                        </p>
                      </div>
                    </div>
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                      Day 7: Algorithmic Trading
                    </h3>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Topic: Algorithmic Trading Strategies
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Introduction to algorithmic trading strategies.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2 justify-between">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Resource: Guide - Algorithmic Trading Basics
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Read the guide on algorithmic trading.
                        </p>
                      </div>
                      <div className="shrink-0">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#2b3740] text-white text-sm font-medium leading-normal w-fit">
                          <span className="truncate">Read</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-[#141a1f] px-4 min-h-[72px] py-2">
                      <div className="flex flex-col justify-center">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          Action: Design a Trading Algorithm
                        </p>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal line-clamp-2">
                          Design a basic trading algorithm.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col p-4 gap-3">
                      <details
                        className="flex flex-col rounded-xl border border-[#3d4e5c] bg-[#141a1f] px-[15px] py-[7px] group"
                        open={true}
                      >
                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                          <p className="text-white text-sm font-medium leading-normal">
                            Quant Finance
                          </p>
                          <div
                            className="text-white group-open:rotate-180"
                            data-icon="CaretDown"
                            data-size="20px"
                            data-weight="regular"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20px"
                              height="20px"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                            </svg>
                          </div>
                        </summary>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal pb-2">
                          Explore advanced topics in quantitative finance, including
                          derivatives pricing, risk management, and portfolio
                          optimization.
                        </p>
                      </details>
                      <details className="flex flex-col rounded-xl border border-[#3d4e5c] bg-[#141a1f] px-[15px] py-[7px] group">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                          <p className="text-white text-sm font-medium leading-normal">
                            Math for Quant
                          </p>
                          <div
                            className="text-white group-open:rotate-180"
                            data-icon="CaretDown"
                            data-size="20px"
                            data-weight="regular"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20px"
                              height="20px"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                            </svg>
                          </div>
                        </summary>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal pb-2">
                          Explore advanced topics in quantitative finance, including
                          derivatives pricing, risk management, and portfolio
                          optimization.
                        </p>
                      </details>
                      <details className="flex flex-col rounded-xl border border-[#3d4e5c] bg-[#141a1f] px-[15px] py-[7px] group">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                          <p className="text-white text-sm font-medium leading-normal">
                            ML in Finance
                          </p>
                          <div
                            className="text-white group-open:rotate-180"
                            data-icon="CaretDown"
                            data-size="20px"
                            data-weight="regular"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20px"
                              height="20px"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                            </svg>
                          </div>
                        </summary>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal pb-2">
                          Explore advanced topics in quantitative finance, including
                          derivatives pricing, risk management, and portfolio
                          optimization.
                        </p>
                      </details>
                      <details className="flex flex-col rounded-xl border border-[#3d4e5c] bg-[#141a1f] px-[15px] py-[7px] group">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                          <p className="text-white text-sm font-medium leading-normal">
                            Algo Trading
                          </p>
                          <div
                            className="text-white group-open:rotate-180"
                            data-icon="CaretDown"
                            data-size="20px"
                            data-weight="regular"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20px"
                              height="20px"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                            </svg>
                          </div>
                        </summary>
                        <p className="text-[#9dafbe] text-sm font-normal leading-normal pb-2">
                          Explore advanced topics in quantitative finance, including
                          derivatives pricing, risk management, and portfolio
                          optimization.
                        </p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
          
        }
      </div>
    );
  }
  
  export default BeginnerRoadmap;
  