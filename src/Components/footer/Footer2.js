import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import facebook from './facebook.json';
import insta from './insta.json';
import twitter from './twitter.json';
import linkedin from './linkedin.json';
import youtube from './youtube.json';

import {Icons} from './Icons'

export default function Footer2() {
  
  return (
    <FooterContainer>
      <span>Copyright &copy; 2022. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Contact us</a>
        </li>
        <li>
          <a href="#testimonials">Support</a>
        </li>
      </ul>
      <ul className="social__links">
        {/* <li>
          <Icons data={facebook} />
        </li> */}
        <li>
         <Icons data={youtube}/>
        </li>
        <li>
          <Icons data={linkedin} />
        </li>
        <li>
         <Icons data={twitter}/>
        </li>
        <li>
         <Icons data={insta}/>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #223554 ;
  border-top-left-radius:0.5rem;
  border-top-right-radius:0.5rem;
  padding: 1.2rem;
  padding:0.5rem 0.8rem;
  margin-top:15px;
  align-items:center;
  color :#FFFF;

  ul {
    display: flex;
    list-style-type: none;
    gap: 1.5rem;
    align-items:center;
    justify-content:center;
    margin-top:15px;
    li {
      a {
        text-decoration: none;
        color: #FFFF;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
