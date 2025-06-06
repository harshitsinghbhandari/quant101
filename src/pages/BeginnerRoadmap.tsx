import Navbar from "../components/Navbar";

function BeginnerRoadmap() {
    return (
      <div className="page">
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
                <Navbar />
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
  