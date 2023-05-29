import PropTypes from "prop-types"
import React, { useEffect, useRef, useCallback } from "react"

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import images
import giftBox from "../../assets/images/giftbox.png"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }, []);

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname, activateParentDropdown])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/dashboard" className="">
                <span>{props.t("DASHBOARD")}</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="">
                <span>{props.t("DEFI MARKET")}</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="">
                <span>{props.t("FUNDAMENTAL ANALYSIS")}</span>
              </Link>
            </li>
            <div class="p-2">
            <div class="border-top">
              
            </div>
          </div>
            {/* <li>
              <Link to="/#" className="has-arrow">
                <FeatherIcon
                  icon="grid"
                />
                <span>{props.t("Apps")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/apps-calendar">{props.t("Calendar")}</Link>
                </li>
                <li>
                  <Link to="/apps-chat">
                    {props.t("Chat")}
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    <span>{props.t("Email")}</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/email-inbox">{props.t("Inbox")}</Link>
                    </li>
                    <li>
                      <Link to="/email-read">{props.t("Read Email")} </Link>
                    </li>

                  </ul>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    <span>{props.t("Invoices")}</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/invoices-list">{props.t("Invoice List")}</Link>
                    </li>
                    <li>
                      <Link to="/invoices-detail">{props.t("Invoice Detail")}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/#" className="has-arrow ">
                    <span>{props.t("Contacts")}</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/contacts-grid">{props.t("User Grid")}</Link>
                    </li>
                    <li>
                      <Link to="/contacts-list">{props.t("User List")}</Link>
                    </li>
                    <li>
                      <Link to="/contacts-profile">{props.t("Profile")}</Link>
                    </li>
                  </ul>
                </li>

              </ul>
            </li> */}

            {/* <li>
              <Link to="/#" className="has-arrow">
                <FeatherIcon
                  icon="users"
                />
                <span>{props.t("Authentication")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/page-login">{props.t("Login")}</Link>
                </li>
                <li>
                  <Link to="/page-register">{props.t("Register")}</Link>
                </li>
                <li>
                  <Link to="/page-recoverpw">
                    {props.t("Recover Password")}
                  </Link>
                </li>
                <li>
                  <Link to="/page-lock-screen">{props.t("Lock Screen")}</Link>
                </li>
                <li>
                  <Link to="/page-confirm-mail">{props.t("Confirm Mail")}</Link>
                </li>
                <li>
                  <Link to="/page-email-verification">
                    {props.t("Email Verification")}
                  </Link>
                </li>
                <li>
                  <Link to="/page-two-step-verification">
                    {props.t("Two Step Verification")}
                  </Link>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon
                  icon="file-text"
                />
                <span>{props.t("Pages")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/pages-starter">{props.t("Starter Page")}</Link>
                </li>
                <li>
                  <Link to="/pages-news">{props.t("News")}</Link>
                </li>
                <li>
                  <Link to="/pages-maintenance">{props.t("Maintenance")}</Link>
                </li>
                <li>
                  <Link to="/pages-comingsoon">{props.t("Coming Soon")}</Link>
                </li>
                <li>
                  <Link to="/pages-timeline">{props.t("Timeline")}</Link>
                </li>
                <li>
                  <Link to="/pages-faqs">{props.t("FAQs")}</Link>
                </li>
                <li>
                  <Link to="/pages-pricing">{props.t("Pricing")}</Link>
                </li>
                <li>
                  <Link to="/pages-404">{props.t("Error 404")}</Link>
                </li>
                <li>
                  <Link to="/pages-500">{props.t("Error 500")}</Link>
                </li>
              </ul>
            </li> */}

            <li className="menu-title">{props.t("OVERVIEW")}</li>

            {/* <li>
              <Link to="/#" className="has-arrow ">
                <i className="bx bx-tone"></i>
                <span>{props.t("Components")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/ui-alerts">{props.t("Alerts")}</Link>
                </li>
                <li>
                  <Link to="/ui-buttons">{props.t("Buttons")}</Link>
                </li>
                <li>
                  <Link to="/ui-cards">{props.t("Cards")}</Link>
                </li>
                <li>
                  <Link to="/ui-carousel">{props.t("Carousel")}</Link>
                </li>
                <li>
                  <Link to="/ui-dropdowns">{props.t("Dropdowns")}</Link>
                </li>
                <li>
                  <Link to="/ui-grid">{props.t("Grid")}</Link>
                </li>
                <li>
                  <Link to="/ui-images">{props.t("Images")}</Link>
                </li>
                <li>
                  <Link to="/ui-modals">{props.t("Modals")}</Link>
                </li>
                <li>
                  <Link to="/ui-drawer">{props.t("Drawer")}</Link>
                </li>
                <li>
                  <Link to="/ui-progressbars">{props.t("Progress Bars")}</Link>
                </li>
                <li>
                  <Link to="/ui-tabs-accordions">
                    {props.t("Tabs & Accordions")}
                  </Link>
                </li>
                <li>
                  <Link to="/ui-typography">{props.t("Typography")}</Link>
                </li>
                <li>
                  <Link to="/ui-video">{props.t("Video")}</Link>
                </li>
                <li>
                  <Link to="/ui-general">{props.t("General")}</Link>
                </li>
                <li>
                  <Link to="/ui-colors">{props.t("Colors")}</Link>
                </li>
              </ul>
            </li> */}
             <li>
              <Link to="/snapshot" className="">
                <span>{props.t("Snapshot")}</span>
              </Link>
            </li>
            <li>
              <Link to="/description" className="">
                <span>{props.t("Description")}</span>
              </Link>
            </li>
            <li>
              <Link to="/estimates" className="">
                <span>{props.t("Estimates")}</span>
              </Link>
            </li>
            <li>
              <Link to="/yield" className="">
                <span>{props.t("Yield")}</span>
              </Link>
            </li>
          <div class="p-2">
            <div class="border-top">
              
            </div>
          </div>
          <li className="menu-title">{props.t("FUNDAMENTALS")}</li>
          
            <li>
              <Link to="/sentiments" className="has-arrow ">
                <span>{props.t("Economics")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/market-design">{props.t("Market Design")}</Link>
                </li>
                <li>
                  <Link to="/mechanism-design">{props.t("Mechanism Design")}</Link>
                </li>
                <li>
                  <Link to="/token-design">{props.t("Token Design")}</Link>
                </li>
              </ul>
            </li> 

          <li>
              <Link to="/marketsentiments" className="">
                <span>{props.t("Financials")}</span>
              </Link>
          </li>
          <li>
              <Link to="/dashboard" className="">
                <span>{props.t("Transactional")}</span>
              </Link>
          </li>
          <div class="p-2">
            <div class="border-top">
              
            </div>
          </div>
          <li className="menu-title">{props.t("RISK")}</li>
          <li>
              <Link to="/financial" className="">
                <span>{props.t("Financial Risks")}</span>
              </Link>
          </li>
          <li>
              <Link to="/risks" className="">
                <span>{props.t("Risks")}</span>
              </Link>
          </li>
          <div class="p-2">
            <div class="border-top">
              
            </div>
          </div>
          <li className="menu-title">{props.t("MARKETS")}</li>
          <li>
              <Link to="/market-price" className="">
                <span>{props.t("Prices")}</span>
              </Link>
          </li>
          <li>
              <Link to="/fundflow" className="">
                <span>{props.t("Fund Flow")}</span>
              </Link>
          </li>
          <div class="p-2">
            <div class="border-top">
              
            </div>
          </div>
          <li>
              <Link to="/pages-news" className="">
                <span>{props.t("News & Events")}</span>
              </Link>
          </li>
          
          <li>
              <Link to="/market-sentiments" className="has-arrow ">
                <span>{props.t("Market Sentiment")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/market-analysis" className="">
                  <span>{props.t("Market Analysis")}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/founder-analysis" className="">
                  <span>{props.t("Founder Analysis")}</span>
                  </Link>
                </li>
              </ul>
            </li> 



         </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
