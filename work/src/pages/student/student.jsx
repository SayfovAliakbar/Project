import React from 'react'
import ava from "./img/Photos.png"
import right from "./img/ArrowRight (1).png"
import { Select } from 'antd'
import user1 from "./img/Image (7).png"
import star from "./img/Star.png"
import user2 from "./img/Image (8).png"
import user3 from "./img/Image (9).png"
import user4 from "./img/Image (10).png"
import user5 from "./img/Image (11).png"
import user6 from "./img/Image (12).png"
import user7 from "./img/Image (13).png"
import user8 from "./img/Image (14).png"
import user9 from "./img/Image (15).png"
import user10 from "./img/Image (16).png"
import user11 from "./img/Image (17).png"
import user12 from "./img/Image (18).png"
import user13 from "./img/Image (19).png"
import user14 from "./img/Image (20).png"
import user15 from "./img/Image (21).png"
import user16 from "./img/Image (22).png"
import user17 from "./img/Image (23).png"
import user18 from "./img/Image (24).png"
import user19 from "./img/Image (25).png"
import user20 from "./img/Image (26).png"
import left from "./img/Button.png"
import right2 from "./img/Button (1).png"

const Student = () => {
  return (
    <div>
      <div className='bg-[#FFEEE8] w-[100%] h-[200px]'></div>

      <div className='w-[95%] m-auto mt-[-100px] bg-white'>
        <div className='flex justify-between items-center flex-wrap gap-[20px]'>
          <div className='flex items-center gap-[25px]'>
            <img src={ava} alt="" />
            <div>
              <p className='text-[25px]'><b>Kevin Gilbert</b></p>
              <p className='text-[#6E7485]'>Web Designer & Best-Selling Instructor</p>
            </div>
          </div>
          <button className='bg-[#FFEEE8] text-[#FF6636] flex items-center gap-[10px] py-[10px] px-[20px]'>Become Instructor <span><img src={right} alt="" /></span></button>
        </div>

        <br/><hr className='text-[#FFEEE8]'/><br/>

        <div className='flex justify-around items-center flex-wrap gap-[15px]'>
          <p>Dashboard</p>
          <p>Courses</p>
          <p>Teachers</p>
          <p>Message</p>
          <p>Wishlist</p>
          <p>Purchase History</p>
          <p>Settings</p>
        </div>

        <br/><hr className='text-[#FFEEE8]'/><br/>

        <p className='text-[25px]'><b>Instructors</b> (241)</p>
        <br/>
        <div className='flex justify-around items-center flex-wrap gap-[25px]'>
          <div>
            <label className='text-[#6E7485]'>Search:</label>
            <br/>
            <input type="text" placeholder='🔍 Search in your teachers...' className='border-[1px] border-[#E9EAF0] w-[400px] rounded-[10px] h-[40px]'/>
          </div>

          <div>
            <label className='text-[#6E7485]'>Courses:</label>
            <br/>
            <Select placeholder="All Courses" className='w-[400px] h-[50px]'>
              <option value="">All Courses</option>
            </Select>
          </div>

          <div>
            <label className='text-[#6E7485]'>Teacher:</label>
            <br/>
            <Select placeholder="All Teachers" className='w-[400px] h-[50px]'>
              <option value="">All Teachers</option>
            </Select>
          </div>
        </div>

        <br/><br/><br/>

        <div className='flex justify-around items-center flex-wrap gap-[25px]'>
          <div className='border border-[#E9EAF0] text-center'>
            <img src={user1} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user2} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user3} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user4} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user5} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user6} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user7} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user8} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user9} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user10} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user11} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user12} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user13} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user14} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user15} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user16} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user17} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user18} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user19} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>

          <div className='border border-[#E9EAF0] text-center'>
            <img src={user20} alt="" />
            <p className='text-[18px] mt-[10px]'><b>Wade Warren</b></p>
            <p className='text-[#8C94A3]'>Digital Product Designer</p>
            <hr className='mt-[10px] text-[#E9EAF0] mb-[10px]'/>
            <div className='flex items-center justify-between px-[10px]'>
              <div className='flex items-center gap-[10px]'>
                <img src={star} alt="" />
                <p>5.0</p>
              </div>
              <div className='flex items-center gap-[10px]'>
                <p>236,568</p>
                <p className='text-[#8C94A3]'>students</p>
              </div>
            </div>
            <br/>
            <button className='bg-[#FFEEE8] text-[#FF6636] w-[95%] m-auto h-[45px]'>Send message</button>
          </div>
        </div>

        <br/><br/><br/>

        <div className='flex justify-center items-center gap-[35px]'>
          <img src={left} alt="" />
          <p>01</p>
          <p className='bg-[#FF6636] text-white py-[12px] px-[15px] rounded-[50%]'>02</p>
          <p>03</p>
          <p className='bg-[#FFEEE8] text-[#FF6636] py-[12px] px-[15px] rounded-[50%]'>04</p>
          <p>05</p>
          <img src={right2} alt="" />
        </div>
      </div>

      <br/><br/><br/>
    </div>
  )
}

export default Student