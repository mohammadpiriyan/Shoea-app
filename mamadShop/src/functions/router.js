import Navigo from "navigo";
import starter from "../pages/starter";
import welcome from "../pages/welcome";
import { root } from "postcss";
import swiper1 from "../pages/swipers/swiper1";
import swiper2 from "../pages/swipers/swiper2";
import swiper3 from "../pages/swipers/swiper3";
import login from "../pages/login";
import home from "../pages/home";
import cart from "../pages/cart";
import orders from "../pages/orders";
import wallet from "../pages/wallet";
import profile from "../pages/profile";
import { datalogin } from "./datalogin";

export const router = new Navigo("/");

const changeContents = (target) => {
  const root = document.getElementById("rootsEl");
  root.innerHTML = "";
  root.append(target());
};

export const Router = () => {
  router
    .on("/", () => {
      changeContents(starter);
    })
    .on("/welcome", () => {
      changeContents(welcome);
    })
    .on("/swiper1", () => {
      changeContents(swiper1);
    })
    .on("/swiper2", () => {
      changeContents(swiper2);
    })
    .on("/swiper3", () => {
      changeContents(swiper3);
    })
    .on("/login", () => {
      changeContents(login);
      datalogin();
    })
    .on("/home", () => {
      changeContents(home);
    })
    .on("/cart", () => {
      changeContents(cart);
    })
    .on("/orders", () => {
      changeContents(orders);
    })
    .on("/wallet", () => {
      changeContents(wallet);
    })
    .on("/profile", () => {
      changeContents(profile);
    });

  router.resolve();
  return router;
};

// .on("/", () => {

//   root.append(starter());
// })
