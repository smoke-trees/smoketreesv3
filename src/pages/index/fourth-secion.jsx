import React, { useCallback, useEffect } from 'react'
import gsap from 'gsap'
import Target from '../../components/targets/target'
import { ServiceCard } from '../../components/service-card/ServiceCard'
import { ServiceAutomation, ServiceCloud, ServiceDevelopment, ServiceUiUx } from '../../assets/images'
export default function FourthSection({ }) {
  const onMouseEnterCallBack = useCallback((e) => {
    gsap.to('#cursor', {
      borderColor: '#fff',
    })
  }, [])
  const onMouseLeaveCallBack = useCallback((e) => {
    gsap.to('#cursor', {
      borderColor: '#373737',
    })
  }, [])

  return (
    <>
      <div
        id={'#fourth-section'}
        className="fourth-section index-section index-section__fourth-section"
        onMouseEnter={onMouseEnterCallBack}
        onMouseLeave={onMouseLeaveCallBack}
      >
        <div className='fourth-section__right'>
          <div className="fourth-section__icon">
            <svg width="282" height="235" viewbox="0 0 282 235" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path xmlns="http://www.w3.org/2000/svg" d="M279.776 178.435L213.241 140.021C214.931 125.851 207.914 109.899 193.651 102.747C179.046 94.3144 161.722 96.2129 149.359 106.384L180.192 124.186L167.075 146.905L134.619 128.166C131.992 143.96 139.01 159.912 153.958 169.624C168.563 178.056 184.607 176.501 196.034 167.952L262.568 206.365C265.814 208.239 269.653 207.21 270.247 204.308L279.616 188.08C282.427 183.211 281.398 179.372 279.776 178.435ZM18.2132 67.4508C10.6687 39.294 27.5332 10.0839 55.6899 2.5393C83.8466 -5.00527 113.057 11.8592 120.601 40.0159C128.146 68.1727 111.281 97.3828 83.1247 104.927C54.968 112.472 25.7578 95.6075 18.2132 67.4508ZM148.955 197.027L8.17136 234.75L1.31266 209.153C-6.23191 180.997 33.6699 145.614 89.9834 130.524C96.3827 128.81 101.502 127.438 108.244 127.003C106.462 135.711 107.24 143.733 109.641 152.692C115.128 173.17 130.51 189.624 148.955 197.027Z" fill="#B1DF5D" />
            </svg>
          </div>
          <div className="fourth-section__middle">
            <div className="fourth-section__middle__title">
              <svg width="297" height="36" viewBox="0 0 297 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0843 3.84799C7.84431 3.84799 0.320312 9.56799 0.320312 19.6C0.320312 29.632 7.84431 35.352 17.0843 35.352C26.3243 35.352 33.8483 29.632 33.8483 19.6C33.8483 9.56799 26.3243 3.84799 17.0843 3.84799ZM17.0843 35.132C10.7923 35.132 10.3523 26.332 10.3523 19.6C10.3523 12.868 10.7923 4.06799 17.0843 4.06799C23.3763 4.06799 23.8163 12.868 23.8163 19.6C23.8163 26.332 23.3763 35.132 17.0843 35.132Z" fill="url(#paint0_linear_26_2)" />
                <path d="M61.492 11.592L49.788 12.296V12.516L53.308 12.34V28.092C52.78 32.36 51.152 33.988 49.348 33.988C46.664 33.988 46.664 30.82 46.664 29.148V11.592L35.004 12.296V12.516L38.524 12.34V28.224C38.524 31.568 39.756 35.352 45.74 35.352C50.448 35.352 52.692 33.328 53.352 29.06L53.308 35.044H64.44V34.824H61.448L61.492 11.592Z" fill="url(#paint1_linear_26_2)" />
                <path d="M82.975 11.504C79.895 11.504 76.463 13.572 75.495 18.72V18.676L75.627 11.592L63.879 12.296V12.516L67.399 12.34V34.78H63.967V35H79.411V34.78H75.539V19.424C76.287 15.112 78.443 13 80.203 13C81.391 13 82.051 13.924 82.051 15.376C82.051 16.916 81.171 18.016 79.851 18.456C79.983 20.964 81.787 22.152 83.767 22.152C86.627 22.152 88.651 19.908 88.651 16.96C88.651 13.704 86.231 11.548 82.975 11.548V11.504Z" fill="url(#paint2_linear_26_2)" />
                <path d="M106.172 8.51199C106.172 5.87199 108.416 4.06799 112.112 4.06799C119.196 4.06799 122.232 9.34799 122.804 14.76H123.024L122.452 3.93599L119.768 5.07999C118.58 4.63999 114.532 3.84799 112.112 3.84799C105.204 3.84799 99.3959 7.01599 99.3959 12.956C99.3959 23.604 118.58 22.944 118.58 30.336C118.58 33.592 115.412 35.132 111.408 35.132C103.488 35.132 100.496 28.356 99.7919 22.504H99.5719L100.276 35.264L102.872 34.164C104.28 34.604 107.8 35.352 111.408 35.352C118.844 35.352 125.356 31.568 125.356 25.364C125.356 14.408 106.172 15.464 106.172 8.51199Z" fill="url(#paint3_linear_26_2)" />
                <path d="M150.607 26.684C149.067 29.544 146.031 30.38 143.743 30.38C139.431 30.38 136.087 27.212 135.823 20.964H150.519C151.575 15.376 147.923 11.504 140.267 11.504C132.567 11.504 127.551 16.652 127.551 23.868C127.551 31.084 132.831 35.396 138.859 35.396C144.975 35.396 148.847 31.48 150.783 26.816L150.607 26.684ZM140.267 11.724C143.699 11.724 143.083 17.928 142.687 20.656H135.823C135.823 20.524 135.823 20.348 135.823 20.216C135.823 17.268 136.483 11.724 140.267 11.724Z" fill="url(#paint4_linear_26_2)" />
                <path d="M170.674 11.504C167.594 11.504 164.162 13.572 163.194 18.72V18.676L163.326 11.592L151.578 12.296V12.516L155.098 12.34V34.78H151.666V35H167.11V34.78H163.238V19.424C163.986 15.112 166.142 13 167.902 13C169.09 13 169.75 13.924 169.75 15.376C169.75 16.916 168.87 18.016 167.55 18.456C167.682 20.964 169.486 22.152 171.466 22.152C174.326 22.152 176.35 19.908 176.35 16.96C176.35 13.704 173.93 11.548 170.674 11.548V11.504Z" fill="url(#paint5_linear_26_2)" />
                <path d="M198.154 12.076H203.038L195.91 26.508L188.87 12.076H192.566V11.856H176.682V12.076H179.63L191.598 35.88L203.346 12.076H206.558V11.856H198.154V12.076Z" fill="url(#paint6_linear_26_2)" />
                <path d="M213.588 10.052C216.316 10.052 218.516 7.85199 218.516 5.12399C218.516 2.39599 216.316 0.23999 213.588 0.23999C210.904 0.23999 208.704 2.43999 208.704 5.12399C208.704 7.85199 210.904 10.052 213.588 10.052ZM217.68 16.476L217.768 11.592L206.02 12.296V12.516L209.496 12.34V34.78H206.064V35H221.112V34.78H217.68V16.476Z" fill="url(#paint7_linear_26_2)" />
                <path d="M235.704 11.724C237.949 11.724 239.136 13.396 239.136 15.376C239.136 16.52 238.52 17.664 237.596 18.104C237.729 20.612 239.488 21.8 241.468 21.8C243.844 21.8 245.648 20.216 245.648 17.752C245.648 12.56 238.74 11.504 235.528 11.504C227.828 11.504 222.812 16.608 222.812 23.824C222.812 31.084 228.092 35.352 234.12 35.352C240.236 35.352 244.108 31.436 246.044 26.772L245.868 26.684C244.329 29.544 241.292 30.38 239.005 30.38C234.561 30.38 231.084 26.948 231.084 20.172C231.084 17.268 231.744 11.724 235.704 11.724Z" fill="url(#paint8_linear_26_2)" />
                <path d="M271.22 26.684C269.68 29.544 266.644 30.38 264.356 30.38C260.044 30.38 256.7 27.212 256.436 20.964H271.132C272.188 15.376 268.536 11.504 260.88 11.504C253.18 11.504 248.164 16.652 248.164 23.868C248.164 31.084 253.444 35.396 259.472 35.396C265.588 35.396 269.46 31.48 271.396 26.816L271.22 26.684ZM260.88 11.724C264.312 11.724 263.696 17.928 263.3 20.656H256.436C256.436 20.524 256.436 20.348 256.436 20.216C256.436 17.268 257.096 11.724 260.88 11.724Z" fill="url(#paint9_linear_26_2)" />
                <path d="M280.531 14.98C280.531 13.176 282.247 11.724 285.371 11.724C288.759 11.724 292.631 13.748 293.819 19.38H293.995L293.555 11.592L291.047 12.604C289.463 12.032 287.307 11.548 285.371 11.548C279.959 11.548 274.107 13.572 274.107 18.984C274.107 27.652 290.079 27.124 290.079 31.92C290.079 34.384 287.219 35.176 284.403 35.176C281.235 35.176 275.471 33.46 274.283 25.892H274.107L274.591 35.308L277.583 34.208C280.399 35.044 282.643 35.396 284.403 35.396C290.651 35.396 296.195 33.02 296.195 27.388C296.195 18.72 280.531 20.04 280.531 15.024V14.98Z" fill="url(#paint10_linear_26_2)" />
                <defs>
                  <linearGradient id="paint0_linear_26_2" x1="5.06892" y1="8.2736" x2="159.166" y2="11.2642" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5EDEAA" />
                    <stop offset="0.546875" stop-color="#4DE0AB" />
                    <stop offset="1" stop-color="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_26_2" x1="5.06892" y1="8.2736" x2="159.166" y2="11.2642" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5EDEAA" />
                    <stop offset="0.546875" stop-color="#4DE0AB" />
                    <stop offset="1" stop-color="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_26_2" x1="5.06892" y1="8.2736" x2="159.166" y2="11.2642" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5EDEAA" />
                    <stop offset="0.546875" stop-color="#4DE0AB" />
                    <stop offset="1" stop-color="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_26_2" x1="5.06892" y1="8.2736" x2="159.166" y2="11.2642" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5EDEAA" />
                    <stop offset="0.546875" stop-color="#4DE0AB" />
                    <stop offset="1" stop-color="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint4_linear_26_2" x1="5.06892" y1="8.2736" x2="159.166" y2="11.2642" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5EDEAA" />
                    <stop offset="0.546875" stop-color="#4DE0AB" />
                    <stop offset="1" stop-color="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint5_linear_26_2" x1="5.06892" y1="8.2736" x2="159.166" y2="11.2642" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5EDEAA" />
                    <stop offset="0.546875" stop-color="#4DE0AB" />
                    <stop offset="1" stop-color="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint6_linear_26_2" x1="5.06892" y1="8.2736" x2="159.166" y2="11.2642" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5EDEAA" />
                    <stop offset="0.546875" stop-color="#4DE0AB" />
                    <stop offset="1" stop-color="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint7_linear_26_2" x1="5.06892" y1="8.2736" x2="159.166" y2="11.2642" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5EDEAA" />
                    <stop offset="0.546875" stop-color="#4DE0AB" />
                    <stop offset="1" stop-color="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint8_linear_26_2" x1="5.06892" y1="8.2736" x2="159.166" y2="11.2642" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5EDEAA" />
                    <stop offset="0.546875" stop-color="#4DE0AB" />
                    <stop offset="1" stop-color="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint9_linear_26_2" x1="5.06892" y1="8.2736" x2="159.166" y2="11.2642" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5EDEAA" />
                    <stop offset="0.546875" stop-color="#4DE0AB" />
                    <stop offset="1" stop-color="#B1DF5D" />
                  </linearGradient>
                  <linearGradient id="paint10_linear_26_2" x1="5.06892" y1="8.2736" x2="159.166" y2="11.2642" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5EDEAA" />
                    <stop offset="0.546875" stop-color="#4DE0AB" />
                    <stop offset="1" stop-color="#B1DF5D" />
                  </linearGradient>
                </defs>
              </svg>


            </div>
            <div className="fourth-section__middle__body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero rerum sit laborum quasi ipsam aliquam, iusto assumenda officiis distinctio quia delectus adipisci doloremque enim! Eveniet dolore inventore in harum quas.
              Repudiandae officiis mollitia sequi culpa? Est placeat, autem similique quidem, facere unde fuga doloremque enim quaerat exercitationem pariatur ab praesentium neque iure saepe error ad alias dolorum, nisi sunt. Corrupti?
            </div>
            <Target>
              <div className='fourth-section__middle__explore'>
                Explore
              </div>
            </Target>
          </div>
        </div>

        <div className={'fourth-section__left'}>
          <Target>
            <ServiceCard image={ServiceUiUx} text={'UI/UX Design'} />
          </Target>
          <Target>
            <ServiceCard color={'pink'} image={ServiceDevelopment} text={'Development'} />
          </Target>
          <Target>
            <ServiceCard color={'yellow'} image={ServiceCloud} text={'Cloud Applications'} />
          </Target>
          <Target>
            <ServiceCard color={'blue'} image={ServiceAutomation} text={'Automation and AI'} />
          </Target>
        </div>
      </div>
    </>
  )
}