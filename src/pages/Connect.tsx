import Navbar from "../components/Navbar";
function Connect() {
    return (
      <div className="page">
        <h1>Connect</h1>
        {
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
    <link
      rel="stylesheet"
      as="style"
      onLoad={()=>"this.rel='stylesheet'"}
      href="https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
    />
    <title>Connect</title>
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
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                Community &amp; Contribute
              </p>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Meet the Mentors
            </h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-8">
                <div className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                    // style={{
                    //   backgroundImage: 'url("quant_community_logo.jpeg")'
                    // }}
                  />
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      The Logo
                    </p>
                    <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                      Quant Community
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                    // style={{ backgroundImage: 'url(" shoe.jpeg")' }}
                  />
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      A Shoe
                    </p>
                    <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                      Nothing But a Shoe
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9naGw59ltWec9EX2zqVK30b_iCGMMf0ofH3ESVxNs-C8a6oXJgUgO2CGm4-yaN5-mnj0joYh6V2k_9nEgpwazCE5Co9flurAs5xJnwbI5l9kZCpvv7v4BDVh2zTrpcQKV0K_MLx8tla_OM7bMYGGFOqDYpL30Tphk1CHtXbnIz_ycObmJye2IldfgeO6QS7ct1KoIUhQkIdsBiZErkE5Ei1mo4yKT50YqztM5kIQZblXcr4fCQyiyDB6VojEel2yF8pHcyFyzBA")'
                    }}
                  />
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Noah Bennett
                    </p>
                    <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                      Quantitative Developer
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoELH5JFcVAz4CxIYJQF05GvSPskkBQaz8kYw9mxOfY5iM7rfixxUqAq0RZ8dB4stYgC0iXPtgguMssXmEaETo3x5DsoQuT0MXyEkDBi3l2LFh4fX8Cf4pAO1QdXNcuToqXfmvjWYJioZoXcAoGtVS84rLZnPIXElQcQyT9DcxBs_1pP_34vDfR6myBzwplopsEM7cnh-QrR8s20cupKD1TSuXrOwbB__OWB3v33emZ_QYdKn2Q2KnIZrggNffb7qn57Dmsc4u0w")'
                    }}
                  />
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Oliver Hayes
                    </p>
                    <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                      Quantitative Trader
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwDiDUqtuFgxRso63qjJGzCJXrakJbGZxDXrGY3CVgO9zrM6VmQPjy3piiqZVtLfAvtla9n7JbQfhBK-0GWoJjuv1DBJGa2HSDtHBfdfVcQ8YfRUU4s3ouVn6MBCOpG0dH02shNcfj0fYLx3caRqxUuSb7tG1xvhHQ95hnmKFOF5spVC6v9PwYMft3FHsSZMQ3GD3jHFtE5hNqUFv1otNQPzsHMcuabqhVv11bmrIF362yNljkIakXPxgbUJZEJMnLx1xkeSRiyA")'
                    }}
                  />
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Lucas Foster
                    </p>
                    <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                      Quantitative Strategist
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Join Our Community
            </h2>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#3f85bf] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Join WhatsApp</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#3f85bf] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Join Discord</span>
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      DM a Mentor for Help
                    </p>
                    <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                      Need guidance? Reach out to our mentors directly for
                      personalized assistance.
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#2c3135] text-white text-sm font-medium leading-normal w-fit">
                    <span className="truncate">Contact a Mentor</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADTVd4M0KKzNXjK0TOojK8YxiZkOxSOlxDYGN_cQOUVxSjB0YDM2lbur6LCvTIck_S21Vn3E2sZ4mBtjqOTBvIc7DGJqE6Nv4HvQdKaiYWFTupDvh8L21GzEWsoNTrfPUPM4GsyWAONjClJoReF2nb1RRNO0ZEVgeV1zqs_Dt8D_VhBo5uJU9WPPF4PiQw7neXtsxxqW20j-gp6v9c3HsWxJGEBZ0iOrMfgjHuoguzbbhcE4E3sWYj4TW4Wgs4R6TcQtqEEK-2Ag")'
                  }}
                />
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Contribute to Our Projects
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              We welcome contributions from the community! Here's a quick guide to
              get started:
            </p>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#40484f] py-5">
                <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                  Fork the repository
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  Create a personal copy of the project on your GitHub account.
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#40484f] py-5">
                <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                  Create a new branch
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  Develop your feature or fix in a separate branch.
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#40484f] py-5">
                <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                  Make your changes
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  Implement your changes and ensure they meet the project's
                  standards.
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#40484f] py-5">
                <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                  Submit a pull request
                </p>
                <p className="text-white text-sm font-normal leading-normal">
                  Propose your changes to be merged into the main project.
                </p>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#3f85bf] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">View Contribution Guide</span>
              </button>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Starter Issues
            </h2>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      Issue #123: Implement New Algorithm
                    </p>
                    <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                      Implement a new algorithm for portfolio optimization. This
                      task requires a good understanding of financial mathematics
                      and programming.
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#2c3135] text-white text-sm font-medium leading-normal w-fit">
                    <span className="truncate">View Issue</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8PnTopnSFafBm_s2J1UYCFQs7GqiKAbNoxW_EiSkg8OkQFc7IoxK_DVckZMfKj0uo8GoT02bs9ZHkm-3qNzjQvhicn6_YCeQ-FASEWFtl-8imd3fphnLU_SrOtq97yxkEBV1Sx4-pzFb8-rvdzohxCOqhb-1iC8Dhxtv6e_2KXzXSNVcIE3bDO7yonfpaRkt2LOKijVWnthcVSu2oG9acVdVvSxU4BJGAPgSlHv0_DRoZeCs6qEC1y84mQe32NfAI9n1uzmPLUA")'
                  }}
                />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      Issue #124: Fix Data Ingestion Bug
                    </p>
                    <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                      Fix a bug in the data ingestion pipeline. This task requires
                      debugging skills and familiarity with data processing
                      techniques.
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#2c3135] text-white text-sm font-medium leading-normal w-fit">
                    <span className="truncate">View Issue</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8QEBNku9du8x4GaDLpzCi_fgNq23nBkpRT24tdPXDWG3U56-8n_K_0jL-L-rD421keQEOgf-aMWH_nmwsf9UFsP5VlXLEESyKaD_-QqP1Z7CTRO3AkPM90Ho4vQqUCUV925kST7mhWHP-6RerV0R-jZoZNYWyj7t-ZcUuGqLm3M4Sf723vi3HdbsVlLEtyLjG08VI2c9opn1AWhy80Tcd0j5sxrhQU4SJ1fNztRplHqKuEe-SivRmzbz09Gp2_0c5KWaQVjep_Q")'
                  }}
                />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      Issue #125: Add Unit Tests
                    </p>
                    <p className="text-[#a2acb3] text-sm font-normal leading-normal">
                      Add unit tests for the existing codebase to improve
                      reliability and maintainability. This task requires
                      knowledge of testing frameworks.
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#2c3135] text-white text-sm font-medium leading-normal w-fit">
                    <span className="truncate">View Issue</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCck2ewk0zsK-G91ubEPlcAjc2WfVCQp3yIo6-pC1uzEqH19cFiF3LWWLSsb0VHQTGp5TPNyG0UUN2jV5K4R6d2LNEqOmOBWeBpK_K1Axjo5jsw63N-saVWxkMwe3PFKYxJMH13zwAzVgm_ghc4MLca0hbDXIQJu4uRPTy2C_QTHn9qZ6F5w3GUiAQPR2_SMHeJIGplr78jf4WR1IjRzupVjchq0pomf0kWpo1B_E7EkGnqQq_OkhPUTh4vGXs4jMMIPjkh7JOEsw")'
                  }}
                />
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
  
  export default Connect;
  