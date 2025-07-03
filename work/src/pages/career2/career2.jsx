import React from 'react'
import girlWriting from './images/confident-smiling-businesswoman-writing-notes 1.png'
import union from './images/Union.png'
import fork from './images/Frame 321.png'

const Career2 = () => {
	return (
		<div>
			<div className='bg-[#F5F7FA] flex flex-col gap-[10px] text-center py-[5vh]'>
				<h1 className='text-[#1D2026] text-[24px]'>Career</h1>
				<p className='text-[#6E7485]'>
					Home / <span className='text-[#1D2026]'> Career</span>
				</p>
			</div>
			<section className='px-[1%] lg:px-[5%] flex flex-col lg:flex-row items-center justify-center gap-[30px] mt-[5vh]'>
				<aside className='flex flex-col gap-[20px] items-center text-center lg:text-left lg:items-baseline max-w-[450px]'>
					<h1 className='text-[40px] font-[600]'>
						Join the most incredible & creative team.
					</h1>
					<p className='text-[#6E7485]'>
						Proin gravida enim augue, dapibus ultrices eros feugiat et.
						Pellentesque bibendum orci felis, sit amet efficitur felis lacinia
						ac. Mauris gravida justo ac nunc consectetur.
					</p>
					<button className='text-[#ffffff] bg-[#FF6636] px-[20px] py-[10px] rounded-[5px]'>
						View Open Positions
					</button>
				</aside>
				<img src={girlWriting} alt='' className='w-[500px]' />
			</section>
			<section className='px-[1%] lg:px-[5%] flex flex-col lg:flex-row items-center justify-center gap-[30px] mb-[5vh] bg-[#F5F7FA] py-[10vh]'>
				<img src={union} alt='' className='max-w-[500px]' />
				<aside className='flex flex-col gap-[20px] items-center text-center lg:text-left lg:items-baseline max-w-[450px]'>
					<h1 className='text-[32px] font-[600]'>
						Why you will join our team
					</h1>
					<p className='text-[#6E7485] text-[15px]'>
						Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. 
					</p>
					<div className='flex gap-[10px] max-w-[440px] bg-[#FFFFFF] shadow-0px 4px 50px 0px #1D20260D] p-[20px] text-left'>
            <div>
              ✅
            </div>
            <div>
              <p>Ut justo ligula, vehicula sed egestas vel.</p>
              <p className='text-[#6E7485] text-[14px]'>Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>
            </div>
          </div>
          <div className='flex gap-[10px] max-w-[440px] bg-[#FFFFFF] shadow-0px 4px 50px 0px #1D20260D] p-[20px] text-left'>
            <div>
              ✅
            </div>
            <div>
              <p>Aenean vitae leo leo praesent ullamcorper ac.</p>
              <p className='text-[#6E7485] text-[14px]'>Aenean vitae leo leo. Praesent ullamcorper ac libero et mattis. Aenean vel erat at neque viverra feugiat.  </p>
            </div>
          </div>
				</aside>
			</section>
      <section className='px-[1%] lg:p-[10%] flex flex-col gap-[20px]'>
        <h1 className='text-[#1D2026] text-[40px]'>Our Perks & Benefits</h1>
        <div>
          <div>
            <img src={fork} alt="" />
            <p>Healthy Food & Snacks</p>
          </div>
        </div>
      </section>
		</div>
	)
}

export default Career2
