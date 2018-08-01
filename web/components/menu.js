import React, { Component } from 'react'
import Link from 'next/link'

import { LayoutContext } from '../components/layout/context'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isCollapsed: true,
      isMenuHidden: false
    }
  }

  toggle = () => {
    this.setState({
      isMenuHidden: !this.state.isMenuHidden
    });
  }

  render() {
    const {
      isCollapsed,
      isMenuHidden
    } = this.state

    return (
      <LayoutContext.Consumer>
        {layout => (
          <nav role="navigation" className="grid-x align-center">
            <div className={'cell ' + (!layout.withHero ? 'large-9' : '')}>
              <div className="collapse hide-for-medium">
                <button className={'toggler ' + (!isMenuHidden ? 'collapsed' : '')} type="button" data-toggle="menu" onClick={this.toggle}>
                  <span className="bar" />
                  <span className="bar" />
                  <span className="bar" />
                </button>
                <Link href="/">
                  <span className="logo">Binden</span>
                </Link>
              </div>
              <div className={'menu-wrapper ' + (!isMenuHidden ? 'hidden': '')}>
                <ul className="menu vertical medium-horizontal align-right">
                  <div className="flex-child-auto show-for-medium">
                    <Link href="/">
                      <span className="logo">Binden</span>
                    </Link>
                  </div>
                  <li>
                    <Link href="/about">
                      <a>Nosotros</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Proveedores</a>
                    </Link>
                  </li>
                  <li className="call-to-action">
                    <Link href="/">
                      <a className="button">
                        Mi Empresa
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <style jsx>{`
              nav {
                background: rgb(240, 241, 241);
                border-bottom: 1px solid rgba(91, 88, 89, .1);
                padding: .625rem 0;
              }

              .collapse {
                height: 2.5rem;
                min-height: 2.5rem;
                padding: 0 .5rem;
              }

              .toggler {
                padding: .5rem;
              }

              .toggler:focus {
                outline: none;
              }

              .logo {
                background-size: cover;
                padding: 0 .5rem;

                font-family: 'Galada', cursive;
                font-size: 1.875rem;
                color: rgb(164, 37, 46);
              }

              .bar {
                background: rgb(144, 41, 98);
                display: block;
                height: 2px;
                width: 20px;

                transition: opacity, transform, -webkit-transform;
                transition-duration: .5s;
                //transition-timing-function: cubic-bezier(0.7, 0, 0, 0.7);
              }
              .bar+.bar {
                margin-top: 4px;
              }

              .toggler:not(.collapsed) .bar:first-child {
                transform: rotate(405deg);
              }
              .toggler:not(.collapsed) .bar:last-child {
                transform: rotate(-405deg) translate3d(4px, -5px, 0);
              }
              .toggler:not(.collapsed) .bar:not(:first-child):not(:last-child) {
                opacity: 0;
                position: relative;
                float: left;
              }

              .menu-wrapper {
                margin-top: 0.625rem;

                font-family: 'Montserrat', sans-serif;
              }

              @media screen and (max-width: 39.9375em) {
                .hidden {
                  visibility: hidden;
                  height: 0;
                  margin: 0;
                  padding: 0;
                }

                .logo {
                  vertical-align: sub;
                }

                .menu-wrapper::before {
                  border-top: 1px solid rgba(214, 197, 204, .2);
                  content: "";
                  display: block;
                  margin-left: 4%;
                  width: 92%;

                  filter: drop-shadow(0 -4px 3px rgb(117, 34, 76));
                }

                .menu::before {
                  border-top: 1px solid rgba(245, 245, 245, .5);
                  content: "";
                  display: block;
                  margin-left: 4%;
                  width: 92%;
                }

                .menu {
                  -webkit-box-pack: center;
                  -webkit-justify-content: center;
                  -ms-flex-pack: center;
                  justify-content: center;
                }

                .menu li {
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-box-pack: center;
                  -webkit-justify-content: center;
                  -ms-flex-pack: center;
                  justify-content: center;

                  height: .5rem;
                }

                .menu-wrapper:not(.hidden) .menu li {
                  height: 2.5rem;
                  //transition: height 1s ease-in-out;
                }

              }

              .menu li a {
                color: rgb(117, 34, 76);
                font-size: 1rem;
                font-weight: 600;

                line-height: 1.0625rem;
              }

              .menu li a:hover {
                border-bottom: 1px dashed rgb(117, 34, 76);
                padding-bottom: 0px;
                height: 2.5rem;
              }

              .menu .call-to-action a {
                  background-color: rgb(141, 36, 43);
                  border-radius: 4px;
                  border-width: 0;
                  color: rgb(243, 241, 242);
                  line-height: 1.0625rem;
                  padding: 0.7rem 1.65rem;
                  font-size: 1rem;
                  font-weight: 600;
              }

              .menu .call-to-action a:hover {
                 border-width: 0;
                 height: auto;
                 padding: 0.7rem 1.65rem;
              }

              .menu.vertical li {
                margin-right: 3px;
              }

              @media screen and (min-width: 40em) {
                .menu li a {
                  font-size: 0.8125rem;
                }
                .menu .call-to-action a {
                  font-size: 0.8125rem;
                }
              }

              @media screen and (min-width: 64em) {
                nav {
                  ${ layout.withHero ? 'background: transparent' : '' };
                  ${ layout.withHero ? 'border: none' : '' };
                  padding-left: ${ layout.withHero ? '2' : '0' }rem;
                  padding-right: ${ layout.withHero ? '2' : '0' }rem;
              /*
                  text-shadow:
                    -1px -1px 1px #041934,
                    1px -1px 1px #041934,
                    -1px 1px 1px #041934,
                    1px 1px 1px #041934;
              */
                  //text-shadow: 0 -1px 0 #041934;
                  text-shadow: -1px 0px 2px #311f1f;
                }

                .logo {
                  font-size: 2.1875rem
                }

                .menu li a {
                  /*color: rgb(150, 27, 75);*/
                  color: rgb(255, 255, 255);
                  font-size: 1.0625rem;

                  line-height: 2.1875rem;

                  text-shadow: 1px 1px 0px #35302cab;
                }

                .menu .call-to-action a {
                  font-size: 1.0625rem;
                  line-height: 2.1875rem;
                }
              }
            `}</style>
          </nav>
        )}
      </LayoutContext.Consumer>
    )
  }
}

export default Menu
