import { Button, Select } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet } from 'react-router'
import logo from "./img/LOGO (3).png"
import logo2 from "./img/LOGO (4).png"
import icon1 from "./img/Bell.png"
import icon2 from "./img/Heart.png"
import icon3 from "./img/ShoppingCartSimple.png"
import ava from "./img/Avatar.png"
import logos from "./img/Social Media.png"
import appstore from "./img/Download our app.png"
import googleplay from "./img/Download our app (1).png"

const Layout = () => {

  let [t, i18n] = useTranslation()
  
    function TranslateClick(lang) {
      i18n.changeLanguage(lang);
    }

  return (
    <div>
      <header>
        <div className='bg-black text-white flex justify-around items-center py-[15px]'>
          <img src={logo} alt="" className='lg:hidden'/>
          <div className='hidden lg:flex items-center gap-[50px]'>
            <Link to={'/'}>
              <p>{t("Example.1")}</p>
            </Link>

            <Link>
              <p>{t("Example.2")}</p>
            </Link>

            <Link>
              <p>{t("Example.3")}</p>
            </Link>

            <Link>
              <p>{t("Example.4")}</p>
            </Link>

            <Link>
              <p>{t("Example.5")}</p>
            </Link>

            <Link>
              <p>{t("Example.6")}</p>
            </Link>

            <Link>
              <p>{t("Example.7")}</p>
            </Link>

            <Link>
              <p>{t("Example.8")}</p>
            </Link>
          </div>

          <div className='flex items-center gap-[20px]'>
            <Button onClick={() => TranslateClick("en")}>English</Button>
            <Button onClick={() => TranslateClick("ru")}>Русский</Button>
          </div>
        </div>
        <br/>
        <div className='hidden lg:flex justify-between p-[20px] items-center'>
          <div className='flex items-center gap-[25px]'>
            <img src={logo2} alt="" />
            <Select placeholder="Browse">
              <option value="">Browse</option>
            </Select>
            <input type="text" placeholder='🔍 What do you want learn...' className='border border-[#E9EAF0] px-[25px] py-[5px]'/>
          </div>

          <div className='flex items-center gap-[25px]'>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={ava} alt="" />
          </div>
        </div>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <div className='bg-[#1D2026] text-white flex justify-around items-center flex-wrap gap-[50px] p-[20px]'>
          <div className='w-[300px]'>
            <img src={logo} alt="" />
            <p>{t("Example.9")}</p>
            <img src={logos} alt="" />
          </div>

          <div>
            <p className='text-[20px]'><b>{t("Example.10")}</b></p>
            <p>{t("Example.11")}</p>
            <p>{t("Example.12")}</p>
            <p>{t("Example.13")}</p>
            <p>{t("Example.14")}</p>
          </div>

          <div>
            <p className='text-[20px]'><b>{t("Example.15")}</b></p>
            <p>{t("Example.16")}</p>
            <p>{t("Example.17")}</p>
            <p>{t("Example.18")}</p>
            <p>{t("Example.19")}</p>
          </div>

          <div>
            <p className='text-[20px]'><b>{t("Example.20")}</b></p>
            <p>{t("Example.21")}</p>
            <p>{t("Example.22")}</p>
            <p>{t("Example.23")}</p>
            <p>{t("Example.24")}</p>
          </div>

          <div>
            <p className='text-[20px]'><b>{t("Example.25")}</b></p>
            <br/>
            <img src={appstore} alt="" />
            <br/>
            <img src={googleplay} alt="" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout