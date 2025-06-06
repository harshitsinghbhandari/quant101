import Navbar from "../components/Navbar";
function Home() {
    return (
      <div className="page">
        <h1>Home</h1>
        {
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
    <link
      rel="stylesheet"
      as="style"
      onLoad={()=> "this.rel='stylesheet'"}
      href="https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>landing page</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
    {/* Loader */}
    <div
      id="loader-wrapper"
      style={{
        position: "fixed",
        inset: 0,
        background: "white",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="loader" />
    </div>
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                  style={{ background: "transparent" }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Your Launchpad into the World of Quant
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Markets. Math. Machines. Curated by IIT Bombay’s Quant
                      Community.
                    </h2>
                  </div>
                  <div className="flex-wrap gap-3 flex justify-center">
                    <a href="beginner-roadmap/">
                      <button className="roadmap">Beginner Roadmap</button>
                    </a>
                    <button className="btn-container">
                      <div className="btn-back" />
                      <div className="btn-front">
                        <p>GET STARTED</p>
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <g id="SVGRepo_iconCarrier">
                            <g fill="#395d7a">
                              <path d="M8 2.5a5.494 5.494 0 00-4.558 2.42.75.75 0 01-1.242-.84 7 7 0 110 7.841.75.75 0 111.242-.841A5.5 5.5 0 108 2.5z" />
                              <path d="M7.245 4.695a.75.75 0 00-.05 1.06l1.36 1.495H1.75a.75.75 0 000 1.5h6.805l-1.36 1.495a.75.75 0 001.11 1.01l2.5-2.75a.75.75 0 000-1.01l-2.5-2.75a.75.75 0 00-1.06-.05z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
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
  
  export default Home;
  