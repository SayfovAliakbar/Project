import images from '../home/img/Images.png'
import frame145 from '../home/img/Frame 145.png'
import frame1 from '../home/img/Frame 145 (1).png'
import frame2 from '../home/img/Frame 145 (2).png'
import frame3 from '../home/img/Frame 145 (3).png'
import frame4 from '../home/img/Frame 145 (4).png'
import frame5 from '../home/img/Frame 145 (5).png'
import frame6 from '../home/img/Frame 145 (6).png'
import frame7 from '../home/img/Frame 145 (7).png'
import frame8 from '../home/img/Frame 145 (8).png'
import frame9 from '../home/img/Frame 145 (9).png'
import frame11 from '../home/img/Frame 145 (11).png'
import frame12 from '../home/img/Frame 145 (10).png'
import course from '../home/img/Course Images.png'
import star from '../home/img/Star (1).png'
import course1 from '../home/img/Course Images (1).png'
import course2 from '../home/img/Course Images (2).png'
import course3 from '../home/img/Course Images (3).png'
import course4 from '../home/img/Course Images (4).png'
import course5 from '../home/img/Course Images (5).png'
import course6 from '../home/img/Course Images (6).png'
import course7 from '../home/img/Course Images (7).png'
import course8 from '../home/img/Course Images (8).png'
import course9 from '../home/img/Course Images (9).png'
import course10 from '../home/img/Course Images (10).png'
import photo from '../home/img/Photo (19).png'
import user from '../home/img/User.png'
import bar from '../home/img/bar-chart.png'
import clock from '../home/img/Clock.png'
import course11 from '../home/img/Course Images (11).png'
import course12 from '../home/img/Course Images (12).png'
import course13 from '../home/img/Course Images (13).png'
import course14 from '../home/img/Course Images (14).png'
import course15 from '../home/img/Course Images (15).png'
import price from '../home/img/Price & Discount.png'
import check from '../home/img/Check (1).png'
import shop from '../home/img/ShoppingCartSimple.png'
import become from '../home/img/Become an Instructor.png'
import number1 from '../home/img/Number.png'
import number2 from '../home/img/Number (1).png'
import number3 from '../home/img/Number (2).png'
import number4 from '../home/img/Number (3).png'
import image52 from '../home/img/Image (52).png'
import image53 from '../home/img/Image (53).png'
import image54 from '../home/img/Image (54).png'
import image55 from '../home/img/Image (55).png'
import image56 from '../home/img/Image (56).png'
import logo15 from '../home/img/LOGO (15).png'
import logo16 from '../home/img/LOGO (16).png'
import logo17 from '../home/img/LOGO (17).png'
import logo18 from '../home/img/LOGO (18).png'
import logo19 from '../home/img/LOGO (19).png'
import logo20 from '../home/img/LOGO (20).png'
import logo21 from '../home/img/LOGO (21).png'
import logo22 from '../home/img/LOGO (22).png'
// import '../home/home.css'
const Home = () => {
  return (
    <div>
      <div className='all1' style={{ display: 'flex', justifyContent: 'end' }}>
        <div style={{ width: '40%' }}>
          <p style={{ fontSize: '60px', fontWeight: '600' }}>Learn with expert anytime anywhere</p>
          <p style={{ color: '#4E5566', width: '60%', marginTop: '20px' }}>Our mision is to help people to find the best course online and learn with expert anytime, anywhere.</p>
          <button style={{ backgroundColor: '#FF6636', color: 'white', padding: '8px 12px', marginTop: '30px' }}>Create Account</button>
        </div>
        <div>
          <img style={{ width: '700px' }} src={images} alt="" />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
        <strong style={{ color: "#1D2026", fontSize: '30px' }}>Browse top category</strong>
      </div>
      <div>
        <div className='all2' style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ backgroundColor: '#EBEBFF', width: '300px', display: 'flex', padding: '10px', gap: '20px' }}>
            <div>
              <img src={frame145} alt="" />
            </div>
            <div>
              <p>Label</p>
              <p style={{ color: '#6E7485', fontSize: '14px' }}>63,476 Courses</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#E1F7E3', width: '300px', display: 'flex', padding: '10px', gap: '20px' }}>
            <div>
              <img src={frame1} alt="" />
            </div>
            <div>
              <p>Business</p>
              <p style={{ color: '#6E7485', fontSize: '14px' }}>52,822 Courses</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#FFF2E5', width: '300px', display: 'flex', padding: '10px', gap: '20px' }}>
            <div>
              <img src={frame2} alt="" />
            </div>
            <div>
              <p>Finance & Accounting</p>
              <p style={{ color: '#6E7485', fontSize: '14px' }}>33,841 Courses</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#FFF0F0', width: '300px', display: 'flex', padding: '10px', gap: '20px' }}>
            <div>
              <img src={frame3} alt="" />
            </div>
            <div>
              <p>IT & Software</p>
              <p style={{ color: '#6E7485', fontSize: '14px' }}>22,649 Courses</p>
            </div>
          </div>
        </div>

        <div className='all2' style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
          <div style={{ backgroundColor: '#FFFFFF', width: '300px', display: 'flex', padding: '10px', gap: '20px' }}>
            <div>
              <img src={frame4} alt="" />
            </div>
            <div>
              <p>Personal Development</p>
              <p style={{ color: '#6E7485', fontSize: '14px' }}>20,126 Courses</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#F5F7FA', width: '300px', display: 'flex', padding: '10px', gap: '20px' }}>
            <div>
              <img src={frame5} alt="" />
            </div>
            <div>
              <p>Office Productivity</p>
              <p style={{ color: '#6E7485', fontSize: '14px' }}>13,932 Courses</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#EBEBFF', width: '300px', display: 'flex', padding: '10px', gap: '20px' }}>
            <div>
              <img src={frame6} alt="" />
            </div>
            <div>
              <p>Marketing</p>
              <p style={{ color: '#6E7485', fontSize: '14px' }}>12,068 Courses</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#F5F7FA', width: '300px', display: 'flex', padding: '10px', gap: '20px' }}>
            <div>
              <img src={frame7} alt="" />
            </div>
            <div>
              <p>Photography & Video</p>
              <p style={{ color: '#6E7485', fontSize: '14px' }}>6,196 Courses</p>
            </div>
          </div>
        </div>


        <div className='all2' style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
          <div style={{ backgroundColor: '#FFF2E5', width: '300px', display: 'flex', padding: '10px', gap: '20px' }}>
            <div>
              <img src={frame8} alt="" />
            </div>
            <div>
              <p>Personal Development</p>
              <p style={{ color: '#6E7485', fontSize: '14px' }}>20,126 Courses</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#F5F7FA', width: '300px', display: 'flex', padding: '10px', gap: '20px' }}>
            <div>
              <img src={frame9} alt="" />
            </div>
            <div>
              <p>Lifestyle</p>
              <p style={{ color: '#6E7485', fontSize: '14px' }}>2,736 Courses</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#FFEEE8', width: '300px', display: 'flex', padding: '10px', gap: '20px' }}>
            <div>
              <img src={frame11} alt="" />
            </div>
            <div>
              <p>Design</p>
              <p style={{ color: '#6E7485', fontSize: '14px' }}>2,600 Courses</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#E1F7E3', width: '300px', display: 'flex', padding: '10px', gap: '20px' }}>
            <div>
              <img src={frame12} alt="" />
            </div>
            <div>
              <p>Health & Fitness</p>
              <p style={{ color: '#6E7485', fontSize: '14px' }}>1,678 Courses</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: ' 50px' }}>
          <span style={{ color: '#4E5566' }}>We have more category & subcategory. <span style={{ color: '#FF6636' }}>Browse All </span></span>
        </div>
      </div>


      <div style={{ backgroundColor: '#F5F7FA', padding: '50px', marginTop: '100px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Best selling courses</h1>
        <div className='all2' style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
          <div style={{ width: '245px', backgroundColor: 'white' }}>
            <img src={course} alt="" />
            <div style={{ padding: '5px' }}>
              <div  style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#993D20', backgroundColor: '#FFEEE8', display: 'inline', padding: '3px 5px' }}>Design</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>Machine Learning A-Z™: Hands-On Python & R In Data...</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '245px', backgroundColor: 'white' }}>
            <img src={course1} alt="" />
            <div style={{ padding: '5px' }}>
              <div  style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#342F98', backgroundColor: '#EBEBFF', display: 'inline', padding: '3px 5px' }}>Developments</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>The Complete 2021 Web Development Bootcamp</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>


          <div style={{ width: '245px', backgroundColor: 'white' }}>
            <img src={course2} alt="" />
            <div style={{ padding: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#15711F', backgroundColor: '#E1F7E3', display: 'inline', padding: '3px 5px' }}>Business</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>Learn Python Programming Masterclass</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>


          <div style={{ width: '245px', backgroundColor: 'white' }}>
            <img src={course3} alt="" />
            <div style={{ padding: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#342F98', backgroundColor: '#EBEBFF', display: 'inline', padding: '3px 5px' }}>Marketing</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>The Complete Digital Marketing Course - 12 Courses in 1</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>


          <div style={{ width: '245px', backgroundColor: 'white' }}>
            <img src={course4} alt="" />
            <div style={{ padding: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#882929', backgroundColor: '#FFF0F0', display: 'inline', padding: '3px 5px' }}>IT & Software</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>Reiki Level I, II and Master/Teacher Program</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className='all2' style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
          <div style={{ width: '245px', backgroundColor: 'white' }}>
            <img src={course5} alt="" />
            <div style={{ padding: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#65390C', backgroundColor: '#FFEEE8', display: 'inline', padding: '3px 5px' }}>Music</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>The Complete Foundation Stock Trading Course</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '245px', backgroundColor: 'white' }}>
            <img src={course6} alt="" />
            <div style={{ padding: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#342F98', backgroundColor: '#EBEBFF', display: 'inline', padding: '3px 5px' }}>Marketing</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>Beginner to Pro in Excel: Financial Modeling and Valuati...</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>


          <div style={{ width: '245px', backgroundColor: 'white' }}>
            <img src={course7} alt="" />
            <div style={{ padding: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#15711F', backgroundColor: '#E1F7E3', display: 'inline', padding: '3px 5px' }}>Health & Fitness</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>The Python Mega Course: Build 10 Real World Applications</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>


          <div style={{ width: '245px', backgroundColor: 'white' }}>
            <img src={course8} alt="" />
            <div style={{ padding: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#342F98', backgroundColor: '#EBEBFF', display: 'inline', padding: '3px 5px' }}>Design</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>Copywriting - Become a Freelance Copywriter, your ow...</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>


          <div style={{ width: '245px', backgroundColor: 'white' }}>
            <img src={course9} alt="" />
            <div style={{ padding: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#65390C', backgroundColor: '#FFF0F0', display: 'inline', padding: '3px 5px' }}>Lifestyle</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>Google Analytics Certification - Learn How To Pass The Exam</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div style={{ backgroundColor: 'white', width: '90%', boxShadow: '0px 4px 8px gray', padding: '40px', margin: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '30px', fontWeight: '600' }}>Our feature courses</p>
          <p style={{ color: '#4E5566' }}>Vestibulum sed dolor sed diam mollis maximus vel nec dolor. <br /> Donec varius purus et eleifend porta.</p>
        </div>


        <div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
            <div className='all2' style={{ display: 'flex', border: '1px solid gray', width: '600px' }}>
              <div>
                <img src={course10} alt="" />
              </div>
              <div>
                <div style={{ padding: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ color: '#15711F', backgroundColor: '#E1F7E3', display: 'inline', padding: '3px 5px' }}>Health & Fitness</p>
                    <span>$14.00 <span style={{ color: 'gray', textDecorationLine: 'line-through' }}>$26.00</span></span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Investing In Stocks The Complete Course! (13 H...)</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img src={photo} alt="" />
                      <p style={{ color: '#4E5566' }}>Kevin Gilbert</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img src={star} alt="" />
                      <p>5.0 <span style={{ color: 'gray' }}>(357,914)</span></p>
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={user} alt="" />
                        <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={bar} alt="" />
                        <p style={{ color: '#4E5566' }}>Beginner</p>
                      </div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <img src={clock} alt="" />
                        <p style={{ color: '#4E5566' }}>6 hour</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='all2' style={{ display: 'flex', border: '1px solid gray', width: '600px' }}>
              <div>
                <img src={course11} alt="" />
              </div>
              <div>
                <div style={{ padding: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ color: '#993D20', backgroundColor: '#FFEEE8', display: 'inline', padding: '3px 5px' }}>Personal Development</p>
                    <span>$14.00 <span style={{ color: 'gray', textDecorationLine: 'line-through' }}>$26.00</span></span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Google Analytics Certification - Learn How To...</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img src={photo} alt="" />
                      <p style={{ color: '#4E5566' }}>Kevin Gilbert</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img src={star} alt="" />
                      <p>5.0 <span style={{ color: 'gray' }}>(357,914)</span></p>
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={user} alt="" />
                        <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={bar} alt="" />
                        <p style={{ color: '#4E5566' }}>Beginner</p>
                      </div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <img src={clock} alt="" />
                        <p style={{ color: '#4E5566' }}>6 hour</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
            <div className='all2' style={{ display: 'flex', border: '1px solid gray', width: '600px' }}>
              <div>
                <img src={course12} alt="" />
              </div>
              <div>
                <div style={{ padding: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ color: '#1D2026', backgroundColor: '#F5F7FA', display: 'inline', padding: '3px 5px' }}>Productivity</p>
                    <span>$14.00 <span style={{ color: 'gray', textDecorationLine: 'line-through' }}>$26.00</span></span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', color: '#FF6636' }}>Adobe XD for Web Design: Essential Principles</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img src={photo} alt="" />
                      <p style={{ color: '#4E5566' }}>Kevin Gilbert</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img src={star} alt="" />
                      <p>5.0 <span style={{ color: 'gray' }}>(357,914)</span></p>
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={user} alt="" />
                        <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={bar} alt="" />
                        <p style={{ color: '#4E5566' }}>Beginner</p>
                      </div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <img src={clock} alt="" />
                        <p style={{ color: '#4E5566' }}>6 hour</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='all2' style={{ display: 'flex', border: '1px solid gray', width: '600px' }}>
              <div>
                <img src={course13} alt="" />
              </div>
              <div>
                <div style={{ padding: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ color: '#65390C', backgroundColor: '#FFEEE8', display: 'inline', padding: '3px 5px' }}>Music</p>
                    <span>$14.00 <span style={{ color: 'gray', textDecorationLine: 'line-through' }}>$26.00</span></span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>The Python Mega Course: Build 10 Real World ...</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img src={photo} alt="" />
                      <p style={{ color: '#4E5566' }}>Kevin Gilbert</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <img src={star} alt="" />
                      <p>5.0 <span style={{ color: 'gray' }}>(357,914)</span></p>
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={user} alt="" />
                        <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={bar} alt="" />
                        <p style={{ color: '#4E5566' }}>Beginner</p>
                      </div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <img src={clock} alt="" />
                        <p style={{ color: '#4E5566' }}>6 hour</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p style={{ fontWeight: '600', fontSize: '30px', textAlign: 'center', marginTop: '100px' }}>Recently added courses</p>
        <div className='all2' style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '30px' }}>
          <div style={{ width: '245px', backgroundColor: 'white', border: '1px solid lightGray' }}>
            <img src={course14} alt="" />
            <div style={{ padding: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#65390C', backgroundColor: '#FFF0F0', display: 'inline', padding: '3px 5px' }}>Design</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>The Python Mega Course: Build 10 Real World Applications</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '245px', backgroundColor: 'white', border: '1px solid lightGray' }}>
            <img src={course11} alt="" />
            <div style={{ padding: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#65390C', backgroundColor: '#FFF0F0', display: 'inline', padding: '3px 5px' }}>IT & Software</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>Facebook Ads & Facebook Marketing MASTERY 2021 Cours...</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: '245px', backgroundColor: 'white', border: '1px solid lightGray' }}>
            <img src={course15} alt="" />
            <div style={{ padding: '5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', alignItems: 'center' }}>
                <p style={{ color: '#342F98', backgroundColor: '#EBEBFF', display: 'inline', padding: '3px 5px' }}>Developments</p>
                <strong style={{ color: '#FF6636' }}>$57</strong>
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>2021 Complete Python Bootcamp From Zero to Hero in Python</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <img src={star} alt="" />
                  <p style={{ color: '#4E5566' }}>5.0</p>
                </div>
                <div>
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '420px', boxShadow: '0px 4px 8px gray', padding: '20px', borderRadius: '10px', position: 'absolute', backgroundColor: 'white', right: '80px' }}>
            <p style={{ color: '#342F98', backgroundColor: '#EBEBFF', display: 'inline', padding: '3px 5px' }}>Developments</p>
            <p style={{ fontSize: '20px', fontWeight: '500' }}>2021 Complete Python Bootcamp From Zero to Hero in Python</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <img src={photo} alt="" />
                <div>
                  <p style={{ color: '#8C94A3' }}>Course by</p>
                  <p style={{ color: '#4E5566' }}>Kevin Gilbert</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <img src={star} alt="" />
                <p>5.0 <span style={{ color: 'gray' }}>(357,914)</span></p>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={user} alt="" />
                  <span style={{ color: '#4E5566' }}>265.7K <span style={{ color: '#8C94A3' }}> students</span></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={bar} alt="" />
                  <p style={{ color: '#4E5566' }}>Beginner</p>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <img src={clock} alt="" />
                  <p style={{ color: '#4E5566' }}>6 hour</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <img src={price} alt="" />
            </div>
            <hr style={{ color: 'lightGray', marginTop: '10px', marginBottom: '10px' }} />
            <div>
              <p style={{ fontWeight: '500' }}>What you’ll learn</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                <img src={check} alt="" />
                <p style={{ color: '#6E7485' }}>Learn to use Python professionally, learning both Python 2 and Python 3!</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                <img src={check} alt="" />
                <p style={{ color: '#6E7485' }}>Create games with Python, like Tic Tac Toe and Blackjack!</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                <img src={check} alt="" />
                <p style={{ color: '#6E7485' }}>Create games with Python, like Tic Tac Toe and Blackjack!</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#FF6636', color: 'white', justifyContent: 'center', padding: '10px', borderRadius: '8px', marginTop: '10px' }}>
                <img src={shop} alt="" />
                <p style={{ fontWeight: '500' }}>Add to Cart</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#FFEEE8', color: '#FF6636', justifyContent: 'center', padding: '10px', borderRadius: '8px', marginTop: '10px' }}>
                <p style={{ fontWeight: '500' }}>Course Detail</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#F5F7FA', display: 'flex', marginTop: '300px', padding: '20px', justifyContent: 'space-around' }}>
        <div>
          <img src={become} alt="" />
        </div>
        <div style={{ width: '600px', backgroundColor: 'white', boxShadow: '0px 4px 8px lightGray', padding: '20px', borderRadius: '10px' }}>
          <p style={{ fontWeight: '500', fontSize: '25px' }}>Your teaching & earning steps</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={number1} alt="" />
                <p>Apply to become instructor</p>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={number2} alt="" />
                <p>Build & edit your profile</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '50px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={number3} alt="" />
                <p>Create your new course</p>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={number4} alt="" />
                <p>Start teaching & earning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p style={{ textAlign: 'center', fontSize: '30px', fontWeight: '500', marginTop: '70px' }}>Top instructor of the month</p>
        <div className='all2' style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <div style={{ width: '246px', border: '1px solid lightGray', textAlign: 'center' }}>
            <img src={image52} alt="" />
            <p>Devon Lane</p>
            <p style={{ color: '#8C94A3' }}>Senior Developer</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={star} alt="" />
                <p style={{ color: '#4E5566' }}>4.6</p>
              </div>
              <div>
                <p style={{ color: '#4E5566' }}>854 <span style={{ color: '#8C94A3' }}>students</span></p>
              </div>
            </div>
          </div>
          <div style={{ width: '246px', border: '1px solid lightGray', textAlign: 'center' }}>
            <img src={image53} alt="" />
            <p>Darrell Steward</p>
            <p style={{ color: '#8C94A3' }}>Digital Product Designer</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={star} alt="" />
                <p style={{ color: '#4E5566' }}>4.6</p>
              </div>
              <div>
                <p style={{ color: '#4E5566' }}>854 <span style={{ color: '#8C94A3' }}>students</span></p>
              </div>
            </div>
          </div>
          <div style={{ width: '246px', border: '1px solid lightGray', textAlign: 'center' }}>
            <img src={image54} alt="" />
            <p>Jane Cooper</p>
            <p style={{ color: '#8C94A3' }}>UI/UX Designer</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={star} alt="" />
                <p style={{ color: '#4E5566' }}>4.6</p>
              </div>
              <div>
                <p style={{ color: '#4E5566' }}>854 <span style={{ color: '#8C94A3' }}>students</span></p>
              </div>
            </div>
          </div>
          <div style={{ width: '246px', border: '1px solid lightGray', textAlign: 'center' }}>
            <img src={image55} alt="" />
            <p>Albert Flores</p>
            <p style={{ color: '#8C94A3' }}>Adobe Instructor</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={star} alt="" />
                <p style={{ color: '#4E5566' }}>4.6</p>
              </div>
              <div>
                <p style={{ color: '#4E5566' }}>854 <span style={{ color: '#8C94A3' }}>students</span></p>
              </div>
            </div>
          </div>
          <div style={{ width: '246px', border: '1px solid lightGray', textAlign: 'center' }}>
            <img src={image56} alt="" />
            <p>Kathryn Murphy</p>
            <p style={{ color: '#8C94A3' }}>Lead Developer</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={star} alt="" />
                <p style={{ color: '#4E5566' }}>4.6</p>
              </div>
              <div>
                <p style={{ color: '#4E5566' }}>854 <span style={{ color: '#8C94A3' }}>students</span></p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p style={{ color: '#6E7485' }}>Thousands of students waiting for a instructor. Start teaching & earning now!. <span style={{ color: '#FF6636' }}>Become Instructor</span></p>
        </div>
      </div>

      <div className='all2' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '30px' }}>
        <div>
          <p style={{ fontWeight: '500', fontSize: '25px' }}>6.3k trusted companies</p>
          <p style={{ color: '#6E7485' }}>Nullam egestas tellus at enim ornare tristique. <br /> Class aptent taciti sociosqu ad litora torquent <br /> per conubia nostra.</p>
        </div>
        <div>
          <div className='all2' style={{ display: 'flex' }}>
            <img src={logo15} alt="" />
            <img src={logo16} alt="" />
            <img src={logo17} alt="" />
            <img src={logo18} alt="" />
          </div>
          <div className='all2' style={{ display: 'flex' }}>
            <img src={logo19} alt="" />
            <img src={logo20} alt="" />
            <img src={logo21} alt="" />
            <img src={logo22} alt="" />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#1D2026', padding: '40px' }}>
        <div className='all2' style={{display: 'flex', alignItems :'center', justifyContent: 'space-around'}}>
          <div>
            <p style={{ color: 'white', fontSize: '30px', fontWeight: '500' }}>Start learning with 67.1k <br /> students around the world.</p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
              <button style={{ backgroundColor: '#FF6636', color: 'white', border: 'none', padding: '6px 13px' }}>Join the Family</button>
              <button style={{ color: 'white', border: '1px solid gray', padding: '6px 13px' }}>Browse all courses</button>
            </div>
          </div>
          <div>
            <p style={{ color: 'white', fontSize: '20px', fontWeight: '500' }}>6.3k</p>
            <p style={{ color: '#B7BAC7' }}>Online courses</p>
          </div>
          <div>
            <p style={{ color: 'white', fontSize: '20px', fontWeight: '500' }}>26k</p>
            <p style={{ color: '#B7BAC7' }}>Certified Instructor</p>
          </div>
          <div>
            <p style={{ color: 'white', fontSize: '20px', fontWeight: '500' }}>99.9%</p>
            <p style={{ color: '#B7BAC7' }}>Sucess Rate</p>
          </div>
        </div>

      </div>
    <hr style={{color: 'gray'}} />
    </div>
  )
}

export default Home