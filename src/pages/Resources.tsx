function About() {
    return (
      <div className="page">
        <h1>About</h1>
        {
            <>
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
            <link
              rel="stylesheet"
              as="style"
              onLoad={()=>"this.rel='stylesheet'"}
              href="https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
            />
            <title>Resources</title>
            <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
            <div
              className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden"
              style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
            >
              <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#243747] px-10 py-3">
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
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#243747] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">Login</span>
                    </button>
                  </div>
                </header>
                <div className="px-40 flex flex-1 justify-center py-5">
                  <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                      <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                          Quant Resource Library
                        </p>
                        <p className="text-[#93b0c8] text-sm font-normal leading-normal">
                          Explore a curated collection of resources to enhance your
                          quantitative finance knowledge and skills.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 flex-wrap pr-4">
                      <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#243747] pl-4 pr-4">
                        <p className="text-white text-sm font-medium leading-normal">
                          All
                        </p>
                      </div>
                      <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#243747] pl-4 pr-4">
                        <p className="text-white text-sm font-medium leading-normal">
                          Beginner
                        </p>
                      </div>
                      <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#243747] pl-4 pr-4">
                        <p className="text-white text-sm font-medium leading-normal">
                          Advanced
                        </p>
                      </div>
                      <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#243747] pl-4 pr-4">
                        <p className="text-white text-sm font-medium leading-normal">
                          ML
                        </p>
                      </div>
                      <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#243747] pl-4 pr-4">
                        <p className="text-white text-sm font-medium leading-normal">
                          Trading
                        </p>
                      </div>
                      <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#243747] pl-4 pr-4">
                        <p className="text-white text-sm font-medium leading-normal">
                          Theory
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAc6VmWgFGBA7LjPQOXzZ1qgrPIuaMmFjXmXM79oM-lCGrDWq1lSLasDXqopsqvGgXKI2fscRRMbQc6yBfdSZhQ8F8vzUlXjXtM0w-PzgL5EPp_ewYj1DcnjkIV78EjY4df5JG6iS3N8Xs1lLNgun6F_kmvg8GgSlM4YYWJ5WTpekwZJ-eN-40n5YgqyQxJ8eVXKo8HJC0Klq0uAGyxxXvsFntlF_4LG5Mfkd7bRyswkvPLk7ncQb9Bd7gLcLqYf85XDhq_VHTv2Q")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Quantitative Finance with Python
                          </p>
                          <p className="text-[#93b0c8] text-sm font-normal leading-normal">
                            A comprehensive guide to using Python in quantitative finance.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA38NV_b4YHpDhOF0QUW-jjs8mJoklMN8fgRakGf7om39tSO1HKp-NHoKP17uzS1pQcTwn4YmsgrtucavdGRvtQS7t4OKTC0kPLRgx0W8ozIw7d7hWC5L_1RXIQzZnfx3XxvmIS6UJI2mJWeWtnH6CbolGmz3_p12o9mQOrmGBSD2lzJr7tq7Z5vGYjWEhT5y-bIh61iEngbIxDMUkZWS6TaKkGc1TsPQ8S7UjNbwlSnDDSLVnM03hPZlXNAPwyXGhk5KqecP2N0g")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Algorithmic Trading Strategies
                          </p>
                          <p className="text-[#93b0c8] text-sm font-normal leading-normal">
                            Explore various algorithmic trading strategies and their
                            implementation.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZuUBkWcMvEHb6uXYPgBAqxXwGliKJzKq0rcOt9MYKHSBU_CP0PFhInpTHjrmTgjH2c2kUxNh7td-dlKpL6DU8OQoQy72tFKiLHxlb2vsul6s8YZte_oc7Wtzr92_92dEXfuc1XDzba7cWvGrSV_pufm1KNjWNXZP1TXIW4QDxqzouzyenBsPHTJwpmLimeB10wUr_kDy9ctdNMrno-AUXGsQyzWkCHQGzG3peVcnX4VbnwQAv2SsSZPPNI0uD6420b0BnhI6bjw")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Machine Learning for Finance
                          </p>
                          <p className="text-[#93b0c8] text-sm font-normal leading-normal">
                            Applying machine learning techniques to solve financial
                            problems.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqPkjLKFm5EsoGertg29gBXErN-YcTd0Hw0Rw5Cwg2vmTbaGJR9EyEkdHDe5ZYO4gMGycAwx2voVPx6MyMBdS8tVZZT9Y1KoF9RtWZbJHgy74I2-Z2y8WmRjs1PgajYe2GhCF8Ply_zluQzuIx9j7t4XFi5dOPFki72tuiSWM9q5Dv8ol1BrYVo079eqwkpjqVEHWh46ukaaCgJxmEfKkxalsHmGlgYC29-Eps_DdrDpFwqBjWIplgY6dymhVaaH3KUg9Hp6WrEg")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Financial Modeling and Valuation
                          </p>
                          <p className="text-[#93b0c8] text-sm font-normal leading-normal">
                            Learn the fundamentals of financial modeling and valuation.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWawsG-jqHErnys3RGoAd5sLi1oqcUs9uaL3_6HZdQtj9iAzREsRdMLB0clTQ9Y7d80qA1wOBW7iUKcQegfPX7xEVBCLK-hiYGbetkwlDOZQ3H8EUqatdcjxNM00or5KZGmwjmQtxSm2AEtTX7PquZI6hBOcfUbUaGDY9W2ryPYkzEFfEvBIEi0JatjETudTi_scPCwI1NPqmcxj6ndwqbdIkR0fN-nJlMgxSu5RYfATkikNYwodhneP9LRjpgCZH6Hqu0vjGv1A")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Advanced Derivatives Pricing
                          </p>
                          <p className="text-[#93b0c8] text-sm font-normal leading-normal">
                            In-depth analysis of advanced derivatives pricing models.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZtAS2wOJeDoK9Gpnq6ldpKSC7tpldAGxBDo7VCY8LpmSLV624YhqeX0-bQkIfso9dOxcumT9vqCCxoJoZMfPAq9x5PQIP2EKNdvY76JL4tfo0BxoZu3XWbaskZ4zNsDnPH2FNxfKMH108etPqdyZxlB-iafavRRGrrTpft7fNWAc1XgKQx9SeVNcP5JFrnFzF9qduxDaq3Pl8mxDtNnvoZCxK8tXiqShHDBKsWDYo8VUQt5imuIkG8G9H9EHUkuw88QjUiJORKw")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Time Series Analysis in Finance
                          </p>
                          <p className="text-[#93b0c8] text-sm font-normal leading-normal">
                            Master time series analysis techniques for financial
                            forecasting.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZP4QM6sT-NLUqtANHCj3fSu7PA3GAAq4GpRKaAzyRWrCWavWsp0RQvkwD_GrPzspVFz9ChRIBfVmPyYDFP89Etye2WCOKI5DgoqM6NbooPzw0iy1mPAPm_LdtMhNsVbr8WK-SN84r_TnPAdHJ5dOes0CRbw9hIA8NwmdlLdNmIr7-mKWj7xXLucmRENoJXVoaaPc2xsGGsltwzKVhqhxq1prt9YN9E_meyQ4MMkdSPrFozbBUqvdjkbTIxZIJCtTppFjpFzcvjA")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Quantitative Risk Management
                          </p>
                          <p className="text-[#93b0c8] text-sm font-normal leading-normal">
                            Understand and manage quantitative risks in financial markets.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALl7bJUR-AXTqETQDzoJVVTCA5BT0AOR6AP4W32lGixII8eeZtHoe_FxjGoEuyCL6TJjepdZ1sA8fpvcHyAvYEEqCE-h_PaZIxpJKrJdN7dGY87ohTBIFDXICCvki1OZyQyN64NzSF9K9ZfMUBiPBJAYgGzngcoTU1YG-cITKlANaiBScXbv-qkD5QQjQOLZ9HJzF0cnBzryLSCodOwR8eM-p34ZKt1apj6zB03fMuJqFA9OfOI9nVr5sm5qwpwL47PX_dCZG5Ig")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Behavioral Finance Insights
                          </p>
                          <p className="text-[#93b0c8] text-sm font-normal leading-normal">
                            Insights into behavioral finance and its impact on market
                            dynamics.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiFTRPWa47SbxScH1PTXlT4PCnWJJRvw6OnLvfFH1S_R49m1k-TB7yrKyUCds3_uCRHfEfZCcZOZhwakPpuSuIyHJ1NXZ5EHHYIjAi_Ig820rW5os9VL6HSHfRp_SIZfNGtyZ0SZcWFimdo233vy-ZHkfTd0TCwGBlriaYAYZYbDu3dKYM5jzYwZYfvDzylxDm_DeR9j7uy155v3Bt4t2Iz1JesLcDtnuBubtqpmtEtyQfL9XEfHxKZOGjXgvhSI55VXES_7Ylnw")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Financial Data Analysis Tools
                          </p>
                          <p className="text-[#93b0c8] text-sm font-normal leading-normal">
                            Tools and platforms for financial data analysis and research.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5YSwriuNsVmJ6kOH5QHDmt_8E03bYRi60ESfAtAGdUi7S8zNE6_-sXo5omsyWFt0jld4QAMpVh_MPVn653vWigQ9VptnAKmQInJsjOBOlZIvIuQZ7ELdLPI7MdqV6e9gDkXVB7fz_LYB8RY_P7vqbD6KGS0u6uVWq1LY2O6z3OVTrWvVcRHPks60IyT4Wl2Cy6Jchr-WkW9Uzy41B4rwsRtPJ4feBFtGXPX2Q1ho1Q6lhvi14x2wiCAA2WskBEE5QHhsMJ1Re1g")'
                          }}
                        />
                        <div>
                          <p className="text-white text-base font-medium leading-normal">
                            Quantitative Research Papers
                          </p>
                          <p className="text-[#93b0c8] text-sm font-normal leading-normal">
                            Access a collection of quantitative research papers on various
                            topics.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center p-4">
                      <a href="#" className="flex size-10 items-center justify-center">
                        <div
                          className="text-white"
                          data-icon="CaretLeft"
                          data-size="18px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
                          </svg>
                        </div>
                      </a>
                      <a
                        className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-full bg-[#243747]"
                        href="#"
                      >
                        1
                      </a>
                      <a
                        className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full"
                        href="#"
                      >
                        2
                      </a>
                      <a
                        className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full"
                        href="#"
                      >
                        3
                      </a>
                      <span
                        className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full"
                        ref={null} // or use a proper ref if needed
                      >
                        ...
                      </span>
                      <a
                        className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full"
                        href="#"
                      >
                        10
                      </a>
                      <a href="#" className="flex size-10 items-center justify-center">
                        <div
                          className="text-white"
                          data-icon="CaretRight"
                          data-size="18px"
                          data-weight="regular"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                          </svg>
                        </div>
                      </a>
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
  
  export default About;
  