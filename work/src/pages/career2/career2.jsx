import React from 'react'
import girlWriting from './images/confident-smiling-businesswoman-writing-notes 1.png'
import union from './images/Union.png'
import fork from './images/Frame 321.png'
import frame1 from './images/Frame 321 (1).png'
import frame2 from './images/Frame 321 (2).png'
import frame3 from './images/Frame 321 (3).png'
import frame4 from './images/Frame 321 (4).png'
import frame5 from './images/Frame 321 (5).png'
import frame6 from './images/Frame 321 (6).png'
import frame7 from './images/Frame 321 (7).png'
import gallery from './images/Gallery.png'
import l1 from './images/LOGO (9).png'
import l2 from './images/LOGO (10).png'
import l3 from './images/LOGO (11).png'
import l4 from './images/LOGO (12).png'
import l5 from './images/LOGO (13).png'
import l6 from './images/LOGO (14).png'
import l7 from './images/LOGO (15).png'
import l8 from './images/LOGO (16).png'

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
				<img src={union} alt='' className='w-[340px] lg:w-[500px]' />
				<aside className='flex flex-col gap-[20px] items-center text-center lg:text-left lg:items-baseline max-w-[450px]'>
					<h1 className='text-[32px] font-[600]'>Why you will join our team</h1>
					<p className='text-[#6E7485] text-[15px]'>
						Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis.
						Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula
						mi ut, vestibulum odio.
					</p>
					<div className='flex gap-[10px] max-w-[440px] bg-[#FFFFFF] shadow-0px 4px 50px 0px #1D20260D] p-[20px] text-left'>
						<div>✅</div>
						<div>
							<p>Ut justo ligula, vehicula sed egestas vel.</p>
							<p className='text-[#6E7485] text-[14px]'>
								Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat
								felis. Vestibulum non consectetur tortor. Morbi at orci
								vehicula, vehicula mi ut, vestibulum odio.{' '}
							</p>
						</div>
					</div>
					<div className='flex gap-[10px] max-w-[440px] bg-[#FFFFFF] shadow-0px 4px 50px 0px #1D20260D] p-[20px] text-left'>
						<div>✅</div>
						<div>
							<p>Aenean vitae leo leo praesent ullamcorper ac.</p>
							<p className='text-[#6E7485] text-[14px]'>
								Aenean vitae leo leo. Praesent ullamcorper ac libero et mattis.
								Aenean vel erat at neque viverra feugiat.{' '}
							</p>
						</div>
					</div>
				</aside>
			</section>
			<section className='px-[1%] lg:p-[10%] flex flex-col gap-[20px]'>
				<h1 className='text-[#1D2026] text-[40px] text-center'>
					Our Perks & Benefits
				</h1>
				<div className='flex flex-col lg:flex-row gap-[20px] items-center'>
					<div className='bg-[#FFEEE8] pl-[20px] py-[20px] w-[312px] h-[160px] flex flex-col gap-[20px] items-baseline'>
						<img src={fork} alt='' />
						<p className='text-[#1D2026]'>Healthy Food & Snacks</p>
					</div>
					<div className='bg-[#EBEBFF] pl-[20px] py-[20px] w-[312px] h-[160px] flex flex-col gap-[20px] items-baseline'>
						<img src={frame1} alt='' />
						<p className='text-[#1D2026]'>Personal Career Growth</p>
					</div>
					<div className='bg-[#E1F7E3] pl-[20px] py-[20px] w-[312px] h-[160px] flex flex-col gap-[20px] items-baseline'>
						<img src={frame2} alt='' />
						<p className='text-[#1D2026]'>Vacation & Paid Time Off</p>
					</div>
					<div className='bg-[#FFF2E5] pl-[20px] py-[20px] w-[320px] h-[160px] flex flex-col gap-[20px] items-baseline'>
						<img src={frame3} alt='' />
						<p className='text-[#1D2026]'>Special Allowance & Bonuse</p>
					</div>
				</div>
				<div className='flex flex-col lg:flex-row gap-[20px] items-center'>
					<div className='bg-[#E1F7E3] pl-[20px] py-[20px] w-[312px] h-[160px] flex flex-col gap-[20px] items-baseline'>
						<img src={frame4} alt='' />
						<p className='text-[#1D2026]'>Competitive Salary</p>
					</div>
					<div className='bg-[#FFEEE8] pl-[20px] py-[20px] w-[312px] h-[160px] flex flex-col gap-[20px] items-baseline'>
						<img src={frame5} alt='' />
						<p className='text-[#1D2026]'>Well-being memberships</p>
					</div>
					<div className='bg-[#F5F7FA] pl-[20px] py-[20px] w-[312px] h-[160px] flex flex-col gap-[20px] items-baseline'>
						<img src={frame6} alt='' />
						<p className='text-[#1D2026] text-[15.5px]'>
							Maternity/Paternity Benefits
						</p>
					</div>
					<div className='bg-[#EBEBFF] pl-[20px] py-[20px] w-[320px] h-[160px] flex flex-col gap-[20px] items-baseline'>
						<img src={frame7} alt='' />
						<p className='text-[#1D2026]'>Eduguard Annual Events</p>
					</div>
				</div>
			</section>
			<section className='flex flex-col lg:flex-row lg:justify-between px-[1%] lg:px-[10%] my-[5vh] gap-y-[20px] text-center lg:text-left'>
				<div className='lg:max-w-[300px]'>
					<p className='text-[#FF6636]'>OUR GALLERY</p>
					<h1 className='text-[#1D2026] text-[40px]'>
						We’ve been here almost 17 years
					</h1>
					<p className='text-[#4E5566] text-[15px]'>
						Fusce lobortis leo augue, sit amet tristique nisi commodo in.
						Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc
						libero. Curabitur in urna ligula. torquent per conubia nostra.
					</p>
				</div>
				<img src={gallery} alt='' className='w-[340px] lg:w-[550px]' />
			</section>
			<section className='flex flex-col lg:flex-row lg:justify-between px-[1%] lg:px-[8%] my-[15vh] gap-y-[20px] items-center text-center lg:text-left'>
				<div className='max-w-[360px] flex flex-col gap-[15px]'>
					<h1 className='text-[#1D2026] text-[32px]'>
						We Just keep growing with 6.3k Companies
					</h1>
					<p className='text-[#6E7485]'>
						Nullam egestas tellus at enim ornare tristique. Class aptent taciti
						sociosqu ad litora torquent
					</p>
				</div>
				<div className='flex lg:flex-col '>
					<div className='flex flex-col lg:flex-row'>
						<img src={l1} alt='' className='max-w-[160px]' />
						<img src={l2} alt='' className='max-w-[160px]' />
						<img src={l3} alt='' className='max-w-[160px]' />
						<img src={l4} alt='' className='max-w-[160px]' />
					</div>
					<div className='flex flex-col lg:flex-row'>
						<img src={l5} alt='' className='max-w-[160px]' />
						<img src={l6} alt='' className='max-w-[160px]' />
						<img src={l7} alt='' className='max-w-[160px]' />
						<img src={l8} alt='' className='max-w-[160px]' />
					</div>
				</div>
			</section>
			<section className='px-[1%] lg:p-[10%] flex flex-col gap-[20px] bg-[#F5F7FA]'>
				<h1 className='text-[#1D2026] text-[40px] text-center'>
					Our all open positions (04)
				</h1>
				<div className='flex flex-col lg:flex-row lg:flex-wrap gap-[20px] items-center justify-center'>
					<div className='bg-[#FFFFFF]'>
						<div className='flex flex-col gap-[15px] border-b border-b-[#E9EAF0] p-[20px]'>
							<p className='text-[#1D2026] text-[20px]'>Product Designer (UI/UX Designer)</p>
							<div className='flex gap-[10px]'>
								<p>ℹ️ Tokyo, Japan</p>
								<p>💼 Full-Time</p>
								<p>🗒️ 01 Vacancy</p>
							</div>
						</div>
						<div className='flex justify-between items-center p-[20px]'>
							<p className='text-orange-700'>Deadline: <span className='text-gray-500'> 30 June, 2021</span></p>
							<div className='bg-[#FFEEE8] text-orange-700 py-[15px] px-[20px]'>
								➡️
							</div>
						</div>
					</div>
					<div className='bg-[#FFFFFF]'>
						<div className='flex flex-col gap-[15px] border-b border-b-[#E9EAF0] p-[20px]'>
							<p className='text-[#1D2026] text-[20px]'>Product Designer (UI/UX Designer)</p>
							<div className='flex gap-[10px]'>
								<p>ℹ️ Tokyo, Japan</p>
								<p>💼 Full-Time</p>
								<p>🗒️ 01 Vacancy</p>
							</div>
						</div>
						<div className='flex justify-between items-center p-[20px]'>
							<p className='text-orange-700'>Deadline: <span className='text-gray-500'> 30 June, 2021</span></p>
							<div className='bg-[#FFEEE8] text-orange-700 py-[15px] px-[20px]'>
								➡️
							</div>
						</div>
					</div>
					<div className='bg-[#FFFFFF]'>
						<div className='flex flex-col gap-[15px] border-b border-b-[#E9EAF0] p-[20px]'>
							<p className='text-[#1D2026] text-[20px]'>Product Designer (UI/UX Designer)</p>
							<div className='flex gap-[10px]'>
								<p>ℹ️ Tokyo, Japan</p>
								<p>💼 Full-Time</p>
								<p>🗒️ 01 Vacancy</p>
							</div>
						</div>
						<div className='flex justify-between items-center p-[20px]'>
							<p className='text-orange-700'>Deadline: <span className='text-gray-500'> 30 June, 2021</span></p>
							<div className='bg-[#FFEEE8] text-orange-700 py-[15px] px-[20px]'>
								➡️
							</div>
						</div>
					</div>
					<div className='bg-[#FFFFFF]'>
						<div className='flex flex-col gap-[15px] border-b border-b-[#E9EAF0] p-[20px]'>
							<p className='text-[#1D2026] text-[20px]'>Product Designer (UI/UX Designer)</p>
							<div className='flex gap-[10px]'>
								<p>ℹ️ Tokyo, Japan</p>
								<p>💼 Full-Time</p>
								<p>🗒️ 01 Vacancy</p>
							</div>
						</div>
						<div className='flex justify-between items-center p-[20px]'>
							<p className='text-orange-700'>Deadline: <span className='text-gray-500'> 30 June, 2021</span></p>
							<div className='bg-[#FFEEE8] text-orange-700 py-[15px] px-[20px]'>
								➡️
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Career2
