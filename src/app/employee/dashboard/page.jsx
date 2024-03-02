"use client";

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Displaycard from "@/components/Card";
import { Employ1, Employ2 } from "../../../../public/images/index";

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
        <div className="flex flex-col gap-4 md:flex-row md:gap-4">
          <Displaycard margin="50px" paddingTop={40}>
            <div className="mx-4 flex flex-col items-center justify-center gap-7">
              <div className="relative h-0 w-full pb-[75%] md:mx-[15%] md:h-[0] md:w-[50%] md:pb-[39%] lg:mx-[20%] lg:h-[298px] lg:w-[380px]">
                <Carousel
                  showIndicators={false}
                  showThumbs={false}
                  selectedItem={this.state.selectedItemCard1}>
                  <div>
                    <Image src={Employ1} alt="news" height={380} width={298} />
                  </div>
                  <div>
                    <Image
                      src={Employ2}
                      alt="news"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <Image
                      src={Employ2}
                      alt="news"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </Carousel>
              </div>
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
              <div className="flex flex-col gap-4 p-4 md:p-7">
                <p className="font-Inter w-full text-lg font-semibold not-italic leading-normal text-[#000] md:text-xl">
                  Ethiopian Press Visit Mekedoina
                </p>
                <p className="font-Roboto w-auto text-sm not-italic leading-[20px] text-[#000] md:text-base">
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

          <Displaycard margin="50px" paddingTop={40}>
            <div className="flex flex-col items-center justify-center gap-7">
              <div className="relative h-0 w-full pb-[75%] md:mx-[15%] md:h-[0] md:w-[50%] md:pb-[39%] lg:mx-[20%] lg:h-[298px] lg:w-[380px]">
                <Carousel
                  showIndicators={false}
                  showThumbs={false}
                  selectedItem={this.state.selectedItemCard2}>
                  <div>
                    <Image src={Employ1} alt="news" height={380} width={298} />
                  </div>
                  <div>
                    <Image
                      src={Employ2}
                      alt="news"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <Image
                      src={Employ2}
                      alt="news"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </Carousel>
              </div>
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
              <div className="flex flex-col gap-4 p-4 md:p-7">
                <p className="font-Inter w-full text-lg font-semibold not-italic leading-normal text-[#000] md:text-xl">
                  Ethiopian Press Visit Mekedoina
                </p>
                <p className="font-Roboto w-auto text-sm not-italic leading-[20px] text-[#000] md:text-base">
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
        <Displaycard
          variant="card1"
          backgroundColor="#E0F3FF"
          className="custom-styling">
          <div className="flex flex-col gap-3 p-2 text-center">
            <p className="font-Roboto text-lg font-semibold leading-tight text-black md:text-2xl">
              News For Employee
            </p>
            <p className="font-Roboto text-base font-normal leading-tight text-black md:text-lg">
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
