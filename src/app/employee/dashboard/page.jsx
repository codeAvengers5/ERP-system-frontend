"use client";

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Displaycard from "@/components/Card";
import { Employ1, Employ2, dash1 } from "../../../../public/images/index";

export default class NextJsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemCard1: 0,
      selectedItemCard2: 0
    };
  }

  handleSlide = (index, card) => {
    if (card === 1) {
      this.setState({ selectedItemCard1: index });
    } else if (card === 2) {
      this.setState({ selectedItemCard2: index });
    }
  };

  render() {
    return (
      <div className="mx-auto">
        <div className="ml-[30px] flex flex-col gap-x-[70px] md:ml-[65px] md:flex-row">
          <Displaycard
            margin="30px"
            paddingTop={40}
            backgroundColor="white"
            className="h-full max-w-[448px] md:min-h-[600px]">
            <div className="flex flex-col items-center justify-center gap-5">
              <Carousel
                showIndicators={false}
                showThumbs={false}
                selectedItem={this.state.selectedItemCard1}>
                <div>
                  <Image src={dash1} alt="news" height={380} width={298} />
                </div>
                <div>
                  <Image
                    src={dash1}
                    alt="news"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <Image
                    src={dash1}
                    alt="news"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Carousel>
              <div className="flex flex-row gap-2">
                <div
                  className={`h-2 w-12 cursor-pointer rounded ${this.state.selectedItemCard1 === 0 ? "bg-bt_primary" : "bg-bg_secondary"}`}
                  onClick={() => this.handleSlide(0, 1)}></div>
                <div
                  className={`h-2 w-12 cursor-pointer rounded ${this.state.selectedItemCard1 === 1 ? "bg-bt_primary" : "bg-bg_secondary"}`}
                  onClick={() => this.handleSlide(1, 1)}></div>
                <div
                  className={`h-2 w-12 cursor-pointer rounded ${this.state.selectedItemCard1 === 2 ? "bg-bt_primary" : "bg-bg_secondary"}`}
                  onClick={() => this.handleSlide(2, 1)}></div>
              </div>
              <div className="flex flex-col gap-4 px-7">
                <p className="font-Inter w-full text-lg font-semibold not-italic leading-normal text-[#000] md:text-xl">
                  Ethiopian Press Visit Mekedoina
                </p>
                <p className="font-Roboto w-auto text-sm not-italic leading-[20px] text-[#000]">
                  We would like to thank Mr. Getnat Tadese, the CEO of the
                  Ethiopian Press Organization, and the management members and
                  staff of the Press Organization. Dear Commercial Bank of
                  Ethiopia President Abe Sano, Board Members, Mr. Teklewold
                  Atnafu, and All the Board Members: We are very appreciative
                  that you visited our center, spoke with the elderly, and
                  inquired about the building's condition. Thank you very much.
                </p>
              </div>
            </div>
          </Displaycard>

          <Displaycard
            margin="30px"
            paddingTop={40}
            backgroundColor="white"
            className="h-full max-w-[448px] md:min-h-[600px]">
            <div className="flex flex-col items-center justify-center gap-5">
              <Carousel
                showIndicators={false}
                showThumbs={false}
                selectedItem={this.state.selectedItemCard2}>
                <div>
                  <Image src={dash1} alt="news" height={380} width={298} />
                </div>
                <div>
                  <Image
                    src={dash1}
                    alt="news"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <Image
                    src={dash1}
                    alt="news"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Carousel>
              <div className="flex flex-row gap-2">
                <div
                  className={`h-2 w-12 cursor-pointer rounded ${this.state.selectedItemCard2 === 0 ? "bg-bt_primary" : "bg-bg_secondary"}`}
                  onClick={() => this.handleSlide(0, 2)}></div>
                <div
                  className={`h-2 w-12 cursor-pointer rounded ${this.state.selectedItemCard2 === 1 ? "bg-bt_primary" : "bg-bg_secondary"}`}
                  onClick={() => this.handleSlide(1, 2)}></div>
                <div
                  className={`h-2 w-12 cursor-pointer rounded ${this.state.selectedItemCard2 === 2 ? "bg-bt_primary" : "bg-bg_secondary"}`}
                  onClick={() => this.handleSlide(2, 2)}></div>
              </div>
              <div className="flex flex-col gap-4 px-7">
                <p className="font-Inter w-full text-lg font-semibold not-italic leading-normal text-[#000] md:text-xl">
                  Ethiopian Press Visit Mekedoina
                </p>
                <p className="font-Roboto w-auto text-sm not-italic leading-[20px] text-[#000]">
                  We would like to thank Mr. Getnat Tadese, the CEO of the
                  Ethiopian Press Organization, and the management members and
                  staff of the Press Organization. Dear Commercial Bank of
                  Ethiopia President Abe Sano, Board Members, Mr. Teklewold
                  Atnafu, and All the Board Members: We are very appreciative
                  that you visited our center, spoke with the elderly, and
                  inquired about the building's condition. Thank you very much.
                </p>
              </div>
            </div>
          </Displaycard>
        </div>
        <Displaycard variant="card7">
          <div className="flex flex-col gap-3 p-2 text-center">
            <p className="font-Roboto text-base font-semibold leading-tight text-black md:text-heading_2">
              News For Employee
            </p>
            <p className="font-Roboto w-full text-small font-normal leading-tight text-black md:text-base">
              Tomorrow There will be a meeting held in the second adarsh.
              Bethere at 2:30 in the morning.We would like to thank Mr. Getnat
              Tadese, the CEO of the Ethiopian Press Organization, and the
              management members and staff of the Press Organization.the
              management members and staff of the Press .
            </p>
          </div>
        </Displaycard>
      </div>
    );
  }
}
